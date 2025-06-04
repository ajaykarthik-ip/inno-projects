// src/app/admin/page.tsx
"use client";

import React, { useState } from 'react';
import AdminProjectForm from '@/components/AdminProjectForm';
import AdminProjectList from '@/components/AdminProjectList';
import './admin.css';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'create' | 'manage'>('create');
  // Use a counter to trigger refreshes of the project list
  const [refreshCounter, setRefreshCounter] = useState(0);

  // Handler when a project is added
  const handleProjectAdded = () => {
    // Increment refresh counter to trigger a refresh of the project list
    setRefreshCounter(prev => prev + 1);
    
    // Optionally switch to the manage tab after adding
    setActiveTab('manage');
  };

  return (
    <div className="content-section">
      {/* Admin header */}
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Manage your projects from this panel</p>
      </div>
      
      {/* Tab navigation */}
      <div className="admin-container">
        <div className="admin-tabs">
          <button 
            className={`admin-tab ${activeTab === 'create' ? 'active' : ''}`}
            onClick={() => setActiveTab('create')}
          >
            Create Project
          </button>
          <button 
            className={`admin-tab ${activeTab === 'manage' ? 'active' : ''}`}
            onClick={() => setActiveTab('manage')}
          >
            Manage Projects
          </button>
        </div>

        {/* Tab content */}
        <div className="admin-content">
          {activeTab === 'create' ? (
            <>
              <h2 className="admin-section-title">Add New Project</h2>
              <AdminProjectForm onProjectAdded={handleProjectAdded} />
            </>
          ) : (
            <AdminProjectList refreshTrigger={refreshCounter} />
          )}
        </div>
      </div>
    </div>
  );
}