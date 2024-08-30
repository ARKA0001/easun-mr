import React, { useState, useEffect } from "react";

export default function ActionModal({ showModal, modalMessage, resumeAction }) {
  const [actionMessage, setActionMessage] = useState(null);
  const [displayMessage, setDisplayMessage] = useState("");

  useEffect(() => {
    // Determine the message to display and the action to take based on `modalMessage`
    const getModalMessage = (message) => {
      if (message === "DONE_LV") {
        setActionMessage("START_HV");
        return "Set High Voltage, if tap position 2 present, please select tap position 2 in TPI switch and click Run";
      } else if (message === "DONE_HV") {
        setActionMessage("START_NV");
        return "Set Nominal Voltage and click Run";
      } else if (message === "IN PROGRESS") {
        setActionMessage("CLOSE");
        return "Report cannot be downloaded as testing is in progress";
      } else {
        setActionMessage("RESUME");
        return message;
      }
    };

    setDisplayMessage(getModalMessage(modalMessage));
  }, [modalMessage]);

  const handleResumeAction = () => {
    if (actionMessage) {
      resumeAction(actionMessage);
    }
  };

  return (
    showModal && (
      <div className="modal-container">
        <div className="modal">
          <div className="message">Action</div>
          <div className="info">{displayMessage}</div>
          <div className="actions">
            {/* <button onClick={closeModal}>Restart</button> */}
            {actionMessage && (
              <button onClick={handleResumeAction} className="resume-button">
                {actionMessage === "START_HV" || actionMessage === "START_NV"
                  ? "Run"
                  : actionMessage === "CLOSE"
                  ? "CLOSE"
                  : "Resume"}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
}
