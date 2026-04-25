import type { Metadata } from 'next';
import DomainPage, { type DomainPageData } from '@/components/DomainPage';

const siteUrl = 'https://www.innoprojects.in';
const pageUrl = `${siteUrl}/machine-learning-projects-coimbatore`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Machine Learning Final Year Projects in Coimbatore 2026',
  description:
    'Get ready-to-submit machine learning final year projects in Coimbatore. 120+ ML project titles using Python, TensorFlow, Keras, PyTorch, scikit-learn. IEEE and non-IEEE. Full source code, dataset, report, PPT — delivered in 12 hours. Call +91 9600309140.',
  keywords: [
    'machine learning final year projects coimbatore',
    'ml project coimbatore',
    'machine learning project coimbatore 2026',
    'python machine learning project coimbatore',
    'ieee machine learning project coimbatore',
    'deep learning project coimbatore',
    'tensorflow project coimbatore',
    'ai ml project center coimbatore',
    'final year ml project be cse coimbatore',
    'machine learning project with source code coimbatore',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'Machine Learning Final Year Projects in Coimbatore 2026 | Inno Projects',
    description:
      '120+ ML final year project titles in Coimbatore. Python, TensorFlow, PyTorch, BERT. IEEE & non-IEEE. Full source code + dataset + report. 12-hr delivery. +91 9600309140.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Machine Learning Final Year Projects Coimbatore – Inno Projects' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Machine Learning Final Year Projects in Coimbatore 2026 | Inno Projects',
    description: '120+ ML project titles in Coimbatore. Python, TensorFlow, PyTorch, BERT. 12-hr delivery. +91 9600309140.',
    images: ['/og-image.png'],
  },
};

const data: DomainPageData = {
  badge: 'Machine Learning · Coimbatore 2026',
  h1: 'Machine Learning Final Year Projects in Coimbatore',
  subtitle:
    'Build publication-quality machine learning projects with real datasets, trained models, and full source code. Inno Projects has delivered 120+ ML final year projects to students across Coimbatore colleges — with IEEE base papers, documentation, and 12-hour turnaround.',
  whatsappText: 'Hi!%20I%20need%20a%20Machine%20Learning%20final%20year%20project%20in%20Coimbatore.',
  stats: [
    { value: '120+', label: 'ML Projects' },
    { value: 'Python-based', label: 'Stack' },
    { value: '12-hr', label: 'Delivery' },
    { value: 'IEEE', label: 'Support' },
  ],
  intro:
    'Machine learning is the most in-demand domain for final year engineering projects in 2026. At Inno Projects, Coimbatore, we specialise in end-to-end ML project development — from data preprocessing and model training to evaluation, deployment, and IEEE paper alignment. Every project is built from scratch with a real dataset, a trained and saved model, a working demo, and complete project documentation. Whether you need a straightforward classification task using scikit-learn or a complex deep learning pipeline using TensorFlow and PyTorch, our team delivers it to your exact college requirements. We have served BE CSE, MCA, and MSc CS students from PSG, CIT, SREC, Amrita, SNS, and more. Your project, your topic, delivered fast — that is our promise.',
  projectTitles: [
    {
      title: 'Heart Disease Prediction using Random Forest',
      tech: 'Python, scikit-learn, Pandas',
      desc: 'Predicts heart disease risk from patient health metrics using a Random Forest classifier achieving 92% accuracy on the UCI Heart Disease dataset.',
    },
    {
      title: 'Fake News Detection using LSTM and BERT',
      tech: 'Python, BERT, TensorFlow',
      desc: 'Classifies news articles as real or fake using pre-trained BERT embeddings combined with an LSTM sequence model for contextual understanding.',
    },
    {
      title: 'Face Mask Detection using MobileNetV2',
      tech: 'Python, OpenCV, TensorFlow',
      desc: 'Real-time face mask detection from webcam feed using transfer learning on MobileNetV2, fine-tuned on a custom dataset with 95%+ accuracy.',
    },
    {
      title: 'Customer Churn Prediction using XGBoost',
      tech: 'Python, XGBoost, SHAP',
      desc: 'Predicts telecom customer churn with SHAP explainability to surface actionable business insights alongside model predictions.',
    },
    {
      title: 'Sentiment Analysis on Product Reviews using VADER and BERT',
      tech: 'Python, NLTK, Transformers',
      desc: 'Multi-class sentiment classification on e-commerce product reviews combining VADER rule-based scoring with BERT fine-tuning.',
    },
    {
      title: 'Crop Disease Detection using ResNet-50',
      tech: 'Python, PyTorch, ResNet',
      desc: 'Identifies 38 plant diseases from leaf images with 95%+ accuracy using ResNet-50 with transfer learning on the PlantVillage dataset.',
    },
    {
      title: 'Brain Tumor Classification using CNN',
      tech: 'Python, Keras, MRI Data',
      desc: 'Multi-class brain tumor detection (glioma, meningioma, pituitary, no tumor) from MRI scans using a custom CNN architecture.',
    },
    {
      title: 'Credit Card Fraud Detection using Isolation Forest',
      tech: 'Python, scikit-learn, SMOTE',
      desc: 'Anomaly detection on highly imbalanced transaction data using Isolation Forest and SMOTE oversampling to achieve reliable fraud detection.',
    },
    {
      title: 'Student Performance Prediction using Gradient Boosting',
      tech: 'Python, scikit-learn, Matplotlib',
      desc: 'Predicts final exam scores from behavioral, demographic, and academic features using Gradient Boosting with cross-validated feature selection.',
    },
    {
      title: 'Air Quality Forecasting using Stacked LSTM',
      tech: 'Python, TensorFlow, Time-series',
      desc: 'Forecasts PM2.5 air quality levels 24 hours ahead using a stacked LSTM network trained on multi-variate IoT sensor time-series data.',
    },
  ],
  technologies: [
    { name: 'Python', icon: '🐍' },
    { name: 'TensorFlow', icon: '🔶' },
    { name: 'Keras', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'scikit-learn', icon: '📊' },
    { name: 'BERT / Transformers', icon: '🤗' },
    { name: 'OpenCV', icon: '📷' },
    { name: 'Pandas', icon: '🐼' },
    { name: 'NumPy', icon: '🔢' },
    { name: 'Matplotlib', icon: '📈' },
    { name: 'Seaborn', icon: '🎨' },
    { name: 'XGBoost', icon: '⚡' },
    { name: 'SHAP', icon: '🔍' },
    { name: 'Streamlit', icon: '🌊' },
  ],
  whatYouGet: [
    'Complete Python source code (clean, commented)',
    'Real dataset used in the project',
    'Trained & saved model file (.pkl / .h5 / .pt)',
    'Working demo (Streamlit / Flask UI)',
    'IEEE base paper (for IEEE titles)',
    'Full project report (IEEE format)',
    'PowerPoint presentation (20 slides)',
    'README with setup & run instructions',
    'Virtual environment / requirements.txt',
    '3-day post-delivery support',
  ],
  degrees: ['BE CSE', 'BE IT', 'BTech CSE', 'MCA', 'MSc CS', 'MSc IT', 'M.Tech'],
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
      q: 'What are good machine learning final year project topics for 2026?',
      a: 'Top ML topics for 2026 include: Heart Disease Prediction (Random Forest), Fake News Detection (BERT + LSTM), Crop Disease Detection (ResNet-50), Brain Tumor Classification (CNN), Credit Card Fraud Detection (Isolation Forest), Customer Churn Prediction (XGBoost), Air Quality Forecasting (Stacked LSTM), and Sentiment Analysis (BERT). At Inno Projects Coimbatore, we have 120+ ready ML titles across healthcare, NLP, computer vision, and time-series domains.',
    },
    {
      q: 'What Python libraries do you use for ML projects?',
      a: 'We use TensorFlow and Keras for deep learning, PyTorch for research-grade models, scikit-learn for classical ML, HuggingFace Transformers for NLP, OpenCV for computer vision, Pandas and NumPy for data processing, XGBoost for gradient boosting, SHAP for explainability, and Streamlit for interactive demos.',
    },
    {
      q: 'How long does it take to get a machine learning project?',
      a: 'We deliver most machine learning final year projects within 12 hours of order confirmation. Complex deep learning projects may take up to 24 hours. Rush delivery is available for urgent submissions.',
    },
    {
      q: 'Do ML projects come with datasets?',
      a: 'Yes. Every machine learning project we deliver includes the full dataset used for training and testing, the pre-trained model file, and all preprocessing scripts. You receive a complete, reproducible project environment.',
    },
    {
      q: 'Are ML projects suitable for BE CSE final year?',
      a: 'Absolutely. We have 120+ ML project titles specifically designed for BE CSE, BTech CSE, MCA, and MSc CS final year requirements. Projects align with Anna University, Bharathiar University, and Amrita University syllabi.',
    },
    {
      q: 'How much does a machine learning final year project cost in Coimbatore?',
      a: 'Our machine learning projects are priced to be student-friendly and vary based on complexity, IEEE requirement, and delivery timeline. WhatsApp us at +91 9600309140 or use the button above for an instant quote.',
    },
  ],
  ctaTitle: 'Get Your ML Final Year Project Today',
  ctaDesc:
    'WhatsApp us now to get a machine learning project delivered to you in 12 hours — complete with source code, dataset, trained model, report, and PPT.',
};

export default function MachineLearningProjectsCoimbatore() {
  return <DomainPage data={data} />;
}
