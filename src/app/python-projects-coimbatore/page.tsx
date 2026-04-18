import type { Metadata } from 'next';
import DomainPage, { type DomainPageData } from '@/components/DomainPage';

const siteUrl = 'https://www.innoprojects.tech';
const pageUrl = `${siteUrl}/python-projects-coimbatore`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Python Final Year Projects in Coimbatore 2026 | Inno Projects',
  description:
    'Python final year projects in Coimbatore 2026. Django, Flask, machine learning, data science, automation, and web scraping projects with full source code and documentation. 12-hour delivery. Call +91 9600309140.',
  keywords: [
    'python projects coimbatore',
    'python final year project coimbatore 2026',
    'django project coimbatore',
    'flask project coimbatore',
    'python machine learning project coimbatore',
    'data science project coimbatore',
    'python automation project coimbatore',
    'python web scraping project coimbatore',
    'ieee python project coimbatore',
    'python project with source code coimbatore',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'Python Final Year Projects in Coimbatore 2026 | Inno Projects',
    description:
      'Python final year projects in Coimbatore. Django, Flask, ML, data science, automation. Full source code + report + PPT. 12-hr delivery. +91 9600309140.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Python Final Year Projects Coimbatore – Inno Projects' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Python Final Year Projects in Coimbatore 2026 | Inno Projects',
    description: 'Python projects in Coimbatore. Django, Flask, ML, data science, automation. 12-hr delivery. +91 9600309140.',
    images: ['/og-image.png'],
  },
};

const data: DomainPageData = {
  badge: 'Python Projects · Coimbatore 2026',
  h1: 'Python Final Year Projects in Coimbatore',
  subtitle:
    'Python is the most versatile language for final year projects — from Django web applications and Flask REST APIs to machine learning models, data science pipelines, automation scripts, and web scrapers. Inno Projects Coimbatore delivers complete, well-commented Python projects with virtual environment setup, requirements.txt, and full documentation in 12 hours.',
  whatsappText: 'Hi!%20I%20need%20a%20Python%20final%20year%20project%20in%20Coimbatore.',
  stats: [
    { value: '180+', label: 'Python Project Titles' },
    { value: 'Django & Flask', label: 'Frameworks' },
    { value: '12-hr', label: 'Delivery' },
    { value: 'IEEE & Non-IEEE', label: 'Support' },
  ],
  intro:
    'Python has dominated final year project selections in 2025 and 2026 because it spans every tier of application development. At Inno Projects Coimbatore, our Python project library covers four distinct streams: web application development with Django and Flask, machine learning and deep learning with scikit-learn, TensorFlow, and PyTorch, data science and analytics with Pandas, Matplotlib, and Seaborn, and automation and scripting projects including web scraping and task scheduling. Each project is delivered as a clean Python package with a virtual environment configuration, requirements.txt, a working demo, and complete project documentation. We handle everything from data preprocessing through to deployment on Heroku, Render, or PythonAnywhere. Whether you need a 5-module Django web app or a trained deep learning model with a Streamlit interface, we deliver it fast and ready to present at your college review.',
  projectTitles: [
    {
      title: 'Online Learning Management System using Django',
      tech: 'Django, PostgreSQL, Celery, Redis, Bootstrap',
      desc: 'Multi-role LMS with course creation, video lesson uploads, student enrolment, quiz engine, certificate generation, and background email notifications via Celery.',
    },
    {
      title: 'Real Estate Price Prediction using XGBoost',
      tech: 'Python, XGBoost, Flask, Pandas, SHAP',
      desc: 'Predicts apartment sale prices from location, area, and amenity features using XGBoost with SHAP-based feature importance visualisation in a Flask web interface.',
    },
    {
      title: 'Twitter Sentiment Dashboard using Tweepy and VADER',
      tech: 'Python, Tweepy, VADER, Streamlit, Plotly',
      desc: 'Collects live tweets for any hashtag via Tweepy, classifies sentiment using VADER, and displays real-time trend charts and word clouds in a Streamlit dashboard.',
    },
    {
      title: 'Automated Resume Parser and Job Matching System',
      tech: 'Python, spaCy, Flask, PyMuPDF, cosine similarity',
      desc: 'Extracts skills, education, and experience from PDF resumes using spaCy NER, then ranks job descriptions by TF-IDF cosine similarity to suggest best-fit roles.',
    },
    {
      title: 'Stock Price Forecasting using LSTM and Prophet',
      tech: 'Python, Keras, Facebook Prophet, yfinance, Plotly',
      desc: 'Compares LSTM and Facebook Prophet models for 30-day ahead stock price forecasting using NSE historical data fetched via yfinance, with interactive Plotly charts.',
    },
    {
      title: 'News Aggregator with Automatic Category Classification',
      tech: 'Python, Django, Newspaper3k, BERT, Celery',
      desc: 'Web scrapes headlines from 10 major news portals every hour using Newspaper3k and Celery, then auto-classifies articles into categories using a fine-tuned BERT model.',
    },
    {
      title: 'Web Scraping Price Tracker with Email Alerts',
      tech: 'Python, Scrapy, MongoDB, SMTP, Celery Beat',
      desc: 'Scheduled Scrapy spider monitors product prices on Amazon and Flipkart, stores history in MongoDB, and sends email alerts when prices fall below a user-set threshold.',
    },
    {
      title: 'Fraudulent Transaction Detection using Isolation Forest',
      tech: 'Python, scikit-learn, SMOTE, Flask, PostgreSQL',
      desc: 'REST API-backed fraud detection service using Isolation Forest trained on the Kaggle credit card fraud dataset, with SMOTE oversampling to address class imbalance.',
    },
    {
      title: 'Object Detection API for Retail Shelf Analysis',
      tech: 'Python, YOLOv8, FastAPI, Docker, OpenCV',
      desc: 'Dockerised FastAPI microservice that accepts shelf images and returns product counts and out-of-stock alerts using a YOLOv8 model fine-tuned on retail product images.',
    },
    {
      title: 'Automated Invoice Processing using OCR and ML',
      tech: 'Python, Tesseract OCR, Pandas, Flask, SQLite',
      desc: 'Extracts vendor name, date, line items, and totals from scanned PDF invoices using Tesseract OCR, then classifies and stores records in a searchable SQLite database.',
    },
  ],
  technologies: [
    { name: 'Python 3.11+', icon: '🐍' },
    { name: 'Django', icon: '🎸' },
    { name: 'Flask / FastAPI', icon: '⚗️' },
    { name: 'scikit-learn', icon: '📊' },
    { name: 'TensorFlow / Keras', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'Pandas / NumPy', icon: '🐼' },
    { name: 'Scrapy / BeautifulSoup', icon: '🕷️' },
    { name: 'Streamlit', icon: '🌊' },
    { name: 'Celery / Redis', icon: '⚙️' },
    { name: 'PostgreSQL / MySQL', icon: '🗄️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Plotly / Matplotlib', icon: '📈' },
  ],
  whatYouGet: [
    'Complete Python source code (PEP-8 compliant)',
    'Virtual environment and requirements.txt',
    'Working demo (Streamlit / Flask / Django UI)',
    'Dataset and all preprocessing scripts',
    'Trained model file (.pkl / .h5 / .pt)',
    'IEEE base paper (for IEEE titles)',
    'Full project report in IEEE or university format',
    'PowerPoint presentation (20+ slides)',
    'Deployment guide (Heroku / Render / PythonAnywhere)',
    '3-day post-delivery support via WhatsApp',
  ],
  degrees: ['BE CSE', 'BE IT', 'BTech CSE', 'MCA', 'MSc CS', 'MSc IT', 'MSc Data Science', 'BCA'],
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
      q: 'What Python frameworks do you use for final year projects?',
      a: 'We use Django for full-featured web applications with ORM, authentication, and admin panels; Flask and FastAPI for lightweight REST APIs and ML model serving; Streamlit for interactive data science dashboards; and Scrapy and BeautifulSoup for web scraping projects. The framework is chosen based on your project requirements and college preferences.',
    },
    {
      q: 'Can I get a Python project with a machine learning backend?',
      a: 'Yes. Many of our Python projects combine a Django or Flask web front-end with an ML model backend. For example, a hospital management system with a disease prediction module, or an e-commerce site with a recommendation engine. We train the model, save it as a .pkl or .h5 file, and load it into the web app for real-time predictions.',
    },
    {
      q: 'Do Python projects come with a working demo?',
      a: 'Yes. Every Python project includes a working demo — either a locally runnable Streamlit or Flask app, or a live deployment link on Heroku, Render, or PythonAnywhere. For ML projects, the demo shows the model making real predictions on test inputs.',
    },
    {
      q: 'Are Python web scraping projects allowed as final year projects?',
      a: 'Yes. Python web scraping projects are accepted as final year projects when they form part of a larger system — for example, a price tracker application, a news aggregator, a research paper collector, or a market analytics dashboard. We frame the project around the full system, not just the scraper.',
    },
    {
      q: 'Do you include dataset for Python data science projects?',
      a: 'Yes. Every data science and machine learning Python project includes the full dataset (from Kaggle, UCI, or our own curated sources), preprocessing scripts, exploratory data analysis notebooks, and the trained model file. You receive a completely reproducible project.',
    },
    {
      q: 'How much do Python final year projects cost in Coimbatore?',
      a: 'Python project pricing is based on the complexity and scope — a simple Flask REST API project is priced differently from a full Django application with an ML backend. All prices are student-friendly. WhatsApp us at +91 9600309140 with your topic for an instant quote.',
    },
  ],
  ctaTitle: 'Get Your Python Final Year Project in 12 Hours',
  ctaDesc:
    'WhatsApp us your Python project topic or domain preference. We will suggest the best titles, confirm the scope, and deliver your complete project — source code, dataset, model, report, and PPT — within 12 hours.',
};

export default function PythonProjectsCoimbatore() {
  return <DomainPage data={data} />;
}
