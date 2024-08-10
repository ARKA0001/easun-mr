import React, { useState } from "react";

export default function ActionModal({ showModal, modalMessage, resumeAction }) {
  const [actionMessage, setActionMessage] = useState(null);

  const renderModalMessage = (message) => {
    if (message === "DONE_LV") {
      setActionMessage("START_HV");
      return "Set High Voltage and click Run";
    } else if (message === "DONE_HV") {
      setActionMessage("START_NV");
      return "Set Nominal Voltage and click Run";
    } else {
      setActionMessage("RESUME");
      return message;
    }
  };
  return (
    showModal && (
      <div className="modal-container">
        <div className="modal">
          <div className="message">Action</div>
          <div className="info">{renderModalMessage(modalMessage)}</div>
          <div className="actions">
            <button onClick={closeModal}>Restart</button>
            {actionMessage && (
              <button
                onClick={resumeAction(actionMessage)}
                className="resume-button"
              >
                {actionMessage === "START_HV" || actionMessage === "START_NV"
                  ? "Run"
                  : "Resume"}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
}
