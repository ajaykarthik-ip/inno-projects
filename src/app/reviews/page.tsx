import type { Metadata } from 'next';
import Link from 'next/link';
import './page.css';

const siteUrl = 'https://www.innoprojects.in';
const pageUrl = `${siteUrl}/reviews`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Inno Projects Reviews — Real Student Reviews from Coimbatore',
  description:
    'Read 54+ verified student reviews of Inno Projects — the best final year project center in Coimbatore. 5.0★ rated across machine learning, web development, IoT, and IEEE projects.',
  keywords: [
    'inno projects reviews',
    'inno projects coimbatore reviews',
    'best project center coimbatore reviews',
    'final year project center coimbatore reviews',
    'inno projects feedback',
    'inno projects google reviews',
    'inno projects student testimonials',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'Inno Projects Reviews — 54+ Verified Student Reviews in Coimbatore',
    description:
      '5.0★ rated by 54+ Coimbatore students. Read real reviews of Inno Projects across machine learning, web, IoT and IEEE final year projects.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Inno Projects Reviews — Coimbatore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inno Projects Reviews — 5.0★ from Coimbatore Students',
    description: '54+ verified Google reviews from final year students in Coimbatore.',
    images: ['/og-image.png'],
  },
};

interface Review {
  name: string;
  date: string;
  displayDate: string;
  body: string;
  tag?: string;
}

const reviews: Review[] = [
  { name: 'Keerthanaa Prabakaran', date: '2026-06-09', displayDate: 'June 2026', tag: 'Project Support', body: 'Excellent experience with Inno Project Centre. Developer Richard provided clear explanations, valuable guidance and complete project support.' },
  { name: 'Rakesh Roshan', date: '2026-06-04', displayDate: 'June 2026', tag: 'MERN Stack', body: 'Got a MERN stack project at the last minute — worth purchasing and good mentorship.' },
  { name: 'Pawan Gopi Tanniru', date: '2026-06-04', displayDate: 'June 2026', tag: 'Machine Learning', body: 'Got a machine learning project for good price.' },
  { name: 'Vinotha T', date: '2026-05-13', displayDate: 'May 2026', tag: 'Machine Learning', body: 'Good project centre — got my machine learning project at a very low price and very good quality. Extremely professional team and they even gave me a cash back after referring my friends.' },
  { name: 'Bandla Gineesh', date: '2026-04-29', displayDate: 'April 2026', tag: 'Hardware', body: 'Bought good hardware project — worth for money.' },
  { name: 'Hari Haran', date: '2026-04-15', displayDate: 'April 2026', tag: 'On-time Delivery', body: 'I had a wonderful experience working with the developer and the project development. I got my project on time.' },
  { name: 'HJ', date: '2026-04-15', displayDate: 'April 2026', tag: 'Online Support', body: 'Best project making experience, even all done online in an affordable range.' },
  { name: 'Praveen P', date: '2026-04-15', displayDate: 'April 2026', tag: 'Student-Friendly', body: 'On time, budget friendly for students — completely appreciate one.' },
  { name: 'Dhiyanesh', date: '2026-03-04', displayDate: 'March 2026', tag: 'Teaching Quality', body: 'Good project center with affordable, very good quality project. The trainer was so good in teaching — explained terms like he was explaining to a kid. I really appreciate their patience and skill.' },
  { name: 'Suvetha Ponnusamy', date: '2026-03-04', displayDate: 'March 2026', tag: 'Coimbatore', body: 'Nice project center in Coimbatore — low cost and high quality.' },
  { name: 'Partha Sarathi', date: '2026-02-25', displayDate: 'February 2026', tag: 'Value', body: 'Worth for the price.' },
  { name: 'Atchu Shanmugam', date: '2026-02-25', displayDate: 'February 2026', tag: 'Payment Flexibility', body: 'If we explain about the Inno project, they will complete the full work even if we pay a part of the amount. For the remaining balance, they give us some time to pay — very student-friendly.' },
  { name: 'Thamizh Yaazhini', date: '2026-02-25', displayDate: 'February 2026', tag: 'Output Quality', body: 'Great dedication and output was good. Thank you.' },
  { name: 'Janani Kannan', date: '2026-02-18', displayDate: 'February 2026', tag: 'Developer Praise', body: 'I had a wonderful experience working with this developer (Ajay). He is highly dedicated, responsible and clear in explanation. Strongly recommend Inno Projects.' },
  { name: 'Girish Fab', date: '2026-01-21', displayDate: 'January 2026', tag: 'Documentation', body: 'Well taught the concept and delivered on time. Free documentation without any issues and budget friendly for me as a final year student.' },
  { name: 'Mahamanimaran V', date: '2025-12-24', displayDate: 'December 2025', tag: 'Teaching', body: 'Teaching is very good.' },
  { name: 'Muthuvel M', date: '2025-12-17', displayDate: 'December 2025', tag: 'Best in Coimbatore', body: 'Best project center — very low price, experienced staff guided me and they did not hesitate to explain the project even at midnight. Really worth the money. Best Project Center in Coimbatore.' },
  { name: 'Sathish R', date: '2025-12-10', displayDate: 'December 2025', tag: 'Project Delivery', body: 'Project was very good and explained very well. Easy project delivery. Value for money.' },
  { name: 'Verified Student', date: '2025-12-03', displayDate: 'December 2025', tag: 'Clear Explanation', body: 'Clearly explained the project and excellent project delivery. Value for money.' },
  { name: 'Inbha Tamil', date: '2025-11-26', displayDate: 'November 2025', tag: 'Python', body: 'I had good experience in Python — really worth it.' },
  { name: 'V Sangeetha', date: '2025-11-19', displayDate: 'November 2025', tag: 'Satisfaction', body: 'Really good — most satisfied.' },
  { name: 'Dhivya Shri', date: '2025-10-29', displayDate: 'October 2025', tag: 'Recommended', body: 'Excellent project delivery and clear explanation throughout the process. Highly recommend this center.' },
  { name: 'Srivarth', date: '2025-10-29', displayDate: 'October 2025', tag: 'ML Webinar', body: 'I attended a free webinar on machine learning — they were very good at teaching.' },
  { name: 'Ranjan M Mathew', date: '2025-10-29', displayDate: 'October 2025', tag: 'Python ML', body: 'I went to the center to learn Python machine learning. They taught me very nicely and explained concepts like an experienced software engineer. Thank you ❤' },
  { name: 'Amlesh Mondol', date: '2025-10-22', displayDate: 'October 2025', tag: 'From Bangalore', body: 'We are from Bangalore — they helped us till the last moment in a tight deadline. Very nice and clearly explained. Very helpful and very low price. Value for money.' },
  { name: 'Sudarshan D K', date: '2025-10-22', displayDate: 'October 2025', tag: 'Value', body: 'Good teaching — value for money.' },
  { name: 'Gowda', date: '2025-10-22', displayDate: 'October 2025', tag: 'CSE Student', body: 'I am a final year CSE student. They gave me a machinery project — I did not know much about it. They contacted me, taught me well, completed it in very less time at a very affordable amount. (Translated from Kannada.)' },
  { name: 'Shahzee Shaheen', date: '2025-10-22', displayDate: 'October 2025', tag: 'Project Saved', body: 'They saved my project — thanks Inno Projects! (Translated from Malayalam.)' },
  { name: 'John Abraham', date: '2025-10-22', displayDate: 'October 2025', tag: 'Free Guidance', body: 'They gave me free project guidance and worked with me on the project. They explained everything clearly. Because of that I completed my project well at a low rate. (Translated from Malayalam.)' },
  { name: 'Sudeep Patil', date: '2025-10-22', displayDate: 'October 2025', tag: 'Final Year Help', body: 'They helped me a lot with my final year project. They explained the technical parts and supported me through the entire project. (Translated from Hindi.)' },
  { name: 'Arjun B R', date: '2025-10-22', displayDate: 'October 2025', tag: 'Excellent', body: 'Excellent 👌' },
  { name: 'Aleena Mathews', date: '2025-02-17', displayDate: 'February 2025', tag: 'Highly Recommended', body: 'I highly recommend this project center. Everything was explained clearly, it is budget-friendly and the project guide is extremely supportive and friendly.' },
  { name: 'Harish Suresh', date: '2024-11-21', displayDate: 'November 2024', tag: 'Recommended', body: 'Very good.' },
  { name: 'Rithish B A', date: '2024-08-31', displayDate: 'August 2024', tag: 'Budget-Friendly', body: 'Budget friendly like homies.' },
  { name: 'Sharnitha Dhandapani', date: '2024-08-20', displayDate: 'August 2024', tag: 'Well Explained', body: 'Project well explained and made my work easier.' },
  { name: 'Mohamed Buhari', date: '2024-08-05', displayDate: 'August 2024', tag: 'Best in Coimbatore', body: 'Best project center in Coimbatore. They explained the project fully and clearly, gave PPT and supported me. Cheap and best center.' },
  { name: 'Aswin Das', date: '2024-08-05', displayDate: 'August 2024', tag: 'Good', body: 'Good.' },
];

export default function ReviewsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'EducationalOrganization'],
        '@id': `${siteUrl}/#organization`,
        name: 'Inno Projects',
        url: siteUrl,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          bestRating: '5',
          worstRating: '1',
          ratingCount: '54',
          reviewCount: '54',
        },
        review: reviews.map((r) => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: r.name },
          datePublished: r.date,
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: r.body,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Reviews', item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="reviews-page">
        <header className="reviews-hero">
          <div className="reviews-hero-inner">
            <nav className="reviews-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Reviews</span>
            </nav>

            <div className="reviews-rating-row">
              <span className="reviews-stars" aria-hidden="true">★★★★★</span>
              <span className="reviews-rating-text">
                <strong>5.0</strong> · 54+ verified Google reviews
              </span>
            </div>

            <h1 className="reviews-h1">What Coimbatore Students Say About Inno Projects</h1>
            <p className="reviews-lead">
              Real reviews from final year students across CSE, IT, ECE, MCA and MSc — covering machine learning, web development, IoT, blockchain, MERN stack and IEEE final year projects. Pulled directly from our Google Business Profile.
            </p>

            <div className="reviews-cta-row">
              <a
                href="https://wa.me/919600309140?text=Hi%2C%20I%20saw%20your%20reviews%20page"
                target="_blank"
                rel="noopener noreferrer"
                className="reviews-btn-primary"
              >
                WhatsApp Us Now
              </a>
              <Link href="/project-center-in-coimbatore" className="reviews-btn-secondary">
                Explore Project Center
              </Link>
            </div>
          </div>
        </header>

        <section className="reviews-body">
          <div className="reviews-container">
            <div className="reviews-grid">
              {reviews.map((r) => (
                <article key={`${r.name}-${r.date}`} className="review-card">
                  <header className="review-card-head">
                    <div className="review-card-avatar" aria-hidden="true">
                      {r.name.charAt(0)}
                    </div>
                    <div className="review-card-meta">
                      <span className="review-card-name">{r.name}</span>
                      <span className="review-card-date">{r.displayDate}</span>
                    </div>
                  </header>
                  <div className="review-card-stars" aria-label="5 out of 5 stars">★★★★★</div>
                  {r.tag && <span className="review-card-tag">{r.tag}</span>}
                  <p className="review-card-body">{r.body}</p>
                </article>
              ))}
            </div>

            <div className="reviews-final-cta">
              <h2 className="reviews-final-h2">Be the Next Happy Student</h2>
              <p className="reviews-final-p">
                Get your final year project from Coimbatore&apos;s highest-rated project center. Source code, IEEE report, PPT and viva training — delivered in 12 hours.
              </p>
              <div className="reviews-cta-row">
                <a
                  href="https://wa.me/919600309140?text=Hi%2C%20I%20need%20a%20final%20year%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reviews-btn-primary"
                >
                  WhatsApp Us Now
                </a>
                <Link href="/project-titles" className="reviews-btn-secondary">
                  Browse Project Titles
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
