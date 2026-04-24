import type { Metadata } from 'next';
import ProjectIdeasPage, { type ProjectIdeasPageData } from '@/components/ProjectIdeasPage';

const siteUrl = 'https://www.innoprojects.in';
const pageUrl = `${siteUrl}/final-year-project-with-source-code`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Final Year Projects with Source Code | Download Ready Projects | Inno Projects',
  description:
    'Get final year projects with complete source code — Python, Java, MERN stack, PHP. Fully commented, runnable code with database, report, and PPT. 12-hr delivery in Coimbatore. +91 9600309140.',
  keywords: [
    'final year project with source code',
    'final year project source code download',
    'python project with source code',
    'java final year project source code',
    'mern stack project with source code',
    'php project with source code',
    'project with complete source code coimbatore',
    'final year project code and documentation',
    'ready made project with source code',
    'final year project center coimbatore source code',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'Final Year Projects with Source Code | Download Ready Projects | Inno Projects',
    description:
      '600+ final year projects with complete source code. Python, Java, MERN, PHP. Fully runnable. Database + report + PPT included. 12-hr delivery. +91 9600309140.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Final Year Projects with Source Code – Inno Projects Coimbatore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Final Year Projects with Source Code | Inno Projects',
    description: '600+ final year projects with complete source code. Python, Java, MERN, PHP. 12-hr delivery. +91 9600309140.',
    images: ['/og-image.png'],
  },
};

const data: ProjectIdeasPageData = {
  badge: '600+ Projects with Source Code · Coimbatore',
  h1: 'Final Year Projects with Complete Source Code — All Domains',
  subtitle:
    'Every project from Inno Projects comes with 100% complete, commented source code — not snippets, not pseudocode. Fully runnable on your laptop, with database scripts, environment setup, report, and PPT. Choose your stack and get it delivered in 12 hours.',
  whatsappText: 'Hi!%20I%20need%20a%20final%20year%20project%20with%20complete%20source%20code.',
  stats: [
    { value: '600+', label: 'Projects with Source Code' },
    { value: 'Source Code', label: 'Always 100% Included' },
    { value: '12-hr', label: 'Delivery' },
    { value: 'All Domains', label: 'Python · Java · MERN · PHP' },
  ],
  intro:
    'When students say "I need a project with source code," they often mean different things — some want a zip file with broken snippets, others want something that actually runs. At Inno Projects, Coimbatore, "source code" means: clean, commented production-grade code that runs on a fresh machine with a single command. Every project delivery includes the complete source code folder structure, a database schema with seed data, environment variables template (.env.example), step-by-step README, and 3 days of WhatsApp support if anything does not run. We cover Python (Django/Flask/ML), Java (Spring Boot/Servlet), MERN Stack (MongoDB, Express, React, Node), and PHP (Laravel/CodeIgniter) — pick your stack and your topic.',
  categories: [
    {
      name: 'Python Projects with Source Code',
      projects: [
        {
          title: 'Student Grievance Management System using Django',
          tech: 'Django 4.2, PostgreSQL, Bootstrap 5, Celery, Redis',
          difficulty: 'Intermediate',
          domain: 'Django / Web',
          desc: 'Full-stack web app where students submit grievances, track resolution status, and receive email notifications — with admin dashboard, priority queuing, and auto-escalation workflows via Celery.',
        },
        {
          title: 'Face Recognition Attendance System using DeepFace and Flask',
          tech: 'Python, Flask, DeepFace, OpenCV, SQLite',
          difficulty: 'Intermediate',
          domain: 'Python / CV',
          desc: 'Marks attendance automatically by recognising student faces from a webcam using DeepFace\'s VGG-Face model, logging timestamps to SQLite and generating Excel attendance reports.',
        },
        {
          title: 'Mental Health Assessment Chatbot using Rasa and BERT',
          tech: 'Python, Rasa, BERT, SQLite, React',
          difficulty: 'Advanced',
          domain: 'Python / NLP',
          desc: 'Conversational chatbot that conducts standardised PHQ-9 depression and GAD-7 anxiety screenings, classifies risk severity with BERT, and recommends professional resources.',
        },
        {
          title: 'E-Waste Pickup Scheduling Platform using Flask',
          tech: 'Flask, SQLAlchemy, Google Maps API, Bootstrap',
          difficulty: 'Beginner',
          domain: 'Flask / Web',
          desc: 'Platform for scheduling e-waste collection pickups with location detection, waste category tagging, nearest collection point finder using Google Maps API, and admin pickup management.',
        },
        {
          title: 'Crop Yield Prediction Dashboard using Scikit-Learn and Streamlit',
          tech: 'Python, scikit-learn, Pandas, Streamlit, FAOSTAT data',
          difficulty: 'Beginner',
          domain: 'Python / ML',
          desc: 'Predicts district-level crop yields from soil, rainfall, and temperature features using a Gradient Boosting model, with an interactive Streamlit dashboard for state-wise yield exploration.',
        },
        {
          title: 'Online Auction Platform with Bidding Timer using Django Channels',
          tech: 'Django, Django Channels, WebSockets, PostgreSQL',
          difficulty: 'Advanced',
          domain: 'Django / Real-Time',
          desc: 'Real-time auction platform where users bid on items with a countdown timer, live bid updates via WebSockets, seller payout processing, and automated lot closing when time expires.',
        },
      ],
    },
    {
      name: 'Java Projects with Source Code',
      projects: [
        {
          title: 'Library Management System using Spring Boot and Thymeleaf',
          tech: 'Java, Spring Boot, Thymeleaf, MySQL, Spring Security',
          difficulty: 'Intermediate',
          domain: 'Java / Spring Boot',
          desc: 'Complete library system with book cataloguing, member management, issue/return tracking, fine calculation, overdue email reminders, and role-based access (librarian / student).',
        },
        {
          title: 'Online Banking Portal using Spring Boot REST and React',
          tech: 'Java, Spring Boot, React, MySQL, JWT, JUnit',
          difficulty: 'Advanced',
          domain: 'Java / Full-Stack',
          desc: 'Secure banking web app with account creation, fund transfer, transaction history, statement download, and two-factor authentication — built with Spring Boot REST API and React frontend.',
        },
        {
          title: 'Bus Pass Renewal System using Servlet, JSP, and MySQL',
          tech: 'Java Servlet, JSP, MySQL, Apache Tomcat, Bootstrap',
          difficulty: 'Beginner',
          domain: 'Java / Servlet',
          desc: 'Government-style bus pass renewal portal with student registration, pass type selection, photo upload, admin approval workflow, and PDF pass generation using iText.',
        },
        {
          title: 'Hospital Patient Record Management using Spring Boot',
          tech: 'Java, Spring Boot, JPA/Hibernate, MySQL, REST API',
          difficulty: 'Intermediate',
          domain: 'Java / Spring Boot',
          desc: 'Manages patient demographics, doctor assignments, diagnosis history, prescription records, lab results, and billing with a RESTful Spring Boot backend and Swagger API docs.',
        },
        {
          title: 'Voting System with OTP Authentication using Java and MySQL',
          tech: 'Java, Servlet, SMTP, MySQL, Bootstrap, Twilio',
          difficulty: 'Intermediate',
          domain: 'Java / Security',
          desc: 'Online voting system with Aadhaar-linked voter registration, OTP-based authentication via Twilio, tamper-evident vote recording, real-time result tally, and admin audit log.',
        },
        {
          title: 'Inventory Management System using Spring Boot and Angular',
          tech: 'Java, Spring Boot, Angular 17, MySQL, REST API',
          difficulty: 'Advanced',
          domain: 'Java / Full-Stack',
          desc: 'Warehouse inventory system with product CRUD, supplier management, purchase orders, stock movement tracking, low-stock alerts, and a Chart.js demand forecast dashboard.',
        },
      ],
    },
    {
      name: 'MERN Stack Projects with Source Code',
      projects: [
        {
          title: 'Real-Time Collaborative Code Editor using MERN and WebSockets',
          tech: 'MongoDB, Express, React, Node.js, Socket.io, Monaco',
          difficulty: 'Advanced',
          domain: 'MERN / Real-Time',
          desc: 'Browser-based collaborative code editor (like Google Docs for code) where multiple users see each other\'s keystrokes in real time via Socket.io, with syntax highlighting via Monaco Editor.',
        },
        {
          title: 'Telemedicine Appointment Platform using MERN and WebRTC',
          tech: 'MERN Stack, WebRTC, Socket.io, Stripe, JWT',
          difficulty: 'Advanced',
          domain: 'MERN / Healthcare',
          desc: 'Connects patients with doctors for video consultations using WebRTC peer connections, with appointment booking, prescription PDF generation, and secure Stripe payment for consultation fees.',
        },
        {
          title: 'Alumni Network Portal using MERN Stack',
          tech: 'MongoDB, Express, React, Node.js, Cloudinary, JWT',
          difficulty: 'Intermediate',
          domain: 'MERN / Social',
          desc: 'LinkedIn-style alumni portal for engineering colleges — profile creation, job posting, mentorship matching, batch reunion events, and donation to college fund, built entirely with MERN.',
        },
        {
          title: 'Peer-to-Peer Book Lending App using MERN and Google Maps',
          tech: 'MERN Stack, Google Maps API, Twilio, Socket.io',
          difficulty: 'Intermediate',
          domain: 'MERN / Marketplace',
          desc: 'Hyperlocal book sharing app where users list books for lending, browse availability on a Google Maps interface, chat with lenders via Socket.io, and receive return reminders via Twilio SMS.',
        },
        {
          title: 'Task Management System using MERN and Drag-and-Drop',
          tech: 'MongoDB, Express, React, Node.js, dnd-kit, JWT',
          difficulty: 'Beginner',
          domain: 'MERN / Productivity',
          desc: 'Kanban-style project management tool with drag-and-drop task cards across columns (To-Do, In Progress, Done), team assignment, deadline tracking, and activity log per task.',
        },
        {
          title: 'Online Exam Platform with Anti-Cheating using MERN',
          tech: 'MERN Stack, Socket.io, TensorFlow.js, face-api.js',
          difficulty: 'Advanced',
          domain: 'MERN / EdTech',
          desc: 'Proctored online exam platform using face-api.js for webcam-based identity verification and tab-switch detection, with auto-submit on violation and detailed examiner audit reports.',
        },
      ],
    },
    {
      name: 'PHP Projects with Source Code',
      projects: [
        {
          title: 'School Management ERP using Laravel and MySQL',
          tech: 'Laravel 11, MySQL, Blade, Bootstrap 5, Laravel Excel',
          difficulty: 'Intermediate',
          domain: 'PHP / Laravel',
          desc: 'Comprehensive school ERP covering student admissions, timetable, attendance, marks entry, fee collection with receipt generation, parent portal, and HR payroll for teaching staff.',
        },
        {
          title: 'Multi-Vendor Grocery Marketplace using CodeIgniter',
          tech: 'CodeIgniter 4, MySQL, Stripe, Bootstrap, Admin LTE',
          difficulty: 'Intermediate',
          domain: 'PHP / CodeIgniter',
          desc: 'Online grocery marketplace where multiple vendors manage their product listings, pricing, and inventory — with customer cart, Stripe checkout, order tracking, and commission-based admin dashboard.',
        },
        {
          title: 'News Portal with CMS and SEO Tools using Laravel',
          tech: 'Laravel, MySQL, TinyMCE, Sitemap, Open Graph',
          difficulty: 'Beginner',
          domain: 'PHP / Laravel',
          desc: 'News publishing platform with a rich-text CMS for article creation, category management, author profiles, comment moderation, automated sitemap generation, and social sharing meta tags.',
        },
        {
          title: 'Car Rental Booking System using PHP and MySQL',
          tech: 'PHP 8.2, MySQL, Bootstrap, PayPal SDK, FPDF',
          difficulty: 'Beginner',
          domain: 'PHP / Web',
          desc: 'Online car rental system with vehicle browsing, date-based availability checking, PayPal payment integration, booking confirmation PDF with QR code, and admin fleet management dashboard.',
        },
        {
          title: 'Real Estate Property Listing Site using Laravel',
          tech: 'Laravel, MySQL, Google Maps API, Elasticsearch',
          difficulty: 'Intermediate',
          domain: 'PHP / Laravel',
          desc: 'Property listing portal with location-based search via Google Maps, Elasticsearch full-text property search, saved searches, WhatsApp enquiry, agent registration, and featured listing ads.',
        },
        {
          title: 'Online Prescription Management System using PHP',
          tech: 'PHP, MySQL, FPDF, SMTP, Bootstrap',
          difficulty: 'Beginner',
          domain: 'PHP / Healthcare',
          desc: 'Allows doctors to create digital prescriptions, patients to view and download prescription PDFs, pharmacists to verify authenticity via unique code, with SMTP-based delivery to patient email.',
        },
      ],
    },
  ],
  whyInno: [
    'Source code is 100% complete — every file, every function, no placeholder stubs',
    'Code is clean and commented so you can explain it to your project guide',
    'Includes database schema with sample/seed data — import and run immediately',
    'README with setup instructions — runnable on your laptop in under 15 minutes',
    '3 days of post-delivery WhatsApp support if anything does not run',
    '600+ projects delivered annually — most students run code same day they receive it',
  ],
  faqs: [
    {
      q: 'What exactly is included when I say I want a project with source code?',
      a: 'From Inno Projects, "source code" means the complete project folder: all backend files, all frontend files, database schema (.sql), environment config (.env.example), requirements.txt or pom.xml or package.json, a README with step-by-step setup instructions, and all assets (images, icons, sample data). Nothing is missing or left for you to write.',
    },
    {
      q: 'Will the source code run on my laptop without modifications?',
      a: 'Yes, for 95% of projects. The README tells you exactly: which version of Python/Node/Java/PHP to install, how to set up the database, what environment variables to set, and how to start the server. Common student laptop configurations (Windows 10/11, 8GB RAM) are our baseline. We provide setup support via WhatsApp for 3 days post-delivery.',
    },
    {
      q: 'Can I modify the source code after receiving it?',
      a: 'Absolutely. You receive the full, unencrypted, unobfuscated source code. You are encouraged to understand, customise, and extend it — change the colour scheme, add features, swap the dataset, or rename the modules. This makes it uniquely yours for your college submission.',
    },
    {
      q: 'Is the source code plagiarism-checked?',
      a: 'Projects from Inno Projects are built fresh for each student delivery — not pulled from public GitHub repositories. We write custom code using the chosen framework and your specified topic. Most plagiarism checkers (Turnitin, Urkund) check documents, not code. Your project report is written fresh and will pass standard similarity checks.',
    },
    {
      q: 'Do you provide installation support after delivering the source code?',
      a: 'Yes. Every delivery comes with 3 days of WhatsApp support. If you cannot install a dependency, get a database error, or the server does not start, message us on WhatsApp (+91 9600309140) and our team will guide you through — typically within 30 minutes during business hours.',
    },
  ],
  ctaTitle: 'Get Your Project with Source Code Today',
  ctaDesc:
    'Choose your stack — Python, Java, MERN, or PHP — tell us your topic, and we will deliver a fully runnable project with complete source code, database, report, and PPT within 12 hours.',
};

export default function FinalYearProjectWithSourceCode() {
  return <ProjectIdeasPage data={data} />;
}
