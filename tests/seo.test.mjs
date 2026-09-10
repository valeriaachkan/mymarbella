import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import test from 'node:test';
import { propertyUrl, propertyMetadata } from '../src/js/property-seo.mjs';

test('property links preserve references and the sale/rental context', () => {
	for (const transactionType of ['1', '2', '3']) {
		const url = new URL(propertyUrl('R 123&456', transactionType), 'https://zirka.agency/');
		assert.equal(url.searchParams.get('ref'), 'R 123&456');
		assert.equal(url.searchParams.get('transactionType'), transactionType);
		assert.equal([...url.searchParams].length, 2);
	}
	assert.equal(new URL(propertyUrl('R123', 'undefined'), 'https://zirka.agency/').searchParams.get('transactionType'), '1');
});

test('different properties and transaction types receive distinct canonical identities', () => {
	const property = { Reference: 'R123', PropertyType: { NameType: 'Apartment' }, Location: 'Marbella' };
	const sale = propertyMetadata(property, '1');
	const rental = propertyMetadata(property, '3');
	assert.match(sale.title, /Apartment for sale in Marbella/);
	assert.match(rental.title, /for long-term rent/);
	assert.notEqual(sale.url, rental.url);
	assert.notEqual(sale.url, propertyMetadata({ ...property, Reference: 'R456' }).url);
	assert.match(propertyMetadata({ Reference: 'R789', Area: 'Estepona' }).heading, /Property for sale in Estepona/);
});

test('production HTML contains crawlable metadata, extracted CSS, and emitted public assets', () => {
	for (const page of ['index', 'propertyList', 'propertyDetails']) {
		const html = readFileSync(new URL(`../dist/${page}.html`, import.meta.url), 'utf8');
		assert.equal((html.match(/<!doctype html>/gi) || []).length, 1);
		assert.match(html, /name="description" content="[^"]+"/);
		assert.match(html, /property="og:image"/);
		assert.match(html, /href="[^\"]+\.css"[^>]*rel="stylesheet"|rel="stylesheet"[^>]*href="[^\"]+\.css"/);
		for (const [, asset] of html.matchAll(/<script[^>]*src="([^\"]+)"/g)) {
			if (/^https?:/.test(asset)) continue;
			const js = readFileSync(new URL(`../dist/${asset}`, import.meta.url), 'utf8');
			assert.doesNotMatch(js, /sourceMappingURL=data:|eval\(/);
		}
	}
	const home = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
	const schema = JSON.parse(home.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
	assert.ok(schema['@graph'].some((item) => item['@type'] === 'RealEstateAgent'));
	assert.doesNotMatch(home, /123 Marbella|Gold Invest Residence/);
	assert.doesNotMatch(home, /hero__browse-link/);
	assert.match(home, /<link[^>]*rel="canonical"[^>]*href="https:\/\/zirka\.agency\/"/);
	const details = readFileSync(new URL('../dist/propertyDetails.html', import.meta.url), 'utf8');
	// Never collapse all property identities into a canonical for the empty shell.
	assert.doesNotMatch(details, /rel="canonical"/);
	const sitemap = readFileSync(new URL('../dist/sitemap.xml', import.meta.url), 'utf8');
	assert.doesNotMatch(sitemap, /propertyDetails/);
	assert.match(readFileSync(new URL('../dist/robots.txt', import.meta.url), 'utf8'), /Sitemap: https:\/\/zirka.agency\/sitemap.xml/);
	assert.equal(readFileSync(new URL('../dist/CNAME', import.meta.url), 'utf8').trim(), 'zirka.agency');
	assert.ok(existsSync(new URL('../dist/social-preview.jpg', import.meta.url)));
});

// The provider remains the authority for validating captcha tokens.
test('the built hero form points to Web3Forms with required fields and hCaptcha', () => {
    const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
    assert.match(html, /action="https:\/\/api.web3forms.com\/submit"/);
    assert.match(html, /method="POST"/i);
    for (const name of ['name', 'email', 'message']) {
        assert.match(html, new RegExp('<(?:input|textarea)[^>]*name="' + name + '"[^>]*required'));
    }
    assert.match(html, /class="h-captcha" data-captcha="true"/);
    assert.match(html, /https:\/\/web3forms.com\/client\/script.js/);
    assert.doesNotMatch(html, /property-search-form|bootstrap-select/);
});
