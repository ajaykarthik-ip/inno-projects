import type { Metadata } from 'next';
import ProjectIdeasPage, { type ProjectIdeasPageData } from '@/components/ProjectIdeasPage';

const siteUrl = 'https://www.innoprojects.in';
const pageUrl = `${siteUrl}/cse-project-titles-2026`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'CSE Project Titles 2026 | 200+ Final Year CSE Project Ideas',
  description:
    'Browse 200+ CSE final year project titles for 2026. Web, ML/AI, cybersecurity, and cloud projects. MERN, Next.js, Python, Django, AWS. IEEE & non-IEEE. 12-hr delivery in Coimbatore. +91 9600309140.',
  keywords: [
    'cse project titles 2026',
    'cse final year project ideas',
    'computer science project topics 2026',
    'be cse project titles',
    'final year project cse 2026',
    'cse project ideas with source code',
    'mern stack final year project',
    'python project for cse students',
    'ieee cse project titles 2026',
    'cse project center coimbatore',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'CSE Project Titles 2026 | 200+ Final Year CSE Project Ideas | Inno Projects',
    description:
      '200+ CSE final year project titles 2026. Web, ML/AI, cybersecurity, cloud. MERN, Python, Django, AWS. IEEE & non-IEEE. 12-hr delivery. +91 9600309140.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CSE Project Titles 2026 – Inno Projects Coimbatore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CSE Project Titles 2026 | 200+ Ideas | Inno Projects',
    description: '200+ CSE final year project titles 2026. MERN, Python, ML, cybersecurity, cloud. 12-hr delivery. +91 9600309140.',
    images: ['/og-image.png'],
  },
};

const data: ProjectIdeasPageData = {
  badge: '200+ CSE Project Titles · 2026',
  h1: 'CSE Final Year Project Titles 2026 — 200+ Ideas',
  subtitle:
    'The most comprehensive list of CSE final year project titles for 2026 — covering full-stack web, machine learning, cybersecurity, and cloud computing. Each title is buildable, submission-ready, and deliverable in 12 hours from Inno Projects, Coimbatore.',
  whatsappText: 'Hi!%20I%20need%20a%20CSE%20final%20year%20project%20title%20for%202026.',
  stats: [
    { value: '200+', label: 'CSE Project Titles' },
    { value: 'All Stacks', label: 'MERN · Python · Java · PHP' },
    { value: '12-hr', label: 'Delivery' },
    { value: 'IEEE + Non-IEEE', label: 'Both Available' },
  ],
  intro:
    'CSE final year project selection is one of the most important decisions of your engineering degree. In 2026, the most valued project domains are full-stack web development (MERN, Next.js, Django), artificial intelligence and machine learning (Python, TensorFlow, LLMs), cybersecurity (network scanning, intrusion detection, encryption), and cloud/DevOps (AWS, Docker, Kubernetes). At Inno Projects, Coimbatore, we maintain 200+ verified CSE project titles aligned with Anna University, Bharathiar University, and Amrita University syllabi. Every project is delivered with complete source code, database scripts, project report, and presentation — in 12 hours. Browse our titles by domain below and WhatsApp us to claim yours.',
  categories: [
    {
      name: 'Web & Full-Stack Projects',
      projects: [
        {
          title: 'Online Skill-Swap Marketplace using MERN Stack',
          tech: 'MongoDB, Express.js, React, Node.js, JWT',
          difficulty: 'Intermediate',
          domain: 'Full-Stack Web',
          desc: 'A peer-to-peer platform where users exchange skills (e.g., coding for design) without money, with profile pages, booking, real-time chat, and skill endorsements.',
        },
        {
          title: 'Hospital Appointment & Queue Management System using Next.js',
          tech: 'Next.js 14, PostgreSQL, Prisma, Tailwind CSS',
          difficulty: 'Intermediate',
          domain: 'Full-Stack Web',
          desc: 'Manages outpatient appointment scheduling, real-time queue status, doctor availability, and SMS notifications using Next.js App Router and PostgreSQL.',
        },
        {
          title: 'College Event Management Portal using Django REST + React',
          tech: 'Django, Django REST Framework, React, SQLite',
          difficulty: 'Beginner',
          domain: 'Full-Stack Web',
          desc: 'Centralised portal for college clubs to post events, manage registrations, issue digital certificates, and send email reminders — built with Django REST API and React frontend.',
        },
        {
          title: 'Freelance Project Bidding System using MERN + WebSockets',
          tech: 'MERN Stack, Socket.io, Redis, JWT',
          difficulty: 'Advanced',
          domain: 'Full-Stack Web',
          desc: 'Freelancers bid on posted projects in real time using WebSockets, with escrow-style milestone payments, rating system, and admin dispute resolution panel.',
        },
        {
          title: 'Multi-Vendor E-Commerce Platform using Next.js and Stripe',
          tech: 'Next.js, MongoDB, Stripe API, Cloudinary',
          difficulty: 'Advanced',
          domain: 'Full-Stack Web',
          desc: 'Full-featured e-commerce platform where multiple vendors manage their own product listings, orders, and analytics dashboards with Stripe payment integration.',
        },
        {
          title: 'Student Study Group Finder using Django + React',
          tech: 'Django, React, PostgreSQL, REST API',
          difficulty: 'Beginner',
          domain: 'Full-Stack Web',
          desc: 'Matches students studying similar subjects for online or in-person study groups, with interest tagging, group chat, scheduling, and availability calendar.',
        },
      ],
    },
    {
      name: 'Machine Learning & AI Projects',
      projects: [
        {
          title: 'AI-Powered Code Review Assistant using LLM',
          tech: 'Python, OpenAI API, FastAPI, React',
          difficulty: 'Advanced',
          domain: 'AI / LLM',
          desc: 'Automatically reviews submitted code for bugs, style issues, and security vulnerabilities using an LLM, providing actionable suggestions in a VS Code–style interface.',
        },
        {
          title: 'Exam Cheating Detection using Computer Vision',
          tech: 'Python, YOLOv8, OpenCV, TensorFlow',
          difficulty: 'Intermediate',
          domain: 'Computer Vision',
          desc: 'Detects suspicious behaviours during online exams (phone use, face absence, multiple persons) from webcam feeds using YOLOv8 pose estimation and object detection.',
        },
        {
          title: 'Personalised Movie Recommendation System using Collaborative Filtering',
          tech: 'Python, Surprise library, Flask, React',
          difficulty: 'Intermediate',
          domain: 'Recommender Systems',
          desc: 'Recommends movies using matrix factorisation (SVD) on the MovieLens 1M dataset, with a Flask API serving personalised suggestions to a React frontend.',
        },
        {
          title: 'Customer Support Chatbot using Rasa and BERT',
          tech: 'Python, Rasa NLU, BERT, SQLite',
          difficulty: 'Advanced',
          domain: 'NLP / Chatbot',
          desc: 'Intelligent chatbot for e-commerce customer support built with Rasa, handling intent classification, slot filling, FAQ retrieval, and order status queries.',
        },
        {
          title: 'Automated Essay Scoring using Transformer Models',
          tech: 'Python, BERT, HuggingFace, scikit-learn',
          difficulty: 'Advanced',
          domain: 'NLP / Education',
          desc: 'Scores student essays on multiple dimensions (content, grammar, coherence) using fine-tuned BERT, achieving Quadratic Weighted Kappa of 0.82 on the ASAP dataset.',
        },
        {
          title: 'Traffic Sign Recognition using CNN for Autonomous Vehicles',
          tech: 'Python, TensorFlow, CNN, OpenCV',
          difficulty: 'Intermediate',
          domain: 'Computer Vision',
          desc: 'Classifies 43 traffic sign categories from the GTSRB dataset using a custom CNN with data augmentation, achieving 99.1% accuracy for autonomous driving applications.',
        },
      ],
    },
    {
      name: 'Cybersecurity & Networking Projects',
      projects: [
        {
          title: 'Network Intrusion Detection System using Random Forest',
          tech: 'Python, scikit-learn, Scapy, NSL-KDD dataset',
          difficulty: 'Advanced',
          domain: 'Cybersecurity',
          desc: 'Classifies network traffic as normal or attack (DoS, Probe, R2L, U2R) using Random Forest on the NSL-KDD dataset with real-time packet capture via Scapy.',
        },
        {
          title: 'Phishing Website Detection using Machine Learning',
          tech: 'Python, scikit-learn, XGBoost, URL features',
          difficulty: 'Intermediate',
          domain: 'Cybersecurity',
          desc: 'Detects phishing URLs by extracting 30 lexical, host-based, and content-based features and classifying them with XGBoost, achieving 97% detection accuracy.',
        },
        {
          title: 'Steganography Tool for Image-based Data Hiding',
          tech: 'Python, PIL, LSB algorithm, Flask',
          difficulty: 'Beginner',
          domain: 'Cybersecurity',
          desc: 'Hides and extracts secret messages inside PNG images using Least Significant Bit (LSB) steganography with an optional AES encryption layer and Flask web UI.',
        },
        {
          title: 'Blockchain-based Secure Academic Certificate Verification',
          tech: 'Ethereum, Solidity, Web3.js, React, IPFS',
          difficulty: 'Advanced',
          domain: 'Blockchain',
          desc: 'Issues tamper-proof academic certificates as NFTs on Ethereum, enabling instant verification by employers and institutions via QR code scan — eliminating forgery.',
        },
        {
          title: 'Password Strength Analyser and Secure Vault using AES-256',
          tech: 'Python, cryptography library, Flask, SQLite',
          difficulty: 'Beginner',
          domain: 'Cybersecurity',
          desc: 'Analyses password entropy and common patterns, then securely stores credentials in an AES-256 encrypted local vault with PBKDF2 key derivation.',
        },
        {
          title: 'DDoS Attack Mitigation using Software-Defined Networking',
          tech: 'Python, Mininet, OpenFlow, Ryu controller',
          difficulty: 'Advanced',
          domain: 'Network Security',
          desc: 'Detects and mitigates DDoS attacks in an SDN environment using traffic flow analysis and dynamic rule insertion via the Ryu OpenFlow controller on a Mininet topology.',
        },
      ],
    },
    {
      name: 'Cloud & DevOps Projects',
      projects: [
        {
          title: 'Serverless Student Portal using AWS Lambda and DynamoDB',
          tech: 'AWS Lambda, API Gateway, DynamoDB, React',
          difficulty: 'Advanced',
          domain: 'Cloud / AWS',
          desc: 'Fully serverless college student portal (attendance, marks, timetable) built on AWS Lambda functions, API Gateway, DynamoDB, and S3 for static hosting.',
        },
        {
          title: 'CI/CD Pipeline for Python Web App using GitHub Actions and Docker',
          tech: 'Docker, GitHub Actions, AWS EC2, Nginx',
          difficulty: 'Intermediate',
          domain: 'DevOps',
          desc: 'Automated CI/CD pipeline that runs tests, builds a Docker image, pushes to Docker Hub, and deploys to AWS EC2 with zero-downtime Nginx reverse proxy on every git push.',
        },
        {
          title: 'Microservices-based Food Delivery Backend using Spring Boot',
          tech: 'Java, Spring Boot, Docker, Kubernetes, Kafka',
          difficulty: 'Advanced',
          domain: 'Microservices',
          desc: 'Decomposes a monolithic food delivery app into six microservices (user, restaurant, order, payment, notification, delivery) orchestrated on Kubernetes with Kafka event bus.',
        },
        {
          title: 'Infrastructure as Code for Multi-Tier App using Terraform',
          tech: 'Terraform, AWS VPC, RDS, EC2, S3',
          difficulty: 'Advanced',
          domain: 'Cloud / DevOps',
          desc: 'Provisions a full three-tier (web, app, database) AWS infrastructure using Terraform, including VPC, subnets, security groups, auto-scaling groups, RDS, and S3.',
        },
        {
          title: 'Real-Time Log Monitoring Dashboard using ELK Stack',
          tech: 'Elasticsearch, Logstash, Kibana, Docker',
          difficulty: 'Intermediate',
          domain: 'DevOps',
          desc: 'Centralised log management system that ingests application and server logs via Logstash, indexes them in Elasticsearch, and visualises anomalies in a Kibana dashboard.',
        },
        {
          title: 'Cloud-Native Image Processing Pipeline using AWS S3 and Lambda',
          tech: 'AWS S3, Lambda, Rekognition, SNS, Python',
          difficulty: 'Intermediate',
          domain: 'Cloud / AWS',
          desc: 'Event-driven image processing pipeline that triggers on S3 upload, runs AWS Rekognition for face/object detection, stores results in DynamoDB, and notifies via SNS.',
        },
      ],
    },
  ],
  whyInno: [
    '200+ verified CSE project titles updated for 2026 syllabi',
    'IEEE and non-IEEE options — both with full documentation',
    'Complete source code across all stacks: Python, MERN, Java, PHP',
    '12-hour delivery — ready before your guide submission deadline',
    'Database, API, frontend, and deployment guide all included',
    '600+ CSE projects delivered across Coimbatore colleges every year',
  ],
  faqs: [
    {
      q: 'Which CSE project domain has the best placement value in 2026?',
      a: 'In 2026, the highest-value CSE project domains for placements are: (1) ML/AI projects using Python/TensorFlow — valued by product companies, (2) Full-stack web (MERN/Next.js) — valued by service companies and startups, (3) Cloud & DevOps (AWS/Docker/Kubernetes) — valued by cloud-first companies. We recommend picking a domain aligned with your target companies.',
    },
    {
      q: 'Can I get a CSE project with an IEEE paper from Inno Projects?',
      a: 'Yes. We have 100+ IEEE base papers (2024–2026) mapped to CSE project titles across ML, cybersecurity, NLP, and IoT. We implement the paper\'s methodology, customise it for your dataset, and prepare the IEEE-format project report and presentation.',
    },
    {
      q: 'How do I choose a good CSE final year project topic?',
      a: 'Good CSE project topics should be: (1) relevant to current industry trends, (2) feasible within your timeline and skill level, (3) aligned with your college guide\'s preferences, and (4) solvable with a real dataset or real-world use case. WhatsApp us at +91 9600309140 — we help students pick the right topic for their profile every day.',
    },
    {
      q: 'What is included when I order a CSE project from Inno Projects?',
      a: 'Every CSE project from Inno Projects includes: complete source code (clean, commented), database schema and seed scripts, project report in IEEE format, 20-slide PPT, README with setup instructions, and 3 days of post-delivery support. IEEE projects also include the base paper.',
    },
    {
      q: 'Do you make projects for Anna University and Bharathiar University CSE students?',
      a: 'Yes. We have served BE CSE students from PSG College of Technology, CIT, SREC, Sri Krishna College of Engineering, KGiSL, SNS, Karpagam Academy, and many more Coimbatore colleges affiliated with Anna University and Bharathiar University. We know the exact submission requirements for each college.',
    },
  ],
  ctaTitle: 'Claim Your CSE Project Title Today',
  ctaDesc:
    'WhatsApp us your domain preference and we will suggest 3–5 titles perfect for your skill level, college requirements, and placement goals — then deliver the complete project in 12 hours.',
};

export default function CseProjectTitles2026() {
  return <ProjectIdeasPage data={data} />;
}
