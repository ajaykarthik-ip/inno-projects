"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import './page.css';

interface FormData {
  studentName: string;
  phoneNumber: string;
  collegeName: string;
  department: string;
  yearOfStudy: string;
  domain: string;
  collegeMailId: string;
  projectTitle: string;
  source: string;
  friendName: string;
  friendPhone: string;
  wantsIeeeDocs: boolean;
}

const SOURCE_OPTIONS = ['Google', 'YouTube', 'Instagram', 'Friends', 'Other'];

const InnoProjectsForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    phoneNumber: '',
    collegeName: '',
    department: '',
    yearOfStudy: '',
    domain: '',
    collegeMailId: '',
    projectTitle: '',
    source: '',
    friendName: '',
    friendPhone: '',
    wantsIeeeDocs: false
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? target.checked : value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const requiredFields: (keyof FormData)[] = [
      'studentName', 'phoneNumber', 'collegeName', 'department', 'yearOfStudy',
      'domain', 'collegeMailId', 'projectTitle', 'source'
    ];

    if (formData.source === 'Friends') {
      requiredFields.push('friendName', 'friendPhone');
    }

    const missingFields = requiredFields.filter(field => !formData[field]);
    if (missingFields.length > 0) {
      setSubmitStatus('Please fill all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      const googleFormData = new URLSearchParams();

      // NOTE: update these entry IDs after rebuilding the Google Form
      googleFormData.append('entry.1618759074', formData.studentName);
      googleFormData.append('entry.1148733084', formData.phoneNumber);
      googleFormData.append('entry.1210331088', formData.collegeName);
      googleFormData.append('entry.1676200664', formData.department);
      googleFormData.append('entry.332141427', formData.yearOfStudy);
      googleFormData.append('entry.642961539', formData.domain);
      googleFormData.append('entry.623169949', formData.collegeMailId);
      googleFormData.append('entry.340885761', formData.projectTitle);
      googleFormData.append('entry.188295600', formData.source);
      googleFormData.append('entry.470659127', formData.friendName);
      googleFormData.append('entry.430367506', formData.friendPhone);
      if (formData.wantsIeeeDocs) {
        googleFormData.append('entry.440194592', 'Yes');
      }

      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSeohUwjc0h7ldyRWwW9MJEcIxwGJse5sAo7ZZlwLQl0DTE-aA/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: googleFormData.toString()
      });

      setSubmitStatus('Form submitted successfully! We will contact you shortly.');

      setFormData({
        studentName: '',
        phoneNumber: '',
        collegeName: '',
        department: '',
        yearOfStudy: '',
        domain: '',
        collegeMailId: '',
        projectTitle: '',
        source: '',
        friendName: '',
        friendPhone: '',
        wantsIeeeDocs: false
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('Form submitted! (Google Forms doesn&apos;t return status)');
    } finally {
      setIsSubmitting(false);
    }
  };

  const showFriendFields = formData.source === 'Friends';

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="header">
          <h1 className="title">Custom Project </h1>
          <p className="subtitle">Get Your Custom Project in 12 Hours!</p>
        </div>

        <div className="form-card">
          <form onSubmit={handleSubmit} className="form">
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
                Email ID <span className="required">*</span>
                <span className="label-hint"> (college mail preferred, personal mail also accepted)</span>
              </label>
              <input
                type="email"
                name="collegeMailId"
                value={formData.collegeMailId}
                onChange={handleChange}
                className="input"
                placeholder="your.email@college.edu or personal email"
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
                Year of Study <span className="required">*</span>
              </label>
              <div className="select-wrapper">
                <select
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={handleChange}
                  className="select"
                  required
                >
                  <option value="">Select year</option>
                  <option value="First Year">First Year</option>
                  <option value="Second Year">Second Year</option>
                  <option value="Third Year">Third Year</option>
                  <option value="Final Year">Final Year</option>
                  <option value="PG 1st Year">PG 1st Year</option>
                  <option value="PG Final Year">PG Final Year</option>
                  <option value="Others">Others</option>
                </select>
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
                  How did you find us? <span className="required">*</span>
                </label>
                <div className="select-wrapper">
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="select"
                    required
                  >
                    <option value="">Select an option</option>
                    {SOURCE_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {showFriendFields && (
              <>
                <div className="divider">
                  <span className="divider-text">Friend&apos;s Details</span>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="label">
                      Friend&apos;s Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="friendName"
                      value={formData.friendName}
                      onChange={handleChange}
                      className="input"
                      placeholder="Enter your friend's name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="label">
                      Friend&apos;s Phone Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      name="friendPhone"
                      value={formData.friendPhone}
                      onChange={handleChange}
                      className="input"
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <div className="form-group ieee-checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="wantsIeeeDocs"
                  checked={formData.wantsIeeeDocs}
                  onChange={handleChange}
                  className="checkbox"
                />
                <span className="checkbox-text">
                  I want free IEEE documentation
                  <span className="checkbox-hint"> (optional &mdash; leave unchecked if not needed)</span>
                </span>
              </label>
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
