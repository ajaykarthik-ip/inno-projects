# SEO Complete Guide — Inno Projects Case Study
> Real issues found, fixed, and explained. Use this to learn SEO and help other businesses.

---

## Table of Contents
1. [What is SEO?](#1-what-is-seo)
2. [Types of SEO](#2-types-of-seo)
3. [Technical SEO Checklist](#3-technical-seo-checklist)
4. [On-Page SEO Checklist](#4-on-page-seo-checklist)
5. [Schema / Structured Data](#5-schema--structured-data)
6. [Google Search Console (GSC)](#6-google-search-console-gsc)
7. [Google Business Profile (GBP)](#7-google-business-profile-gbp)
8. [Next.js SEO — Server vs Client Components](#8-nextjs-seo--server-vs-client-components)
9. [Real Issues Found on innoprojects.in](#9-real-issues-found-on-innoprojectsin)
10. [All Fixes Applied](#10-all-fixes-applied)
11. [Pending Actions](#11-pending-actions)
12. [SEO for Any Business — Quick Audit Template](#12-seo-for-any-business--quick-audit-template)

---

## 1. What is SEO?

SEO (Search Engine Optimization) is the process of making your website appear higher in Google search results **without paying for ads**.

When someone searches "final year project center coimbatore" on Google, SEO determines whether your site appears on page 1 or page 10.

**3 pillars of SEO:**
- **Technical** — Can Google find, crawl, and index your pages?
- **On-Page** — Does your content match what people are searching for?
- **Authority** — Do other websites link to you? (backlinks)

---

## 2. Types of SEO

| Type | What it means | Example |
|------|--------------|---------|
| Technical SEO | Site speed, crawlability, indexing, structured data | Fixing Soft 404, SSR |
| On-Page SEO | Title, description, headings, keywords in content | Writing good meta titles |
| Local SEO | Appearing in "near me" searches, Google Maps | Google Business Profile |
| Schema SEO | Rich results in Google (FAQ boxes, stars, etc.) | FAQPage JSON-LD |
| Content SEO | Blog posts, long-form pages targeting keywords | Blog pages |

---

## 3. Technical SEO Checklist

### 3.1 Indexability
- [ ] Every important page returns HTTP 200
- [ ] No important page has `noindex` accidentally
- [ ] `robots.txt` doesn't block important pages
- [ ] Sitemap submitted to Google Search Console
- [ ] All pages in sitemap actually exist

### 3.2 Canonical URLs
- [ ] Every page has a `<link rel="canonical">` tag
- [ ] Canonical points to the correct version (https, www)
- [ ] No duplicate content issues (same content on 2 URLs)

### 3.3 Site Speed
- [ ] Images are compressed (WebP format preferred)
- [ ] No render-blocking JavaScript on critical pages
- [ ] Google PageSpeed score > 70 on mobile

### 3.4 Mobile Friendly
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] No horizontal scrolling on mobile
- [ ] Buttons are large enough to tap

### 3.5 HTTPS
- [ ] Site runs on HTTPS (not HTTP)
- [ ] No mixed content warnings

### 3.6 Server-Side Rendering (SSR) — Critical for Next.js
- [ ] All pages that need indexing are server-rendered
- [ ] No important page uses `"use client"` as its root export
- [ ] API calls on public pages happen server-side, not client-side

---

## 4. On-Page SEO Checklist

### 4.1 Title Tag
- Max 60 characters
- Contains primary keyword
- Each page has a unique title
- Format: `Primary Keyword | Brand Name`

**Good example:**
```
Best Final Year Project Center in Coimbatore | Inno Projects
```
**Bad example:**
```
Home | My Website
```

### 4.2 Meta Description
- Max 160 characters
- Contains keyword naturally
- Acts like an ad — make people want to click
- Each page has a unique description

**Good example:**
```
Inno Projects delivers 600+ final year projects in ML, AI, IoT & Blockchain 
with full source code in 12 hours. Call +91 9600309140.
```

### 4.3 Headings (H1, H2, H3)
- Every page has exactly **one H1**
- H1 contains the primary keyword
- H2s cover subtopics
- Don't skip heading levels (H1 → H3 without H2)

### 4.4 Keywords
- Primary keyword in: title, H1, first paragraph, URL
- Related keywords in: H2s, body content
- Don't repeat the same keyword too many times (keyword stuffing)

### 4.5 URL Structure
- Short and descriptive
- Use hyphens, not underscores
- Contains keyword

**Good:** `/cse-final-year-projects-coimbatore`
**Bad:** `/page?id=123&cat=cse`

### 4.6 Images
- Every image has an `alt` attribute describing it
- Image filenames are descriptive (`ml-project-coimbatore.jpg` not `IMG_001.jpg`)
- Images are compressed

### 4.7 Internal Links
- Link between your own pages using keyword-rich anchor text
- Every page should be reachable within 3 clicks from homepage

---

## 5. Schema / Structured Data

Schema is code you add to your page that tells Google what your content means. It can unlock **rich results** — special displays in Google like FAQ boxes, star ratings, breadcrumbs.

### 5.1 Types Used on innoprojects.in

| Schema Type | Where Used | What it does |
|-------------|------------|-------------|
| `LocalBusiness` | Global (layout.tsx) | Shows business info in Google Maps/Knowledge Panel |
| `EducationalOrganization` | Global (layout.tsx) | Tells Google it's an education business |
| `WebSite` | Global (layout.tsx) | Enables Google Sitelinks Search Box |
| `FAQPage` | Individual pages | Shows expandable FAQ in Google results |
| `BreadcrumbList` | Individual pages | Shows breadcrumb path in Google results |
| `CollectionPage` | project-titles layout | Marks page as a list/collection |
| `ContactPage` | contact layout | Marks page as contact page |

### 5.2 Rules for Schema

**Rule 1: Don't duplicate schema types on same page**
```
❌ WRONG: layout.tsx has FAQPage + page.tsx also has FAQPage 
          → Google sees 2 FAQPage schemas, flags both as invalid

✅ RIGHT:  Only page.tsx has FAQPage (remove from layout.tsx)
```

**Rule 2: FAQPage only on pages that actually show FAQs**
```
❌ WRONG: layout.tsx injects FAQPage schema on every page including /blog
✅ RIGHT:  Each page injects its own FAQPage only if it has FAQ content
```

**Rule 3: Use @graph for multiple schemas on one page**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "LocalBusiness", ... },
    { "@type": "WebSite", ... }
  ]
}
```

### 5.3 How to Test Schema
1. Go to: https://search.google.com/test/rich-results
2. Paste your URL
3. See which schemas are valid and which have errors

---

## 6. Google Search Console (GSC)

GSC is a free tool by Google that shows you how Google sees your website.

### 6.1 Setup Steps
1. Go to search.google.com/search-console
2. Add property → choose **URL prefix** (e.g., `https://www.innoprojects.in`)
3. Verify ownership via HTML meta tag:
   - Add `<meta name="google-site-verification" content="YOUR_CODE">` to `<head>`
   - In Next.js: add to `metadata.verification.google` in `layout.tsx`
4. Submit sitemap: Sitemaps → Enter `sitemap.xml` → Submit

### 6.2 Key Reports

| Report | What to check |
|--------|--------------|
| **Coverage** | Pages Google indexed vs not indexed |
| **URL Inspection** | Check any specific URL |
| **Sitemaps** | Confirm sitemap is accepted |
| **Core Web Vitals** | Page speed scores |
| **Search results** | What keywords bring traffic |

### 6.3 Indexing Status Meanings

| Status | Meaning | Action |
|--------|---------|--------|
| **Indexed** | Page is in Google | Nothing needed |
| **Discovered - currently not indexed** | Google found it but hasn't crawled yet | Request Indexing |
| **Crawled - currently not indexed** | Google crawled but decided not to index | Check page content quality |
| **Excluded by noindex** | Page has noindex tag | Intentional or fix the tag |
| **Soft 404** | Page rendered an error state | Fix the page content |
| **Duplicate** | Google prefers another URL | Fix canonical tag |

### 6.4 How to Request Indexing
1. GSC → URL Inspection
2. Type the URL
3. Click **Request Indexing**
4. Google crawls within hours to days

---

## 7. Google Business Profile (GBP)

GBP is what shows the business panel on the right side of Google search results and on Google Maps.

### 7.1 Setup
1. Go to business.google.com
2. Create/claim your business
3. Verify (usually by postcard or phone)

### 7.2 What to Fill In
- [ ] Business name (exact legal name)
- [ ] Category (be specific: "Software Training Institute" not just "Education")
- [ ] Address
- [ ] Phone number
- [ ] Website URL ← **must match your current domain**
- [ ] Hours
- [ ] Description
- [ ] Photos (add regularly — Google rewards active profiles)

### 7.3 Common GBP Mistake
When you change your domain, update the website field in GBP immediately.

**What happened on innoprojects.in:**
- Domain changed from `.tech` to `.in`
- GBP website field still showed `innoprojects.tech`
- Google showed `.tech` URL in search results even after months
- Fix: Updated website field in GBP to `innoprojects.in`

### 7.4 Local SEO Tips
- Get reviews — ask every customer via WhatsApp
- Add photos every month (Google boosts active profiles)
- Post updates (offers, events) regularly
- Use your city name in your business description

---

## 8. Next.js SEO — Server vs Client Components

This is the most important section for developers building Next.js sites.

### 8.1 The Core Rule

```
"use client" on a page = Google may not see content properly
Server component = Google sees everything immediately
```

### 8.2 Why This Matters

When Google crawls your site, it downloads the HTML. If your page is a client component:
- The HTML Google receives is empty or minimal
- Content only appears after JavaScript runs
- Google's crawler may not wait for JS to finish
- Result: Page looks empty → Google won't index it

When your page is a server component:
- Full HTML is generated on the server before sending
- Google sees all content immediately
- Much better chance of indexing

### 8.3 The Fix Pattern

**WRONG — whole page is "use client":**
```tsx
"use client"  ← blocks server rendering of metadata

export const metadata = { ... }  ← THIS IS IGNORED by Next.js
export default function Page() { ... }
```

**RIGHT — split into server + client:**
```tsx
// page.tsx (SERVER component — no "use client")
import PageClient from './PageClient'
export const metadata = { ... }  ← THIS WORKS
export default function Page() {
  return <PageClient />
}

// PageClient.tsx (CLIENT component)
"use client"
export default function PageClient() {
  // all useState, useEffect, event handlers here
}
```

### 8.4 When to Use "use client"
Only when you need:
- `useState` / `useReducer`
- `useEffect`
- Browser APIs (`window`, `document`, `localStorage`)
- Event handlers (`onClick`, `onChange`)
- Third-party libraries that need the browser

### 8.5 API Calls — Server vs Client

**WRONG — client fetches from API (Googlebot times out):**
```tsx
"use client"
useEffect(() => {
  fetch('/api/projects')  // Googlebot sees "Error Loading" state
    .then(...)
})
```

**RIGHT — server fetches directly from database:**
```tsx
// page.tsx (server component)
import { ProjectModel } from '@/models/Projects'
export default async function Page() {
  const projects = await ProjectModel.getAllProjects()  // direct DB call
  return <ProjectsClient initialProjects={projects} />
}
```

---

## 9. Real Issues Found on innoprojects.in

### Issue 1: Domain Migration Without Redirect
**What happened:**
- Old domain: `innoprojects.tech` (expired/abandoned)
- New domain: `innoprojects.in`
- No 301 redirect set up from `.tech` → `.in`

**Impact:**
- All Google authority built on `.tech` was lost
- 29 pages showed "Discovered - currently not indexed"
- Google still showed `.tech` URLs in results for weeks

**Fix:**
- Added `innoprojects.in` as new property in GSC
- Submitted sitemap for `.in` domain
- Manually requested indexing for key pages

**Lesson:**
When changing domains, always set up 301 redirects:
```
innoprojects.tech/* → https://www.innoprojects.in/*
```
This tells Google: "everything moved here permanently" and passes SEO authority.

---

### Issue 2: Wrong Google Verification Code
**What happened:**
- `layout.tsx` had verification code from old `.tech` GSC property
- New `.in` property has a different verification code
- Google couldn't verify ownership of `.in` site

**Fix:**
```tsx
// layout.tsx
verification: {
  google: 'mPio88tUiWUBaVWd-qgsffxGetGB0T3f-QrvUiXNJps'  // new .in code
}
```

**Lesson:**
Every GSC property has its own unique verification code. When you add a new property, get the new code and update `layout.tsx`.

---

### Issue 3: Soft 404 on /projects Page
**What happened:**
- `/projects` page fetched projects from MongoDB via API (`/api/projects`)
- Googlebot crawled the page
- MongoDB connection timed out (499 error)
- Page rendered "Error Loading Projects" state
- Google treated this as a dead/empty page → Soft 404

**What is a Soft 404?**
A page that returns HTTP 200 (success) but displays an error or empty content. Google penalizes these because they waste crawl budget.

**Fix:**
```tsx
// projects/page.tsx — now a server component
export default async function ProjectsPage() {
  let initialProjects;
  try {
    initialProjects = await ProjectModel.getAllProjects();  // direct DB, no HTTP
  } catch {
    initialProjects = undefined;
  }
  return <FeaturedProjects initialProjects={initialProjects} />;
}
```

**Lesson:**
Never let a public page show an error state. Always:
1. Fetch data server-side where possible
2. Have a graceful fallback (show empty state, not error state)

---

### Issue 4: /project-titles Rejected by Google
**What happened:**
- Page had `"use client"` at the top
- 500 project titles were in a static array
- Google's crawler saw incomplete/empty content
- Indexing request was rejected

**Fix:**
- Removed `"use client"` from `page.tsx`
- Moved all interactive logic (search, filter, WhatsApp) to `ProjectTitlesClient.tsx`
- `page.tsx` is now a server component that passes data to client component
- Google now sees all 500 project titles in the HTML

---

### Issue 5: Duplicate FAQPage Schema
**What happened:**
- `layout.tsx` injected a FAQPage schema globally (on every page)
- `/project-center-in-coimbatore/page.tsx` had its own FAQPage schema
- When both rendered together, Google saw 2 FAQPage schemas on same page
- GSC reported "FAQ: 2 invalid items detected"

**Fix:**
- Removed FAQPage from `layout.tsx` (global schema should only have LocalBusiness + WebSite)
- Each page that needs FAQ keeps its own FAQPage schema

**Rule:** Only have ONE FAQPage schema per page.

---

### Issue 6: og-image.png Missing ⚠️ STILL PENDING
**What happened:**
- All pages reference `/og-image.png` for social sharing
- File does NOT exist in `/public/` folder
- When someone shares any page on WhatsApp/Twitter/LinkedIn → no preview image appears

**Fix needed:**
1. Create a 1200×630 pixel image with your business branding
2. Save it as `og-image.png`
3. Put it in the `/public/` folder
4. Redeploy

**What this image should contain:**
- Your logo
- Business name: "Inno Projects"
- Tagline: "Best Final Year Project Center in Coimbatore"
- Phone number
- Dark/branded background

**Tools to create it:**
- Canva (free): canva.com → Custom size 1200×630
- Figma (free): figma.com

---

### Issue 7: Homepage Was "use client"
**What happened:**
- `page.tsx` (homepage) had `"use client"` just for sidebar cleanup in `useEffect`
- This prevented homepage from being a proper server component
- Homepage metadata relied entirely on `layout.tsx` defaults

**Fix:**
- Extracted the `useEffect` into a tiny `SidebarInitializer.tsx` client component
- Homepage is now a proper server component
- `layout.tsx` default metadata still applies (correct)

---

### Issue 8: GBP Website URL Was Old Domain
**What happened:**
- Google Business Profile website field showed `innoprojects.tech`
- All organic search results showed `.tech` URL
- Customers clicking the GBP website button went to dead URL

**Fix:**
- Updated GBP website field to `https://www.innoprojects.in`

---

### Issue 9: sameAs Social Links Had Old Domain
**What happened:**
- JSON-LD schema had Facebook and Instagram URLs as `innoprojects.tech`
- These are wrong social media profile URLs

**Fix:**
```tsx
sameAs: [
  'https://www.facebook.com/innoprojects.in',
  'https://www.instagram.com/innoprojects.in',
  'https://www.linkedin.com/company/innoprojects',
  'https://www.youtube.com/@innoprojects',
]
```

---

## 10. All Fixes Applied

| # | Issue | Status | File Changed |
|---|-------|--------|-------------|
| 1 | Domain migration setup in GSC | ✅ Done | GSC (no code) |
| 2 | Wrong Google verification code | ✅ Done | `layout.tsx` |
| 3 | Soft 404 on /projects | ✅ Done | `projects/page.tsx`, `FeaturedProjects.tsx` |
| 4 | /project-titles client-only | ✅ Done | `project-titles/page.tsx`, `ProjectTitlesClient.tsx` |
| 5 | Duplicate FAQPage schema | ✅ Done | `layout.tsx` |
| 6 | og-image.png missing | ❌ Pending | Need to create image |
| 7 | Homepage "use client" | ✅ Done | `page.tsx`, `SidebarInitializer.tsx` |
| 8 | GBP website URL old domain | ✅ Done | Google Business Profile |
| 9 | sameAs social links old domain | ✅ Done | `layout.tsx` |

---

## 11. Pending Actions

### Immediate (Do Now)
- [ ] Create `og-image.png` (1200×630px) and put in `/public/` folder
- [ ] Request indexing in GSC for all these pages:
  - `/project-titles`
  - `/projects`
  - `/machine-learning-projects-coimbatore`
  - `/ieee-projects-coimbatore-2026`
  - `/project-center-in-coimbatore` (re-request after FAQ fix)
  - `/cse-final-year-projects-coimbatore`

### This Week
- [ ] Add photos to Google Business Profile (last added 183 days ago)
- [ ] Post an update on GBP (offer, news, or project highlight)
- [ ] Check GSC Coverage report after 3-5 days to see indexing progress

### This Month
- [ ] Old `.tech` pages will de-index automatically (1-2 weeks)
- [ ] Monitor GSC for any new crawl errors
- [ ] Check Core Web Vitals report in GSC
- [ ] Add more blog posts targeting keywords students search for

### Long Term
- [ ] Build backlinks — get listed on JustDial, Sulekha, IndiaMart
- [ ] Ask satisfied customers for Google reviews (currently 47 reviews)
- [ ] Target "final year project [city]" for other cities (Chennai, Bangalore, etc.)

---

## 12. SEO for Any Business — Quick Audit Template

Use this when auditing any new business website.

### Step 1: Check if Google can find the site
```
site:yourdomain.com
```
Type this in Google. If 0 results → site not indexed at all.

### Step 2: Check GSC
- Is the property verified?
- Are there indexing errors?
- Is sitemap submitted?

### Step 3: Check robots.txt
Open: `yourdomain.com/robots.txt`
Make sure important pages are NOT blocked.

### Step 4: Check each important page
For each page, check:
- Has a unique title (< 60 chars)
- Has a meta description (< 160 chars)
- Has a canonical tag
- Has one H1
- Returns HTTP 200
- Not "use client" root (for Next.js)

### Step 5: Check structured data
- Paste URL into: https://search.google.com/test/rich-results
- Fix any errors

### Step 6: Check GBP
- Is it claimed and verified?
- Is website URL correct?
- Are hours updated?
- Any unanswered reviews?

### Step 7: Check og-image
- Open URL in: https://www.opengraph.xyz
- Does it show a proper preview image?

### Step 8: Check page speed
- Open: https://pagespeed.web.dev
- Score > 70 on mobile is acceptable
- Score > 90 is excellent

---

## Quick Reference — SEO Vocabulary

| Term | Simple meaning |
|------|---------------|
| **Index** | Google has saved your page and can show it in results |
| **Crawl** | Google visited your page to read it |
| **Canonical** | The "official" URL of a page (avoids duplicate issues) |
| **Soft 404** | Page loads but shows error/empty content |
| **301 Redirect** | Permanently moved — passes SEO authority |
| **302 Redirect** | Temporarily moved — does NOT pass authority |
| **Schema / JSON-LD** | Code that gives Google extra info about your content |
| **Rich Result** | Special Google display (FAQ box, stars, breadcrumbs) |
| **Sitemap** | A list of all your URLs submitted to Google |
| **robots.txt** | A file that tells Google which pages to skip |
| **Backlink** | Another website linking to yours (builds authority) |
| **Meta Title** | The blue link text shown in Google results |
| **Meta Description** | The grey text shown below the title in results |
| **Core Web Vitals** | Google's speed/experience score for your site |
| **SSR** | Server-Side Rendering — page built on server before sending |
| **CSR** | Client-Side Rendering — page built in browser after loading |

---

*Last updated: April 2026 — innoprojects.in case study*
