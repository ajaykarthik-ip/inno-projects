"use client";

import React, { useState } from 'react';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is Inno Projects?',
        a: 'Inno Projects is a final year project center based in Coimbatore, Tamil Nadu. We deliver 600+ final year projects every year in ML, AI, Web Development, IoT, and Blockchain with full source code, documentation, PPT, and expert support for BTech, BE, MCA, and MSc students.',
      },
      {
        q: 'Where is Inno Projects located?',
        a: 'Our office is at 28, Baba St, Janaki Nagar, Venkitapuram, Coimbatore 641025. We also deliver fully online via WhatsApp and email — students from anywhere in Coimbatore order remotely every day.',
      },
      {
        q: 'How do I contact Inno Projects?',
        a: "WhatsApp us at +91 9600309140 — we are available 24/7. You can also call the same number. Tell us your degree, domain, and deadline and we'll reply within minutes.",
      },
    ],
  },
  {
    category: 'Projects & Delivery',
    questions: [
      {
        q: 'How fast can I get my final year project?',
        a: 'Inno Projects delivers final year projects within 12 hours. WhatsApp us today and receive your complete project — source code, report, PPT, and abstract — by tonight. We are available 24/7.',
      },
      {
        q: 'What does the project package include?',
        a: 'Every project includes: full working source code, detailed project report, PowerPoint presentation (PPT), IEEE base paper, synopsis, and a viva Q&A preparation guide. Everything your college requires in one package.',
      },
      {
        q: 'What types of final year projects do you offer?',
        a: 'We offer projects in Machine Learning (ML), Artificial Intelligence (AI), Deep Learning, Computer Vision, Natural Language Processing, Web Development (React, Node.js, Django), IoT, Blockchain, Data Science, Cloud Computing, and Cyber Security — 500+ project titles available.',
      },
      {
        q: 'Do you offer projects for all degrees?',
        a: 'Yes — we cover BE (CSE, IT, ECE, EEE), BTech (CSE/IT), MCA, MSc (CS/IT), BCA, B.Sc CS/IT, M.E/M.Tech, MBA, and Diploma. We have suitable projects for every degree offered at Coimbatore colleges.',
      },
      {
        q: 'Are your projects plagiarism-free?',
        a: 'Yes. Every project is implemented freshly with original code. We do not reuse or resell the same project to multiple students. Source code is verified working before delivery.',
      },
    ],
  },
  {
    category: 'IEEE & Research',
    questions: [
      {
        q: 'Do you offer IEEE projects?',
        a: 'Yes. We offer IEEE-based final year projects in ML, AI, Deep Learning, IoT, Blockchain, and Web Development. Each IEEE project includes the original IEEE base paper, implemented source code, modified algorithm, result comparison, and documentation.',
      },
      {
        q: 'Can you help with IEEE journal publication?',
        a: 'Yes. We provide professional IEEE paper writing, formatting, and publication assistance for less than ₹3,000. This includes plagiarism-free original research, IEEE template formatting, and full publication support.',
      },
      {
        q: 'What is the difference between IEEE and non-IEEE projects?',
        a: "IEEE projects are based on published research papers from IEEE Xplore and include the original paper as a reference. Non-IEEE projects are application-based and don't require a base paper. Both are accepted at most colleges — your college will specify which type is required.",
      },
    ],
  },
  {
    category: 'Pricing & Process',
    questions: [
      {
        q: 'How much does a final year project cost at Inno Projects?',
        a: "We offer student-friendly pricing with no hidden fees. Prices vary by project complexity, domain, and degree. WhatsApp us at +91 9600309140 for an instant quote — we'll send you matching project titles and pricing within minutes.",
      },
      {
        q: 'How do I order a project from Inno Projects?',
        a: 'Step 1: WhatsApp us at +91 9600309140. Step 2: Tell us your degree, domain preference, and deadline. Step 3: We send you 3–5 matching project titles. Step 4: You choose one and we deliver the complete package within 12 hours.',
      },
      {
        q: 'Do I need to visit your office in Coimbatore?',
        a: 'No — everything is handled online via WhatsApp and email. You can order from anywhere in Coimbatore or India without visiting our office. We deliver source code, report, PPT, and all documents digitally.',
      },
      {
        q: 'Do you provide support after delivery?',
        a: 'Yes. We provide post-delivery support for viva preparation, implementation queries, and any modifications required. Our team is available on WhatsApp 24/7 after your project is delivered.',
      },
    ],
  },
  {
    category: 'Colleges & Locations',
    questions: [
      {
        q: 'Which colleges in Coimbatore do you serve?',
        a: 'We serve students from all colleges in Coimbatore including PSG College of Technology, CIT, SREC, Karpagam Academy, SNS College, Amrita, KGiSL, Sri Krishna College, KCTCS, Hindusthan, RVS, and all other engineering and arts & science colleges.',
      },
      {
        q: 'Do you serve students outside Coimbatore?',
        a: 'Yes — since we deliver entirely online via WhatsApp and email, we serve students from across Tamil Nadu and India. Many students from Chennai, Bangalore, Tirupur, and Salem also order from us.',
      },
    ],
  },
];

export const faqSchemaData = faqs.flatMap(cat =>
  cat.questions.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  }))
);

export default function FAQContent() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <div className="faq-hero">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">
          Everything you need to know about Inno Projects — final year projects,
          delivery, pricing, IEEE papers, and more.
        </p>
      </div>

      <div className="faq-body">
        {faqs.map((cat) => (
          <div key={cat.category} className="faq-category">
            <h2 className="faq-category-title">{cat.category}</h2>
            <div className="faq-list">
              {cat.questions.map((item, idx) => {
                const key = `${cat.category}-${idx}`;
                const isOpen = !!openItems[key];
                return (
                  <div key={key} className={`faq-item ${isOpen ? 'open' : ''}`}>
                    <button
                      className="faq-question"
                      onClick={() => toggle(key)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <svg
                        className="faq-chevron"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="faq-answer">
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="faq-cta">
        <h2 className="faq-cta-title">Still have questions?</h2>
        <p className="faq-cta-desc">WhatsApp us directly — we reply within minutes, 24/7.</p>
        <a
          href="https://wa.me/919600309140?text=Hi%2C%20I%20have%20a%20question%20about%20my%20final%20year%20project!"
          target="_blank"
          rel="noopener noreferrer"
          className="faq-cta-btn"
        >
          WhatsApp +91 9600309140
        </a>
      </div>
    </>
  );
}
