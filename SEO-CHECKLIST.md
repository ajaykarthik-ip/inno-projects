# SEO Checklist — Inno Projects (innoprojects.tech)

**Last updated: 19 April 2026**  
**Goal: Rank #1 for "best final year project center in coimbatore"**

---

## PENDING TASKS

| Item | Task |
|---|---|
| C1 | List on Sulekha, IndiaMART, TradeIndia |
| C2 | Create Facebook, Instagram, LinkedIn, YouTube — then update `sameAs` in `src/app/layout.tsx` |
| F2 | Check Core Web Vitals at pagespeed.web.dev |

---

## HOW TO DO EACH TASK

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
