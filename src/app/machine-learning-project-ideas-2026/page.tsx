import type { Metadata } from 'next';
import ProjectIdeasPage, { type ProjectIdeasPageData } from '@/components/ProjectIdeasPage';

const siteUrl = 'https://www.innoprojects.in';
const pageUrl = `${siteUrl}/machine-learning-project-ideas-2026`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Machine Learning Project Ideas 2026 | Final Year ML Projects',
  description:
    'Explore 120+ machine learning project ideas for final year 2026. Computer vision, NLP, healthcare ML, and predictive analytics. Python, TensorFlow, BERT. 12-hr delivery in Coimbatore. Call +91 9600309140.',
  keywords: [
    'machine learning project ideas 2026',
    'ml project ideas for final year',
    'ml project topics 2026',
    'deep learning project ideas',
    'computer vision project ideas',
    'nlp project ideas for students',
    'tensorflow project ideas',
    'python machine learning projects',
    'healthcare ml project ideas',
    'machine learning final year project coimbatore',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'Machine Learning Project Ideas 2026 | Final Year ML Projects | Inno Projects',
    description:
      '120+ ML project ideas for final year 2026. CV, NLP, healthcare, predictive analytics. Python, TensorFlow, BERT, PyTorch. 12-hr delivery. +91 9600309140.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Machine Learning Project Ideas 2026 – Inno Projects Coimbatore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Machine Learning Project Ideas 2026 | Inno Projects',
    description: '120+ ML project ideas for final year 2026. Python, TensorFlow, BERT, PyTorch. 12-hr delivery. +91 9600309140.',
    images: ['/og-image.png'],
  },
};

const data: ProjectIdeasPageData = {
  badge: '120+ ML Project Ideas · Updated 2026',
  h1: 'Machine Learning Project Ideas for Final Year 2026',
  subtitle:
    'Browse 120+ curated machine learning project ideas across computer vision, NLP, healthcare, and predictive analytics. Every project comes with Python source code, real datasets, a trained model, and full documentation — delivered in 12 hours from Inno Projects, Coimbatore.',
  whatsappText: 'Hi!%20I%20need%20a%20Machine%20Learning%20project%20idea%20for%20my%20final%20year.',
  stats: [
    { value: '120+', label: 'ML Project Titles' },
    { value: 'Python Stack', label: 'TensorFlow · PyTorch · sklearn' },
    { value: '12-hr', label: 'Delivery' },
    { value: 'IEEE', label: 'Support Available' },
  ],
  intro:
    'Machine learning remains the most in-demand domain for final year engineering projects in 2026. At Inno Projects, Coimbatore, we have curated 120+ ML project ideas spanning computer vision (YOLO, ResNet, OpenCV), natural language processing (BERT, GPT, LSTM), healthcare and medical imaging (disease prediction, MRI analysis), and predictive analytics (time-series forecasting, classification, regression). Every idea on this list can be turned into a fully working, submission-ready project within 12 hours — complete with Python code, real dataset, trained model file, IEEE-format report, and PPT. Whether you are a BE CSE, MCA, or MSc CS student, we have the right ML project for your skill level and college requirements.',
  categories: [
    {
      name: 'Computer Vision Projects',
      projects: [
        {
          title: 'Real-Time Face Mask Detection using YOLOv8',
          tech: 'Python, YOLOv8, OpenCV, PyTorch',
          difficulty: 'Intermediate',
          domain: 'Computer Vision',
          desc: 'Detects whether individuals in a live video stream are wearing face masks using YOLOv8 object detection. Achieves 97% mAP on a custom-annotated dataset of 5,000+ images.',
        },
        {
          title: 'Pothole Detection in Road Images using Faster R-CNN',
          tech: 'Python, PyTorch, Faster R-CNN, torchvision',
          difficulty: 'Advanced',
          domain: 'Computer Vision',
          desc: 'Identifies and localises road potholes from dashcam images using Faster R-CNN, enabling automated infrastructure quality reporting for smart city applications.',
        },
        {
          title: 'Plant Leaf Disease Classification using ResNet-50',
          tech: 'Python, TensorFlow, ResNet-50, Keras',
          difficulty: 'Intermediate',
          domain: 'Computer Vision',
          desc: 'Classifies 38 plant diseases from leaf photographs with 96% accuracy using ResNet-50 transfer learning on the PlantVillage dataset of 54,000 images.',
        },
        {
          title: 'Drowsy Driver Detection using CNN and Facial Landmarks',
          tech: 'Python, OpenCV, dlib, Keras',
          difficulty: 'Intermediate',
          domain: 'Computer Vision',
          desc: 'Monitors driver eye aspect ratio in real time using facial landmark detection and a CNN classifier to trigger alerts when drowsiness is detected.',
        },
        {
          title: 'Signature Verification using Siamese Neural Network',
          tech: 'Python, PyTorch, Siamese Network',
          difficulty: 'Advanced',
          domain: 'Computer Vision',
          desc: 'Verifies handwritten signatures by learning a similarity metric between signature pairs using a Siamese network, achieving 94% verification accuracy on the CEDAR dataset.',
        },
        {
          title: 'Crowd Density Estimation using CSRNet',
          tech: 'Python, PyTorch, CSRNet, OpenCV',
          difficulty: 'Advanced',
          domain: 'Computer Vision',
          desc: 'Estimates crowd count and density maps from surveillance images using CSRNet (Congested Scene Recognition Network), applicable to smart city crowd management.',
        },
      ],
    },
    {
      name: 'Natural Language Processing Projects',
      projects: [
        {
          title: 'Fake News Detection using BERT Fine-Tuning',
          tech: 'Python, HuggingFace Transformers, BERT, PyTorch',
          difficulty: 'Intermediate',
          domain: 'NLP',
          desc: 'Fine-tunes a pre-trained BERT model on the LIAR dataset to classify news articles as real or fake, achieving 91% accuracy with attention-based explainability.',
        },
        {
          title: 'Multilingual Sentiment Analysis using XLM-RoBERTa',
          tech: 'Python, HuggingFace, XLM-RoBERTa, Flask',
          difficulty: 'Advanced',
          domain: 'NLP',
          desc: 'Performs sentiment classification across English, Tamil, and Hindi product reviews using XLM-RoBERTa, enabling cross-lingual opinion mining for e-commerce platforms.',
        },
        {
          title: 'Resume Screening and Job Matching using NLP',
          tech: 'Python, spaCy, TF-IDF, cosine similarity',
          difficulty: 'Intermediate',
          domain: 'NLP',
          desc: 'Automatically ranks candidate resumes against a job description using TF-IDF vectorisation and cosine similarity, with skill extraction via spaCy NER.',
        },
        {
          title: 'Medical Question Answering using BioBERT',
          tech: 'Python, BioBERT, HuggingFace, Streamlit',
          difficulty: 'Advanced',
          domain: 'NLP',
          desc: 'Answers clinical questions from PubMed abstracts using BioBERT fine-tuned on the BioASQ dataset, with a Streamlit interface for healthcare professional use.',
        },
        {
          title: 'Automated Text Summarisation using T5 Transformer',
          tech: 'Python, HuggingFace T5, PyTorch, ROUGE',
          difficulty: 'Intermediate',
          domain: 'NLP',
          desc: 'Generates concise abstractive summaries of long news articles and research papers using the T5 (Text-to-Text Transfer Transformer) model, evaluated with ROUGE scores.',
        },
        {
          title: 'Hate Speech Detection on Social Media using RoBERTa',
          tech: 'Python, RoBERTa, Transformers, scikit-learn',
          difficulty: 'Intermediate',
          domain: 'NLP',
          desc: 'Detects and categorises hate speech, offensive language, and neutral content in tweets using a fine-tuned RoBERTa model with class-weighted training.',
        },
      ],
    },
    {
      name: 'Healthcare & Medical ML Projects',
      projects: [
        {
          title: 'Diabetic Retinopathy Grading using EfficientNet-B4',
          tech: 'Python, TensorFlow, EfficientNet, OpenCV',
          difficulty: 'Advanced',
          domain: 'Healthcare ML',
          desc: 'Grades diabetic retinopathy severity (0–4) from fundus photographs using EfficientNet-B4 with Grad-CAM visualisation to highlight affected retinal regions.',
        },
        {
          title: 'Breast Cancer Classification using Support Vector Machine',
          tech: 'Python, scikit-learn, SVM, SHAP',
          difficulty: 'Beginner',
          domain: 'Healthcare ML',
          desc: 'Classifies breast tumours as malignant or benign using SVM on the Wisconsin Breast Cancer dataset, with SHAP values explaining the most influential features.',
        },
        {
          title: 'COVID-19 Detection from Chest X-Rays using VGG-16',
          tech: 'Python, Keras, VGG-16, Grad-CAM',
          difficulty: 'Intermediate',
          domain: 'Healthcare ML',
          desc: 'Distinguishes COVID-19, pneumonia, and normal chest X-rays using VGG-16 transfer learning with Grad-CAM heatmaps for clinical interpretation.',
        },
        {
          title: 'Alzheimer\'s Disease Detection from MRI using 3D CNN',
          tech: 'Python, TensorFlow, 3D CNN, ADNI dataset',
          difficulty: 'Advanced',
          domain: 'Healthcare ML',
          desc: 'Classifies Alzheimer\'s disease stages (CN, MCI, AD) from volumetric MRI scans using a 3D convolutional neural network trained on the ADNI dataset.',
        },
        {
          title: 'Heart Disease Risk Prediction using Ensemble Methods',
          tech: 'Python, scikit-learn, XGBoost, SHAP',
          difficulty: 'Beginner',
          domain: 'Healthcare ML',
          desc: 'Predicts 10-year cardiovascular disease risk by ensembling Random Forest, XGBoost, and Logistic Regression on the Framingham Heart Study dataset.',
        },
        {
          title: 'Mental Health Disorder Prediction from Social Media Text',
          tech: 'Python, BERT, Reddit dataset, scikit-learn',
          difficulty: 'Intermediate',
          domain: 'Healthcare ML',
          desc: 'Identifies signs of depression, anxiety, and PTSD from Reddit posts using fine-tuned BERT, contributing to early mental health intervention systems.',
        },
      ],
    },
    {
      name: 'Predictive Analytics Projects',
      projects: [
        {
          title: 'Stock Price Forecasting using LSTM with Attention',
          tech: 'Python, TensorFlow, LSTM, yfinance',
          difficulty: 'Advanced',
          domain: 'Predictive Analytics',
          desc: 'Forecasts next-day closing prices of NSE stocks using a stacked LSTM network with self-attention mechanism, trained on 5 years of historical OHLCV data.',
        },
        {
          title: 'E-Commerce Sales Forecasting using Prophet and XGBoost',
          tech: 'Python, Facebook Prophet, XGBoost, Pandas',
          difficulty: 'Intermediate',
          domain: 'Predictive Analytics',
          desc: 'Predicts weekly sales demand for product categories using Facebook Prophet for trend decomposition and XGBoost for residual modelling, reducing forecast error by 23%.',
        },
        {
          title: 'Employee Attrition Prediction using Random Forest',
          tech: 'Python, scikit-learn, Random Forest, SHAP',
          difficulty: 'Beginner',
          domain: 'Predictive Analytics',
          desc: 'Identifies employees at risk of leaving using Random Forest on IBM HR Analytics data, with SHAP explanations to surface actionable retention strategies.',
        },
        {
          title: 'Energy Consumption Prediction for Smart Buildings',
          tech: 'Python, TensorFlow, GRU, time-series',
          difficulty: 'Intermediate',
          domain: 'Predictive Analytics',
          desc: 'Predicts hourly energy consumption of commercial buildings using GRU (Gated Recurrent Unit) networks on multi-variate sensor and weather data.',
        },
        {
          title: 'Customer Lifetime Value Prediction using Gradient Boosting',
          tech: 'Python, LightGBM, scikit-learn, Pandas',
          difficulty: 'Intermediate',
          domain: 'Predictive Analytics',
          desc: 'Estimates future revenue per customer using LightGBM on RFM (Recency, Frequency, Monetary) features and purchase behaviour, enabling targeted marketing.',
        },
        {
          title: 'Loan Default Prediction using Logistic Regression and XGBoost',
          tech: 'Python, scikit-learn, XGBoost, imbalanced-learn',
          difficulty: 'Beginner',
          domain: 'Predictive Analytics',
          desc: 'Predicts loan default probability using Logistic Regression and XGBoost on credit bureau data, handling class imbalance with SMOTE to achieve 88% recall on defaulters.',
        },
      ],
    },
  ],
  whyInno: [
    '12-hour delivery — project ready before your deadline, guaranteed',
    'Every project includes real datasets, not synthetic or dummy data',
    'IEEE-aligned base papers provided for journal-track submissions',
    'Full source code with comments, requirements.txt, and setup instructions',
    'Post-delivery support for 3 days — we help you present and explain',
    '600+ projects delivered annually to students across Coimbatore colleges',
  ],
  faqs: [
    {
      q: 'What are the best machine learning project ideas for final year 2026?',
      a: 'Top ML ideas for 2026 include: Fake News Detection using BERT, Plant Disease Classification using ResNet-50, Diabetic Retinopathy Grading using EfficientNet, Stock Price Forecasting using LSTM with Attention, and Real-Time Face Mask Detection using YOLOv8. At Inno Projects Coimbatore, we have 120+ curated ML ideas across computer vision, NLP, healthcare, and predictive analytics — all submission-ready.',
    },
    {
      q: 'Which ML framework should I use for my final year project?',
      a: 'For deep learning (CNN, LSTM, Transformers), TensorFlow/Keras or PyTorch are the industry standard. For classical ML (SVM, Random Forest, XGBoost), scikit-learn is ideal. For NLP, HuggingFace Transformers gives access to BERT, RoBERTa, and T5. We can build your project in any of these frameworks based on your college\'s preference.',
    },
    {
      q: 'Can I get an ML project with an IEEE base paper?',
      a: 'Yes. We have 80+ IEEE base papers mapped to ML project titles from journals like IEEE Transactions on Neural Networks, IEEE Access, and Pattern Recognition Letters (2024–2026). We include the base paper, implement the methodology, and prepare a full project report in IEEE format.',
    },
    {
      q: 'How long does it take to get a machine learning final year project from Inno Projects?',
      a: 'Most machine learning projects are delivered within 12 hours of order confirmation. Deep learning projects with large datasets (MRI, 3D CNN) may take 18–24 hours. We also offer same-day express delivery. WhatsApp us at +91 9600309140 to confirm availability.',
    },
    {
      q: 'Do your ML projects work on my laptop, or do I need a GPU server?',
      a: 'All our ML projects are optimised to run on standard student laptops (8GB RAM, no dedicated GPU required for most projects). For deep learning models, we pre-train and save the model file (.h5 / .pt) so you run inference locally without retraining. We also provide Google Colab notebooks for GPU-intensive training.',
    },
  ],
  ctaTitle: 'Get Your ML Final Year Project Today',
  ctaDesc:
    'WhatsApp us your preferred ML topic and we will deliver a complete, submission-ready project within 12 hours — source code, dataset, model, report, and PPT included.',
};

export default function MachineLearningProjectIdeas2026() {
  return <ProjectIdeasPage data={data} />;
}
