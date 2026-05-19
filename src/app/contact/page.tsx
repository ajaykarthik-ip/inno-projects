import type { Metadata } from 'next';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './page.css';

const siteUrl = 'https://www.innoprojects.in';
const pageUrl = `${siteUrl}/contact`;
const phoneNumber = '9600309140';

export const metadata: Metadata = {
  title: 'Contact Inno Projects — Final Year Project Center in Coimbatore',
  description:
    'Contact Inno Projects, the best final year project center in Coimbatore. WhatsApp or call +91 9600309140 for instant help on ML, AI, IEEE, Web, IoT and Blockchain projects.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'Contact Inno Projects — Coimbatore Final Year Project Center',
    description:
      'Reach Inno Projects on WhatsApp or call +91 9600309140 for final year project help in Coimbatore. Available 24/7.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Inno Projects' }],
  },
};

export default function Contact(): React.JSX.Element {
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=Hello!%20I%20would%20like%20to%20get%20in%20touch%20with%20you.`;
  const telUrl = `tel:+91${phoneNumber}`;

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Contact', path: '/contact' }]} />
      <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">
          Connect with us instantly through WhatsApp for quick support or call us directly.
        </p>

        <div className="whatsapp-section">
          <div className="whatsapp-icon">
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
          <h3 className="service-title">Contact Us</h3>
          <p className="service-description">
            Choose your preferred way to reach us
          </p>
          <div className="phone-number">+91 {phoneNumber}</div>

          <div className="action-buttons">
            <a className="whatsapp-btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>Start Chat</span>
            </a>

            <a className="call-btn" href={telUrl}>
              <FontAwesomeIcon icon={faPhone} />
              <span>Call Now</span>
            </a>
          </div>
        </div>

        <div className="contact-footer">
          <p>Available 24/7</p>
        </div>
      </div>
    </div>
    </>
  );
}
