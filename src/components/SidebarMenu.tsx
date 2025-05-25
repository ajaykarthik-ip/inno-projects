import React from 'react';
import './SidebarMenu.css';

const SidebarMenu: React.FC = () => {
  const categories = [
    'Java', 
    'Python', 
    'Machine Learning', 
    'Mechanical', 
    'Raspberry Pi', 
    'Artificial Intelligence',
    'Blockchain'
  ];

  return (
    <div className="sidebar-menu">
      <div className="sidebar-header">
        Browse Categories
      </div>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            <a href="#" className="category-link">{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;