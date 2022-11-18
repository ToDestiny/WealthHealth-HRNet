import React from 'react';
import './Modal.css';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modalContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p className="closeBtn" onClick={onClose}>
          X
        </p>
        <div className="content">Employee Created!</div>
      </div>
    </div>
  );
};

export default Modal;
