# SEO Checklist — Inno Projects (innoprojects.tech)

**Last updated: 19 April 2026**  
**Goal: Rank #1 for "best final year project center in coimbatore"**

---

## PENDING TASKS

| Item | Task |
|---|---|
| B2 | Add exterior photo, WhatsApp, services, more photos to GBP |
| B4 | Post on GBP weekly |
| C1 | List on Sulekha, IndiaMART, TradeIndia |
| C2 | Create Facebook, Instagram, LinkedIn, YouTube — then update `sameAs` in `src/app/layout.tsx` |
| C3 | Quora answers + college outreach for backlinks |
| D6 | Add student testimonials section to homepage |
| D7 | Update 2025 → 2026 in blog post body text |
| F1 | Submit sitemap to Search Console |
| F2 | Check Core Web Vitals at pagespeed.web.dev |

---

## HOW TO DO EACH TASK

### B2 — Complete GBP
Go to https://business.google.com → your profile → Edit:
- Add exterior photo (Google is prompting you — do this first)
- Add WhatsApp number
- Add services: Final Year Projects, IEEE Projects, ML, IoT, Web Dev, Embedded, etc.
- Upload 10+ photos: workspace, students, logo, interior

### B4 — Post on GBP weekly
Go to https://business.google.com → Posts → Add update.
Post new project titles, student results, or seasonal offers every week.

### C1 — Business directories
Use exact same Name, Address, Phone (NAP) everywhere:
- **Sulekha**: https://www.sulekha.com/list-your-business
- **IndiaMART**: https://seller.indiamart.com
- **TradeIndia**: https://www.tradeindia.com

### C2 — Social media profiles
Create pages, add bio link to innoprojects.tech, then update `sameAs` in `src/app/layout.tsx`:
```ts
sameAs: [
  'https://www.facebook.com/innoprojects.tech',
  'https://www.instagram.com/innoprojects.tech',
  'https://www.linkedin.com/company/innoprojects',
  'https://www.youtube.com/@innoprojects',
  'https://www.justdial.com/...', // add once listed
]
```

### C3 — Content backlinks
- Search Quora for "final year project ideas" → answer helpfully → link to your blog posts
- Email 2–3 college tech clubs in Coimbatore asking for a mention/link

### D6 — Student testimonials
Add a section to homepage (`src/app/page.tsx`) with student name, college, project title, and star rating.

### D7 — Blog body text
Open each file under `src/app/blog/*/page.tsx` and find/replace "2025" → "2026" inside the JSX body content (metadata is already fixed).

### F1 — Submit sitemap
1. Go to https://search.google.com/search-console
2. Select your property (innoprojects.tech)
3. Left sidebar → Sitemaps
4. Enter `sitemap.xml` → Submit
> Sitemap has 35 entries — Google needs this to discover the 17 new pages.

### F2 — Core Web Vitals
1. Go to https://pagespeed.web.dev
2. Enter `https://www.innoprojects.tech`
3. Targets: LCP < 2.5s, CLS < 0.1, FID < 100ms
4. Fix any red issues (usually image sizes or render-blocking scripts)

---

## WHEN YOU HAVE 50+ REVIEWS

Add AggregateRating to `src/app/layout.tsx` LocalBusiness schema:
```ts
aggregateRating: {
  '@type': 'AggregateRating',
  ratingValue: '5.0',   // your real average
  reviewCount: '50',    // your real count
  bestRating: '5',
  worstRating: '1',
},
```
You currently have 46 reviews — 4 more to go.
