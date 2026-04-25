import type { Metadata } from 'next';
import ProjectIdeasPage, { type ProjectIdeasPageData } from '@/components/ProjectIdeasPage';

const siteUrl = 'https://www.innoprojects.in';
const pageUrl = `${siteUrl}/python-project-ideas-for-students`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Python Project Ideas for Students 2026 | Final Year Python Projects',
  description:
    'Explore 100+ Python project ideas for final year students in 2026. Django, Flask, ML, data science, and automation. Source code included. 12-hr delivery in Coimbatore. +91 9600309140.',
  keywords: [
    'python project ideas for students',
    'python final year project ideas',
    'python project topics 2026',
    'django project ideas',
    'flask project ideas for students',
    'python machine learning project ideas',
    'python data science project',
    'python automation project ideas',
    'python project with source code',
    'python project center coimbatore',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'Python Project Ideas for Students 2026 | Final Year Python Projects | Inno Projects',
    description:
      '100+ Python project ideas for students 2026. Django, Flask, ML, data science, automation. Full source code. 12-hr delivery. +91 9600309140.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Python Project Ideas for Students 2026 – Inno Projects Coimbatore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Python Project Ideas for Students 2026 | Inno Projects',
    description: '100+ Python project ideas for final year 2026. Django, Flask, ML, data science, automation. 12-hr delivery. +91 9600309140.',
    images: ['/og-image.png'],
  },
};

const data: ProjectIdeasPageData = {
  badge: '100+ Python Project Ideas · 2026',
  h1: 'Python Final Year Project Ideas 2026 — 100+ Topics',
  subtitle:
    'Python is the most versatile language for final year projects in 2026. Browse 100+ Python project ideas across web development, machine learning, data science, and automation — each with complete source code, virtual environment setup, and 12-hour delivery from Inno Projects, Coimbatore.',
  whatsappText: 'Hi!%20I%20need%20a%20Python%20project%20idea%20for%20my%20final%20year.',
  stats: [
    { value: '100+', label: 'Python Project Titles' },
    { value: 'Django · Flask · ML', label: 'All Python Stacks' },
    { value: '12-hr', label: 'Delivery' },
    { value: 'Source Code', label: 'Always Included' },
  ],
  intro:
    'Python is the language of choice for final year projects in 2026 — powering web backends (Django, Flask, FastAPI), machine learning models (TensorFlow, scikit-learn, PyTorch), data science pipelines (Pandas, NumPy, Matplotlib), and automation scripts (Scrapy, Selenium, Celery). At Inno Projects, Coimbatore, every Python project we deliver is a complete, runnable environment: clean source code with comments, requirements.txt, virtual environment setup instructions, a working UI (Streamlit, Flask, or Django), and full project documentation. Whether you need a Django-powered web application, a Pandas-driven data analysis project, or an ML model with a Streamlit demo, we have it ready to deliver within 12 hours.',
  categories: [
    {
      name: 'Python Web Development Projects',
      projects: [
        {
          title: 'Online Learning Management System using Django',
          tech: 'Django 4.2, PostgreSQL, Celery, Redis, Bootstrap 5',
          difficulty: 'Intermediate',
          domain: 'Django / Web',
          desc: 'Full-featured LMS with course creation, video lectures, quiz engine, progress tracking, certificate generation, and automated email reminders via Celery beat tasks.',
        },
        {
          title: 'Blood Bank Management System using Flask and SQLAlchemy',
          tech: 'Flask, SQLAlchemy, SQLite, Jinja2, Bootstrap',
          difficulty: 'Beginner',
          domain: 'Flask / Web',
          desc: 'Manages blood bank inventory (blood group, units, expiry), donor registration, request tracking, and hospital-to-blood-bank matching with role-based access for admins and donors.',
        },
        {
          title: 'REST API for Online Food Ordering using Django REST Framework',
          tech: 'Django REST Framework, JWT, PostgreSQL, Swagger',
          difficulty: 'Intermediate',
          domain: 'Django / API',
          desc: 'Production-grade REST API powering a food ordering app — user auth with JWT, restaurant and menu management, cart, order lifecycle, and Swagger/OpenAPI documentation.',
        },
        {
          title: 'Job Portal with AI-Powered Skill Matching using Flask',
          tech: 'Flask, MongoDB, spaCy, TF-IDF, React',
          difficulty: 'Advanced',
          domain: 'Flask / NLP',
          desc: 'Job portal where candidates upload resumes and the system extracts skills using spaCy NER and ranks job matches using TF-IDF cosine similarity, served via a Flask API.',
        },
        {
          title: 'Social Media Analytics Dashboard using Django and Chart.js',
          tech: 'Django, Tweepy API, Chart.js, Celery, PostgreSQL',
          difficulty: 'Intermediate',
          domain: 'Django / Analytics',
          desc: 'Fetches real-time Twitter/X data via Tweepy, performs sentiment analysis, and displays engagement trends, hashtag clouds, and follower analytics on a Chart.js Django dashboard.',
        },
        {
          title: 'Real Estate Listing Portal with Price Prediction using FastAPI',
          tech: 'FastAPI, MongoDB, scikit-learn, React, Docker',
          difficulty: 'Advanced',
          domain: 'FastAPI / ML',
          desc: 'Property listing platform with CRUD operations for listings, image uploads to Cloudinary, and an integrated Ridge Regression model predicting property prices from location and features.',
        },
      ],
    },
    {
      name: 'Python Machine Learning Projects',
      projects: [
        {
          title: 'Movie Genre Classification using Multi-Label CNN on Posters',
          tech: 'Python, TensorFlow, ResNet, multi-label classification',
          difficulty: 'Advanced',
          domain: 'Deep Learning',
          desc: 'Predicts multiple genres (Action, Drama, Comedy) of movies from their poster images using a ResNet-based multi-label classifier with binary cross-entropy loss.',
        },
        {
          title: 'Music Mood Detection using Audio Features and Random Forest',
          tech: 'Python, librosa, scikit-learn, Streamlit',
          difficulty: 'Intermediate',
          domain: 'Audio ML',
          desc: 'Classifies songs as happy, sad, energetic, or calm by extracting MFCC, chroma, and spectral features with librosa and training a Random Forest classifier on the GTZAN dataset.',
        },
        {
          title: 'Anomaly Detection in Network Traffic using Autoencoder',
          tech: 'Python, TensorFlow, Autoencoder, CICIDS dataset',
          difficulty: 'Advanced',
          domain: 'Security ML',
          desc: 'Detects network intrusions by training a deep autoencoder on normal traffic patterns and flagging high-reconstruction-error packets as anomalous, achieving 96% detection rate.',
        },
        {
          title: 'Weather Forecasting using Bidirectional LSTM',
          tech: 'Python, TensorFlow, BiLSTM, Pandas, Open-Meteo API',
          difficulty: 'Intermediate',
          domain: 'Time-Series ML',
          desc: 'Forecasts temperature, humidity, and wind speed for the next 7 days using a Bidirectional LSTM trained on 5 years of historical weather data from the Open-Meteo API.',
        },
        {
          title: 'Sign Language Recognition using CNN and MediaPipe',
          tech: 'Python, TensorFlow, MediaPipe, OpenCV, Streamlit',
          difficulty: 'Intermediate',
          domain: 'Computer Vision',
          desc: 'Recognises 26 American Sign Language (ASL) hand gestures in real time from webcam by extracting 21 hand keypoints via MediaPipe and classifying them with a CNN.',
        },
        {
          title: 'Customer Segmentation using K-Means and DBSCAN',
          tech: 'Python, scikit-learn, Pandas, Plotly, Streamlit',
          difficulty: 'Beginner',
          domain: 'Unsupervised ML',
          desc: 'Segments retail customers into behaviour-based groups using K-Means and DBSCAN clustering on RFM features, with interactive Plotly 3D cluster visualisation in Streamlit.',
        },
      ],
    },
    {
      name: 'Python Data Science Projects',
      projects: [
        {
          title: 'COVID-19 Global Trends EDA and Predictive Dashboard',
          tech: 'Python, Pandas, Plotly, Streamlit, OWID dataset',
          difficulty: 'Beginner',
          domain: 'Data Science / EDA',
          desc: 'Comprehensive exploratory analysis of global COVID-19 data (cases, deaths, vaccinations) with interactive Plotly choropleth maps and a Streamlit dashboard for country-level comparison.',
        },
        {
          title: 'IPL Cricket Match Outcome Analysis and Prediction',
          tech: 'Python, Pandas, Matplotlib, XGBoost, Streamlit',
          difficulty: 'Beginner',
          domain: 'Sports Analytics',
          desc: 'Analyses 15 seasons of IPL data to identify winning patterns, venue advantages, and batting-order impacts, then trains an XGBoost classifier to predict match outcomes.',
        },
        {
          title: 'Air Quality Index Analysis for Indian Cities using Pandas',
          tech: 'Python, Pandas, Seaborn, Folium, GeoPandas',
          difficulty: 'Beginner',
          domain: 'Environmental Analytics',
          desc: 'Analyses CPCB air quality data for 50 Indian cities, identifying seasonal PM2.5 and NO2 trends, pollutant correlations, and geographic hotspots visualised on an interactive Folium map.',
        },
        {
          title: 'E-Commerce Product Review Mining using NLP and Pandas',
          tech: 'Python, NLTK, Pandas, WordCloud, Matplotlib',
          difficulty: 'Intermediate',
          domain: 'Data Science / NLP',
          desc: 'Mines Amazon product reviews to extract dominant topics using LDA, visualises sentiment distribution over time, and identifies recurring complaints from 1-star reviews using word clouds.',
        },
        {
          title: 'Food Nutrition Analysis and Diet Recommendation System',
          tech: 'Python, Pandas, scikit-learn, Streamlit, USDA dataset',
          difficulty: 'Intermediate',
          domain: 'Data Science / Health',
          desc: 'Analyses nutritional content of 8,000+ foods from the USDA database, clusters them into dietary categories, and recommends personalised meal plans based on caloric and macro targets.',
        },
        {
          title: 'GitHub Developer Activity Insights using REST API and Pandas',
          tech: 'Python, PyGitHub, Pandas, Plotly, Dash',
          difficulty: 'Intermediate',
          domain: 'Developer Analytics',
          desc: 'Analyses developer activity patterns across GitHub repositories — commit frequency, PR merge rates, issue lifecycle, and language distribution — with an interactive Plotly Dash interface.',
        },
      ],
    },
    {
      name: 'Python Automation & Scripting Projects',
      projects: [
        {
          title: 'Automated News Aggregator and Digest Emailer using Scrapy',
          tech: 'Python, Scrapy, BeautifulSoup, SendGrid, Celery',
          difficulty: 'Intermediate',
          domain: 'Web Scraping',
          desc: 'Scrapes top headlines from 10 news sources using Scrapy, performs category classification, and emails a personalised daily digest to subscribers via SendGrid on a Celery schedule.',
        },
        {
          title: 'Invoice Data Extraction from PDFs using pdfplumber and Regex',
          tech: 'Python, pdfplumber, regex, Pandas, openpyxl',
          difficulty: 'Beginner',
          domain: 'Automation',
          desc: 'Automatically extracts invoice fields (vendor, amount, date, line items) from unstructured PDF invoices using pdfplumber and regex, exporting structured data to Excel for accounting.',
        },
        {
          title: 'WhatsApp Bulk Message Scheduler using Selenium and PyAutoGUI',
          tech: 'Python, Selenium, PyAutoGUI, schedule library',
          difficulty: 'Beginner',
          domain: 'Automation',
          desc: 'Schedules and sends personalised WhatsApp messages to a contact list at specified times using Selenium browser automation — useful for business alerts and event reminders.',
        },
        {
          title: 'Reddit Data Scraper and Trend Analyser using PRAW',
          tech: 'Python, PRAW, Pandas, TextBlob, Streamlit',
          difficulty: 'Intermediate',
          domain: 'Web Scraping / Analytics',
          desc: 'Scrapes subreddit posts and comments using PRAW (Python Reddit API Wrapper), performs sentiment and topic trend analysis, and displays live trend insights in a Streamlit dashboard.',
        },
        {
          title: 'Automated Stock Portfolio Tracker with Alerts using Python',
          tech: 'Python, yfinance, smtplib, Pandas, schedule',
          difficulty: 'Beginner',
          domain: 'Finance Automation',
          desc: 'Tracks a personalised NSE/BSE stock portfolio using yfinance, calculates daily P&L and CAGR, and sends email/SMS price alerts when target or stop-loss prices are hit.',
        },
        {
          title: 'Instagram Post Scheduler and Analytics Bot using Instabot',
          tech: 'Python, Instabot, Pillow, schedule, SQLite',
          difficulty: 'Intermediate',
          domain: 'Social Media Automation',
          desc: 'Automates Instagram post scheduling with caption generation, auto-hashtag suggestions, and follower engagement tracking — storing analytics in SQLite for weekly performance reports.',
        },
      ],
    },
  ],
  whyInno: [
    '100+ Python project titles across Django, Flask, ML, data science, and automation',
    'Every project includes requirements.txt, virtual environment, and setup guide',
    'Pre-configured to run locally — no cloud account or GPU needed for most projects',
    'Streamlit or Flask UI included for live demo during project viva',
    '12-hour delivery — complete working project before your submission date',
    'Python-specialised team with 3+ years building student projects in Coimbatore',
  ],
  faqs: [
    {
      q: 'What are the best Python project ideas for final year CSE students in 2026?',
      a: 'Top Python project ideas for final year 2026 include: Fake News Detection using BERT, E-Commerce REST API using Django REST Framework, Customer Segmentation using K-Means, COVID-19 EDA Dashboard using Streamlit, Automated News Aggregator using Scrapy, and Weather Forecasting using Bi-LSTM. At Inno Projects, we recommend matching your Python topic to your target job role.',
    },
    {
      q: 'Which Python web framework should I use for my final year project — Django or Flask?',
      a: 'Use Django if your project needs a full-featured backend: user auth, admin panel, ORM, REST API with DRF, and scheduled tasks. Use Flask if your project is lightweight, API-focused, or you want more control. FastAPI is ideal for projects that need high-performance async endpoints with automatic Swagger docs. We build in all three frameworks.',
    },
    {
      q: 'Can I submit a Python machine learning project with just a Streamlit UI?',
      a: 'Yes. Most colleges accept Streamlit as a valid demo interface for ML projects. Streamlit gives you a clean, interactive web UI without needing frontend development skills. We include a fully working Streamlit app for all ML/data science projects, along with video demo recording if needed.',
    },
    {
      q: 'How do I run the Python project after receiving it from Inno Projects?',
      a: 'Every project comes with a README containing step-by-step setup instructions: create virtual environment → pip install -r requirements.txt → set environment variables → python manage.py migrate (Django) or python app.py (Flask) or streamlit run app.py (Streamlit). We also provide a 15-minute WhatsApp call to walk you through setup.',
    },
    {
      q: 'Do Python data science projects include real datasets or dummy data?',
      a: 'All our data science projects use real, publicly available datasets — UCI ML Repository, Kaggle, USDA, CPCB, NSE historical data, Reddit API, etc. We never use dummy or synthetic data for final year projects. The dataset and all preprocessing notebooks are included in the project delivery.',
    },
  ],
  ctaTitle: 'Get Your Python Final Year Project Today',
  ctaDesc:
    'Tell us your Python stack preference — web, ML, data science, or automation — and we will deliver a complete, runnable Python project with source code, UI, report, and PPT within 12 hours.',
};

export default function PythonProjectIdeasForStudents() {
  return <ProjectIdeasPage data={data} />;
}
