**Zirka Real Estate**

Static website for a Marbella-based luxury real estate agency offering properties for sale and rent across Marbella, Benahavís, Estepona and the Costa del Sol, built with Webpack, SCSS and Handlebars. Public site: https://zirka.agency/.

**Development and checks**

- Install dependencies with `npm install`.
- Start the development server with `npm run dev` (port 8000).
- Build deployable files with `npm run prod`.
- After building, run `npm run test:seo` to check emitted metadata, crawler assets, property URL identity, and the form integration.
- `npm run deploy` publishes `dist` to GitHub Pages. Building alone does not deploy.

**Contact form**

The homepage hero posts an optional phone number, name, email and message to Web3Forms, using the access key supplied for this website. The key is a public form identifier, not an SMTP password. The form uses the provider's hCaptcha integration, a honeypot, native field validation, and inline submission feedback. Failed or unconfirmed requests retain the visitor's message; accepted requests reset the form. No personal enquiry data is sent to analytics.

Enable **hCaptcha / Block Spam** for this form in the [Web3Forms dashboard](https://app.web3forms.com/). Web3Forms requires that account setting to enforce captcha server-side; frontend checks alone do not enforce it. See the [integration documentation](https://docs.web3forms.com/getting-started/customizations/spam-protection/hcaptcha).

Browser verification used intercepted submission requests, so it sent no real enquiries. The actual hCaptcha widget was checked in Chrome. Confirm recipient inbox delivery after dashboard configuration and deployment; an API success response does not prove inbox delivery.

**SEO implementation**

The initial implementation includes page-specific titles/descriptions, social metadata, homepage/list canonicals, business and website JSON-LD, descriptive headings, accessible property links, and production CSS extraction without embedded development source maps. The contact form replaces the homepage search. Existing property browsing remains available.

`public/robots.txt`, `public/sitemap.xml`, `public/CNAME`, and a social preview image are emitted into `dist` by Webpack. The sitemap includes the homepage and property-list page. It intentionally excludes the empty property-details shell and does not invent inventory URLs or modification dates. Robots permits crawling; no new training-bot restrictions are imposed.

Property-specific metadata and canonical URLs are updated when property data loads. Sale, short-rent and long-rent URL identities remain distinct. A bare detail URL without a reference displays an error and receives a client-side noindex directive. Full property HTML still depends on JavaScript; non-JavaScript social crawlers see generic detail metadata. Pre-rendering/SSR, inventory sitemaps, crawlable pagination, URL-based filters, and HTTP-level inventory lifecycle handling remain follow-up work.

The public brand/domain/contact information uses existing website values. The fictitious street address and outdated investor-residency offer were removed; no office address, ratings, hours or qualifications were invented. Business schema without a verified street address is not a claim of Google LocalBusiness rich-result eligibility.

Large source images still trigger a Webpack asset-size warning. Image re-encoding, reviewed local content, and Search Console/Bing setup are separate follow-ups. See [the research and plan](RESEARCH-AND-PLAN.md) for the broader roadmap and original audit.
