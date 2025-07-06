"use client";

import React, { useState, useEffect } from 'react';
import './page.css';

interface Project {
  id: string;
  title: string;
  category: string;
}

// Projects data - moved outside component to prevent re-creation
const projects: Project[] = [
{ id: '1', title: 'Drowsiness Detection', category: 'ML' },
  { id: '2', title: 'Distance Based Speed Violation System', category: 'ML' },
  { id: '3', title: 'Liver Disease Detection', category: 'ML' },
  { id: '4', title: 'Patient Monitoring System using ML', category: 'ML' },
  { id: '5', title: 'Plant Disease Detection', category: 'ML' },
  { id: '6', title: 'Signature Verification', category: 'ML' },
  { id: '7', title: 'Water Quality Prediction', category: 'ML' },
  { id: '8', title: 'Bone Fractures Detection', category: 'ML' },
  { id: '9', title: 'Elephant Detection', category: 'ML' },
  { id: '10', title: 'Intrusion Detection', category: 'ML' },
  { id: '11', title: 'Traffic Management System', category: 'ML' },
  { id: '12', title: 'Currency Note Detection', category: 'ML' },
  { id: '13', title: 'Spam Call Detection (Sentiment Analysis)', category: 'ML' },
  { id: '14', title: 'Deep Fake Face Detection', category: 'AI' },
  { id: '15', title: 'Tuberculosis Detection', category: 'ML' },
  { id: '16', title: 'Lymphoma Detection', category: 'ML' },
  { id: '17', title: 'Sign Language Detection', category: 'ML' },
  { id: '18', title: 'Fake Social Media Account Detection', category: 'ML' },
  { id: '19', title: 'Plaque Growth Detection', category: 'ML' },
  { id: '20', title: 'Heart Disease Detection', category: 'ML' },
  { id: '21', title: 'AI Quiz Platform', category: 'WEB' },
  { id: '22', title: 'Wound Room Dressing System', category: 'ML' },
  { id: '23', title: 'Car Damage Estimator for Insurance', category: 'WEB' },
  { id: '24', title: 'Kidney Disease Detection', category: 'ML' },
  { id: '25', title: 'Parkinson Disease Detection', category: 'ML' },
  { id: '26', title: 'Crop Yield Prediction using ML', category: 'ML' },
  { id: '27', title: 'Fake Product Review Detection', category: 'ML' },
  { id: '28', title: 'Fabric Defect Detection', category: 'ML' },
  { id: '29', title: 'Ovarian Cancer Detection', category: 'ML' },
  { id: '30', title: 'Skin Cancer Detection', category: 'ML' },
  { id: '31', title: 'Diabetes Detection (Retina Photos)', category: 'ML' },
  { id: '32', title: 'Malware Detection System', category: 'ML' },
  { id: '33', title: 'Fake Product Detection', category: 'ML' },
  { id: '34', title: 'EEG Signal Based Psychology Disorder', category: 'ML' },
  { id: '35', title: 'Traffic Sign Detection', category: 'ML' },
  { id: '36', title: 'AI Ecommerce Platform', category: 'WEB' },

  // Additional ML Projects (200 total)
  { id: '37', title: 'Pneumonia Detection from X-rays', category: 'ML' },
  { id: '38', title: 'Stock Price Prediction System', category: 'ML' },
  { id: '39', title: 'Customer Churn Prediction', category: 'ML' },
  { id: '40', title: 'Credit Card Fraud Detection', category: 'ML' },
  { id: '41', title: 'Face Mask Detection System', category: 'ML' },
  { id: '42', title: 'Emotion Recognition from Speech', category: 'ML' },
  { id: '43', title: 'Weather Prediction System', category: 'ML' },
  { id: '44', title: 'Email Spam Classification', category: 'ML' },
  { id: '45', title: 'Music Genre Classification', category: 'ML' },
  { id: '46', title: 'Handwritten Digit Recognition', category: 'ML' },
  { id: '47', title: 'Brain Tumor Detection', category: 'ML' },
  { id: '48', title: 'Age and Gender Detection', category: 'ML' },
  { id: '49', title: 'Vehicle Number Plate Recognition', category: 'ML' },
  { id: '50', title: 'Alzheimer Disease Prediction', category: 'ML' },
  { id: '51', title: 'Breast Cancer Classification', category: 'ML' },
  { id: '52', title: 'Dog Breed Classification', category: 'ML' },
  { id: '53', title: 'Food Image Recognition', category: 'ML' },
  { id: '54', title: 'Gesture Recognition System', category: 'ML' },
  { id: '55', title: 'House Price Prediction', category: 'ML' },
  { id: '56', title: 'Iris Flower Classification', category: 'ML' },
  { id: '57', title: 'Loan Default Prediction', category: 'ML' },
  { id: '58', title: 'Movie Recommendation System', category: 'ML' },
  { id: '59', title: 'News Article Classification', category: 'ML' },
  { id: '60', title: 'Object Detection in Videos', category: 'ML' },
  { id: '61', title: 'Pose Estimation System', category: 'ML' },
  { id: '62', title: 'Question Answering System', category: 'ML' },
  { id: '63', title: 'Rainfall Prediction Model', category: 'ML' },
  { id: '64', title: 'Sales Forecasting System', category: 'ML' },
  { id: '65', title: 'Text Summarization Tool', category: 'ML' },
  { id: '66', title: 'URL Phishing Detection', category: 'ML' },
  { id: '67', title: 'Voice Assistant System', category: 'ML' },
  { id: '68', title: 'Wine Quality Prediction', category: 'ML' },
  { id: '69', title: 'X-ray Abnormality Detection', category: 'ML' },
  { id: '70', title: 'Yoga Pose Classification', category: 'ML' },
  { id: '71', title: 'Zero-shot Image Classification', category: 'ML' },
  { id: '72', title: 'Accident Severity Prediction', category: 'ML' },
  { id: '73', title: 'Bird Species Recognition', category: 'ML' },
  { id: '74', title: 'Cryptocurrency Price Prediction', category: 'ML' },
  { id: '75', title: 'Document Classification System', category: 'ML' },
  { id: '76', title: 'Employee Attrition Prediction', category: 'ML' },
  { id: '77', title: 'Fire Detection System', category: 'ML' },
  { id: '78', title: 'Gender Classification from Names', category: 'ML' },
  { id: '79', title: 'Human Activity Recognition', category: 'ML' },
  { id: '80', title: 'Insurance Claim Prediction', category: 'ML' },
  { id: '81', title: 'Job Recommendation System', category: 'ML' },
  { id: '82', title: 'Language Detection System', category: 'ML' },
  { id: '83', title: 'Machine Translation System', category: 'ML' },
  { id: '84', title: 'Network Intrusion Detection', category: 'ML' },
  { id: '85', title: 'Online Shopper Intent Prediction', category: 'ML' },
  { id: '86', title: 'Product Defect Detection', category: 'ML' },
  { id: '87', title: 'Quality Control System', category: 'ML' },
  { id: '88', title: 'Road Damage Detection', category: 'ML' },
  { id: '89', title: 'Satellite Image Classification', category: 'ML' },
  { id: '90', title: 'Time Series Anomaly Detection', category: 'ML' },
  { id: '91', title: 'User Behavior Prediction', category: 'ML' },
  { id: '92', title: 'Vehicle Type Classification', category: 'ML' },
  { id: '93', title: 'Waste Classification System', category: 'ML' },
  { id: '94', title: 'X-ray COVID-19 Detection', category: 'ML' },
  { id: '95', title: 'Yield Optimization System', category: 'ML' },
  { id: '96', title: 'Zone-based Traffic Analysis', category: 'ML' },
  { id: '97', title: 'Air Quality Prediction', category: 'ML' },
  { id: '98', title: 'Bank Customer Segmentation', category: 'ML' },
  { id: '99', title: 'Cell Nuclei Classification', category: 'ML' },
  { id: '100', title: 'Demand Forecasting System', category: 'ML' },
  { id: '101', title: 'Energy Consumption Prediction', category: 'ML' },
  { id: '102', title: 'Face Recognition Attendance', category: 'ML' },
  { id: '103', title: 'Game AI Opponent', category: 'ML' },
  { id: '104', title: 'Healthcare Chatbot', category: 'ML' },
  { id: '105', title: 'Image Colorization System', category: 'ML' },
  { id: '106', title: 'Joke Generation System', category: 'ML' },
  { id: '107', title: 'Keyword Extraction Tool', category: 'ML' },
  { id: '108', title: 'License Plate Detection', category: 'ML' },
  { id: '109', title: 'Medical Report Analysis', category: 'ML' },
  { id: '110', title: 'Named Entity Recognition', category: 'ML' },
  { id: '111', title: 'Optical Character Recognition', category: 'ML' },
  { id: '112', title: 'Plagiarism Detection System', category: 'ML' },
  { id: '113', title: 'Question Generation System', category: 'ML' },
  { id: '114', title: 'Resume Parser System', category: 'ML' },
  { id: '115', title: 'Scene Text Recognition', category: 'ML' },
  { id: '116', title: 'Topic Modeling System', category: 'ML' },
  { id: '117', title: 'Urban Sound Classification', category: 'ML' },
  { id: '118', title: 'Video Summarization Tool', category: 'ML' },
  { id: '119', title: 'Wildfire Prediction System', category: 'ML' },
  { id: '120', title: 'X-ray Dental Analysis', category: 'ML' },
  { id: '121', title: 'Youth Mental Health Predictor', category: 'ML' },
  { id: '122', title: 'Zero-day Attack Detection', category: 'ML' },
  { id: '123', title: 'Anomaly Detection in IoT', category: 'ML' },
  { id: '124', title: 'Biometric Authentication', category: 'ML' },
  { id: '125', title: 'Chatbot Intent Classification', category: 'ML' },
  { id: '126', title: 'Disease Outbreak Prediction', category: 'ML' },
  { id: '127', title: 'Earthquake Prediction Model', category: 'ML' },
  { id: '128', title: 'Facial Expression Analysis', category: 'ML' },
  { id: '129', title: 'Gait Recognition System', category: 'ML' },
  { id: '130', title: 'Hate Speech Detection', category: 'ML' },
  { id: '131', title: 'Image Super Resolution', category: 'ML' },
  { id: '132', title: 'Job Skill Extraction', category: 'ML' },
  { id: '133', title: 'Knowledge Graph Construction', category: 'ML' },
  { id: '134', title: 'Lung Disease Classification', category: 'ML' },
  { id: '135', title: 'Music Composition AI', category: 'ML' },
  { id: '136', title: 'Network Traffic Classification', category: 'ML' },
  { id: '137', title: 'Ocean Plastic Detection', category: 'ML' },
  { id: '138', title: 'Parking Space Detection', category: 'ML' },
  { id: '139', title: 'Queue Management System', category: 'ML' },
  { id: '140', title: 'Retinal Disease Detection', category: 'ML' },
  { id: '141', title: 'Sleep Pattern Analysis', category: 'ML' },
  { id: '142', title: 'Tax Fraud Detection', category: 'ML' },
  { id: '143', title: 'User Authentication System', category: 'ML' },
  { id: '144', title: 'Video Game AI', category: 'ML' },
  { id: '145', title: 'Water Leak Detection', category: 'ML' },
  { id: '146', title: 'X-ray Bone Age Assessment', category: 'ML' },
  { id: '147', title: 'Yield Gap Analysis', category: 'ML' },
  { id: '148', title: 'Zone Classification System', category: 'ML' },
  { id: '149', title: 'Audio Event Detection', category: 'ML' },
  { id: '150', title: 'Building Damage Assessment', category: 'ML' },
  { id: '151', title: 'Code Review Automation', category: 'ML' },
  { id: '152', title: 'Driver Drowsiness Alert', category: 'ML' },
  { id: '153', title: 'ECG Signal Analysis', category: 'ML' },
  { id: '154', title: 'Fashion Trend Prediction', category: 'ML' },
  { id: '155', title: 'Gene Expression Analysis', category: 'ML' },
  { id: '156', title: 'Hospital Readmission Prediction', category: 'ML' },
  { id: '157', title: 'Image Forgery Detection', category: 'ML' },
  { id: '158', title: 'Journey Time Prediction', category: 'ML' },
  { id: '159', title: 'Kitchen Activity Recognition', category: 'ML' },
  { id: '160', title: 'Legal Document Analysis', category: 'ML' },
  { id: '161', title: 'Manufacturing Defect Prediction', category: 'ML' },
  { id: '162', title: 'Network Security Monitor', category: 'ML' },
  { id: '163', title: 'Oil Spill Detection', category: 'ML' },
  { id: '164', title: 'Patient Risk Stratification', category: 'ML' },
  { id: '165', title: 'Quality Score Prediction', category: 'ML' },
  { id: '166', title: 'Retail Demand Forecasting', category: 'ML' },
  { id: '167', title: 'Social Media Trend Analysis', category: 'ML' },
  { id: '168', title: 'Traffic Flow Optimization', category: 'ML' },
  { id: '169', title: 'Underwater Object Detection', category: 'ML' },
  { id: '170', title: 'Voice Cloning System', category: 'ML' },
  { id: '171', title: 'Wildlife Monitoring System', category: 'ML' },
  { id: '172', title: 'X-ray Luggage Screening', category: 'ML' },
  { id: '173', title: 'Yoga Instructor AI', category: 'ML' },
  { id: '174', title: 'Zero Waste Classifier', category: 'ML' },
  { id: '175', title: 'Agricultural Pest Detection', category: 'ML' },
  { id: '176', title: 'Battery Life Prediction', category: 'ML' },
  { id: '177', title: 'Cloud Type Classification', category: 'ML' },
  { id: '178', title: 'Drug Discovery AI', category: 'ML' },
  { id: '179', title: 'Equipment Failure Prediction', category: 'ML' },
  { id: '180', title: 'Facial Age Progression', category: 'ML' },
  { id: '181', title: 'Grading System Automation', category: 'ML' },
  { id: '182', title: 'Healthcare Cost Prediction', category: 'ML' },
  { id: '183', title: 'Indoor Localization System', category: 'ML' },
  { id: '184', title: 'Job Interview AI Assistant', category: 'ML' },
  { id: '185', title: 'Knowledge Base QA System', category: 'ML' },
  { id: '186', title: 'Landslide Prediction Model', category: 'ML' },
  { id: '187', title: 'Medical Image Segmentation', category: 'ML' },
  { id: '188', title: 'News Verification System', category: 'ML' },
  { id: '189', title: 'Ocean Current Prediction', category: 'ML' },
  { id: '190', title: 'Pollution Source Detection', category: 'ML' },
  { id: '191', title: 'Queue Time Estimation', category: 'ML' },
  { id: '192', title: 'Restaurant Review Analysis', category: 'ML' },
  { id: '193', title: 'Sports Performance Analysis', category: 'ML' },
  { id: '194', title: 'Tax Document Classification', category: 'ML' },
  { id: '195', title: 'Urban Planning AI', category: 'ML' },
  { id: '196', title: 'Visitor Flow Analysis', category: 'ML' },
  { id: '197', title: 'Weather Impact Prediction', category: 'ML' },
  { id: '198', title: 'X-ray Quality Assessment', category: 'ML' },
  { id: '199', title: 'Youth Engagement Predictor', category: 'ML' },
  { id: '200', title: 'Zone Temperature Control', category: 'ML' },

  // WEB Development Projects (100)
  { id: '201', title: 'E-Learning Management System', category: 'WEB' },
  { id: '202', title: 'Real Estate Portal', category: 'WEB' },
  { id: '203', title: 'Social Media Dashboard', category: 'WEB' },
  { id: '204', title: 'Online Banking Application', category: 'WEB' },
  { id: '205', title: 'Food Delivery Platform', category: 'WEB' },
  { id: '206', title: 'Healthcare Appointment System', category: 'WEB' },
  { id: '207', title: 'Project Management Tool', category: 'WEB' },
  { id: '208', title: 'Video Streaming Platform', category: 'WEB' },
  { id: '209', title: 'Job Portal Website', category: 'WEB' },
  { id: '210', title: 'Travel Booking System', category: 'WEB' },
  { id: '211', title: 'Inventory Management System', category: 'WEB' },
  { id: '212', title: 'CRM Application', category: 'WEB' },
  { id: '213', title: 'Online Marketplace', category: 'WEB' },
  { id: '214', title: 'Event Management Platform', category: 'WEB' },
  { id: '215', title: 'Fitness Tracking App', category: 'WEB' },
  { id: '216', title: 'Blog Publishing Platform', category: 'WEB' },
  { id: '217', title: 'Online Forum System', category: 'WEB' },
  { id: '218', title: 'Digital Wallet Application', category: 'WEB' },
  { id: '219', title: 'Restaurant Management System', category: 'WEB' },
  { id: '220', title: 'Music Streaming Service', category: 'WEB' },
  { id: '221', title: 'Task Management Application', category: 'WEB' },
  { id: '222', title: 'Online Examination System', category: 'WEB' },
  { id: '223', title: 'Expense Tracker App', category: 'WEB' },
  { id: '224', title: 'Portfolio Website Builder', category: 'WEB' },
  { id: '225', title: 'Chat Application', category: 'WEB' },
  { id: '226', title: 'Document Management System', category: 'WEB' },
  { id: '227', title: 'Booking Calendar System', category: 'WEB' },
  { id: '228', title: 'News Aggregator Platform', category: 'WEB' },
  { id: '229', title: 'Online Code Editor', category: 'WEB' },
  { id: '230', title: 'Survey Creation Tool', category: 'WEB' },
  { id: '231', title: 'Virtual Classroom Platform', category: 'WEB' },
  { id: '232', title: 'Hotel Booking System', category: 'WEB' },
  { id: '233', title: 'Recipe Sharing Platform', category: 'WEB' },
  { id: '234', title: 'Crowdfunding Platform', category: 'WEB' },
  { id: '235', title: 'Time Tracking Application', category: 'WEB' },
  { id: '236', title: 'Email Marketing Tool', category: 'WEB' },
  { id: '237', title: 'Online Auction Platform', category: 'WEB' },
  { id: '238', title: 'Knowledge Base System', category: 'WEB' },
  { id: '239', title: 'Subscription Management', category: 'WEB' },
  { id: '240', title: 'Virtual Event Platform', category: 'WEB' },
  { id: '241', title: 'Employee Portal System', category: 'WEB' },
  { id: '242', title: 'Online Voting System', category: 'WEB' },
  { id: '243', title: 'Donation Platform', category: 'WEB' },
  { id: '244', title: 'Ticket Booking System', category: 'WEB' },
  { id: '245', title: 'Content Management System', category: 'WEB' },
  { id: '246', title: 'Online Library System', category: 'WEB' },
  { id: '247', title: 'Feedback Collection Tool', category: 'WEB' },
  { id: '248', title: 'Appointment Scheduling App', category: 'WEB' },
  { id: '249', title: 'Invoice Generation System', category: 'WEB' },
  { id: '250', title: 'Team Collaboration Tool', category: 'WEB' },
  { id: '251', title: 'Asset Management System', category: 'WEB' },
  { id: '252', title: 'Online Resume Builder', category: 'WEB' },
  { id: '253', title: 'Customer Support Portal', category: 'WEB' },
  { id: '254', title: 'Wedding Planning Platform', category: 'WEB' },
  { id: '255', title: 'Parking Management System', category: 'WEB' },
  { id: '256', title: 'Online Certificate Generator', category: 'WEB' },
  { id: '257', title: 'Complaint Management System', category: 'WEB' },
  { id: '258', title: 'Blood Bank Management', category: 'WEB' },
  { id: '259', title: 'School Management System', category: 'WEB' },
  { id: '260', title: 'Gym Management Platform', category: 'WEB' },
  { id: '261', title: 'Online Consultation Platform', category: 'WEB' },
  { id: '262', title: 'Freelance Marketplace', category: 'WEB' },
  { id: '263', title: 'Property Rental System', category: 'WEB' },
  { id: '264', title: 'Online Gaming Platform', category: 'WEB' },
  { id: '265', title: 'Supply Chain Management', category: 'WEB' },
  { id: '266', title: 'Alumni Network Portal', category: 'WEB' },
  { id: '267', title: 'Online Therapy Platform', category: 'WEB' },
  { id: '268', title: 'Warehouse Management System', category: 'WEB' },
  { id: '269', title: 'Sports League Management', category: 'WEB' },
  { id: '270', title: 'Car Rental Platform', category: 'WEB' },
  { id: '271', title: 'Online Tutoring Platform', category: 'WEB' },
  { id: '272', title: 'HR Management System', category: 'WEB' },
  { id: '273', title: 'Volunteer Management Platform', category: 'WEB' },
  { id: '274', title: 'Product Review System', category: 'WEB' },
  { id: '275', title: 'Online Course Creator', category: 'WEB' },
  { id: '276', title: 'Budget Planning Tool', category: 'WEB' },
  { id: '277', title: 'Church Management System', category: 'WEB' },
  { id: '278', title: 'Legal Case Management', category: 'WEB' },
  { id: '279', title: 'Fleet Management System', category: 'WEB' },
  { id: '280', title: 'Online Quiz Platform', category: 'WEB' },
  { id: '281', title: 'Salon Booking System', category: 'WEB' },
  { id: '282', title: 'Vendor Management Platform', category: 'WEB' },
  { id: '283', title: 'Digital Menu System', category: 'WEB' },
  { id: '284', title: 'Meeting Room Booking', category: 'WEB' },
  { id: '285', title: 'Online Diary Platform', category: 'WEB' },
  { id: '286', title: 'Complaint Tracking System', category: 'WEB' },
  { id: '287', title: 'Club Management System', category: 'WEB' },
  { id: '288', title: 'Online Poll Creator', category: 'WEB' },
  { id: '289', title: 'Service Request Portal', category: 'WEB' },
  { id: '290', title: 'Digital Signage System', category: 'WEB' },
  { id: '291', title: 'Online Booking Calendar', category: 'WEB' },
  { id: '292', title: 'Membership Management', category: 'WEB' },
  { id: '293', title: 'Lost and Found System', category: 'WEB' },
  { id: '294', title: 'Online Admission System', category: 'WEB' },
  { id: '295', title: 'Visitor Management System', category: 'WEB' },
  { id: '296', title: 'Online Food Menu', category: 'WEB' },
  { id: '297', title: 'Digital Notice Board', category: 'WEB' },
  { id: '298', title: 'Online Complaint Box', category: 'WEB' },
  { id: '299', title: 'Web-based POS System', category: 'WEB' },
  { id: '300', title: 'Online Document Signing', category: 'WEB' },

  // AI & API Projects (100)
  { id: '301', title: 'Weather Data AI & API', category: 'AI & API' },
  { id: '302', title: 'Payment Gateway AI & API', category: 'AI & API' },
  { id: '303', title: 'SMS Gateway AI & API', category: 'AI & API' },
  { id: '304', title: 'Email Service AI & API', category: 'AI & API' },
  { id: '305', title: 'Authentication AI & API', category: 'AI & API' },
  { id: '306', title: 'File Upload AI & API', category: 'AI & API' },
  { id: '307', title: 'Image Processing AI & API', category: 'AI & API' },
  { id: '308', title: 'Geolocation AI & API', category: 'AI & API' },
  { id: '309', title: 'Currency Exchange AI & API', category: 'AI & API' },
  { id: '310', title: 'URL Shortener AI & API', category: 'AI & API' },
  { id: '311', title: 'News Feed AI & API', category: 'AI & API' },
  { id: '312', title: 'Social Media Integration AI & API', category: 'AI & API' },
  { id: '313', title: 'Translation AI & API', category: 'AI & API' },
  { id: '314', title: 'OCR Service AI & API', category: 'AI & API' },
  { id: '315', title: 'QR Code Generator AI & API', category: 'AI & API' },
  { id: '316', title: 'PDF Generator AI & API', category: 'AI & API' },
  { id: '317', title: 'Video Streaming AI & API', category: 'AI & API' },
  { id: '318', title: 'Push Notification AI & API', category: 'AI & API' },
  { id: '319', title: 'Calendar Integration AI & API', category: 'AI & API' },
  { id: '320', title: 'Search Engine AI & API', category: 'AI & API' },
  { id: '321', title: 'Chatbot AI & API', category: 'AI & API' },
  { id: '322', title: 'Analytics AI & API', category: 'AI & API' },
  { id: '323', title: 'Inventory Management AI & API', category: 'AI & API' },
  { id: '324', title: 'Booking System AI & API', category: 'AI & API' },
  { id: '325', title: 'User Management AI & API', category: 'AI & API' },
  { id: '326', title: 'Document Storage AI & API', category: 'AI & API' },
  { id: '327', title: 'Webhook Service AI & API', category: 'AI & API' },
  { id: '328', title: 'Shipping Tracking AI & API', category: 'AI & API' },
  { id: '329', title: 'Tax Calculator AI & API', category: 'AI & API' },
  { id: '330', title: 'Subscription Billing AI & API', category: 'AI & API' },
  { id: '331', title: 'Content Delivery AI & API', category: 'AI & API' },
  { id: '332', title: 'Database Sync AI & API', category: 'AI & API' },
  { id: '333', title: 'Voice Recognition AI & API', category: 'AI & API' },
  { id: '334', title: 'Barcode Scanner AI & API', category: 'AI & API' },
  { id: '335', title: 'Map Integration AI & API', category: 'AI & API' },
  { id: '336', title: 'Review System AI & API', category: 'AI & API' },
  { id: '337', title: 'Loyalty Program AI & API', category: 'AI & API' },
  { id: '338', title: 'Ticket Management AI & API', category: 'AI & API' },
  { id: '339', title: 'Form Builder AI & API', category: 'AI & API' },
  { id: '340', title: 'Survey System AI & API', category: 'AI & API' },
  { id: '341', title: 'Blog Platform AI & API', category: 'AI & API' },
  { id: '342', title: 'Forum System AI & API', category: 'AI & API' },
  { id: '343', title: 'E-commerce AI & API', category: 'AI & API' },
  { id: '344', title: 'Appointment Scheduling AI & API', category: 'AI & API' },
  { id: '345', title: 'CRM Integration AI & API', category: 'AI & API' },
  { id: '346', title: 'ERP Integration AI & API', category: 'AI & API' },
  { id: '347', title: 'IoT Device AI & API', category: 'AI & API' },
  { id: '348', title: 'Blockchain Integration AI & API', category: 'AI & API' },
  { id: '349', title: 'Machine Learning AI & API', category: 'AI & API' },
  { id: '350', title: 'Data Visualization AI & API', category: 'AI & API' },
  { id: '351', title: 'Report Generation AI & API', category: 'AI & API' },
  { id: '352', title: 'Notification Service AI & API', category: 'AI & API' },
  { id: '353', title: 'Session Management AI & API', category: 'AI & API' },
  { id: '354', title: 'Cache Management AI & API', category: 'AI & API' },
  { id: '355', title: 'Queue Service AI & API', category: 'AI & API' },
  { id: '356', title: 'Event Streaming AI & API', category: 'AI & API' },
  { id: '357', title: 'GraphQL AI & API Gateway', category: 'AI & API' },
  { id: '358', title: 'REST AI & API Builder', category: 'AI & API' },
  { id: '359', title: 'AI & API Documentation Tool', category: 'AI & API' },
  { id: '360', title: 'AI & API Testing Framework', category: 'AI & API' },
  { id: '361', title: 'Rate Limiting AI & API', category: 'AI & API' },
  { id: '362', title: 'AI & API Monitoring Service', category: 'AI & API' },
  { id: '363', title: 'OAuth Provider AI & API', category: 'AI & API' },
  { id: '364', title: 'JWT Authentication AI & API', category: 'AI & API' },
  { id: '365', title: 'Multi-tenant AI & API', category: 'AI & API' },
  { id: '366', title: 'AI & API Version Control', category: 'AI & API' },
  { id: '367', title: 'AI & API Gateway Service', category: 'AI & API' },
  { id: '368', title: 'Microservices AI & API', category: 'AI & API' },
  { id: '369', title: 'Serverless AI & API Framework', category: 'AI & API' },
  { id: '370', title: 'AI & API Load Balancer', category: 'AI & API' },
  { id: '371', title: 'AI & API Security Scanner', category: 'AI & API' },
  { id: '372', title: 'AI & API Usage Analytics', category: 'AI & API' },
  { id: '373', title: 'AI & API Marketplace Platform', category: 'AI & API' },
  { id: '374', title: 'AI & API Aggregator Service', category: 'AI & API' },
  { id: '375', title: 'AI & API Transformation Tool', category: 'AI & API' },
  { id: '376', title: 'Real-time Data AI & API', category: 'AI & API' },
  { id: '377', title: 'Batch Processing AI & API', category: 'AI & API' },
  { id: '378', title: 'AI & API Migration Tool', category: 'AI & API' },
  { id: '379', title: 'AI & API Mock Server', category: 'AI & API' },
  { id: '380', title: 'AI & API Performance Tester', category: 'AI & API' },
  { id: '381', title: 'Webhook Management AI & API', category: 'AI & API' },
  { id: '382', title: 'AI & API Error Tracking', category: 'AI & API' },
  { id: '383', title: 'AI & API Request Logger', category: 'AI & API' },
  { id: '384', title: 'AI & API Response Cache', category: 'AI & API' },
  { id: '385', title: 'AI & API Health Monitor', category: 'AI & API' },
  { id: '386', title: 'AI & API Documentation Generator', category: 'AI & API' },
  { id: '387', title: 'AI & API Client SDK Generator', category: 'AI & API' },
  { id: '388', title: 'AI & API Contract Testing', category: 'AI & API' },
  { id: '389', title: 'AI & API Workflow Engine', category: 'AI & API' },
  { id: '390', title: 'AI & API Data Mapper', category: 'AI & API' },
  { id: '391', title: 'AI & API Event Bus', category: 'AI & API' },
  { id: '392', title: 'AI & API Service Mesh', category: 'AI & API' },
  { id: '393', title: 'AI & API Circuit Breaker', category: 'AI & API' },
  { id: '394', title: 'AI & API Request Validator', category: 'AI & API' },
  { id: '395', title: 'AI & API Response Transformer', category: 'AI & API' },
  { id: '396', title: 'AI & API Dependency Manager', category: 'AI & API' },
  { id: '397', title: 'AI & API Integration Hub', category: 'AI & API' },
  { id: '398', title: 'AI & API Orchestration Platform', category: 'AI & API' },
  { id: '399', title: 'AI & API Governance Tool', category: 'AI & API' },
  { id: '400', title: 'AI & API Lifecycle Manager', category: 'AI & API' },

  // IoT Projects (50)
  { id: '401', title: 'Smart Home Automation', category: 'IOT' },
  { id: '402', title: 'Industrial IoT Monitoring', category: 'IOT' },
  { id: '403', title: 'Smart Agriculture System', category: 'IOT' },
  { id: '404', title: 'Wearable Health Monitor', category: 'IOT' },
  { id: '405', title: 'Smart Parking System', category: 'IOT' },
  { id: '406', title: 'IoT Weather Station', category: 'IOT' },
  { id: '407', title: 'Smart Energy Meter', category: 'IOT' },
  { id: '408', title: 'Vehicle Tracking System', category: 'IOT' },
  { id: '409', title: 'Smart Water Management', category: 'IOT' },
  { id: '410', title: 'IoT Security System', category: 'IOT' },
  { id: '411', title: 'Smart Irrigation System', category: 'IOT' },
  { id: '412', title: 'Pet Tracking Device', category: 'IOT' },
  { id: '413', title: 'Smart Waste Management', category: 'IOT' },
  { id: '414', title: 'IoT Air Quality Monitor', category: 'IOT' },
  { id: '415', title: 'Smart Street Lighting', category: 'IOT' },
  { id: '416', title: 'IoT Fire Detection System', category: 'IOT' },
  { id: '417', title: 'Smart Greenhouse Control', category: 'IOT' },
  { id: '418', title: 'IoT Baby Monitor', category: 'IOT' },
  { id: '419', title: 'Smart Lock System', category: 'IOT' },
  { id: '420', title: 'IoT Flood Detection', category: 'IOT' },
  { id: '421', title: 'Smart Mirror Project', category: 'IOT' },
  { id: '422', title: 'IoT Soil Monitoring', category: 'IOT' },
  { id: '423', title: 'Smart Refrigerator System', category: 'IOT' },
  { id: '424', title: 'IoT Gas Leak Detector', category: 'IOT' },
  { id: '425', title: 'Smart Medicine Reminder', category: 'IOT' },
  { id: '426', title: 'IoT Motion Detection', category: 'IOT' },
  { id: '427', title: 'Smart Aquarium Monitor', category: 'IOT' },
  { id: '428', title: 'IoT Power Monitor', category: 'IOT' },
  { id: '429', title: 'Smart Doorbell System', category: 'IOT' },
  { id: '430', title: 'IoT Plant Monitor', category: 'IOT' },
  { id: '431', title: 'Smart Thermostat System', category: 'IOT' },
  { id: '432', title: 'IoT Water Level Monitor', category: 'IOT' },
  { id: '433', title: 'Smart Garage Door', category: 'IOT' },
  { id: '434', title: 'IoT Heart Rate Monitor', category: 'IOT' },
  { id: '435', title: 'Smart Lighting Control', category: 'IOT' },
  { id: '436', title: 'IoT Temperature Logger', category: 'IOT' },
  { id: '437', title: 'Smart Curtain Control', category: 'IOT' },
  { id: '438', title: 'IoT Humidity Monitor', category: 'IOT' },
  { id: '439', title: 'Smart Fan Control', category: 'IOT' },
  { id: '440', title: 'IoT Pressure Sensor', category: 'IOT' },
  { id: '441', title: 'Smart Garden System', category: 'IOT' },
  { id: '442', title: 'IoT Vibration Monitor', category: 'IOT' },
  { id: '443', title: 'Smart AC Control', category: 'IOT' },
  { id: '444', title: 'IoT Light Sensor', category: 'IOT' },
  { id: '445', title: 'Smart Window Control', category: 'IOT' },
  { id: '446', title: 'IoT Sound Monitor', category: 'IOT' },
  { id: '447', title: 'Smart Appliance Control', category: 'IOT' },
  { id: '448', title: 'IoT UV Monitor', category: 'IOT' },
  { id: '449', title: 'Smart Pool Monitor', category: 'IOT' },
  { id: '450', title: 'IoT Proximity Sensor', category: 'IOT' },

  // Blockchain Projects (50)
  { id: '451', title: 'Cryptocurrency Exchange', category: 'BLOCKCHAIN' },
  { id: '452', title: 'Supply Chain Tracking', category: 'BLOCKCHAIN' },
  { id: '453', title: 'Digital Identity System', category: 'BLOCKCHAIN' },
  { id: '454', title: 'Smart Contract Platform', category: 'BLOCKCHAIN' },
  { id: '455', title: 'Blockchain Voting System', category: 'BLOCKCHAIN' },
  { id: '456', title: 'NFT Marketplace', category: 'BLOCKCHAIN' },
  { id: '457', title: 'Decentralized Finance (DeFi)', category: 'BLOCKCHAIN' },
  { id: '458', title: 'Blockchain Healthcare Records', category: 'BLOCKCHAIN' },
  { id: '459', title: 'Token Creation Platform', category: 'BLOCKCHAIN' },
  { id: '460', title: 'Blockchain Certificate Verification', category: 'BLOCKCHAIN' },
  { id: '461', title: 'Decentralized Storage System', category: 'BLOCKCHAIN' },
  { id: '462', title: 'Blockchain Real Estate', category: 'BLOCKCHAIN' },
  { id: '463', title: 'Crypto Wallet Application', category: 'BLOCKCHAIN' },
  { id: '464', title: 'Blockchain Insurance Platform', category: 'BLOCKCHAIN' },
  { id: '465', title: 'Decentralized Social Network', category: 'BLOCKCHAIN' },
  { id: '466', title: 'Blockchain Gaming Platform', category: 'BLOCKCHAIN' },
  { id: '467', title: 'Smart Contract Auditor', category: 'BLOCKCHAIN' },
  { id: '468', title: 'Blockchain Crowdfunding', category: 'BLOCKCHAIN' },
  { id: '469', title: 'Decentralized Exchange (DEX)', category: 'BLOCKCHAIN' },
  { id: '470', title: 'Blockchain Music Rights', category: 'BLOCKCHAIN' },
  { id: '471', title: 'DAO Management Platform', category: 'BLOCKCHAIN' },
  { id: '472', title: 'Blockchain Patent System', category: 'BLOCKCHAIN' },
  { id: '473', title: 'Crypto Payment Gateway', category: 'BLOCKCHAIN' },
  { id: '474', title: 'Blockchain Loyalty Program', category: 'BLOCKCHAIN' },
  { id: '475', title: 'Decentralized Marketplace', category: 'BLOCKCHAIN' },
  { id: '476', title: 'Blockchain Document Notary', category: 'BLOCKCHAIN' },
  { id: '477', title: 'Token Staking Platform', category: 'BLOCKCHAIN' },
  { id: '478', title: 'Blockchain Charity Platform', category: 'BLOCKCHAIN' },
  { id: '479', title: 'Decentralized Lending', category: 'BLOCKCHAIN' },
  { id: '480', title: 'Blockchain Art Gallery', category: 'BLOCKCHAIN' },
  { id: '481', title: 'Cross-chain Bridge', category: 'BLOCKCHAIN' },
  { id: '482', title: 'Blockchain KYC System', category: 'BLOCKCHAIN' },
  { id: '483', title: 'Crypto Portfolio Tracker', category: 'BLOCKCHAIN' },
  { id: '484', title: 'Blockchain Ticketing System', category: 'BLOCKCHAIN' },
  { id: '485', title: 'Decentralized Cloud Storage', category: 'BLOCKCHAIN' },
  { id: '486', title: 'Blockchain Copyright Protection', category: 'BLOCKCHAIN' },
  { id: '487', title: 'Yield Farming Platform', category: 'BLOCKCHAIN' },
  { id: '488', title: 'Blockchain Energy Trading', category: 'BLOCKCHAIN' },
  { id: '489', title: 'Decentralized Messaging', category: 'BLOCKCHAIN' },
  { id: '490', title: 'Blockchain Food Traceability', category: 'BLOCKCHAIN' },
  { id: '491', title: 'Oracle Service Platform', category: 'BLOCKCHAIN' },
  { id: '492', title: 'Blockchain Payroll System', category: 'BLOCKCHAIN' },
  { id: '493', title: 'Crypto Mining Pool', category: 'BLOCKCHAIN' },
  { id: '494', title: 'Blockchain Academic Records', category: 'BLOCKCHAIN' },
  { id: '495', title: 'Decentralized Prediction Market', category: 'BLOCKCHAIN' },
  { id: '496', title: 'Blockchain Carbon Credits', category: 'BLOCKCHAIN' },
  { id: '497', title: 'Liquidity Pool Platform', category: 'BLOCKCHAIN' },
  { id: '498', title: 'Blockchain Rental Agreement', category: 'BLOCKCHAIN' },
  { id: '499', title: 'Decentralized DNS System', category: 'BLOCKCHAIN' },
  { id: '500', title: 'Blockchain Audit Trail', category: 'BLOCKCHAIN' }
];

const ProjectListing: React.FC = () => {
  // State for filtering and search
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  // Get unique categories for filter buttons with custom order
  const categoryOrder = ['all', 'ML', 'WEB', 'AI & API', 'IOT', 'BLOCKCHAIN'];
  const uniqueCategories = new Set(projects.map(project => project.category));
  const categories = categoryOrder.filter(cat => cat === 'all' || uniqueCategories.has(cat));

  // Handle filter changes
  useEffect(() => {
    let results = projects;
    
    // Apply category filter
    if (activeFilter !== 'all') {
      results = results.filter(project => project.category === activeFilter);
    }
    
    // Apply search filter
    if (searchTerm) {
      const lowercaseSearch = searchTerm.toLowerCase();
      results = results.filter(
        project => 
          project.title.toLowerCase().includes(lowercaseSearch) ||
          project.category.toLowerCase().includes(lowercaseSearch)
      );
    }
    
    setFilteredProjects(results);
  }, [activeFilter, searchTerm]);

  // Handle WhatsApp contact
  const handleWhatsAppContact = (projectTitle: string) => {
    const message = `Hi! I am interested in the *${projectTitle}* project.

Could you please send me detailed information about:
• Project overview and features
• Technical specifications
• Implementation timeline
• Pricing and packages
• Demo or portfolio samples

Looking forward to hearing from you!`;
    
    const whatsappUrl = `https://wa.me/919600309140?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const clearFilters = () => {
    setActiveFilter('all');
    setSearchTerm('');
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Innovative
            <span className="hero-gradient"> AI ML & Web </span>
            Projects
          </h1>
          <p className="hero-subtitle">
            Discover 500+ IEEE Level Project in AI, ML, Web Development, APIs, IoT, and Blockchain
          </p>
        </div>
      </section>

      {/* Controls Section */}
      <section className="controls-section">
        <div className="search-wrapper">
          <div className="search-container">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button 
                className="clear-search"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="filters-container">
          <div className="filter-pills">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-pill ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category === 'all' ? 'All Projects' : category}
                <span className="pill-count">
                  {category === 'all' 
                    ? projects.length 
                    : projects.filter(p => p.category === category).length
                  }
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="results-summary">
          <span className="results-text">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            {activeFilter !== 'all' && ` in ${activeFilter}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </span>
          {(activeFilter !== 'all' || searchTerm) && (
            <button className="clear-filters" onClick={clearFilters}>
              Clear filters
            </button>
          )}
        </div>
      </section>

      {/* Projects Table */}
      <section className="projects-section">
        {filteredProjects.length > 0 ? (
          <div className="table-container">
            <div className="table-wrapper">
              <table className="projects-table">
                <thead>
                  <tr>
                    <th className="th-serial">#</th>
                    <th className="th-title">Project</th>
                    <th className="th-category">Category</th>
                    <th className="th-action">Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((project, index) => (
                    <tr key={project.id} className="project-row" style={{ animationDelay: `${index * 50}ms` }}>
                      <td className="td-serial">
                        <span className="serial-number">{(index + 1).toString().padStart(2, '0')}</span>
                      </td>
                      <td className="td-title">
                        <div className="project-info">
                          <h3 className="project-name">{project.title}</h3>
                        </div>
                      </td>
                      <td className="td-category">
                        <span className={`category-badge ${project.category.toLowerCase()}`}>
                          {project.category}
                        </span>
                      </td>
                      <td className="td-action">
                        <button 
                          className="whatsapp-btn"
                          onClick={() => handleWhatsAppContact(project.title)}
                          aria-label={`Get details for ${project.title}`}
                        >
                          <svg className="whatsapp-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          <span className="btn-text">Details</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35"></path>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </div>
            <h3 className="empty-title">No projects found</h3>
            <p className="empty-description">
              Try adjusting your search terms or filters to find what you looking for.
            </p>
            <button className="reset-btn" onClick={clearFilters}>
              Show all projects
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProjectListing;