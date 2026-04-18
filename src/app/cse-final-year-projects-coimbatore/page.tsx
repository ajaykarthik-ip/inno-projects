import type { Metadata } from 'next';
import DomainPage, { type DomainPageData } from '@/components/DomainPage';

const siteUrl = 'https://www.innoprojects.tech';
const pageUrl = `${siteUrl}/cse-final-year-projects-coimbatore`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'CSE Final Year Projects in Coimbatore 2026 | Inno Projects',
  description:
    'Top CSE final year projects in Coimbatore 2026. 200+ project titles across web, ML, IoT, blockchain, cloud, and NLP. IEEE and non-IEEE. Full source code, documentation, and PPT delivered in 12 hours. Call +91 9600309140.',
  keywords: [
    'CSE final year projects coimbatore',
    'cse project coimbatore 2026',
    'computer science final year project coimbatore',
    'ieee cse project coimbatore',
    'be cse project coimbatore',
    'final year project center coimbatore',
    'cse project with source code coimbatore',
    'python cse project coimbatore',
    'web development cse project coimbatore',
    'machine learning cse project coimbatore',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'CSE Final Year Projects in Coimbatore 2026 | Inno Projects',
    description:
      '200+ CSE final year project titles in Coimbatore. Web, ML, IoT, blockchain, cloud, NLP. IEEE & non-IEEE. Full source code + report. 12-hr delivery. +91 9600309140.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CSE Final Year Projects Coimbatore – Inno Projects' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CSE Final Year Projects in Coimbatore 2026 | Inno Projects',
    description: '200+ CSE project titles in Coimbatore. Web, ML, IoT, blockchain, cloud. 12-hr delivery. +91 9600309140.',
    images: ['/og-image.png'],
  },
};

const data: DomainPageData = {
  badge: 'CSE Projects · Coimbatore 2026',
  h1: 'CSE Final Year Projects in Coimbatore',
  subtitle:
    'Inno Projects is Coimbatore\'s most trusted project centre for CSE final year students. We cover every domain — machine learning, web development, IoT, blockchain, cloud computing, and NLP — with working source code, IEEE base papers, project reports, and PPTs delivered in just 12 hours.',
  whatsappText: 'Hi!%20I%20need%20a%20CSE%20final%20year%20project%20in%20Coimbatore.',
  stats: [
    { value: '200+', label: 'CSE Project Titles' },
    { value: 'All Domains', label: 'Coverage' },
    { value: '12-hr', label: 'Delivery' },
    { value: 'IEEE & Non-IEEE', label: 'Support' },
  ],
  intro:
    'Computer Science and Engineering students in Coimbatore face an enormous breadth of domain choices for their final year project — and that breadth can be paralyzing. At Inno Projects, we remove that uncertainty. Our catalogue of 200+ CSE project titles spans every active domain: machine learning and deep learning, full-stack web development, IoT with embedded systems, blockchain smart contracts, cloud-native applications, and natural language processing. Every project is developed from scratch with working, commented source code matched to your college\'s submission format. We align with Anna University and Bharathiar University project guidelines and provide IEEE base papers wherever required. Students from PSG, CIT, SREC, SNS, Amrita, and KGiSL regularly choose us because we combine technical depth with fast, reliable delivery — your complete project package in 12 hours or less.',
  projectTitles: [
    {
      title: 'Smart Traffic Management System using Deep Learning and IoT',
      tech: 'Python, YOLOv8, Raspberry Pi, MQTT',
      desc: 'Detects vehicle density at intersections using YOLOv8 object detection and dynamically adjusts traffic light timings via an MQTT-connected Raspberry Pi controller.',
    },
    {
      title: 'Decentralised Voting System using Ethereum Blockchain',
      tech: 'Solidity, React, MetaMask, Truffle',
      desc: 'Tamper-proof e-voting platform built on Ethereum smart contracts with MetaMask authentication, ensuring voter privacy and transparent result auditing.',
    },
    {
      title: 'Real-Time Chat Application with End-to-End Encryption',
      tech: 'Node.js, Socket.IO, React, AES-256',
      desc: 'Scalable real-time messaging app with AES-256 message encryption, JWT authentication, and MongoDB persistent chat history.',
    },
    {
      title: 'Intrusion Detection System using Random Forest',
      tech: 'Python, scikit-learn, NSL-KDD Dataset',
      desc: 'Network intrusion detection model trained on the NSL-KDD benchmark achieving 97% accuracy in classifying normal traffic versus four attack categories.',
    },
    {
      title: 'Healthcare Appointment Portal with AI Symptom Checker',
      tech: 'React, Node.js, MongoDB, Python Flask',
      desc: 'Full-stack patient portal with appointment scheduling, doctor availability calendars, and an NLP symptom-checker chatbot integrated via Flask API.',
    },
    {
      title: 'Cloud-Based File Storage System with Deduplication',
      tech: 'AWS S3, Node.js, SHA-256, React',
      desc: 'Personal cloud storage app with SHA-256 hash-based deduplication to reduce storage costs by up to 40%, deployed on AWS S3 and EC2.',
    },
    {
      title: 'Sign Language Recognition using CNN and MediaPipe',
      tech: 'Python, MediaPipe, TensorFlow, OpenCV',
      desc: 'Real-time Indian Sign Language recognition from webcam feed using MediaPipe hand landmarks as input features to a CNN classifier.',
    },
    {
      title: 'E-Learning Platform with Adaptive Quiz Engine',
      tech: 'Next.js, PostgreSQL, Python, scikit-learn',
      desc: 'Online learning platform where the quiz engine adapts difficulty in real-time based on student performance using an item response theory model.',
    },
    {
      title: 'Automated Code Review Tool using Large Language Models',
      tech: 'Python, OpenAI API, GitHub Actions, React',
      desc: 'CI/CD-integrated tool that posts automated LLM-generated code review comments on GitHub pull requests, flagging bugs, security issues, and style violations.',
    },
    {
      title: 'Ride-Sharing Application with Route Optimisation',
      tech: 'React Native, Node.js, Google Maps API, MongoDB',
      desc: 'Mobile ride-sharing app with driver-passenger matching, real-time GPS tracking, and Dijkstra-based route optimisation for minimum-cost pooling.',
    },
  ],
  technologies: [
    { name: 'Python', icon: '🐍' },
    { name: 'React / Next.js', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TensorFlow / Keras', icon: '🧠' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MySQL / PostgreSQL', icon: '🗄️' },
    { name: 'Solidity / Ethereum', icon: '🔗' },
    { name: 'Docker / AWS', icon: '☁️' },
    { name: 'Raspberry Pi / Arduino', icon: '🔌' },
    { name: 'Socket.IO', icon: '📡' },
    { name: 'BERT / NLP', icon: '🤗' },
    { name: 'OpenCV', icon: '📷' },
    { name: 'Java Spring Boot', icon: '☕' },
    { name: 'PHP / Laravel', icon: '🐘' },
  ],
  whatYouGet: [
    'Complete source code (clean, well-commented)',
    'Working demo / deployed application URL',
    'IEEE base paper (for IEEE titles)',
    'Full project report in IEEE / Anna University format',
    'PowerPoint presentation (20+ slides)',
    'Database schema and ER diagram',
    'System architecture and UML diagrams',
    'README with setup and run instructions',
    'All dependencies / requirements listed',
    '3-day post-delivery support via WhatsApp',
  ],
  degrees: ['BE CSE', 'BE IT', 'BTech CSE', 'BTech IT', 'MCA', 'MSc CS', 'MSc IT', 'M.Tech CSE'],
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
      q: 'What CSE final year project domains are available at Inno Projects Coimbatore?',
      a: 'We cover every major CSE domain including machine learning and deep learning, full-stack web development (MERN, MEAN, PHP), mobile app development (React Native, Flutter), IoT and embedded systems, blockchain and smart contracts, cloud computing (AWS, Azure), natural language processing, cybersecurity, and big data analytics. With 200+ titles, you will find a project that matches your interest and college requirements.',
    },
    {
      q: 'Are CSE projects available for Anna University syllabus?',
      a: 'Yes. All our CSE project titles are aligned with Anna University and Bharathiar University final year project requirements. We provide documentation in the exact format specified by these universities, including the synopsis, abstract, system design chapter, and bibliography.',
    },
    {
      q: 'Can I get an IEEE project for CSE in Coimbatore?',
      a: 'Absolutely. We maintain a regularly updated library of IEEE base papers across CSE domains. When you choose an IEEE title, we provide the original paper, implement the proposed methodology, and document the comparison between the baseline and our implementation in the project report.',
    },
    {
      q: 'How quickly can I get my CSE project?',
      a: 'Standard CSE projects are delivered within 12 hours of order confirmation and payment. For complex projects involving multiple integrations — for example, a full-stack app with an ML backend and IoT hardware — delivery may extend to 24–48 hours. We always communicate the timeline upfront.',
    },
    {
      q: 'Do you provide both front-end and back-end for web-based CSE projects?',
      a: 'Yes. All full-stack web projects include the complete front-end (React, Next.js, or plain HTML/CSS/JS depending on your preference), the back-end API (Node.js, Django, or Spring Boot), database schema, and deployment configuration. You receive a fully functional, end-to-end application.',
    },
    {
      q: 'What is the cost of a CSE final year project in Coimbatore?',
      a: 'Pricing depends on the domain, technology stack, IEEE requirement, and delivery urgency. We are student-friendly and offer some of the most competitive rates in Coimbatore. WhatsApp us at +91 9600309140 for an instant, no-obligation quote.',
    },
  ],
  ctaTitle: 'Get Your CSE Final Year Project in 12 Hours',
  ctaDesc:
    'WhatsApp us now with your topic or domain preference. We will suggest the best CSE project titles, confirm the scope, and deliver your complete project package — source code, report, and PPT — within 12 hours.',
};

export default function CSEFinalYearProjectsCoimbatore() {
  return <DomainPage data={data} />;
}
