import type { Metadata } from 'next';
import DomainPage, { type DomainPageData } from '@/components/DomainPage';

const siteUrl = 'https://www.innoprojects.in';
const pageUrl = `${siteUrl}/ieee-projects-coimbatore-2026`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'IEEE Projects in Coimbatore 2026 | Inno Projects',
  description:
    'IEEE base paper projects in Coimbatore 2026. Implementation of 2024–2025 IEEE journal papers across CSE, ECE, ML, IoT, blockchain, and cloud computing. Full source code, paper, report, and PPT delivered in 12 hours. Call +91 9600309140.',
  keywords: [
    'IEEE projects coimbatore 2026',
    'ieee project center coimbatore',
    'ieee base paper implementation coimbatore',
    'ieee 2025 projects coimbatore',
    'ieee cse project coimbatore',
    'ieee machine learning project coimbatore',
    'ieee iot project coimbatore',
    'ieee blockchain project coimbatore',
    'final year ieee project coimbatore',
    'ieee project with source code coimbatore',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'IEEE Projects in Coimbatore 2026 | Inno Projects',
    description:
      'IEEE base paper implementations in Coimbatore 2026. CSE, ECE, ML, IoT, blockchain, cloud. Original paper + full implementation + report. 12-hr delivery. +91 9600309140.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'IEEE Projects Coimbatore 2026 – Inno Projects' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IEEE Projects in Coimbatore 2026 | Inno Projects',
    description: 'IEEE base paper implementations in Coimbatore. ML, IoT, cloud, blockchain. 12-hr delivery. +91 9600309140.',
    images: ['/og-image.png'],
  },
};

const data: DomainPageData = {
  badge: 'IEEE Projects · Coimbatore 2026',
  h1: 'IEEE Projects in Coimbatore 2026',
  subtitle:
    'Implement publication-quality IEEE journal papers as your final year project. Inno Projects Coimbatore maintains a curated library of 2024–2025 IEEE Transactions and Access papers across machine learning, IoT, cloud, blockchain, and NLP domains — delivered with original paper, complete implementation, comparison results, and formatted documentation in 12 hours.',
  whatsappText: 'Hi!%20I%20need%20an%20IEEE%20project%20in%20Coimbatore%20for%202026.',
  stats: [
    { value: '300+', label: 'IEEE Titles' },
    { value: '2024–2025', label: 'IEEE Papers' },
    { value: '12-hr', label: 'Delivery' },
    { value: 'All Domains', label: 'Coverage' },
  ],
  intro:
    'IEEE-based final year projects are the gold standard for engineering students at Anna University, Bharathiar University, and Amrita University affiliated colleges. At Inno Projects Coimbatore, we specialise in faithfully implementing IEEE Transactions, IEEE Access, and Elsevier journal papers as runnable, documented projects. Our library includes papers from IEEE Transactions on Neural Networks, IEEE Internet of Things Journal, IEEE Transactions on Information Forensics and Security, IEEE Transactions on Industrial Informatics, and more. Every IEEE project we deliver includes the original base paper, a complete working implementation matching the paper\'s methodology, a comparison table of baseline versus proposed results, and a project report in IEEE double-column format. We have successfully delivered 300+ IEEE projects to students across Coimbatore, helping them clear reviews and viva with confidence.',
  projectTitles: [
    {
      title: 'Federated Learning for Privacy-Preserving Medical Image Classification',
      tech: 'Python, TensorFlow Federated, MRI Dataset',
      desc: 'Implements federated learning across distributed hospital nodes to classify brain tumors without sharing raw patient MRI data, based on IEEE Transactions on Medical Imaging 2024.',
    },
    {
      title: 'Anomaly Detection in IoT Networks using Autoencoder LSTM',
      tech: 'Python, Keras, LSTM Autoencoder, MQTT',
      desc: 'Detects anomalous network traffic patterns in IoT environments using an LSTM-based autoencoder with reconstruction error thresholding, per IEEE Internet of Things Journal 2024.',
    },
    {
      title: 'Blockchain-Enabled Secure Data Sharing in Smart Healthcare',
      tech: 'Ethereum, Solidity, IPFS, Python',
      desc: 'Decentralised patient data sharing system using Ethereum smart contracts and IPFS for encrypted off-chain storage, based on IEEE Transactions on Information Forensics 2024.',
    },
    {
      title: 'Deep Reinforcement Learning for Autonomous Vehicle Lane Keeping',
      tech: 'Python, OpenAI Gym, PPO, CARLA Simulator',
      desc: 'Trains a Proximal Policy Optimisation agent to perform lane-keeping manoeuvres in the CARLA driving simulator, implementing a 2024 IEEE Transactions on Intelligent Vehicles paper.',
    },
    {
      title: 'Multi-Label Text Classification using Hierarchical Attention Networks',
      tech: 'Python, PyTorch, HAN, Reuters Dataset',
      desc: 'Implements Hierarchical Attention Network for multi-label document classification on the Reuters-21578 dataset, replicating results from IEEE Transactions on Knowledge and Data Engineering.',
    },
    {
      title: 'Energy-Efficient Task Scheduling in Cloud-Edge Continuum',
      tech: 'Python, SimPy, Genetic Algorithm, OpenStack',
      desc: 'Genetic-algorithm-based task scheduler that minimises energy consumption and latency across heterogeneous cloud and edge nodes, per IEEE Transactions on Cloud Computing 2025.',
    },
    {
      title: 'GAN-Based Synthetic Medical Data Generation for Class Imbalance',
      tech: 'Python, PyTorch, CTGAN, scikit-learn',
      desc: 'Uses Conditional Tabular GAN to synthesise minority class medical records, addressing class imbalance in diabetes prediction, following IEEE Journal of Biomedical and Health Informatics.',
    },
    {
      title: 'Smart Grid Fault Detection using Graph Neural Networks',
      tech: 'Python, PyTorch Geometric, GCN, IEEE 14-Bus',
      desc: 'Applies Graph Convolutional Networks to power grid topology graphs for real-time fault detection and classification on the IEEE 14-Bus benchmark dataset.',
    },
    {
      title: 'Named Entity Recognition for Legal Documents using BiLSTM-CRF',
      tech: 'Python, spaCy, BiLSTM, CRF, Legal-BERT',
      desc: 'Extracts legal entities (parties, dates, statutes) from contract texts using a BiLSTM-CRF model pre-trained with Legal-BERT embeddings, per IEEE Access 2024.',
    },
    {
      title: 'Secure Image Steganography using Deep Learning and Encryption',
      tech: 'Python, TensorFlow, AES-256, CNN',
      desc: 'Hides secret messages within cover images using a CNN-based encoder-decoder trained to minimise perceptual distortion, with AES-256 payload encryption before embedding.',
    },
  ],
  technologies: [
    { name: 'Python', icon: '🐍' },
    { name: 'TensorFlow / Keras', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'Solidity / Ethereum', icon: '🔗' },
    { name: 'IPFS', icon: '🌐' },
    { name: 'scikit-learn', icon: '📊' },
    { name: 'OpenCV', icon: '📷' },
    { name: 'BERT / Transformers', icon: '🤗' },
    { name: 'PyTorch Geometric', icon: '🕸️' },
    { name: 'MATLAB', icon: '📐' },
    { name: 'AWS / Azure', icon: '☁️' },
    { name: 'MQTT / IoT', icon: '📡' },
    { name: 'OpenAI Gym', icon: '🎮' },
    { name: 'SimPy', icon: '⚙️' },
  ],
  whatYouGet: [
    'Original IEEE base paper (PDF)',
    'Complete working implementation source code',
    'Trained model / simulation output files',
    'Result comparison table (baseline vs proposed)',
    'Full project report in IEEE double-column format',
    'PowerPoint presentation with paper highlights',
    'Dataset used and preprocessing scripts',
    'Review documentation (synopsis, abstract)',
    'README with step-by-step execution guide',
    '3-day post-delivery support via WhatsApp',
  ],
  degrees: ['BE CSE', 'BE IT', 'BE ECE', 'BTech CSE', 'MCA', 'MSc CS', 'M.Tech', 'ME CSE'],
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
      q: 'What is an IEEE base paper project?',
      a: 'An IEEE base paper project involves implementing the methodology proposed in a published IEEE journal or conference paper as your final year project. You reproduce (and sometimes extend) the experiments described in the paper, compare your results with the paper\'s reported results, and submit this as your project. This approach is widely accepted by Anna University and Bharathiar University affiliated colleges.',
    },
    {
      q: 'What IEEE journals and years do you cover?',
      a: 'We cover papers from IEEE Transactions on Neural Networks, IEEE Internet of Things Journal, IEEE Transactions on Information Forensics and Security, IEEE Transactions on Cloud Computing, IEEE Transactions on Industrial Informatics, IEEE Access, and several Elsevier journals. Our library focuses on 2024 and 2025 papers to ensure your project is current.',
    },
    {
      q: 'Can I choose my own IEEE paper for implementation?',
      a: 'Yes. If you have already selected an IEEE paper you want implemented, share the paper with us on WhatsApp and we will assess feasibility and provide a quote. Alternatively, share your domain of interest and we will suggest three to five suitable papers from our library.',
    },
    {
      q: 'Do IEEE projects score better in college evaluations?',
      a: 'Generally yes. College review panels and viva committees at Anna University and Bharathiar University-affiliated colleges respond positively to IEEE-based projects because they demonstrate research exposure and academic rigour. The original paper also provides a ready theoretical background section for your project report.',
    },
    {
      q: 'Will my IEEE project exactly reproduce the paper results?',
      a: 'We implement the paper\'s proposed methodology faithfully. Minor differences in results can occur due to dataset version differences, random seed variation, or hyperparameter sensitivity — this is normal and expected even in academic replications. We document all such differences transparently in the comparison section of your report.',
    },
    {
      q: 'How much do IEEE projects cost in Coimbatore?',
      a: 'IEEE project pricing depends on the domain, complexity of the implementation, and whether you need hardware components (for ECE/IoT papers). Software-only ML and web papers are priced competitively. WhatsApp us at +91 9600309140 with the paper title or domain and we will give you an instant quote.',
    },
  ],
  ctaTitle: 'Get Your IEEE Project Implemented in 12 Hours',
  ctaDesc:
    'WhatsApp us your IEEE paper or domain preference. We will implement the proposed methodology, deliver complete source code, comparison results, IEEE-format report, and PPT — all within 12 hours.',
};

export default function IEEEProjectsCoimbatore2026() {
  return <DomainPage data={data} />;
}
