import type { Metadata } from 'next';
import DomainPage, { type DomainPageData } from '@/components/DomainPage';

const siteUrl = 'https://www.innoprojects.in';
const pageUrl = `${siteUrl}/web-development-projects-coimbatore`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Web Development Final Year Projects in Coimbatore 2026 | Inno Projects',
  description:
    'Web development final year projects in Coimbatore 2026. React, Next.js, Node.js, MERN stack, PHP, and full-stack projects with complete source code and documentation. 12-hour delivery. Call +91 9600309140.',
  keywords: [
    'web development projects coimbatore',
    'web development final year project coimbatore 2026',
    'mern stack project coimbatore',
    'react project coimbatore',
    'nodejs project coimbatore',
    'nextjs project coimbatore',
    'php project coimbatore',
    'full stack project coimbatore',
    'django web project coimbatore',
    'web application project coimbatore',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'Web Development Final Year Projects in Coimbatore 2026 | Inno Projects',
    description:
      'Web development final year projects in Coimbatore. React, Next.js, Node.js, MERN, PHP, full-stack. Full source code + report. 12-hr delivery. +91 9600309140.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Web Development Final Year Projects Coimbatore – Inno Projects' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Final Year Projects in Coimbatore 2026 | Inno Projects',
    description: 'Web dev final year projects in Coimbatore. React, MERN, Node.js, PHP, full-stack. 12-hr delivery. +91 9600309140.',
    images: ['/og-image.png'],
  },
};

const data: DomainPageData = {
  badge: 'Web Dev Projects · Coimbatore 2026',
  h1: 'Web Development Final Year Projects in Coimbatore',
  subtitle:
    'Build production-grade web applications as your final year project. Inno Projects Coimbatore develops full-stack web projects using React, Next.js, Node.js, MERN stack, Django, PHP Laravel, and Spring Boot — with responsive UI, REST APIs, database integration, and complete documentation delivered in 12 hours.',
  whatsappText: 'Hi!%20I%20need%20a%20Web%20Development%20final%20year%20project%20in%20Coimbatore.',
  stats: [
    { value: '160+', label: 'Web Dev Titles' },
    { value: 'MERN & Full-Stack', label: 'Primary Stacks' },
    { value: '12-hr', label: 'Delivery' },
    { value: 'IEEE & Non-IEEE', label: 'Support' },
  ],
  intro:
    'Web development projects remain the most popular category for final year engineering students in 2026 — and for good reason. A well-built web application demonstrates end-to-end software engineering skills: UI design, API architecture, database design, authentication, and deployment. At Inno Projects Coimbatore, we build full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js), Python Django, PHP Laravel, Java Spring Boot, and Next.js depending on your college\'s technology requirements. Every project includes a fully responsive front-end, a secure RESTful back-end API, a normalised relational or document database, JWT-based authentication, and a live deployment. We also provide complete project documentation including ER diagrams, DFDs, use case diagrams, system architecture, and IEEE or university format reports. Our web development projects are accepted at PSG, CIT, SREC, SNS, Amrita, and all affiliated colleges in Coimbatore.',
  projectTitles: [
    {
      title: 'Multi-Vendor E-Commerce Platform with Stripe Payment',
      tech: 'React, Node.js, MongoDB, Express, Stripe API',
      desc: 'Full MERN-stack marketplace where multiple sellers list products, buyers checkout via Stripe, and an admin panel manages commissions, disputes, and payouts.',
    },
    {
      title: 'Real-Time Collaborative Code Editor',
      tech: 'React, Node.js, Socket.IO, Monaco Editor, Redis',
      desc: 'Browser-based IDE where multiple users edit code simultaneously with real-time cursor syncing via Socket.IO, syntax highlighting, and one-click code execution via Judge0 API.',
    },
    {
      title: 'Telemedicine Web App with Video Consultation',
      tech: 'Next.js, Node.js, PostgreSQL, WebRTC, Stripe',
      desc: 'Healthcare platform with doctor profiles, appointment booking, Stripe subscription payments, and peer-to-peer video consultation using WebRTC with STUN/TURN server configuration.',
    },
    {
      title: 'Event Management and Ticketing System',
      tech: 'React, Django REST Framework, PostgreSQL, QR Code',
      desc: 'Full-stack event platform with organiser dashboards, seat-map based ticket booking, Razorpay payment integration, and QR code-based gate entry validation.',
    },
    {
      title: 'NGO Donation and Volunteer Management Portal',
      tech: 'Next.js, Prisma, PostgreSQL, Razorpay, Tailwind CSS',
      desc: 'Non-profit web platform with campaign fundraising pages, live donation progress bars, volunteer registration and task assignment, and an automated donation receipt emailer.',
    },
    {
      title: 'Recipe Sharing Community with AI Ingredient Substitution',
      tech: 'React, Node.js, MongoDB, OpenAI API, Cloudinary',
      desc: 'Social cooking platform with user recipe uploads, Cloudinary image storage, likes and comments, and an AI assistant that suggests ingredient substitutions based on dietary restrictions.',
    },
    {
      title: 'Smart Hostel Management System',
      tech: 'PHP Laravel, MySQL, Bootstrap, Chart.js, SMTP',
      desc: 'Hostel ERP handling room allotment, fee collection, leave application, mess menu management, complaint tracking, and monthly occupancy reports with Chart.js visualisations.',
    },
    {
      title: 'Freelancer Marketplace with Escrow Payment',
      tech: 'React, Node.js, MongoDB, Stripe Connect, Socket.IO',
      desc: 'Platform where clients post projects, freelancers bid, and payments are held in Stripe escrow until the client approves the delivered work, with real-time in-app messaging.',
    },
    {
      title: 'Municipal Complaint Management System',
      tech: 'Next.js, Node.js, PostgreSQL, Leaflet.js, JWT',
      desc: 'Citizen-facing web app where residents report civic issues (pothole, streetlight) by pinning locations on a Leaflet.js map, with ward-level officer dashboards for resolution tracking.',
    },
    {
      title: 'Online Auction Platform with Real-Time Bidding',
      tech: 'React, Node.js, MongoDB, Socket.IO, Redis',
      desc: 'Live auction site with countdown timers, real-time bid updates via Socket.IO, Redis-backed bid lock to prevent race conditions, and automated winner notification emails.',
    },
  ],
  technologies: [
    { name: 'React.js', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Node.js / Express', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL / MySQL', icon: '🗄️' },
    { name: 'PHP Laravel', icon: '🐘' },
    { name: 'Django REST Framework', icon: '🐍' },
    { name: 'Java Spring Boot', icon: '☕' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Socket.IO', icon: '📡' },
    { name: 'Docker / Nginx', icon: '🐳' },
    { name: 'JWT / OAuth2', icon: '🔐' },
    { name: 'Stripe / Razorpay', icon: '💳' },
    { name: 'WebRTC', icon: '📹' },
  ],
  whatYouGet: [
    'Complete front-end source code (React / Next.js / PHP)',
    'Complete back-end source code (Node.js / Django / Laravel)',
    'Database schema, SQL scripts, and ER diagram',
    'Live deployed application link',
    'Admin, user, and guest login credentials',
    'Full project report (IEEE / Anna University format)',
    'DFD, use case, sequence, and class diagrams',
    'PowerPoint presentation (20+ slides)',
    'README with local setup and .env configuration guide',
    '3-day post-delivery support via WhatsApp',
  ],
  degrees: ['BE CSE', 'BE IT', 'BTech CSE', 'MCA', 'MSc CS', 'MSc IT', 'BCA', 'BSc CS'],
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
      q: 'What web development stacks do you offer for final year projects?',
      a: 'We offer projects in all major full-stack combinations: MERN stack (MongoDB, Express, React, Node.js), MEAN stack (MongoDB, Express, Angular, Node.js), Django + React, PHP Laravel + Vue.js or React, Java Spring Boot + React, and Next.js with Prisma and PostgreSQL. We match the stack to your college\'s preferred technology.',
    },
    {
      q: 'Do web development projects come with a live deployment?',
      a: 'Yes. We deploy every web project to a live URL — typically on Vercel (for Next.js / React), Render or Railway (for Node.js / Django backends), and PlanetScale or Supabase (for databases). You receive a shareable live link to demonstrate your project online during reviews.',
    },
    {
      q: 'Can I get a MERN stack project for my college in Coimbatore?',
      a: 'Absolutely. MERN stack is one of our most popular choices. We deliver complete MERN projects with a React front-end, Express REST API, MongoDB database, JWT authentication, and a working admin panel. Full documentation including ER diagram, API documentation, and project report is included.',
    },
    {
      q: 'Do you provide admin and user panels for web projects?',
      a: 'Yes. Every web application project includes multiple user roles — typically a super admin dashboard for managing content and users, a regular user interface, and in marketplace-style projects, a vendor or service provider panel. All roles are demonstrated in a working demo.',
    },
    {
      q: 'Are PHP projects still accepted in 2026 for final year submissions?',
      a: 'Yes. PHP Laravel projects are widely accepted in Coimbatore colleges, particularly for MCA students. Many college labs still teach PHP, and a well-structured Laravel application with MySQL backend is a perfectly valid and professional final year project choice.',
    },
    {
      q: 'How much do web development final year projects cost in Coimbatore?',
      a: 'Web development project pricing depends on the number of modules, the tech stack, and whether you need a live deployment and IEEE paper. We offer competitive, student-friendly pricing. WhatsApp us at +91 9600309140 with your topic and we will give you an instant transparent quote.',
    },
  ],
  ctaTitle: 'Get Your Web Development Final Year Project in 12 Hours',
  ctaDesc:
    'WhatsApp us your domain or project idea. We will suggest the best web development titles for your stack and college requirements, then deliver a fully working application with source code, database, report, and PPT within 12 hours.',
};

export default function WebDevelopmentProjectsCoimbatore() {
  return <DomainPage data={data} />;
}
