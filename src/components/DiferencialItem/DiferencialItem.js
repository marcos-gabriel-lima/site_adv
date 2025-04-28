import React from 'react';
import './DiferencialItem.css';

const DiferencialItem = ({ icon, title, text }) => {
  return (
    <div className="diferencial-item">
      <div className="diferencial-icon">
        <i className={icon}></i>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default DiferencialItem; 