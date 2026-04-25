import type { Metadata } from 'next';
import DomainPage, { type DomainPageData } from '@/components/DomainPage';

const siteUrl = 'https://www.innoprojects.in';
const pageUrl = `${siteUrl}/mca-final-year-projects-coimbatore`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'MCA Final Year Projects in Coimbatore 2026',
  description:
    'MCA final year projects in Coimbatore 2026. 150+ project titles in web apps, Python, Java, databases, machine learning, and mobile apps. Full source code, documentation, and PPT delivered in 12 hours. Call +91 9600309140.',
  keywords: [
    'MCA final year projects coimbatore',
    'mca project coimbatore 2026',
    'mca project center coimbatore',
    'java project coimbatore mca',
    'python project coimbatore mca',
    'web application project mca coimbatore',
    'machine learning project mca coimbatore',
    'mobile app project mca coimbatore',
    'ieee mca project coimbatore',
    'mca project with source code coimbatore',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'MCA Final Year Projects in Coimbatore 2026 | Inno Projects',
    description:
      '150+ MCA final year project titles in Coimbatore. Web apps, Python, Java, ML, mobile apps. Full source code + report. 12-hr delivery. +91 9600309140.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MCA Final Year Projects Coimbatore – Inno Projects' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MCA Final Year Projects in Coimbatore 2026 | Inno Projects',
    description: '150+ MCA project titles in Coimbatore. Web, Python, Java, ML, mobile apps. 12-hr delivery. +91 9600309140.',
    images: ['/og-image.png'],
  },
};

const data: DomainPageData = {
  badge: 'MCA Projects · Coimbatore 2026',
  h1: 'MCA Final Year Projects in Coimbatore',
  subtitle:
    'Inno Projects is the preferred project centre for MCA students across Coimbatore. We deliver application-focused final year projects in web development, Python, Java, databases, machine learning, and mobile apps — with complete source code, database scripts, project reports, and PPT ready in 12 hours.',
  whatsappText: 'Hi!%20I%20need%20an%20MCA%20final%20year%20project%20in%20Coimbatore.',
  stats: [
    { value: '150+', label: 'MCA Project Titles' },
    { value: 'Web & Mobile', label: 'Primary Focus' },
    { value: '12-hr', label: 'Delivery' },
    { value: 'IEEE & Non-IEEE', label: 'Support' },
  ],
  intro:
    'Master of Computer Applications students need projects that demonstrate strong application development skills alongside theoretical depth. At Inno Projects Coimbatore, our MCA project catalogue is built specifically around the application layer — robust web applications, database-driven systems, RESTful APIs, mobile apps, and machine learning integrations that solve real-world problems. We develop projects in Java (Spring Boot, Hibernate), Python (Django, Flask), PHP (Laravel), and JavaScript (React, Node.js) according to your college\'s technology preference. Every project includes a complete MySQL or PostgreSQL database design, ER diagrams, DFDs, and a project report formatted to Bharathiar University or Anna University standards. MCA students from Karpagam, SNS, SREC, KGiSL, and Sri Krishna colleges choose Inno Projects because we understand exactly what the university review panel expects.',
  projectTitles: [
    {
      title: 'Online Blood Bank Management System',
      tech: 'PHP Laravel, MySQL, Bootstrap, Twilio SMS API',
      desc: 'Web platform connecting blood donors and recipients with real-time blood group availability search, automated SMS donor alerts, and hospital admin dashboard.',
    },
    {
      title: 'Job Portal with AI-Based Resume Matching',
      tech: 'Django, Python, PostgreSQL, cosine similarity, React',
      desc: 'Full-stack job portal where an NLP-based resume parser computes TF-IDF cosine similarity scores between resumes and job descriptions to rank applicants automatically.',
    },
    {
      title: 'Online Examination System with Anti-Cheating Features',
      tech: 'Java Spring Boot, React, MySQL, WebRTC',
      desc: 'Secure online test platform with randomised question banks, tab-switch detection, full-screen enforcement, and real-time webcam proctoring via WebRTC.',
    },
    {
      title: 'Hospital Management System with Billing Module',
      tech: 'Java Spring Boot, Hibernate, MySQL, Thymeleaf',
      desc: 'Comprehensive hospital ERP handling patient registration, doctor scheduling, pharmacy inventory, ward management, and automated invoice generation with GST calculation.',
    },
    {
      title: 'E-Commerce Platform with Recommendation Engine',
      tech: 'Python Flask, MongoDB, collaborative filtering, React',
      desc: 'Full-featured shopping site with user authentication, cart, payment gateway integration, and a collaborative filtering recommendation engine suggesting products from purchase history.',
    },
    {
      title: 'Student Grievance Redressal Portal',
      tech: 'Node.js, Express, MySQL, React, Nodemailer',
      desc: 'Multi-role web application allowing students to submit grievances, track resolution status, and receive email notifications as administrators escalate and resolve tickets.',
    },
    {
      title: 'Crime Record Management System',
      tech: 'Java Spring Boot, MySQL, React, JWT',
      desc: 'Secure law enforcement web application for managing FIRs, suspect records, case assignments, and court hearing schedules with role-based access control for police and admin.',
    },
    {
      title: 'Grocery Delivery App with Real-Time Order Tracking',
      tech: 'React Native, Node.js, MongoDB, Google Maps API',
      desc: 'Mobile grocery ordering app with live delivery-agent GPS tracking, push notifications for order status updates, and an admin panel for inventory and order management.',
    },
    {
      title: 'Library Management System with QR Code Check-In',
      tech: 'Django, PostgreSQL, QR Code, Bootstrap',
      desc: 'Digital library platform where books are issued and returned by scanning QR codes, with automated overdue fine calculation and email reminders for due-date alerts.',
    },
    {
      title: 'Personal Finance Tracker with Spending Predictions',
      tech: 'Python Flask, SQLite, Linear Regression, Chart.js',
      desc: 'Web app that categorises bank transactions, visualises monthly spending patterns, and uses linear regression to predict next month\'s expenditure by category.',
    },
  ],
  technologies: [
    { name: 'Java Spring Boot', icon: '☕' },
    { name: 'Python Django', icon: '🐍' },
    { name: 'Python Flask', icon: '⚗️' },
    { name: 'PHP Laravel', icon: '🐘' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'React Native', icon: '📱' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'scikit-learn / ML', icon: '📊' },
    { name: 'Bootstrap / Tailwind', icon: '🎨' },
    { name: 'REST API / JWT', icon: '🔐' },
    { name: 'Chart.js / D3.js', icon: '📈' },
  ],
  whatYouGet: [
    'Complete source code (front-end + back-end)',
    'Database SQL scripts and ER diagram',
    'DFD, use case, and class diagrams',
    'Working demo / deployed application link',
    'IEEE base paper (for IEEE titles)',
    'Full project report (Bharathiar / Anna University format)',
    'PowerPoint presentation (20+ slides)',
    'README with local setup instructions',
    'Admin and user login credentials for demo',
    '3-day post-delivery support via WhatsApp',
  ],
  degrees: ['MCA', 'MSc CS', 'MSc IT', 'MSc Software Engineering', 'BCA (Final Year)', 'BSc CS', 'BSc IT'],
  colleges: [
    'PSG College of Technology',
    'CIT (Coimbatore Institute of Technology)',
    'SREC (Sri Ramakrishna Engineering College)',
    'Karpagam Academy of Higher Education',
    'SNS College of Engineering',
    'Amrita School of Engineering',
    'KGiSL Institute of Technology',
    'Sri Krishna College of Engineering',
  ],
  faqs: [
    {
      q: 'What technologies do you use for MCA final year projects?',
      a: 'We work with the full range of technologies used in MCA curricula: Java (Spring Boot, Hibernate, JSP/Servlet), Python (Django, Flask), PHP (Laravel), JavaScript (React, Node.js, Angular), and mobile development (React Native, Flutter). Database options include MySQL, PostgreSQL, Oracle, and MongoDB. We match the technology to your college\'s preference.',
    },
    {
      q: 'Are MCA projects suitable for Bharathiar University requirements?',
      a: 'Yes. We have extensive experience with Bharathiar University MCA project requirements including the format of the abstract, synopsis, chapter structure, and reference style. All documentation is delivered in the exact format your college requires. We also cover Anna University and Amrita University norms.',
    },
    {
      q: 'Can I get a project with both a web app and an ML component?',
      a: 'Absolutely. Many of our most popular MCA titles combine a full-stack web application with an integrated machine learning component — for example, a job portal with resume matching or an e-commerce site with a recommendation engine. These hybrid projects are excellent for viva demonstrations.',
    },
    {
      q: 'Do you provide database design documents for MCA projects?',
      a: 'Yes. Every MCA project includes a complete database design: ER diagram, normalised table schemas, SQL scripts for table creation and sample data seeding, and an explanation of relationships in the project report. DFDs and use case diagrams are also included.',
    },
    {
      q: 'How fast is project delivery for MCA students?',
      a: 'Most web application-based MCA projects are delivered within 12 hours. If your project requires an ML model to be trained or a mobile app to be built alongside a web backend, delivery may take 24–36 hours. We confirm the exact timeline before you confirm your order.',
    },
    {
      q: 'How much does an MCA final year project cost in Coimbatore?',
      a: 'We price MCA projects to be accessible for students. Cost varies based on technology stack complexity, number of roles/modules, and whether an IEEE paper is required. Contact us on WhatsApp at +91 9600309140 and we will give you an exact quote within minutes.',
    },
  ],
  ctaTitle: 'Get Your MCA Final Year Project in 12 Hours',
  ctaDesc:
    'WhatsApp us now with your topic or domain preference. We will suggest suitable MCA project titles, confirm the scope, and deliver your complete project — source code, database, report, and PPT — within 12 hours.',
};

export default function MCAFinalYearProjectsCoimbatore() {
  return <DomainPage data={data} />;
}
