# Site messaging handoff

Read this file and follow it. Do not reopen the strategy. The owner already rewrote the homepage. That page is the source of truth. Later pages must sound like it. Do not paraphrase back into the older sales-letter wording.

The site is First Light Networks (`firstlightnetworks.com`), a SvelteKit 5 + Tailwind 4 app in this repo. Dark zinc layout, blue accents, rounded-3xl cards. Do not restyle. Change words, order, and the quote form.

## Homepage language to reuse

Quote these. Do not invent a parallel slogan.

- Eyebrow: **Free cabling plan for every new build**
- Headline: **Install your network while the walls are open.**
- Fiber line: **Fiber-internet is faster than wireless-mesh can handle.** Keep those hyphens. The free consult marks exactly which cables to install, and where. The best time to install the network is alongside the electrical.
- Cost: **Save 60% or more on your network cabling.** Installing the network after the walls are closed costs about 3x more. After drywall, you pay more for an inferior result. Do not put the old "$1,000 to $2,000" cabling range back on the site. It is not on the homepage.
- Better network: cable is run for access points, TVs, and desktops, and tested before drywall. Fast Wi-Fi everywhere, not just by the router.
- Equity: **The house is worth more.** Equity typically rises 2-3%. The upgrade usually pays for itself.
- Consult deliverable, in this order:
  1. Where wireless access points go, indoors and outside
  2. What type of cable to run and where
  3. A plan the electrician can install during rough-in
- Consult close: **We mark where the cables go for free, then design a custom system to ensure fast and worry-free connectivity for years to come.** **You'll have that plan within 3 days.**
- System headline: **A Wi-Fi System Your Family Can Count On**
- System support: A well designed network unlocks the full potential of fiber-internet. The network system is what the household lives with. Plug-and-play network hardware generally costs $1,000 to $5,000.
- Household outcomes, with this wording:
  - Whole-property Wi-Fi. The house, the shop, and the yard. Not just near a router in one room.
  - Stays online in an outage. Backup power keeps the network up when the lights go out.
  - Security and parental controls. Separate access for the family, guests, and kids.
  - Ready for what you add later. Smart-home devices have a wire waiting, instead of sharing one Wi-Fi signal.
  - A year of remote support. Someone to call after move-in. Extend it if you want to keep it.
  - Cameras (if you want them). Designed in to save costs and improve reliability, not bolted on after move-in.
- Install model: **You don't pay another contractor to travel.** A configured system costs less than sending a network contractor to the job. **One less permit, one less contractor bill.**
  - Your electrician pulls the cable during electrical rough-in, while the walls are already open.
  - Your contractor installs the system. The gear arrives configured, labeled, and tested. The hard part is already done.
  - We support the install remotely.
- On-site, only as the exception: **We are happy to come out when necessary.** The house still gets a finished network. We'll walk the crew through that first install so the next one is straightforward.
- Existing homes: **We still do existing homes, shops, and properties. We have done retrofits for years and still offer a great value. It takes longer with the sheetrock on, but the result is the same.**
- Closing: **Get the cable plan before rough-in.** Tell us about the build. We'll mark where the network cable should go, at no charge. Cable plans are ready within 3 days.
- Button: **Get the free cabling plan**
- Trust line already on the homepage: **15+ years networking expertise**

"Free consult" and "free cabling plan" are both used. Keep both. The consult is the marking. The plan is what the electrician installs from. Do not collapse them into "quote."

Do not copy these homepage typos into other pages: "The the best time" and "Cable is ran". The intended lines are "The best time to install your network is alongside your electrical." and "Cable is run for access points, TVs, and desktops."

## What not to say

The homepage dropped these. Do not bring them back.

- Cabling priced as "$1,000 to $2,000" or "usually a third" as the lead claim. "About 3x more" and "Save 60% or more" are the claims. The homepage meta still says "about a third the cost of a retrofit." That may stay in meta. Visible copy uses 60% / 3x.
- "Savings are not as obvious" or "disproportionate" for existing homes. The owner wrote "still offer a great value" and "takes longer with the sheetrock on, but the result is the same."
- On-site as a peer product, a premium flagship, or "if the contractor would rather not" as the headline. The line is "We are happy to come out when necessary."
- Company scaling, training contractors so First Light can increase volume, "lead the industry", "skip the line", "impress homeowners", "now shipping nationwide."
- Volume discounts, 8% / 15% tiers, white-label, a partner portal, CAD zips, spec-sheet downloads, a learning center.
- A 90-second install demo. Delete the hidden block and any sentence that depends on it.
- Install-time claims ("under 4 hours", "3–5 hours") on marketing pages.
- "100% customer success rate." No source. Remove it.
- "24 hours." The only clock is **within 3 days**.

A 3-year warranty is still claimed on the solutions page. Do not expand it. If that block survives, label it as a warranty, separate from the 1-year remote support. Do not invent warranty terms.

Kit prices ($999 and $4,250) stay on the kit cards. The $1,000 to $5,000 line is only for plug-and-play hardware in general.

## Do not touch

- Homepage hero photo treatment in `src/routes/+page.svelte`. Desktop: Daniel McCullough photo behind and to the right, darkened, sides blurred, shifted right. Mobile: no horizontal scroll, crop centered on the plans, `bg-zinc-950/30` and `brightness-60`. Owner said the homepage looks good. Do not rewrite homepage sections. The only homepage edit allowed later is the existing-home quote link, and fixing the two typos above if you are already in that file.
- `ClassBanner`. It stays off the homepage. Do not uncomment it.
- HubSpot on `/contact`. It stays the "just want to talk" path. Do not revive the disabled native contact form.
- Stripe buy links on the kits.
- Visual system: zinc-950 / zinc-900, `rounded-3xl`, blue-200 headings, white primary buttons, bordered secondary buttons, `max-w-7xl`, existing icons from `virtual:icons`.

## Homepage CTAs

- New build: "Get the free cabling plan" → `/quote`
- Existing: "Home already built?" → `#existing`, then "See the work" → `/portfolio` and "Get a quote" → `/quote`

When the quote form is split, change only the existing-home quote link to `/quote?type=existing`.

## Step 1 — Header, footer, How It Works, llms.txt

Do this first. The second click currently sells the old business.

### Header (`src/routes/+layout.svelte`)

- Both "Get Quote" labels (desktop button, mobile menu) become **Free cabling plan**. Keep `href="/quote"`.

- Keep Contact as the secondary button.

### Nav labels (`src/lib/index.ts` `headerLinks`)

- `/solutions` label: **Solutions**
- `/how-it-works` stays **How It Works**
- `/portfolio` label: **Existing Homes**
- `/about` stays **About**
- Do not uncomment For Builders.

### Footer (`src/routes/+layout.svelte`)

Replace "Turn-key WiFi solutions for custom home builders and home owners."

Use: "Install your network while the walls are open. Free cabling plan for every new build. Existing homes, shops, and properties welcome."

Footer portfolio link label: **Existing Homes**.

### Steps (`src/lib/index.ts` `steps`)

How It Works renders this array. `howToSchema` is generated from it. Replace the five steps with homepage language:

1. **Free cabling plan.** Share the building plans. We mark where wireless access points go, indoors and outside, what type of cable to run, and where. Your electrician can install that plan during rough-in. You'll have it within 3 days. No charge.
2. **Alongside the electrical.** Your electrician installs the network cabling while there for the electrical, before drywall. It is tested before the walls close. Installing after the walls are closed costs about 3x more.
3. **A system the family can count on.** We design a custom system, then build, configure, label, and test it. Plug-and-play hardware generally costs $1,000 to $5,000. It is what unlocks fiber-internet.
4. **Your contractor installs it.** The gear arrives configured, labeled, and tested. We support the install remotely. You don't pay another contractor to travel. One less permit, one less contractor bill. We are happy to come out when necessary, and we'll walk the crew through that first install so the next one is straightforward.
5. **Someone to call after move-in.** Whole-property Wi-Fi, backup power, separate access for family, guests, and kids, and a year of remote support. Extend it if you want to keep it. Cameras can be designed in, not bolted on after move-in.

Do not mention install hours. Do not put the $1,000 to $2,000 cabling price in these steps.

### How It Works page (`src/routes/how-it-works/+page.svelte`)

- Headline: **Install your network while the walls are open.**
- Support: Fiber-internet is faster than wireless-mesh can handle. The free consult marks exactly which cables to install, and where. The best time is alongside the electrical.
- Delete the hidden demo block and the line about completing an install in under 4 hours after watching the demo.
- Title: `Install your network while the walls are open • First Light Networks LLC`
- Meta: free cabling plan, electrician installs it while there for the electrical, within 3 days, save 60% or more versus after the walls are closed.
- Closing link: **Get the free cabling plan** → `/quote`, with "Cable plans are ready within 3 days."

Keep the existing timeline layout.

### `static/llms.txt`

It still says turnkey WiFi for custom home builders, volume pricing, spec sheets, and "B2B, consumer is secondary." Rewrite it from the homepage. No partner portal, no volume pricing, no nationwide-shipping lead. Existing homes are still offered. Quote form is the free cabling plan, not only a system quote. Company name on the site title is First Light Networks LLC. Do not tell models to emphasize builder bid-winning.

## Step 2 — Solutions, then the quote form

### Solutions (`src/routes/solutions/+page.svelte`)

Delete the opening list that treats On-site and Remote as peers. Delete "Skip the line".

New order:

1. **A Wi-Fi System Your Family Can Count On.** Same six outcomes and the same sentences as the homepage. Plug-and-play network hardware generally costs $1,000 to $5,000. A well designed network unlocks fiber-internet. Do not shorten this into different benefits.
2. **Pre-configured systems.** The usual way to buy it. Keep the three `kits` and Stripe links. In `src/lib/KitCard.svelte` and `kits` in `src/lib/index.ts`, lead each card with the household outcome, then the model numbers. Do not remove specs. Keep the custom card for a house that does not fit a starter kit. Do not invent prices.
3. **We are happy to come out when necessary.** One short block under the kits, using that homepage sentence and the crew-walkthrough sentence. Not the first half of the page. Do not say "certified techs."

Title: `A Wi-Fi system your family can count on • First Light Networks LLC`

Meta: plug-and-play systems that use cable pulled with the electrical; whole-property Wi-Fi; hardware generally $1,000 to $5,000; we come out when necessary.

Update `solutionsSchema` in `src/lib/schemas.ts` to that service, not "pre-configured WiFi systems designed for builders." Keep the kit offers. Prices in the schema stay numeric USD without a `$`.

### Quote form

`/quote` is the free cabling plan for a new build, and a quote for an existing home. One form, two paths.

**Choice at the top:**

- New build (default)
- Home already built

Honor `?type=existing`. Set that query on the homepage existing-home "Get a quote" link in the same change.

**New build fields:** name, email, phone (keep current validation), role (builder, homeowner, electrician), where the project is (plans / rough-in not started / walls still open / walls closed — walls closed means existing home), whether plans can be shared. Optional note. Do not require rooms or acres. Do not ask them to size a kit.

**Existing home fields:** keep rooms, acres, and the integration checkboxes.

**Copy, from the homepage:**

- New-build eyebrow: **Free cabling plan for every new build**
- New-build headline: **Get the cable plan before rough-in.**
- New-build support: Tell us about the build. We'll mark where the network cable should go, at no charge.
- New-build fine print: Cable plans are ready within 3 days.
- Existing headline: **Home already built?**
- Existing support: We still do existing homes, shops, and properties. It takes longer with the sheetrock on, but the result is the same.
- Sidebar must match the path. New build: share the plans, get the cable layout within 3 days, then we design the system if you want it. Existing: share the property, we size coverage, quote within 3 days.
- Success: they'll hear within 3 days. No "24 hours" left in `src/routes/quote/+page.svelte`.

**Server (`src/routes/quote/+page.server.ts`, `quoteSchema` in `src/lib/schemas.ts`, `src/lib/server/db/schema.ts`):**

- A new-build submission must be valid without rooms and acres.
- Suggested columns: `projectType` (`new-build` | `existing`), `role` (nullable text), `buildStage` (nullable text), `hasPlans` (nullable boolean), `notes` (nullable text). Keep existing columns. New submissions must set `projectType` explicitly.
- Rooms and acres required for `existing`, optional for `new-build`. Integrations optional on both.
- Email to `chris@firstlightnetworks.com` must include the new fields. Subject should say cable plan vs quote.
- Generate a Drizzle migration. Apply it locally if that is the project habit (`db:generate`, `db:migrate:local`). Do not run `db:migrate:cf` unless the owner asks.

Title: `Free cabling plan • First Light Networks LLC`

### Contact (`src/routes/contact/+page.svelte`)

Replace "within 24 hours" in the visible paragraph and in the dead `handleSubmit` alert with **within 3 days**. Leave HubSpot and the delayed phone/email reveal alone. Do not turn contact into a second quote form.

## Step 3 — Portfolio and About

### Portfolio (`src/routes/portfolio/+page.svelte` and `projects` in `src/lib/index.ts`)

These projects are mostly existing buildings. Say that with the homepage sentence, not a new thesis.

- Headline: **Home already built?**
- Support: We still do existing homes, shops, and properties. We have done retrofits for years and still offer a great value. It takes longer with the sheetrock on, but the result is the same.
- Add a label on each project: **Existing** or **New build**. Do not overload `type`. Add a field such as `stage`.
- Classify from the current copy. Do not invent projects.
  - Existing: Private Rural Ranch, Country Market, Dairy with Fuel Tanks, Resort Hotel, Rural Residential (5-acre), Rural Farm, Small Neighborhood Home (remodel).
  - New build, not finished: Custom Log Cabin with Shop. Say it is designed, not installed, if the copy is still future tense.
- Rewrite each `result` as what the owner can do now. Keep the first-person excerpts.
- Fix typos in `src/lib/index.ts`:
  - "recorning" → "recording"
  - "seperate" → "separate"
  - "Permanent ad secure" → "Permanent and secure"
  - "won't will last" → "will last"
- Title: `Existing homes, shops, and properties • First Light Networks LLC`
- Meta: retrofits we have done for years. Same result. It takes longer with the sheetrock on.
- `portfolioSchema` must not call them all custom-construction projects.

### About (`src/routes/about/+page.svelte`)

Keep the founder story. The turn is already close: wiring under one electrical permit, tested before sheetrock, then a ready-to-install system. Make that match the homepage exactly:

- New builds: electrician installs the network cabling while there for the electrical. One less permit. Tested before drywall. Save 60% or more versus after the walls are closed. Then we design a custom system for fast, worry-free connectivity.
- Existing: use the homepage paragraph. Do not say the savings are less obvious.
- Remove "100% customer success rate."
- Title and meta: install the network while the walls are open. Not "Premium Builder WiFi" as the identity.
- Closing button: **Get the free cabling plan** → `/quote`. If the form split exists, add a text link for an existing home to `/quote?type=existing`. If this step runs first, link existing homes to `/quote` and do not invent the query.

## Step 4 — For builders

`src/routes/for-builders/+page.svelte` promises a partner portal, CAD package, white-label, and 8% / 15% discounts. None of that is on the homepage.

Do not put it in the nav. Remove it.

- Redirect `/for-builders` to `/how-it-works` so an old link does not 404.
- Delete the fake resource list, discount tiers, and partner-portal sentence with the page.
- Remove it from `static/sitemap.xml` if listed.
- Do not write a replacement partner page unless the owner asks.

## Step 5 — Titles and schema last

Only after the sentences above are in the pages.

`src/lib/schemas.ts`:

- `organizationSchema` description still says turnkey WiFi for home builders. Replace with the homepage offer: free cabling plan, cable installed with the electrical, a Wi-Fi system the family can count on, existing homes still welcome. Keep `HomeAndConstructionBusiness` unless a clearly better schema.org type is obvious. Do not invent a rating. `aggregateRating` may stay.
- `websiteSchema` description: the footer sentence. Remove `potentialAction`. `/quote?q=` is not search. Do not build search.
- `howToSchema` name and description: install the network while the walls are open. Steps already come from `steps`.
- Recheck `solutionsSchema` and `portfolioSchema`.
- Grep for `24 hours`, `turnkey`, `Turn-key`, `Premium Builder`, `volume pricing`, `partner portal`, `$1,000 to $2,000`, `1000 to 2000`.

New titles use `• First Light Networks LLC`, matching the homepage `<title>`.

`static/sitemap.xml`: drop `/for-builders` if the page is gone.

## How to work

- Svelte 5 runes are already the style. This repo's `AGENTS.md` says to use the Svelte MCP (`list-sections`, then relevant docs, then the autofixer if those tools exist). If `get-documentation` or `svelte-autofixer` are not in the MCP namespace, do not block. Run `bun run check` after substantive edits.
- Dev server is often already on `http://localhost:5173`. Do not restart it unless it is down.
- Do not commit, push, or deploy unless the owner asks.
- Do not run remote D1 migrations unless the owner asks.
- One step per request unless the owner says to continue. Step 1 is the default if they say "do the next step."

## Done when

A visitor who lands on the homepage, then opens How It Works, Solutions, Quote, Portfolio, or About, hears the same lines: install the network while the walls are open, fiber-internet is faster than wireless-mesh can handle, save 60% or more, the electrician is already there for the electrical, the family gets a Wi-Fi system they can count on, you don't pay another contractor to travel, we come out when necessary, and existing homes still get the same result.
