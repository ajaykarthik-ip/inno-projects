"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import './page.css';

interface FormData {
  studentName: string;
  phoneNumber: string;
  collegeName: string;
  department: string;
  domain: string;
  bundles: string;
  collegeMailId: string;
  projectTitle: string;
  referredBy: string;
  referralCode: string;
  referrerPhone: string;
}

const InnoProjectsForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    phoneNumber: '',
    collegeName: '',
    department: '',
    domain: '',
    bundles: '',
    collegeMailId: '',
    projectTitle: '',
    referredBy: '',
    referralCode: '',
    referrerPhone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Validate required fields
    const requiredFields: (keyof FormData)[] = [
      'studentName', 'phoneNumber', 'collegeName', 'department', 
      'domain', 'bundles', 'collegeMailId', 'projectTitle'
    ];
    
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      setSubmitStatus('Please fill all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      // Create form data for Google Forms
      const googleFormData = new URLSearchParams();
      
      // Map to actual Google Form entry IDs
      googleFormData.append('entry.1618759074', formData.studentName);
      googleFormData.append('entry.1148733084', formData.phoneNumber);
      googleFormData.append('entry.1210331088', formData.collegeName);
      googleFormData.append('entry.1676200664', formData.department);
      googleFormData.append('entry.642961539', formData.domain);
      googleFormData.append('entry.902127592', formData.bundles);
      googleFormData.append('entry.623169949', formData.collegeMailId);
      googleFormData.append('entry.340885761', formData.projectTitle);
      googleFormData.append('entry.470659127', formData.referredBy || '');
      googleFormData.append('entry.858114275', formData.referralCode || '');
      googleFormData.append('entry.430367506', formData.referrerPhone || '');

      // Submit to Google Forms
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSf2wvNSAEkbAQIowErGQ45leSs2nGIFLOsHnGj7-8YWgvWUBQ/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: googleFormData.toString()
      });

      setSubmitStatus('Form submitted successfully! We will contact you shortly.');
      
      // Reset form
      setFormData({
        studentName: '',
        phoneNumber: '',
        collegeName: '',
        department: '',
        domain: '',
        bundles: '',
        collegeMailId: '',
        projectTitle: '',
        referredBy: '',
        referralCode: '',
        referrerPhone: ''
      });

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('Form submitted! (Google Forms doesn\'t return status)');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="header">
          <h1 className="title">Custom Project </h1>
          <p className="subtitle">Get Your Custom Project in 12 Hours!</p>
        </div>

        <div className="form-card">
          <form onSubmit={handleSubmit} className="form">
            {/* Main Fields */}
            <div className="form-row">
              <div className="form-group">
                <label className="label">
                  Student Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  className="input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="label">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="input"
                  placeholder="+91 9876543210"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="label">
                College Mail ID <span className="required">*</span>
              </label>
              <input
                type="email"
                name="collegeMailId"
                value={formData.collegeMailId}
                onChange={handleChange}
                className="input"
                placeholder="your.email@college.edu"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="label">
                  College Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  className="input"
                  placeholder="Your college name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="label">
                  Department <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="input"
                  placeholder="Computer Science"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="label">
                Project Title <span className="required">*</span>
              </label>
              <input
                type="text"
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleChange}
                className="input"
                placeholder="Enter project title or let us suggest one!"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="label">
                  Domain <span className="required">*</span>
                </label>
                <div className="select-wrapper">
                  <select
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    className="select"
                    required
                  >
                    <option value="">Select Domain</option>
                    <option value="Machine Learning">Machine Learning / AI</option>
                    <option value="Full Stack">Full Stack Development</option>
                    <option value="Block Chain">Blockchain Technology</option>
                    <option value="Cloud Computing">Cloud Computing</option>
                    <option value="IOT">Internet of Things (IoT)</option>
                    <option value="Other">Other Technology</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="label">
                  Premium Packages <span className="required">*</span>
                </label>
                <div className="select-wrapper">
                  <select
                    name="bundles"
                    value={formData.bundles}
                    onChange={handleChange}
                    className="select"
                    required
                  >
                    <option value="">Select Package</option>
                    <option value="Bundle 1">Project + Complete setup + Video Tutorial + IEEE Journal Publication (24/7 Support)</option>
                    <option value="Bundle 2">Project + Setup + Detailed Video Tutorial (24/7 Support)</option>
                    <option value="Bundle 3">Project + Detailed Video Tutorial </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Optional Section */}
            <div className="divider">
              <span className="divider-text">Get 25% Discount (Referral Code)</span>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="label">Referred by (Friend's Name)</label>
                <input
                  type="text"
                  name="referredBy"
                  value={formData.referredBy}
                  onChange={handleChange}
                  className="input"
                  placeholder="Enter your friend's name"
                />
              </div>

              <div className="form-group">
                <label className="label">Referral Code </label>
                <input
                  type="text"
                  name="referralCode"
                  value={formData.referralCode}
                  onChange={handleChange}
                  className="input"
                  placeholder="Enter referral code for discount"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="label">Referrer's Phone Number</label>
              <input
                type="tel"
                name="referrerPhone"
                value={formData.referrerPhone}
                onChange={handleChange}
                className="input"
                placeholder="+91 9876543210"
              />
            </div>

            <div className="submit-section">
              <button
                type="submit"
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Processing...
                  </>
                ) : (
                  'Get Your Custom Project Now!'
                )}
              </button>

              {submitStatus && (
                <div className={`status ${submitStatus.includes('success') ? 'success' : 'error'}`}>
                  <span className="status-icon">
                    {submitStatus.includes('success') ? '✓' : '!'} 
                  </span>
                  {submitStatus}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InnoProjectsForm;