"use client";

import React, { useState } from 'react';
import './AdminProjectForm.css';
import { addProject } from '@/api/projectsCrud';

interface AdminProjectFormProps {
  onProjectAdded: () => void;
}

const AdminProjectForm: React.FC<AdminProjectFormProps> = ({ onProjectAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    youtubeUrl: '',
    category: '',
    programmingLanguage: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const categories = [
    'Machine Learning',
    'IoT',
    'Artificial Intelligence',
    'Web Development',
    'Mobile Development',
    'Embedded',
    'Blockchain',
    'Mechanical'
  ];

  const programmingLanguages = [
    'JavaScript',
    'TypeScript',
    'Python',
    'Java',
    'C++',
    'C#',
    'PHP',
    'Go',
    'Ruby',
    'Swift',
    'Kotlin',
    'Rust',
    'Dart',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Special handling for price field to automatically format
    if (name === 'price') {
      // Handle price formatting
      let formattedPrice = value;
      
      // Remove any existing ₹ symbol for processing
      formattedPrice = formattedPrice.replace('₹', '');
      
      // Remove any non-digit characters except . and ,
      formattedPrice = formattedPrice.replace(/[^\d.,]/g, '');
      
      // Add ₹ symbol back
      formattedPrice = '₹' + formattedPrice;
      
      setFormData({
        ...formData,
        [name]: formattedPrice
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
    
    // Clear global submit error when form is modified
    if (submitError) {
      setSubmitError(null);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Project name is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!formData.price.trim()) {
      newErrors.price = 'Price is required';
    }
    
    if (formData.youtubeUrl && !isValidYoutubeUrl(formData.youtubeUrl)) {
      newErrors.youtubeUrl = 'Please enter a valid YouTube URL';
    }
    
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }
    
    if (!formData.programmingLanguage) {
      newErrors.programmingLanguage = 'Programming language is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Helper to validate YouTube URL
  const isValidYoutubeUrl = (url: string) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
    return youtubeRegex.test(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError(null);
      
      try {
        // Use server action to add project
        const result = await addProject({
          name: formData.name,
          description: formData.description,
          price: formData.price,
          youtubeUrl: formData.youtubeUrl || null,
          category: formData.category,
          programmingLanguage: formData.programmingLanguage
        });
        
        if (!result.success) {
          throw new Error(result.error);
        }
        
        // Reset form after successful submission
        setFormData({
          name: '',
          description: '',
          price: '',
          youtubeUrl: '',
          category: '',
          programmingLanguage: '',
        });
        
        // Notify parent that a project was added
        onProjectAdded();
        
        // Show success message
        alert('Project added successfully!');
      } catch (error) {
        console.error('Error adding project:', error);
        setSubmitError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="admin-form-container">
      <h2 className="admin-form-title">Add New Project</h2>
      
      {submitError && (
        <div className="form-error-message">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          {submitError}
        </div>
      )}
      
      <form className="admin-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Project Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter project name"
            className={errors.name ? 'error' : ''}
            disabled={isSubmitting}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter project description"
            rows={4}
            className={errors.description ? 'error' : ''}
            disabled={isSubmitting}
          />
          {errors.description && <span className="error-message">{errors.description}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="₹0,000.00"
            className={errors.price ? 'error' : ''}
            disabled={isSubmitting}
          />
          <p className="form-help-text">
            Enter price in format ₹0,000.00
          </p>
          {errors.price && <span className="error-message">{errors.price}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="youtubeUrl">YouTube Demo URL</label>
          <input
            type="text"
            id="youtubeUrl"
            name="youtubeUrl"
            value={formData.youtubeUrl}
            onChange={handleChange}
            placeholder="https://www.youtube.com/watch?v=..."
            className={errors.youtubeUrl ? 'error' : ''}
            disabled={isSubmitting}
          />
          <p className="form-help-text">
            Paste a YouTube link to your project demo (optional)
          </p>
          {errors.youtubeUrl && <span className="error-message">{errors.youtubeUrl}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={errors.category ? 'error' : ''}
            disabled={isSubmitting}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && <span className="error-message">{errors.category}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="programmingLanguage">Programming Language</label>
          <select
            id="programmingLanguage"
            name="programmingLanguage"
            value={formData.programmingLanguage}
            onChange={handleChange}
            className={errors.programmingLanguage ? 'error' : ''}
            disabled={isSubmitting}
          >
            <option value="">Select a programming language</option>
            {programmingLanguages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
          {errors.programmingLanguage && <span className="error-message">{errors.programmingLanguage}</span>}
        </div>
        
        <div className="form-actions">
          <button 
            type="submit" 
            className="admin-form-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
                Saving...
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                  <polyline points="17 21 17 13 7 13 7 21"></polyline>
                  <polyline points="7 3 7 8 15 8"></polyline>
                </svg>
                Save Project
              </>
            )}
          </button>
          
          <button 
            type="button" 
            className="admin-form-reset"
            onClick={() => {
              setFormData({
                name: '',
                description: '',
                price: '',
                youtubeUrl: '',
                category: '',
                programmingLanguage: '',
              });
              setErrors({});
              setSubmitError(null);
            }}
            disabled={isSubmitting}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminProjectForm;