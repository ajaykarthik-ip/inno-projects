import type { Metadata } from 'next';
import FAQContent, { faqSchemaData } from './FAQContent';
import './page.css';

const siteUrl = 'https://www.innoprojects.in';
const pageUrl = `${siteUrl}/faq`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'FAQ | Final Year Project Center Coimbatore',
  description:
    'Answers to common questions about Inno Projects Coimbatore — final year project delivery, pricing, IEEE projects, viva support, and more. Get your project in 12 hours.',
  keywords: [
    'inno projects faq',
    'final year project faq coimbatore',
    'how to get final year project coimbatore',
    'final year project cost coimbatore',
    'IEEE project coimbatore questions',
    'project center coimbatore help',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'FAQ – Inno Projects Final Year Project Center Coimbatore',
    description:
      'Common questions about Inno Projects — delivery time, pricing, what is included, IEEE projects, college coverage, and more.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Inno Projects FAQ' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqSchemaData,
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="faq-container">
        <div className="faq-content">
          <FAQContent />
        </div>
      </div>
    </>
  );
}
