import type { Metadata } from 'next';
import DomainPage, { type DomainPageData } from '@/components/DomainPage';

const siteUrl = 'https://www.innoprojects.in';
const pageUrl = `${siteUrl}/ece-final-year-projects-coimbatore`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'ECE Final Year Projects in Coimbatore 2026 | Inno Projects',
  description:
    'ECE final year projects in Coimbatore 2026. 150+ project titles in embedded systems, IoT, VLSI, Arduino, Raspberry Pi, and signal processing. IEEE papers available. Full source code, circuit diagrams, report, and PPT in 12 hours. Call +91 9600309140.',
  keywords: [
    'ECE final year projects coimbatore',
    'ece project coimbatore 2026',
    'embedded systems project coimbatore',
    'iot project coimbatore',
    'vlsi project coimbatore',
    'arduino project coimbatore',
    'raspberry pi project coimbatore',
    'signal processing project coimbatore',
    'ieee ece project coimbatore',
    'be ece project center coimbatore',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'Inno Projects',
    title: 'ECE Final Year Projects in Coimbatore 2026 | Inno Projects',
    description:
      '150+ ECE final year project titles in Coimbatore. Embedded, IoT, VLSI, Arduino, Raspberry Pi, signal processing. IEEE support. 12-hr delivery. +91 9600309140.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ECE Final Year Projects Coimbatore – Inno Projects' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ECE Final Year Projects in Coimbatore 2026 | Inno Projects',
    description: '150+ ECE project titles in Coimbatore. Embedded, IoT, VLSI, Arduino, Raspberry Pi. 12-hr delivery. +91 9600309140.',
    images: ['/og-image.png'],
  },
};

const data: DomainPageData = {
  badge: 'ECE Projects · Coimbatore 2026',
  h1: 'ECE Final Year Projects in Coimbatore',
  subtitle:
    'From microcontroller-based embedded systems to VLSI designs and IoT sensor networks, Inno Projects delivers complete ECE final year projects in Coimbatore. Get working hardware prototypes, simulation files, circuit diagrams, IEEE base papers, and full documentation — all delivered within 12 hours.',
  whatsappText: 'Hi!%20I%20need%20an%20ECE%20final%20year%20project%20in%20Coimbatore.',
  stats: [
    { value: '150+', label: 'ECE Project Titles' },
    { value: 'Arduino & RPi', label: 'Platforms' },
    { value: '12-hr', label: 'Delivery' },
    { value: 'IEEE Support', label: 'Available' },
  ],
  intro:
    'Electronics and Communication Engineering students need final year projects that demonstrate real hardware competency alongside software control logic. At Inno Projects Coimbatore, we specialise in ECE project development across embedded systems, IoT, VLSI, digital signal processing, and wireless communication. Every project is fully simulated or prototyped — you receive Arduino / Raspberry Pi code, Proteus simulation files or Xilinx FPGA code (for VLSI), circuit schematics, a bill of materials, and complete project documentation. Whether your college requires an IEEE-standard paper or a working hardware demo for viva, we ensure your project is ready to present with confidence. We have successfully delivered ECE final year projects to students from PSG, CIT, SREC, SNS, and Amrita colleges in Coimbatore.',
  projectTitles: [
    {
      title: 'Smart Home Automation System using ESP32 and Alexa',
      tech: 'ESP32, Arduino IDE, AWS IoT, Amazon Alexa',
      desc: 'Voice-controlled smart home system using ESP32 Wi-Fi module integrated with Amazon Alexa for controlling lights, fans, and appliances via MQTT over AWS IoT.',
    },
    {
      title: 'Automatic Street Light Control with Accident Detection',
      tech: 'Arduino Mega, LDR Sensor, Vibration Sensor, GSM',
      desc: 'Adaptive street lighting that dims based on ambient light and sends an SMS alert to emergency services upon detecting vibration patterns consistent with road accidents.',
    },
    {
      title: 'Health Monitoring Wearable with Heart Rate and SpO2',
      tech: 'Arduino Nano, MAX30102, OLED Display, Bluetooth',
      desc: 'Wearable IoT device measuring heart rate and blood oxygen (SpO2) using MAX30102 sensor, displaying readings on OLED and streaming data to a mobile app via Bluetooth.',
    },
    {
      title: 'FPGA-Based Image Edge Detection using Sobel Operator',
      tech: 'VHDL, Xilinx Vivado, Sobel Filter, FPGA',
      desc: 'Hardware implementation of Sobel edge detection on an FPGA, processing image pixel data in parallel at clock speeds far exceeding software implementations.',
    },
    {
      title: 'Obstacle Avoidance Robot using Ultrasonic Sensors',
      tech: 'Arduino Uno, HC-SR04, L298N Motor Driver, C',
      desc: 'Autonomous wheeled robot that detects obstacles using three ultrasonic sensors and navigates around them using a real-time path-planning decision tree algorithm.',
    },
    {
      title: 'LoRa-Based Long-Range Agricultural Monitoring System',
      tech: 'Raspberry Pi, LoRa SX1276, DHT22, Soil Sensor',
      desc: 'Low-power farm monitoring network using LoRa radios to transmit soil moisture, temperature, and humidity data over 5 km to a Raspberry Pi gateway dashboard.',
    },
    {
      title: 'Digital Filter Design for ECG Signal Denoising',
      tech: 'MATLAB, FIR/IIR Filters, DSP Toolbox',
      desc: 'Designs and compares FIR and IIR bandpass filters in MATLAB to remove baseline wander and powerline noise from raw ECG signals while preserving QRS complex fidelity.',
    },
    {
      title: 'Solar Panel Tracking System using Dual-Axis Servo',
      tech: 'Arduino, LDR Sensors, Servo Motors, LCD',
      desc: 'Dual-axis solar tracker that uses four LDR sensors to compute sun position and adjusts servo angles to maximise panel irradiance, increasing efficiency by up to 35%.',
    },
    {
      title: 'Face Recognition Attendance System using Raspberry Pi',
      tech: 'Raspberry Pi 4, OpenCV, face_recognition, Python',
      desc: 'Automated attendance system that identifies registered students from a Pi camera stream using dlib face recognition and logs attendance to a CSV file with timestamps.',
    },
    {
      title: 'RFID-Based Toll Collection and Vehicle Tracking System',
      tech: 'Arduino, MFRC522 RFID, ESP8266, MySQL',
      desc: 'Automated toll plaza system that reads vehicle RFID tags, deducts wallet balance, raises the gate via servo motor, and logs transaction records to a cloud MySQL database.',
    },
  ],
  technologies: [
    { name: 'Arduino', icon: '🔵' },
    { name: 'Raspberry Pi', icon: '🍓' },
    { name: 'ESP32 / ESP8266', icon: '📶' },
    { name: 'MATLAB / Simulink', icon: '📐' },
    { name: 'Proteus Simulation', icon: '🔬' },
    { name: 'VHDL / Verilog', icon: '🖥️' },
    { name: 'Xilinx Vivado', icon: '⚙️' },
    { name: 'Python (GPIO)', icon: '🐍' },
    { name: 'LoRa / Zigbee', icon: '📡' },
    { name: 'GSM / GPS Module', icon: '📍' },
    { name: 'OpenCV', icon: '📷' },
    { name: 'MQTT / AWS IoT', icon: '☁️' },
  ],
  whatYouGet: [
    'Complete embedded / firmware source code',
    'Proteus simulation file (where applicable)',
    'VHDL / Verilog code and testbench (VLSI projects)',
    'Circuit schematic and PCB layout diagram',
    'Bill of materials with component list',
    'IEEE base paper (for IEEE titles)',
    'Full project report in IEEE format',
    'PowerPoint presentation (20+ slides)',
    'MATLAB / Simulink model files (DSP projects)',
    '3-day post-delivery support via WhatsApp',
  ],
  degrees: ['BE ECE', 'BE EEE', 'BTech ECE', 'BE Mechatronics', 'ME VLSI', 'ME Embedded Systems', 'MSc Electronics'],
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
      q: 'What ECE project domains are available at Inno Projects Coimbatore?',
      a: 'We offer ECE projects across embedded systems (Arduino, ESP32, Raspberry Pi), IoT and wireless sensor networks, VLSI design (VHDL/Verilog on Xilinx FPGA), digital signal processing (MATLAB), robotics and automation, medical electronics, renewable energy systems, and communication (GSM, LoRa, Zigbee). Over 150 titles are available for 2026.',
    },
    {
      q: 'Do you supply the hardware components for ECE projects?',
      a: 'Yes. Upon request, we can include a complete hardware kit — Arduino/ESP32 boards, sensors, displays, motor drivers, and other components — along with your project. Alternatively, we provide a detailed bill of materials so you can source components locally in Coimbatore.',
    },
    {
      q: 'Can I get a VLSI project with FPGA simulation?',
      a: 'Absolutely. We develop VLSI projects in VHDL and Verilog with Xilinx Vivado simulation and synthesis reports. Projects include RTL schematics, timing analysis, resource utilisation reports, and a complete IEEE-format project report.',
    },
    {
      q: 'Are ECE projects delivered with Proteus simulation?',
      a: 'Yes. Most Arduino and microcontroller-based projects include a working Proteus simulation file so you can demonstrate the circuit digitally even before physical assembly. MATLAB-based DSP projects are delivered with Simulink model files.',
    },
    {
      q: 'How long does it take to get an ECE final year project?',
      a: 'Software-only ECE projects (DSP, VLSI simulation, Python-based) are delivered within 12 hours. Projects requiring hardware prototyping or custom PCB design may take 48–72 hours. We confirm the exact timeline before you place your order.',
    },
    {
      q: 'What is the cost of an ECE project in Coimbatore?',
      a: 'Pricing varies based on complexity — a simulation-only project is priced differently from one that includes a hardware kit. We are transparent about costs and student-friendly in our pricing. WhatsApp us at +91 9600309140 for an instant quote based on your specific topic.',
    },
  ],
  ctaTitle: 'Get Your ECE Final Year Project Today',
  ctaDesc:
    'WhatsApp us now with your topic or domain. We will suggest the best ECE project titles for your college requirements and deliver complete source code, simulation files, circuit diagrams, report, and PPT within 12 hours.',
};

export default function ECEFinalYearProjectsCoimbatore() {
  return <DomainPage data={data} />;
}
