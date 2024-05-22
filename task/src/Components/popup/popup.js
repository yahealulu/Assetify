// src/Components/Popup/Popup.jsx
import React from 'react';
import './popup.css';
import { Link } from 'react-router-dom';


const Popup = ({ message, onCancel }) => {
  return (
      <div className="popup-overlay">
     <img  className='backimg'></img>
      <div className="popup-content">
        <h3>{message}</h3>
        <div className="popup-buttons">
          <Link to="/" className="confirm-button">تأكيد</Link>
          <button className="cancel-button" onClick={onCancel}>تراجع</button>
        </div>
      </div>
    </div>
   
  );
};

export default Popup;
