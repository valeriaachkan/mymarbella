**Contact form, SEO, and AI discovery — research and implementation plan**

Prepared 9 September 2026. Audited the repository and the public site at https://zirka.agency/, the URL named in README.md. This is a research and planning deliverable; website implementation and deployment are separate steps.

**Recommendation**

Use a custom HTML contact form with Web3Forms if matching the existing hero design and keeping maintenance small are the main priorities. Its free plan currently allows 250 submissions/month. Choose Tally if editing the form without a developer and stronger independent review evidence matter more; its free embedded form retains Tally branding. Formspree is another straightforward custom-form option, but its 50-submission monthly free allowance is much smaller. Sources and limitations appear below.

Keep the current static site for the first release. Replace the hero search with an enquiry form, retain an accessible route to property browsing, fix the business identity and metadata, and remove unnecessary homepage JavaScript. Treat indexable property pages as a separate, larger workstream.

**Scope and evidence**

Inspected source HTML, JavaScript, Handlebars templates, SCSS, Webpack configuration, and package scripts. Fetched the live homepage, property-list shell, property-detail shell, robots and sitemap URLs, a nonexistent URL, HTTP/www variants, and four homepage JavaScript bundles. No form submissions, account creation, business-profile changes, or deployment were performed.

The live host identifies itself as GitHub Pages. The frontend uses Webpack, jQuery, Bootstrap, bootstrap-select, and Slick. Property data comes through an existing external proxy; the contact form does not need to depend on that proxy.

This is a source and public-HTTP audit, not a rendered-browser usability test, Search Console inspection, backlink audit, keyword-volume study, or Core Web Vitals measurement. Actual indexing, rankings, traffic, conversion rate, email deliverability, and mobile performance scores remain unmeasured. Existing changes in src/propertyDetails.html and .DS_Store files were left intact.

**Contact-form service comparison**

All four options can provide email notifications without adding an application backend to this website. Limits and ratings are a snapshot and should be rechecked when activating the selected service.

| Service | Free allowance and email delivery | Integration and use | Independent review evidence | Main tradeoff |
| --- | --- | --- | --- | --- |
| Web3Forms | 250 submissions/month; one recipient per form; pricing lists 30 days of visible submission history. | Custom HTML form posting to its endpoint, optionally enhanced with fetch for inline feedback. | No sufficiently reliable independent aggregate rating verified in this audit. Do not describe it as highly rated based on vendor testimonials. | Best technical fit for a lightweight branded hero. Domain restriction, Turnstile/reCAPTCHA, and autoresponders require paid features. |
| Formspree | 50 submissions/month; up to two linked notification addresses; 30 days of submission history. | Custom HTML endpoint with a form dashboard; easy to style as part of the site. | G2: 4.3/5 from only 2 reviews, dated 2019 and 2020. Positive but very weak evidence for present-day reliability. | Low free quota; monitor volume closely. |
| Tally | Unlimited forms/submissions within fair-use guidelines; free self-notification emails to the form creator. | Build in its editor and embed in the hero. Owner can change fields without a code release. | Capterra: 4.9/5 from 41 reviews; Trustpilot: 3.8/5 from 22 reviews. Scores differ by platform and sample. | Free form has a Tally badge; full CSS control and notification customization are paid. An iframe offers less direct control over the form DOM. |
| FormSubmit | Free form-to-email endpoint; no registration, but recipient activation is required. No fixed monthly quota was verified on the examined homepage. | Very small HTML integration; supports reply-to, redirects, and reCAPTCHA. | Trustpilot: 3.4/5 from 5 reviews; sample is too small for a strong reliability conclusion. | Less convincing match for the good-rating requirement; not my first choice for business leads. |

Web3Forms facts: [pricing](https://web3forms.com/pricing), [spam protection](https://docs.web3forms.com/getting-started/customizations/spam-protection), and [paid features](https://docs.web3forms.com/getting-started/pro-features). At the monthly limit it stops accepting new submissions until reset or upgrade; warnings are sent at 90% and 100%. The publicly embedded access key is intentionally public, not an SMTP credential: [access-key FAQ](https://docs.web3forms.com/getting-started/faq).

Formspree facts: [account limits](https://help.formspree.io/articles/account-management/account-limits) and [G2 reviews](https://www.g2.com/products/formspree/reviews).

Tally facts: [pricing](https://tally.so/help/plans-and-pricing), [free self-notifications and paid email customization](https://tally.so/help/self-email-notifications), [embedding](https://tally.so/help/embed-your-form), [branding](https://tally.so/help/remove-tally-branding), [Capterra reviews](https://www.capterra.com/p/10032029/Tally/), and [Trustpilot reviews](https://www.trustpilot.com/review/tally.so). Create its account with the intended notification inbox if staying on the default free notification setup. Pro is currently $29/month or $290/year.

FormSubmit facts: [official service documentation](https://formsubmit.co/) and [Trustpilot reviews](https://www.trustpilot.com/review/formsubmit.co). Its documented autoresponse does not work with AJAX submissions or when reCAPTCHA is disabled.

One material Web3Forms documentation conflict: an older FAQ says submissions are not stored, while current pricing advertises history and the current privacy policy describes database storage and retention up to three years. Use the current [privacy policy](https://web3forms.com/privacy) and DPA when documenting data handling; do not promise that it merely forwards messages without storing them. The 30-day dashboard history is not the same as a maximum retention period. Tally describes its service as [made and hosted in the EU](https://tally.so/help/press-kit), which may influence the provider choice.

**Proposed hero form**

Use the existing right-hand hero position on desktop; place the form below a concise introduction on mobile. Replace the fixed 850px desktop layout and rigid grid rows with content-driven sizing so validation messages and smaller screens do not break the layout.

Proposed copy, assuming Zirka Real Estate remains the public brand:

> H1: Real estate in Marbella and the Costa del Sol
>
> Introduction: Find your next home with Zirka Real Estate. Personal assistance with buying, selling, and renting in Marbella and nearby areas.
>
> Form title: Tell us what you’re looking for
>
> Button: Send enquiry

| Field | Requirement | Purpose |
| --- | --- | --- |
| Name | Required | Personal reply |
| Email | Required | Reply destination |
| Phone / WhatsApp | Optional | Alternative contact route without blocking visitors who prefer email |
| I’m interested in… | Optional | Buy, sell, short-term rent, long-term rent, other |
| Message | Required | Requirements, preferred area, and timing |

Add a short explanation of how enquiries are used and a privacy-policy link. Any future marketing signup should be separate from the enquiry. Avoid requesting identity documents or adding uploads to this first form. Include existing phone and WhatsApp alternatives, after verifying the details. Do not invent a response-time promise.

Implementation details:

1. Add a dedicated contact-form identifier and handler. src/index.js currently attaches its search handler to the first form, so replacing HTML alone would intercept the contact submission and attempt to read deleted search fields.
2. Remove homepage search initialization and its unused API instance. Remove or scope sessionStorage.clear(), which currently wipes all session state on a homepage visit.
3. Keep a visible Browse properties link to the existing list. Move advanced search to a separate page or the listing page if the business still needs it. Its back-to-search navigation must be updated too.
4. Use native labels, appropriate input types and autocomplete, keyboard-visible focus, and accessible validation/status messages. Keep entered text after failed submissions and prevent repeated clicks while sending.
5. For Web3Forms, use built-in filtering, a honeypot, and provider-supported hCaptcha as needed. Keep error handling for quota, network, validation, and provider failures. Do not show success based only on a button click or HTTP status; check the service's success response.
6. Show a clear inline confirmation after acceptance. Treat provider acceptance and receipt in the owner's inbox as separate checks. Configure reply-to for the visitor's email where supported, and preserve a manual contact fallback.
7. Count an enquiry conversion only after acceptance; keep personal message content and email addresses out of analytics events.

Primary files: src/index.html, src/index.js, src/styles/components/_hero.scss, src/styles/main.scss, and a new scoped contact-form module/style. Inspect shared imports before removing Bootstrap or jQuery: the gallery currently uses Slick, so some dependencies may remain until it is simplified.

**Observed SEO findings and fixes**

| Priority | Observed evidence | Recommended change |
| --- | --- | --- |
| P0 | Homepage says “Gold Invest Residence Application Assistance.” | Remove or accurately rewrite this offer before further promotion. If it refers to Spain's former investor visa, new applications are no longer available under that route. Describe any valid legacy-case assistance explicitly. |
| P0 | Footer displays “123 Marbella, Spain”; title, slogan, logo alt text, and social account mix Zirka and My Marbella. | Confirm one public business identity and the real contact details. Publish a genuine office address only if applicable; otherwise accurately describe the service area. |
| P1 | All three live HTML pages have the title “Zirka Real Estate.” No meta description, canonical, Open Graph, Twitter card, or JSON-LD was found. | Give each indexable page a specific title, description, self-canonical, and share metadata. Property details need property-specific values, ideally in the initial HTML. |
| P1 | H1 is “Light up your way”; the subheading is “With my Marbella.” Source hides the service/location introduction below the desktop breakpoint. | Make the H1 describe the service and location. Show essential business information on mobile. Keep the slogan as supporting text if desired. |
| P1 | Property cards are li elements with data-reference; navigation occurs through a JavaScript click handler. | Add real anchor links to stable detail URLs in both initial and load-more templates, plus crawlable pagination and links from relevant pages. |
| P1 | Property-list and detail HTTP responses contain shells; property content is fetched and templated in the browser. Search state is stored in sessionStorage. | Pre-render selected property and location pages into HTML, and make useful filters shareable through URLs. Do not rely on prior browser state for an indexable page. |
| P1 | /robots.txt and /sitemap.xml both return 404. | Publish a deliberate crawler policy and a sitemap containing only canonical, indexable URLs. Ensure Webpack emits both into dist. Missing robots.txt does not itself block crawling. |
| P1 | Four live homepage bundles total 2,195,532 decoded bytes, approximately 564 KB compressed transfer in this check. All include sourceURL markers; Webpack sets eval-source-map globally. | Disable embedded development source maps in production, extract production CSS, remove unused homepage imports, and reassess the gallery dependency. Measure the built output afterward. |
| P2 | Source assets used by the homepage include a ~1 MB background, ~936 KB director PNG, ~368 KB hero JPG, and three gallery PNGs of ~356–428 KB each. Gallery repeats those three photos. | Create suitably sized WebP/AVIF variants, reserve image space, and lazy-load below-fold imagery. Prioritize the hero image, which should not be lazy-loaded. Replace repeated imagery with useful original photos when available. Source size is not a measured page transfer total. |
| P2 | Service descriptions are brief and share one homepage; heading levels jump. | Create distinct, useful service and area pages; use a descriptive primary heading and consistent section hierarchy. |
| P2 | Live property-list footer contains an empty social link. Gallery alt text is empty; property-card alt text is generic. | Fix live links and accessible names; describe informative images accurately. Decorative images may retain empty alt text. |
| P2 | Bare propertyDetails.html responds 200 with no property identifier; JS renders missing-property content without changing HTTP status. | Keep utility shells out of the sitemap. Define appropriate noindex/error handling and a real 404/410 policy for unavailable listings as the publishing architecture develops. |

The investor-visa finding is supported by the [Spanish consulate notice](https://www.exteriores.gob.es/Consulados/houston/en/ServiciosConsulares/Paginas/Consular/Visado-de-inversor%28archivada%29.aspx): the route ended on 3 April 2025, with transitional treatment for existing applications/authorizations. This makes the current unqualified service claim a content-accuracy issue.

The property discovery recommendations follow [Google's crawlable-link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable). JavaScript does not automatically prevent Google indexing, and query parameters are not inherently an SEO problem. The issues here are link discovery, rendering dependency, generic metadata, and session-only search state.

Already working: the homepage returns HTTPS 200, HTTP and www variants resolve to the HTTPS non-www site, the HTML specifies English and a mobile viewport, and a genuinely nonexistent path returns HTTP 404. The homepage's main text is in the initial HTML. Preserve those behaviors.

Suggested homepage title: “Marbella Property Sales & Rentals | Zirka Real Estate”. Suggested description: “Buy, sell or rent property in Marbella and the Costa del Sol with Zirka Real Estate. Speak with our multilingual team about your property needs.” These are draft editorial choices, not researched keyword-volume claims.

**AI discovery and agent usability**

Treat this as two related goals: helping search/AI systems understand and cite the business, and helping browser agents navigate and use the website.

Google says foundational SEO still applies to its AI search experiences, and there is no special AI schema requirement. It explicitly says llms.txt neither helps nor harms Google rankings because Search ignores it. Do not prioritize that file or an “AI SEO” plugin over useful pages and crawlable content. [Google AI guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

For discovery, publish clear business facts: public name, genuine contact information, areas served, supported languages, team members, verified qualifications, and what happens after an enquiry. Add JSON-LD using the relevant LocalBusiness subtype, RealEstateAgent, with accurate visible information and genuine sameAs profiles. Add breadcrumbs to deeper pages. Do not invent an address, business hours, review ratings, or property availability to populate markup. Schema helps describe entities; it does not guarantee a rich result or an AI citation. [Google LocalBusiness guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business).

Allow the search crawlers the business wants to reach, and avoid inadvertently blocking them at the CDN. OpenAI distinguishes OAI-SearchBot for ChatGPT search from GPTBot for potential model-training use; those preferences are independent. Search visibility does not require granting training permission. [Official OpenAI crawler documentation](https://developers.openai.com/api/docs/bots).

For browser agents, native links, labelled fields, semantic controls, predictable validation, and clear submission states make the enquiry flow easier to operate. Preserve spam protection; evaluate whether challenges unnecessarily block legitimate users. An agent-readable public form does not require a public submission API or a custom MCP server. These are implementation recommendations informed by [Google's agent-friendly website guidance](https://web.dev/articles/ai-agent-site-ux), not a promise of support from every agent.

Build a small set of original pages around actual client needs. Starting candidates, subject to confirmed services and audience:

- Buying property in Marbella: the agency's process, viewing arrangements, and verified service scope.
- Long-term rentals in Marbella: how the search works and what information to prepare.
- Selling a property: valuation and marketing process, without unsupported outcome promises.
- Marbella, Puerto Banús, and Nueva Andalucía guides with original local insight and relevant property links.
- About/team and contact pages with consistent business facts; useful questions and answers drawn from actual enquiries.

Use a named author/reviewer where expertise matters and update dates only after substantive review. Have any legal/tax content checked for currency. Avoid mass-generating near-identical town pages or republishing feed descriptions as the only original content. Maintain real business profiles and pursue authentic customer feedback. Launch additional languages only when the business can maintain complete, reviewed translations; then add corresponding language URLs and hreflang.

**Implementation sequence and acceptance criteria**

These are rough developer-effort estimates, excluding waiting for account activation, content review, search indexing, or external access.

| Phase | Deliverable | Estimate | Completion criteria |
| --- | --- | --- | --- |
| 1. Hero enquiries | Selected provider, responsive form, submission states, privacy notice/link, and a route to browse properties. | 1–2 working days | Valid enquiry reaches the designated inbox; reply flow works; invalid, network, provider, and quota errors are honest; mobile/keyboard checks pass; no search-handler errors. |
| 2. SEO foundation | Business facts, corrected offer, homepage copy, page metadata, sitemap/robots, accurate business markup, production asset cleanup. | 2–3 working days | Built HTML contains intended metadata and visible content; canonical URLs and sitemap agree; structured data validates; dist contains required files; existing links and redirects work. |
| 3. Property discovery | Real card links, URL-based filters, crawlable pagination, chosen initial-HTML publishing approach, per-property metadata and lifecycle rules. | 3–7+ working days after feed/hosting validation | A fresh browser and a non-JS fetch can access an indexable property's meaningful content; titles/canonicals are distinct; invalid references and removed properties follow the defined policy. |
| 4. Local content and measurement | First service/area pages, verified profiles, analytics events, Google Search Console and Bing Webmaster Tools baseline. | 3–5 working days for initial setup/content, then ongoing | Published pages contain original reviewed information and internal links; enquiry events record only actual acceptance; indexing and lead-quality trends can be monitored. |

For phase 3, first check the feed's publication rights, available inventory, refresh frequency, rate limits, and hosting capabilities. A scheduled static build for selected properties could fit GitHub Pages, but live inventory may require server rendering or a different publishing host. Avoid a framework migration just to launch the contact form. Preserve old detail URLs or provide a tested migration path if routes change.

Verification should include npm run prod, inspection of the emitted HTML/assets, mobile and desktop form behavior, a browser console check, schema validation, and a post-release URL check. The repository has no test script today. Use a controlled email-delivery test after provider activation; simulated success is not evidence of inbox delivery. Record a Lighthouse/PageSpeed baseline and follow-up before claiming a performance improvement.

Track organic enquiries and their quality, useful pages indexed, non-brand impressions/clicks, conversion rate, and identifiable AI referral visits. Check Search Console's available AI reporting rather than assuming all AI traffic can be separated. Repeat a small set of business-relevant AI discovery queries qualitatively; answers vary and are not stable ranking measurements. Establish a baseline and review at roughly 30/60/90 days without promising ranking gains.

**Inputs needed for implementation**

Confirm the public domain and preferred brand; the notification inbox; the chosen provider/account activation; actual address or service area; current phone/social details; valid services and team credentials; and whether advanced property search remains part of the site. The source currently lists Info@zirka.es, but this has not been confirmed as the desired notification recipient. Search Console, analytics, and business-profile access are needed only for their respective follow-up work.
