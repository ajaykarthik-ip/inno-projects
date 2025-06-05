"use client";

import React, { useState } from 'react';
import './page.css';

export default function RequestProject() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    title: '',
    description: '',
    requirements: '',
    deadline: '',
    urgency: ''
  });

  const phoneNumber = "9600309140";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `
🔥 NEW PROJECT REQUEST 🔥

📋 Personal Details:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}

🎯 Project Information:
• Type: ${formData.projectType}
• Title: ${formData.title}
• Description: ${formData.description}

📝 Requirements:
${formData.requirements || 'No specific requirements mentioned'}

⏰ Timeline:
• Deadline: ${formData.deadline || 'Not specified'}
• Urgency: ${formData.urgency}

Let's discuss this project! Please review my request and get back to me. Thank you!
    `.trim();

    const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="request-container">
      <div className="request-content">
        <div className="request-header">
          <h1 className="request-title">Request New Project</h1>
          <p className="request-subtitle">
            Tell us about your project requirements and we'll get back to you with a custom solution. 
            Fill out the form below and we'll contact you via WhatsApp.
          </p>
        </div>

        <form className="project-form" onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="+91 9876543210"
            />
          </div>

          {/* Project Information */}
          <div className="form-group">
            <label className="form-label" htmlFor="projectType">Project Type *</label>
            <p className="form-helper">Select the type of project:</p>
            <select
              id="projectType"
              name="projectType"
              className="form-select"
              value={formData.projectType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select project type</option>
              <option value="IEEE Format Journal Paper">IEEE Format Journal Paper</option>
              <option value="Final Year Project">Final Year Project</option>
              <option value="Technical Writing">Technical Writing</option>
              <option value="Mini Project">Mini Project</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="title">Project Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-input"
              value={formData.title}
              onChange={handleInputChange}
              required
              placeholder="Brief title of your project"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="description">Project Description *</label>
            <textarea
              id="description"
              name="description"
              className="form-textarea"
              value={formData.description}
              onChange={handleInputChange}
              required
              placeholder="Provide a detailed description of your project, objectives, and expected outcomes..."
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="requirements">Specific Requirements</label>
            <textarea
              id="requirements"
              name="requirements"
              className="form-textarea"
              value={formData.requirements}
              onChange={handleInputChange}
              placeholder="Any specific formatting requirements, citation styles, page limits, or special instructions..."
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="deadline">Preferred Deadline</label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              className="form-input"
              value={formData.deadline}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Urgency Level */}
          <div className="form-group">
            <label className="form-label">Urgency Level *</label>
            <div className="urgency-options">
              <div className="urgency-option">
                <input
                  type="radio"
                  id="standard"
                  name="urgency"
                  value="5–7 Days"
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="standard">5–7 Days</label>
              </div>
              <div className="urgency-option">
                <input
                  type="radio"
                  id="urgent"
                  name="urgency"
                  value="2–3 Days"
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="urgent">2–3 Days</label>
              </div>
              <div className="urgency-option">
                <input
                  type="radio"
                  id="express"
                  name="urgency"
                  value="12–24 Hours"
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="express">12–24 Hours</label>
              </div>
            </div>
          </div>

          <div className="lets-discuss-section">
            <h3 className="lets-discuss-title">Let's Discuss</h3>
          </div>

          <div className="form-note">
            <p className="form-note-text">
              📱 Your request will be sent via WhatsApp for a quick response and smooth communication.
            </p>
          </div>

          <div className="submit-section">
            <p className="submit-description">
              Click below to send your project request via WhatsApp. We'll review your requirements and get back to you within 2 hours.
            </p>
            <button type="submit" className="submit-btn">
              <span>📤</span>
              <span>Send Request via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}