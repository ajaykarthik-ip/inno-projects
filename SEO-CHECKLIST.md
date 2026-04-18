# SEO Checklist — Inno Projects (innoprojects.tech)

**Last updated: 18 April 2026**  
**Goal: Rank #1 for "best final year project center in coimbatore"**

---

## ROOT CAUSES — WHY NOT RANKING YET

| Problem | Impact | Status |
|---|---|---|
| Zero backlinks (competitors have years of history) | 🔴 Critical | Pending — off-page work |
| Google Business Profile has few/no reviews | 🔴 Critical | Pending — needs real reviews |
| `.tech` TLD + newer domain = less trust | 🔴 Critical | Nothing you can do — only time fixes this |
| No AggregateRating schema | 🟡 Medium | Pending — add once you have real reviews |
| Not listed on Indian business directories | 🟡 Medium | Pending — manual work |

---

## SECTION A — CODE FIXES

### ✅ A1. Fixed invalid schema bug (`servesCuisine: undefined`)
**Fixed:** 17 Apr 2026 — `src/app/layout.tsx`

### ✅ A2. Fixed `sameAs` — now points to real social profiles
**Fixed:** 17 Apr 2026 — `src/app/layout.tsx`

Update these once your pages are live:
```ts
sameAs: [
  'https://www.facebook.com/innoprojects.tech',
  'https://www.instagram.com/innoprojects.tech',
  'https://www.linkedin.com/company/innoprojects',
  'https://www.youtube.com/@innoprojects',
]
```
> ⚠️ Also add Justdial + Sulekha URLs once listed.

### ⏳ A3. Add AggregateRating schema — PENDING
Wait until you have real Google reviews. Add to `src/app/layout.tsx` LocalBusiness schema:
```ts
aggregateRating: {
  '@type': 'AggregateRating',
  ratingValue: '4.9',   // your real average
  reviewCount: '50',    // your real count
  bestRating: '5',
  worstRating: '1',
},
```
> Never fake ratings — Google detects and penalises.

### ✅ A4. Updated sitemap `lastModified` dates to 2026
**Fixed:** 17 Apr 2026 — `src/app/sitemap.ts`

### ✅ A5. Updated "2025" → "2026" across key pages
**Fixed:** 17 Apr 2026 — layout, project-center page, blog metadata (all 11 posts fixed 18 Apr 2026)

### ✅ A6. Added `authors` field to all blog post metadata
**Fixed:** 18 Apr 2026 — all 11 blog posts under `src/app/blog/*/page.tsx`
```ts
authors: [{ name: 'Inno Projects', url: 'https://www.innoprojects.tech' }],
```

### ✅ A7. Visible `<address>` in Footer
**Fixed:** 17 Apr 2026 — `src/components/Footer.tsx` — address + phone visible in DOM.

### ✅ A8. Per-page canonical URLs
All key pages export `alternates: { canonical: pageUrl }` — confirmed across all 35 sitemap entries.

### ✅ A9. Metadata on "use client" pages handled via layout.tsx
Contact, IEEE Journal, Request Project, Project Titles — all have proper `layout.tsx` files that export metadata as server components. Pages can remain client components.

---

## SECTION B — GOOGLE BUSINESS PROFILE

Most important factor for the local map pack (the 3 boxes above organic results).

### ⏳ B1. Verify GBP is fully set up
- Go to: https://business.google.com
- Business name: **Inno Projects**
- Address: **28, Baba St, Janaki Nagar, Venkitapuram, Coimbatore 641025**
- Phone: **+91 9600309140**
- Category: **Software Training Institute** (primary) + **Educational Institution** (secondary)
- Website: **https://www.innoprojects.tech**

### ⏳ B2. Complete every GBP section
- [ ] Add 10+ photos (workspace, students, logo, interior)
- [ ] Add all services: Final Year Projects, IEEE Projects, ML, IoT, etc.
- [ ] Set hours: Open 24/7
- [ ] Add WhatsApp number
- [ ] Add service area: Coimbatore + surrounding areas

### ⏳ B3. Get Google Reviews — #1 local ranking factor
- Target: **50+ reviews with 4.8+ average** to enter map pack
- After every delivery, send student the review link via WhatsApp
- NEVER buy fake reviews

### ⏳ B4. Post on GBP weekly
New titles, student results, domain announcements.

---

## SECTION C — BACKLINKS

### ⏳ C1. Indian Business Directories (free, give backlinks)
- [ ] **Justdial**: https://business.justdial.com
- [ ] **Sulekha**: https://www.sulekha.com/list-your-business
- [ ] **IndiaMART**: https://seller.indiamart.com
- [ ] **TradeIndia**: https://www.tradeindia.com

> Use EXACT same Name, Address, Phone everywhere (NAP consistency).

### ⏳ C2. Social Media Profiles
- [ ] Facebook Page → link to innoprojects.tech
- [ ] Instagram @innoprojects.tech → bio link
- [ ] LinkedIn Company Page
- [ ] YouTube Channel — project demo videos = huge trust signal
- [ ] Twitter/X

> Once created, update `sameAs` in `src/app/layout.tsx`.

### ⏳ C3. Content backlinks
- Answer Quora questions about final year projects → link to blog posts
- Reach out to college tech clubs for mentions

---

## SECTION D — CONTENT

### ✅ D1. Created `/about` and `/faq` pages
**Done:** 17 Apr 2026 — both in sitemap, sidebar, footer.

### ✅ D2. Department-specific landing pages (7 pages)
**Done:** 18 Apr 2026

| URL | Target keyword |
|---|---|
| `/machine-learning-projects-coimbatore` | machine learning projects coimbatore |
| `/cse-final-year-projects-coimbatore` | CSE final year projects coimbatore |
| `/ece-final-year-projects-coimbatore` | ECE final year projects coimbatore |
| `/mca-final-year-projects-coimbatore` | MCA final year projects coimbatore |
| `/python-projects-coimbatore` | python projects coimbatore |
| `/web-development-projects-coimbatore` | web development projects coimbatore |
| `/ieee-projects-coimbatore-2026` | IEEE projects coimbatore 2026 |

Each page: shared `DomainPage` component, 800+ words, 10 project titles, FAQ JSON-LD schema, full metadata.

### ✅ D3. Project ideas / listing pages (7 pages)
**Done:** 18 Apr 2026 — targets how students actually search

| URL | Target keyword |
|---|---|
| `/machine-learning-project-ideas-2026` | machine learning project ideas 2026 |
| `/cse-project-titles-2026` | CSE project titles 2026 |
| `/ece-project-ideas-2026` | ECE project ideas 2026 |
| `/python-project-ideas-for-students` | python project ideas for students |
| `/ieee-2026-project-titles-list` | IEEE 2026 project titles list |
| `/final-year-project-with-source-code` | final year project with source code |
| `/ready-made-final-year-projects-coimbatore` | ready made final year projects coimbatore |

Each page: shared `ProjectIdeasPage` component, 24 real project titles with WhatsApp CTAs per card, FAQ schema.

### ✅ D4. Home page content sections added
**Done:** 18 Apr 2026

- **How It Works** — 3-step process (Choose → Order → Delivered in 12hrs)
- **Browse by Domain** — 7 domain cards linking to D2 pages
- **Trending Project Ideas** — 6 popular project cards with WhatsApp CTAs

### ✅ D5. Blog posts updated (authors + year)
**Done:** 18 Apr 2026 — `authors` field added + "2025" → "2026" in all 11 blog post metadata exports.

### ⏳ D6. Add Student Testimonials section
Add to homepage and `/project-center-in-coimbatore` — student name, college, project title, star rating. Helps E-E-A-T signals.

### ⏳ D7. Update 2025 → 2026 in blog post body content
Blog metadata is fixed but body text inside JSX still mentions 2025 in several posts. Update manually when editing next.

---

## SECTION E — INTERNAL LINKING & NAVIGATION

### ✅ E1. Footer — 5 columns, 23 links
**Done:** 18 Apr 2026

- Explore (9 core links)
- By Department (7 domain pages)
- Project Ideas (7 ideas pages)
- Contact info

### ✅ E2. Sidebar — departments section added
**Done:** 18 Apr 2026 — sidebar now has a "Departments" section with 12 links:
ML, CSE, ECE, MCA, Python, Web Dev, IoT, IEEE, Blockchain, PHP, Java, Hardware

### ✅ E3. `/projects` page for Featured Projects
**Done:** 18 Apr 2026 — FeaturedProjects component moved from homepage to `/projects`. Sidebar entry: "Project Videos".

---

## SECTION F — TECHNICAL

### ⏳ F1. Submit updated sitemap — DO THIS IMMEDIATELY AFTER PUSHING
- Go to: https://search.google.com/search-console
- Submit: **https://www.innoprojects.tech/sitemap.xml**
- Sitemap now has **35 entries** (was 18) — Google needs to discover the 17 new pages.

### ⏳ F2. Check Core Web Vitals
- Test at: https://pagespeed.web.dev → enter https://www.innoprojects.tech
- Target: LCP < 2.5s, CLS < 0.1, FID < 100ms

### ✅ F3. robots.txt configured correctly
- All public routes allowed, `/admin/` and `/api/` blocked, sitemap URL declared.

### ✅ F4. Schema validity confirmed
- LocalBusiness + FAQPage schema in root layout — no invalid fields.
- Re-test after deploying: https://search.google.com/test/rich-results

### ✅ F5. Sitemap complete — 35 entries, all public pages covered

---

## WHAT GOOGLE SHOWS NOW (April 2026)

Searching "inno projects":
```
Inno Projects: Best Final Year Project Center in Coimbatore
https://www.innoprojects.tech
600+ final year projects delivered every year...

Contact Us    Custom Project    More results »
```

Sitelinks are already appearing — Google considers your site authoritative for brand searches.
After the 17 new pages are crawled (submit sitemap!), expect more sitelinks:
ML Projects, CSE Projects, IEEE Projects, Project Ideas, etc.

---

## PENDING — PRIORITY ORDER

### Do immediately after pushing:
| Task | Where | Time |
|---|---|---|
| Submit sitemap | https://search.google.com/search-console → Sitemaps | 5 min |
| Re-test rich results | https://search.google.com/test/rich-results | 5 min |

### This week (manual — your action):
| Task | Time |
|---|---|
| Complete Google Business Profile fully (B1–B2) | 1 hour |
| Send review link to past students after every delivery (B3) | Ongoing |
| List on Justdial, Sulekha, IndiaMART (C1) | 2 hours |
| Create Facebook, Instagram, LinkedIn, YouTube (C2) | 2 hours |
| Post weekly on GBP (B4) | Ongoing |

### When you have 20+ reviews:
| Task | Time |
|---|---|
| Add AggregateRating schema to layout.tsx (A3) | 15 min |

### Content (ongoing):
| Task | Time |
|---|---|
| Add student testimonials to homepage (D6) | 1 hour |
| Update 2025 → 2026 in blog body content (D7) | 1 hour |

---

## REALISTIC TIMELINE

- **Now (push + submit sitemap)**: Google discovers all 35 pages
- **Week 1–2**: New pages indexed → more sitelinks appear in brand search
- **Week 2–4**: Directory listings + first 10 reviews → local map pack eligibility begins
- **Month 2**: 30+ reviews + social profiles → appearing in map pack for local searches
- **Month 3–6**: Department pages rank for "machine learning projects coimbatore" etc.

> Competitors (Mayugam, Firmware Solutions) have weak or broken sites. You are technically ahead — the gap is domain age, reviews, and directory citations.
