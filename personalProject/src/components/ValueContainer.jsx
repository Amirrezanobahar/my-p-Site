import React from 'react';
import './valueContainer.css';

const ValueContainer = ({ icon, title, values }) => {
  return (
    <div className="value-container">
      <div className="value-header">
        <div className="value-icon">{icon}</div>
        <h3 className="value-title">{title}</h3>
      </div>
      
      <ul className="value-list">
        {values.map((item, index) => (
          <li key={index} className="value-item">
            <span className="value-item-marker">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValueContainer;