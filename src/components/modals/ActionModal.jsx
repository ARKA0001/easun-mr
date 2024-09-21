import React, { useState, useEffect } from "react";

export default function ActionModal({ showModal, modalMessage, resumeAction }) {
  const [actionMessage, setActionMessage] = useState(null);
  const [displayMessage, setDisplayMessage] = useState("");

  useEffect(() => {
    // Determine the message to display and the action to take based on `modalMessage`
    const getModalMessage = (message) => {
      if (message === "IN PROGRESS") {
        setActionMessage("CLOSE");
        return "Report cannot be downloaded as testing is in progress";
      } else if (message === "MANUAL_CONFIRMATION") {
        setActionMessage("MA_CNF");
        return "Are all manual sections completed?";
      } else {
        setActionMessage("RESUME");
        return message;
      }
    };

    setDisplayMessage(getModalMessage(modalMessage));
  }, [modalMessage]);

  const handleResumeAction = (value) => {
    resumeAction(value);
  };

  return (
    showModal && (
      <div className="modal-container">
        <div className="modal">
          <div className="message">Action</div>
          <div className="info">{displayMessage}</div>
          <div className="actions">
            {actionMessage === "CLOSE" && (
              <>
                <button
                  onClick={() => handleResumeAction("CLOSE")}
                  className="resume-button"
                >
                  CLOSE
                </button>
              </>
            )}

            {actionMessage === "MA_CNF" && (
              <>
                <button
                  onClick={() => handleResumeAction("NO_MA_CNF")}
                  className="resume-button"
                >
                  No
                </button>
                <button
                  onClick={() => handleResumeAction("YES_MA_CNF")}
                  className="resume-button"
                >
                  Yes
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
}
