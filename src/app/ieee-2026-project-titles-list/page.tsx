import type { Metadata } from 'next';
import ProjectIdeasPage, { type ProjectIdeasPageData } from '@/components/ProjectIdeasPage';

const siteUrl = 'https://www.innoprojects.tech';
const pageUrl = `${siteUrl}/ieee-2026-project-titles-list`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'IEEE 2026 Project Titles List | CSE ECE MCA IEEE Projects | Inno Projects',
  description:
    'Browse 300+ IEEE 2026 project titles for CSE, ECE, and MCA final year students. Latest ML, IoT, cybersecurity, and healthcare IEEE papers implemented. 12-hr delivery in Coimbatore. +91 9600309140.',
  keywords: [
    'ieee 2026 project titles',
    'ieee project titles list 2026',
    'ieee final year projects 2026',
    'ieee cse projects 2026',
    'ieee ece projects 2026',
    'ieee machine learning projects 2026',
    'ieee iot projects 2026',
    'ieee cybersecurity projects 2026',
    'ieee projects coimbatore',
    'latest ieee project titles',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'IEEE 2026 Project Titles List | CSE ECE MCA IEEE Projects | Inno Projects',
    description:
      '300+ IEEE 2026 project titles for CSE, ECE, MCA. Latest ML, IoT, cybersecurity, healthcare papers. Full IEEE documentation. 12-hr delivery. +91 9600309140.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'IEEE 2026 Project Titles List – Inno Projects Coimbatore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IEEE 2026 Project Titles List | Inno Projects',
    description: '300+ IEEE 2026 final year project titles. ML, IoT, cybersecurity, healthcare. Full documentation. 12-hr delivery. +91 9600309140.',
    images: ['/og-image.png'],
  },
};

const data: ProjectIdeasPageData = {
  badge: '300+ IEEE 2026 Titles · All Domains',
  h1: 'IEEE 2026 Project Titles — 300+ Latest IEEE Final Year Projects',
  subtitle:
    'The most up-to-date collection of IEEE 2026 project titles for CSE, ECE, and MCA students. Every title is mapped to a published IEEE paper (2024–2026) and implemented with full source code, IEEE-format report, and project documentation — delivered in 12 hours from Inno Projects, Coimbatore.',
  whatsappText: 'Hi!%20I%20need%20an%20IEEE%202026%20project%20title%20for%20my%20final%20year.',
  stats: [
    { value: '300+', label: 'IEEE 2026 Titles' },
    { value: '2024–2026', label: 'Paper Publication Year' },
    { value: '12-hr', label: 'Delivery' },
    { value: 'Full Docs', label: 'Report + Base Paper + PPT' },
  ],
  intro:
    'IEEE project titles are the gold standard for final year engineering projects at most colleges in India. For 2026, the most cited IEEE domains are machine learning and AI (IEEE Transactions on Neural Networks, IEEE Access), IoT and embedded systems (IEEE Internet of Things Journal, IEEE Sensors Journal), cybersecurity (IEEE Transactions on Information Forensics and Security), and healthcare technology (IEEE Journal of Biomedical and Health Informatics). At Inno Projects, Coimbatore, we maintain a live database of 300+ IEEE 2026 project titles with the corresponding base papers, implementation code, and complete documentation. Each project is implemented faithfully to the paper\'s methodology — not just inspired by it. Browse our curated list below and WhatsApp us to reserve your title.',
  categories: [
    {
      name: 'IEEE Machine Learning & AI 2026',
      projects: [
        {
          title: 'Federated Learning for Privacy-Preserving Medical Diagnosis',
          tech: 'Python, TensorFlow Federated, PySyft, MNIST Medical',
          difficulty: 'Advanced',
          domain: 'IEEE / Federated ML',
          desc: 'Implements federated learning across distributed hospital nodes to train a diagnostic ML model without sharing raw patient data, achieving comparable accuracy to centralised training — from IEEE Transactions on Neural Networks 2025.',
        },
        {
          title: 'Explainable AI for Credit Scoring using SHAP and LIME',
          tech: 'Python, XGBoost, SHAP, LIME, scikit-learn',
          difficulty: 'Intermediate',
          domain: 'IEEE / Explainable AI',
          desc: 'Builds an interpretable credit risk scoring model using XGBoost, then applies SHAP and LIME to explain individual predictions — directly addressing IEEE Access 2025 guidelines on fair lending AI.',
        },
        {
          title: 'Self-Supervised Contrastive Learning for Image Representations',
          tech: 'Python, PyTorch, SimCLR, STL-10 dataset',
          difficulty: 'Advanced',
          domain: 'IEEE / Self-Supervised Learning',
          desc: 'Implements SimCLR (Simple Framework for Contrastive Learning) for learning visual representations without labels, achieving 92% linear evaluation accuracy on STL-10 — based on IEEE TPAMI 2025.',
        },
        {
          title: 'Graph Neural Network for Social Network Fake Account Detection',
          tech: 'Python, PyTorch Geometric, GCN, SNAP dataset',
          difficulty: 'Advanced',
          domain: 'IEEE / Graph ML',
          desc: 'Detects fake social media accounts by modelling user interaction graphs with Graph Convolutional Networks, leveraging network topology features inaccessible to traditional ML — IEEE TNNLS 2026.',
        },
        {
          title: 'Vision Transformer (ViT) for Remote Sensing Image Classification',
          tech: 'Python, PyTorch, ViT, EuroSAT dataset',
          difficulty: 'Advanced',
          domain: 'IEEE / Remote Sensing',
          desc: 'Applies Vision Transformer architecture to satellite imagery classification (crop, urban, water, forest) on the EuroSAT dataset, outperforming CNN baselines — IEEE GRSL 2026.',
        },
        {
          title: 'Generative Adversarial Network for Medical Image Augmentation',
          tech: 'Python, TensorFlow, CycleGAN, MRI data',
          difficulty: 'Advanced',
          domain: 'IEEE / Generative AI',
          desc: 'Uses CycleGAN to synthesise realistic MRI images for data augmentation in small medical datasets, improving classifier accuracy by 8% on brain tumour detection — IEEE JBHI 2025.',
        },
      ],
    },
    {
      name: 'IEEE IoT & Embedded Systems 2026',
      projects: [
        {
          title: 'TinyML Anomaly Detection on ESP32 for Predictive Maintenance',
          tech: 'ESP32, TensorFlow Lite, Edge Impulse, vibration sensor',
          difficulty: 'Advanced',
          domain: 'IEEE / TinyML',
          desc: 'Deploys a compressed LSTM anomaly detection model onto ESP32 using TensorFlow Lite Micro to detect machine bearing faults from vibration data in real time without cloud connectivity — IEEE IoTJ 2026.',
        },
        {
          title: 'Blockchain-Secured IoT Data Integrity for Smart Grids',
          tech: 'Raspberry Pi, Ethereum, MQTT, Solidity, Python',
          difficulty: 'Advanced',
          domain: 'IEEE / Blockchain IoT',
          desc: 'Ensures tamper-proof logging of smart meter energy readings by hashing and anchoring sensor data to a private Ethereum blockchain — preventing data manipulation in smart grid billing — IEEE TII 2025.',
        },
        {
          title: 'Energy-Efficient Routing Protocol for WSN using Q-Learning',
          tech: 'MATLAB, LEACH, Q-learning, Wireless Sensor Networks',
          difficulty: 'Advanced',
          domain: 'IEEE / WSN',
          desc: 'Proposes a reinforcement learning–based cluster head selection algorithm for WSNs that extends network lifetime by 35% compared to LEACH — simulated in MATLAB — IEEE Sensors Journal 2026.',
        },
        {
          title: 'Fog-Computing Framework for Real-Time Traffic Monitoring',
          tech: 'Raspberry Pi, OpenCV, MQTT, InfluxDB, Grafana',
          difficulty: 'Intermediate',
          domain: 'IEEE / Edge Computing',
          desc: 'Processes traffic camera streams at the network edge using Raspberry Pi fog nodes, extracting vehicle count and speed metrics locally before summarising to a cloud Grafana dashboard — IEEE Access 2025.',
        },
        {
          title: 'NB-IoT Based Smart Water Meter for Urban Water Management',
          tech: 'NB-IoT module, Arduino, AWS IoT Core, PostgreSQL',
          difficulty: 'Intermediate',
          domain: 'IEEE / Smart City',
          desc: 'Transmits real-time water consumption data from residential meters over NB-IoT to AWS IoT Core, enabling leak detection and automated billing for municipal water utilities — IEEE IoTM 2025.',
        },
        {
          title: 'Indoor Localisation using BLE Beacons and Machine Learning',
          tech: 'Raspberry Pi, BLE beacons, Python, KNN, RSSI',
          difficulty: 'Intermediate',
          domain: 'IEEE / Localisation',
          desc: 'Estimates indoor position within 1.2-metre accuracy using RSSI readings from Bluetooth Low Energy beacons and a KNN classifier — enabling asset tracking in hospitals and warehouses — IEEE WCL 2026.',
        },
      ],
    },
    {
      name: 'IEEE Cybersecurity 2026',
      projects: [
        {
          title: 'Deep Learning–Based Ransomware Detection using API Call Sequences',
          tech: 'Python, LSTM, opcodes, VirusTotal dataset',
          difficulty: 'Advanced',
          domain: 'IEEE / Malware Detection',
          desc: 'Detects ransomware before encryption begins by modelling sequences of Windows API calls as time-series data with a Bidirectional LSTM, achieving 98.4% detection rate — IEEE TIFS 2026.',
        },
        {
          title: 'Zero-Trust Network Access Control using ML-Based Continuous Authentication',
          tech: 'Python, scikit-learn, behavioural biometrics, Flask',
          difficulty: 'Advanced',
          domain: 'IEEE / Zero-Trust',
          desc: 'Continuously authenticates users based on keystroke dynamics and mouse movement behavioural biometrics using Random Forest, invalidating sessions on anomaly detection — IEEE TDSC 2025.',
        },
        {
          title: 'Adversarial Attack and Defence for Deep Learning Image Classifiers',
          tech: 'Python, PyTorch, FGSM, PGD, adversarial training',
          difficulty: 'Advanced',
          domain: 'IEEE / Adversarial ML',
          desc: 'Generates adversarial examples using FGSM and PGD attacks on an ImageNet classifier, then implements adversarial training and input transformation defences — IEEE TNNLS 2025.',
        },
        {
          title: 'Homomorphic Encryption for Secure Cloud-Based ML Inference',
          tech: 'Python, TenSEAL, CKKS scheme, TensorFlow',
          difficulty: 'Advanced',
          domain: 'IEEE / Privacy-Preserving ML',
          desc: 'Performs neural network inference on encrypted user data using the CKKS homomorphic encryption scheme via TenSEAL, enabling privacy-preserving medical diagnosis on public cloud — IEEE TDSC 2026.',
        },
        {
          title: 'IoT Botnet Detection using Network Traffic Flow Features',
          tech: 'Python, scikit-learn, CICIoT2023 dataset, XGBoost',
          difficulty: 'Intermediate',
          domain: 'IEEE / IoT Security',
          desc: 'Identifies IoT botnet traffic (Mirai, Bashlite) by extracting 80 flow-level features from the CICIoT2023 dataset and training an XGBoost classifier with 99.2% accuracy — IEEE IoTJ 2026.',
        },
        {
          title: 'SQL Injection Detection using BERT-Based Sequence Classification',
          tech: 'Python, BERT, HuggingFace, Flask, web security',
          difficulty: 'Intermediate',
          domain: 'IEEE / Web Security',
          desc: 'Detects SQL injection payloads in HTTP request parameters by fine-tuning BERT as a binary sequence classifier on a labelled SQLi dataset — IEEE Access 2025.',
        },
      ],
    },
    {
      name: 'IEEE Healthcare Technology 2026',
      projects: [
        {
          title: 'Multi-Class Brain Tumour Detection from MRI using Attention U-Net',
          tech: 'Python, TensorFlow, Attention U-Net, BraTS dataset',
          difficulty: 'Advanced',
          domain: 'IEEE / Medical Imaging',
          desc: 'Segments and classifies brain tumour sub-regions (necrotic core, edema, enhancing tumour) from multi-modal MRI using Attention U-Net with Dice loss — IEEE JBHI 2026.',
        },
        {
          title: 'ECG Arrhythmia Classification using 1D CNN and Transformer',
          tech: 'Python, PyTorch, 1D CNN, PhysioNet MIT-BIH dataset',
          difficulty: 'Advanced',
          domain: 'IEEE / Cardiology',
          desc: 'Classifies five cardiac arrhythmia types from raw ECG signals using a hybrid 1D CNN + Transformer architecture, achieving 99.1% accuracy on MIT-BIH Arrhythmia Database — IEEE TBME 2025.',
        },
        {
          title: 'Federated Skin Lesion Classification for Dermatology AI',
          tech: 'Python, TensorFlow Federated, EfficientNet, ISIC dataset',
          difficulty: 'Advanced',
          domain: 'IEEE / Federated Healthcare',
          desc: 'Trains a skin lesion classifier (melanoma vs. benign) across federated dermatology clinic nodes using TensorFlow Federated without sharing patient images — IEEE JBHI 2025.',
        },
        {
          title: 'Drug-Drug Interaction Prediction using Knowledge Graph Embeddings',
          tech: 'Python, TransE, PyKEEN, DrugBank, Graph ML',
          difficulty: 'Advanced',
          domain: 'IEEE / Drug Discovery',
          desc: 'Predicts adverse drug-drug interactions by embedding the DrugBank knowledge graph using TransE and RotatE algorithms, achieving AUC of 0.94 on held-out test interactions — IEEE TCBB 2026.',
        },
        {
          title: 'Automated Glaucoma Detection from Fundus Images using Deep Learning',
          tech: 'Python, TensorFlow, EfficientNet, ORIGA dataset',
          difficulty: 'Intermediate',
          domain: 'IEEE / Ophthalmology',
          desc: 'Detects glaucomatous optic disc changes in retinal fundus photographs using EfficientNet-B3 fine-tuned on the ORIGA dataset, with cup-to-disc ratio heatmap overlay — IEEE TNSRE 2026.',
        },
        {
          title: 'Sepsis Prediction in ICU Patients using Temporal Convolutional Network',
          tech: 'Python, PyTorch, TCN, MIMIC-III dataset',
          difficulty: 'Advanced',
          domain: 'IEEE / Critical Care AI',
          desc: 'Predicts sepsis onset 6 hours in advance from ICU vital signs and lab results using a Temporal Convolutional Network on the MIMIC-III clinical database — IEEE JBHI 2025.',
        },
      ],
    },
  ],
  whyInno: [
    '300+ IEEE titles mapped to real 2024–2026 published papers — not just inspired by them',
    'Implementation faithful to the paper\'s methodology, dataset, and evaluation metrics',
    'IEEE-format project report matching the base paper\'s citation style',
    'Base paper PDF, implementation code, and full documentation in one delivery',
    '12-hour delivery — submit your IEEE project before your college deadline',
    'Guidance on explaining your paper\'s contribution during project viva',
  ],
  faqs: [
    {
      q: 'What is an IEEE project and why do colleges require it?',
      a: 'An IEEE project is a final year project that implements the methodology from a paper published in an IEEE journal or conference (such as IEEE Access, IEEE Transactions on Neural Networks, or IEEE Sensors Journal). Colleges in India, especially affiliated with Anna University and Bharathiar University, prefer IEEE projects because they ensure academic rigour, up-to-date techniques, and a verifiable base paper for the examiner.',
    },
    {
      q: 'Which IEEE journals are most popular for CSE and ECE final year projects in 2026?',
      a: 'For CSE: IEEE Access (open access, widely accepted), IEEE Transactions on Neural Networks and Learning Systems (ML), IEEE Transactions on Information Forensics and Security (cybersecurity). For ECE: IEEE Sensors Journal, IEEE Internet of Things Journal, IEEE Transactions on Industrial Electronics. For healthcare: IEEE Journal of Biomedical and Health Informatics.',
    },
    {
      q: 'How much does an IEEE final year project cost at Inno Projects?',
      a: 'IEEE project pricing varies based on domain complexity, paper publication year (2025–2026 papers cost more than 2023), and delivery timeline. WhatsApp us at +91 9600309140 with your preferred title or domain and we will give you an instant, transparent quote. We are competitively priced for student budgets.',
    },
    {
      q: 'Will the project implementation exactly match the IEEE paper results?',
      a: 'We implement the paper\'s architecture, dataset, and evaluation protocol faithfully. Results may vary slightly from the published paper due to random seeds, framework version differences, and hardware, but we aim for results within 2–3% of the reported accuracy. We document all implementation details transparently.',
    },
    {
      q: 'Can I change the dataset or extend the IEEE paper for my project?',
      a: 'Yes, and many college guides prefer it. We can swap the dataset (e.g., replace CIFAR-10 with a local dataset), add a comparison baseline, extend to a new domain, or add a web UI not in the original paper. These extensions make your project original and harder for the examiner to question. WhatsApp us to discuss customisation.',
    },
  ],
  ctaTitle: 'Claim Your IEEE 2026 Project Title Today',
  ctaDesc:
    'WhatsApp us your preferred IEEE domain or a specific title and we will match it to a 2024–2026 IEEE paper, implement it completely, and deliver with full documentation within 12 hours.',
};

export default function Ieee2026ProjectTitlesList() {
  return <ProjectIdeasPage data={data} />;
}
