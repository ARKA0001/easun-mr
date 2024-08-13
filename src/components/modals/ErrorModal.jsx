import React from "react";

export default function ErrorModal({ showModal, modalMessage, errorAction }) {
  return (
    showModal && (
      <div className="modal-container">
        <div className="modal">
          <div className="message">Error</div>
          <div className="info">
            <ul className="error-list">
              {modalMessage.map((error, index) => (
                <li key={index} className="error-item">
                  {error}
                </li>
              ))}
            </ul>
          </div>
          <div className="actions">
            <button onClick={errorAction} className="resume-button">
              Continue
            </button>
          </div>
        </div>
      </div>
    )
  );
}
