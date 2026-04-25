import type { Metadata } from 'next';
import ProjectIdeasPage, { type ProjectIdeasPageData } from '@/components/ProjectIdeasPage';

const siteUrl = 'https://www.innoprojects.in';
const pageUrl = `${siteUrl}/ready-made-final-year-projects-coimbatore`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Ready Made Final Year Projects in Coimbatore | Same Day Delivery',
  description:
    'Ready-made final year projects in Coimbatore delivered in 12 hours. Python, Java, web, and ML/AI projects with source code, report, and PPT. Call Inno Projects: +91 9600309140.',
  keywords: [
    'ready made final year projects coimbatore',
    'ready made projects coimbatore',
    'same day project delivery coimbatore',
    'final year project center coimbatore',
    'buy final year project coimbatore',
    'project center near me coimbatore',
    'ready to submit final year project',
    'final year project with documentation coimbatore',
    '12 hour project delivery coimbatore',
    'readymade project coimbatore',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'Ready Made Final Year Projects in Coimbatore | Same Day Delivery | Inno Projects',
    description:
      'Ready-made final year projects in Coimbatore in 12 hours. Python, Java, web, ML. Source code + report + PPT included. +91 9600309140.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Ready Made Final Year Projects Coimbatore – Inno Projects' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ready Made Final Year Projects Coimbatore | Inno Projects',
    description: 'Ready-made final year projects in Coimbatore. 12-hour delivery. Python, Java, MERN, ML. +91 9600309140.',
    images: ['/og-image.png'],
  },
};

const data: ProjectIdeasPageData = {
  badge: 'Ready to Submit · 12-Hour Delivery · Coimbatore',
  h1: 'Ready Made Final Year Projects in Coimbatore — Delivered in 12 Hours',
  subtitle:
    'Need a final year project by tomorrow? Inno Projects, Coimbatore\'s most trusted project centre, delivers 600+ ready-made projects — Python, Java, web, and ML/AI — with complete source code, database, project report, and PPT, typically within 12 hours of your order.',
  whatsappText: 'Hi!%20I%20need%20a%20ready-made%20final%20year%20project%20in%20Coimbatore.',
  stats: [
    { value: '600+', label: 'Ready-Made Projects' },
    { value: 'Same Day', label: '12-Hour Delivery' },
    { value: 'All Domains', label: 'Python · Java · Web · ML' },
    { value: 'Full Docs', label: 'Code + Report + PPT' },
  ],
  intro:
    'Final year project deadlines sneak up fast. If your submission is in 24 hours, 48 hours, or even a week, Inno Projects in Coimbatore can help. We have been delivering ready-made final year projects since 2018, serving BE, BTech, MCA, and MSc students from colleges across Coimbatore — PSG, CIT, SREC, Amrita, KGiSL, SNS, Karpagam, and more. Our ready-made projects are not template dumps — each delivery is reviewed, configured for your college requirements, and tested to run cleanly. You get: working source code, SQL or MongoDB database, a project report in IEEE format, 20-slide PowerPoint, and 3 days of WhatsApp support. Most projects are delivered within 12 hours; same-day express available for urgent deadlines. Browse our most popular ready-made project categories below.',
  categories: [
    {
      name: 'Ready Made Python Projects',
      projects: [
        {
          title: 'Road Accident Severity Prediction using Python and XGBoost',
          tech: 'Python, XGBoost, scikit-learn, Streamlit, UK Road Safety data',
          difficulty: 'Intermediate',
          domain: 'Python / ML',
          desc: 'Predicts the severity (slight, serious, fatal) of road accidents from weather, road type, vehicle, and driver features using XGBoost with a Streamlit UI for real-time prediction — ready to demo.',
        },
        {
          title: 'Fake Job Posting Detection using NLP and BERT',
          tech: 'Python, BERT, HuggingFace, Flask, Kaggle dataset',
          difficulty: 'Intermediate',
          domain: 'Python / NLP',
          desc: 'Classifies job advertisements as legitimate or fraudulent using a fine-tuned BERT model on the EMSCAD fake job dataset, with a Flask API accepting job text and returning fraud probability.',
        },
        {
          title: 'Real Estate Price Prediction using Django and ML',
          tech: 'Python, Django, scikit-learn, PostgreSQL, React',
          difficulty: 'Intermediate',
          domain: 'Python / Web + ML',
          desc: 'End-to-end property price prediction platform: users enter location, BHK, area, and amenities into a Django form and get an ML model estimate with comparable listings displayed on a map.',
        },
        {
          title: 'Automated Resume Screening System using Python',
          tech: 'Python, spaCy, Flask, SQLite, pdfplumber',
          difficulty: 'Beginner',
          domain: 'Python / NLP',
          desc: 'HR automation tool that parses uploaded resume PDFs, extracts skills and experience using spaCy NER, scores candidates against a job description, and ranks them in an admin dashboard.',
        },
        {
          title: 'Personal Finance Tracker and Budget Analyser using Django',
          tech: 'Python, Django, Chart.js, SQLite, Bootstrap 5',
          difficulty: 'Beginner',
          domain: 'Python / Web',
          desc: 'Personal finance management app where users log income, expenses, and savings goals, with automated category tagging, monthly budget vs. actual Chart.js charts, and exportable PDF reports.',
        },
        {
          title: 'Drowning Detection in Swimming Pools using CNN and OpenCV',
          tech: 'Python, TensorFlow, CNN, OpenCV, CCTV feed',
          difficulty: 'Advanced',
          domain: 'Python / Computer Vision',
          desc: 'Detects drowning and struggling behaviour in pool CCTV footage using a two-stage CNN pipeline — first detecting swimmers, then classifying motion as normal swim or distress.',
        },
      ],
    },
    {
      name: 'Ready Made Java Projects',
      projects: [
        {
          title: 'Digital Marketplace for Handmade Products using Spring Boot',
          tech: 'Java, Spring Boot, React, MySQL, Stripe, Cloudinary',
          difficulty: 'Intermediate',
          domain: 'Java / Full-Stack',
          desc: 'E-commerce platform connecting artisans and handmade product buyers — artisan storefronts, product galleries with Cloudinary image hosting, Stripe checkout, and order fulfilment tracking.',
        },
        {
          title: 'Smart Campus Navigation App using Java and Google Maps',
          tech: 'Java, Spring Boot, Google Maps API, React, MySQL',
          difficulty: 'Intermediate',
          domain: 'Java / Web',
          desc: 'Interactive campus map application for college freshers — shows building locations, shortest path between departments, bus stop timings, canteen menus, and event notifications.',
        },
        {
          title: 'Scholarship Management Portal using Spring Boot',
          tech: 'Java, Spring Boot, Thymeleaf, MySQL, POI',
          difficulty: 'Intermediate',
          domain: 'Java / Spring Boot',
          desc: 'Government-style scholarship portal with eligibility criteria upload, student online application, document verification workflow, committee review dashboard, and awardee announcement.',
        },
        {
          title: 'Online Taxi Booking Backend using Spring Boot and WebSockets',
          tech: 'Java, Spring Boot, Socket.io, MySQL, Google Maps',
          difficulty: 'Advanced',
          domain: 'Java / Real-Time',
          desc: 'Ride-booking backend service with driver-rider matching algorithm, live driver location tracking via WebSockets, fare calculation, trip history, and admin earnings dashboard.',
        },
        {
          title: 'Crime Record Management System using Java and MySQL',
          tech: 'Java Servlet, JSP, MySQL, Apache Tomcat, Bootstrap',
          difficulty: 'Beginner',
          domain: 'Java / Servlet',
          desc: 'Police department crime record management system for logging FIRs, managing case progress, tracking suspects, generating ward-wise crime statistics, and exporting monthly reports.',
        },
        {
          title: 'Fitness Tracking and Diet Planner using Spring Boot and React',
          tech: 'Java, Spring Boot, React, MySQL, JWT, Chart.js',
          difficulty: 'Intermediate',
          domain: 'Java / Full-Stack',
          desc: 'Fitness app where users log workouts and meals, track calorie intake vs. burn via Chart.js, set weekly goals, and receive AI-generated diet suggestions based on progress data.',
        },
      ],
    },
    {
      name: 'Ready Made Web Projects',
      projects: [
        {
          title: 'College Placement Cell Management System using MERN',
          tech: 'MongoDB, Express, React, Node.js, Socket.io, JWT',
          difficulty: 'Intermediate',
          domain: 'MERN / EdTech',
          desc: 'Placement portal where students register, upload resumes, and apply to company drives — coordinators manage company visits, interview schedules, and offer letter status in real time.',
        },
        {
          title: 'Remote Patient Monitoring Dashboard using Next.js',
          tech: 'Next.js 14, PostgreSQL, Prisma, Chart.js, Twilio',
          difficulty: 'Intermediate',
          domain: 'Next.js / Healthcare',
          desc: 'Doctor-facing dashboard displaying real-time vitals (BP, SpO2, glucose) from IoT devices per patient, with anomaly alerts via Twilio SMS and trend charts for longitudinal health monitoring.',
        },
        {
          title: 'Online Complaint Box for Municipal Corporation using Laravel',
          tech: 'Laravel 11, MySQL, Google Maps, Bootstrap, SMTP',
          difficulty: 'Beginner',
          domain: 'PHP / Laravel',
          desc: 'Citizens submit complaints (pothole, streetlight, garbage) with photo and GPS location via mobile browser, council officers track and close tickets with status updates emailed to complainants.',
        },
        {
          title: 'Community Disaster Relief Coordination Platform using MERN',
          tech: 'MERN Stack, Socket.io, Google Maps, Redis',
          difficulty: 'Advanced',
          domain: 'MERN / Social Impact',
          desc: 'Real-time disaster coordination platform where volunteers register aid offers (food, shelter, transport), victims request help, and NGO coordinators match and dispatch resources on a live map.',
        },
        {
          title: 'Virtual Try-On for Eyewear using AR.js and Three.js',
          tech: 'Next.js, AR.js, Three.js, face-api.js, MongoDB',
          difficulty: 'Advanced',
          domain: 'Web AR / E-Commerce',
          desc: 'Augmented reality eyewear try-on feature for an online optical store — overlays 3D glasses models aligned to facial landmarks detected by face-api.js in the browser via webcam.',
        },
        {
          title: 'Decentralised Voting System using Ethereum Smart Contracts',
          tech: 'Solidity, Hardhat, React, ethers.js, MetaMask',
          difficulty: 'Advanced',
          domain: 'Blockchain / Web3',
          desc: 'Tamper-proof online voting system where votes are cast as blockchain transactions on an Ethereum smart contract, ensuring one-vote-per-wallet, anonymity, and transparent public results.',
        },
      ],
    },
    {
      name: 'Ready Made ML/AI Projects',
      projects: [
        {
          title: 'Video Deepfake Detection using CNN and Temporal Attention',
          tech: 'Python, PyTorch, EfficientNet, DFDC dataset',
          difficulty: 'Advanced',
          domain: 'Deep Learning / CV',
          desc: 'Detects AI-generated deepfake videos by analysing temporal inconsistencies in facial features across frames using EfficientNet with a temporal attention module — trained on the DFDC dataset.',
        },
        {
          title: 'Customer Product Review Summariser using GPT API',
          tech: 'Python, OpenAI GPT API, FastAPI, React, MongoDB',
          difficulty: 'Intermediate',
          domain: 'AI / LLM',
          desc: 'Aggregates product reviews from a MongoDB store and generates structured summaries (pros, cons, overall sentiment) using GPT-4o API — displayed on product pages to aid purchase decisions.',
        },
        {
          title: 'Optical Character Recognition for Tamil and English Documents',
          tech: 'Python, Tesseract, OpenCV, Flask, PIL',
          difficulty: 'Intermediate',
          domain: 'Python / OCR',
          desc: 'Extracts printed text from scanned Tamil and English government documents using Tesseract OCR with preprocessing (deskew, binarise, denoise) and outputs structured JSON via Flask API.',
        },
        {
          title: 'Traffic Flow Optimisation using Reinforcement Learning',
          tech: 'Python, SUMO simulator, deep Q-Network, PyTorch',
          difficulty: 'Advanced',
          domain: 'AI / Reinforcement Learning',
          desc: 'Trains a DQN agent to control traffic signal timing at a 4-way intersection in the SUMO traffic simulator, reducing average vehicle waiting time by 32% versus fixed-timing signals.',
        },
        {
          title: 'Satellite Image Land Cover Classification using U-Net',
          tech: 'Python, PyTorch, U-Net, Sentinel-2, DeepGlobe',
          difficulty: 'Advanced',
          domain: 'Deep Learning / Remote Sensing',
          desc: 'Segments satellite imagery into land cover classes (urban, vegetation, water, barren) using U-Net with ResNet-34 encoder, evaluated on the DeepGlobe Land Cover dataset with 85% mIoU.',
        },
        {
          title: 'Conversational AI Tutor for Mathematics using LangChain',
          tech: 'Python, LangChain, OpenAI, Streamlit, SQLite',
          difficulty: 'Intermediate',
          domain: 'AI / EdTech',
          desc: 'AI-powered maths tutoring chatbot built with LangChain — explains concepts step-by-step, generates practice problems at adaptive difficulty, tracks student performance, and cites textbook references.',
        },
      ],
    },
  ],
  whyInno: [
    'Based in Coimbatore — walk in, WhatsApp, or call for instant assistance',
    '12-hour delivery guaranteed for all ready-made projects in our catalogue',
    'Every project tested and verified to run before delivery — zero broken code',
    'Project report written fresh for your college\'s specific format requirements',
    'Plagiarism-free documentation — original write-up, not copied from the internet',
    '600+ projects delivered annually — Coimbatore\'s most experienced project centre',
  ],
  faqs: [
    {
      q: 'What does "ready-made" mean — is the project already built or built fresh for me?',
      a: 'Ready-made means our team has the domain expertise, code templates, and documentation frameworks to deliver your project within 12 hours — not that you get a recycled zip file. Each project is configured for your specific topic, your college\'s report format, and your database. Think of it as express custom delivery, not off-the-shelf.',
    },
    {
      q: 'Is a ready-made project acceptable for final year submission?',
      a: 'Yes. Colleges evaluate the project demonstration, report quality, and your ability to explain the work — not whether you built every line yourself. Students who buy projects from Inno Projects attend their viva confidently because we provide a working demo, clear code, and a comprehensive report they can thoroughly understand and present.',
    },
    {
      q: 'Is the project plagiarism-free?',
      a: 'The source code is original, written by our team (not copied from GitHub). The project report is written fresh and is not plagiarised from published papers or student submissions — it will pass standard college plagiarism checks (Urkund, Turnitin). If your college requires a specific plagiarism report percentage, inform us and we will optimise the report accordingly.',
    },
    {
      q: 'What happens if my project guide rejects the topic?',
      a: 'WhatsApp us immediately. We will work with you to modify the topic or switch to an alternative project at no extra cost if the change request comes within 24 hours of delivery. We have helped hundreds of students navigate guide feedback — topic changes, additional modules, extended documentation.',
    },
    {
      q: 'Can I visit Inno Projects in Coimbatore to discuss my project in person?',
      a: 'Yes. We are located at 28, Baba St, Janaki Nagar, Venkitapuram, Coimbatore 641025. You are welcome to walk in Monday to Saturday, 10 AM to 7 PM. Call us first at +91 96003 09140 to confirm availability. Most students prefer WhatsApp for faster response and remote delivery.',
    },
  ],
  ctaTitle: 'Need a Project by Tomorrow? We Can Help.',
  ctaDesc:
    'WhatsApp us right now with your domain, stack, and deadline. We will confirm availability, suggest the best-fit ready-made project, and deliver it complete — typically within 12 hours.',
};

export default function ReadyMadeFinalYearProjectsCoimbatore() {
  return <ProjectIdeasPage data={data} />;
}
