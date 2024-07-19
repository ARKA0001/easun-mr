import React from "react";

export default function InfoModal({ showModal, closeModal, modalMessage }) {
  const [infoMessage, setInfoMessage] = useState(null);

  const renderModalMessage = (message) => {
    if (message === "DONE_LV") {
      setInfoMessage("START_NV");
      return "Set Nominal Voltage and click Run";
    } else if (message === "DONE_NV") {
      setInfoMessage("START_HV");
      return "Set High Voltage and click Run";
    } else if (message === "DONE_HV") {
      setInfoMessage("DONE_HV");
      return "Testing completed for LV, NV, HV. Please Download report";
    }
  };

  return (
    showModal && (
      <div className="modal-container">
        <div className="modal">
          <div className="message">Information</div>
          <div className="info">{renderModalMessage(modalMessage)}</div>
          <div className="actions">
            <button>Close</button>
            {infoMessage && (
              <button
                onClick={messageAction(infoMessage)}
                className="resume-button"
              >
                {infoMessage === "START_HV" || infoMessage === "START_NV"
                  ? "Run"
                  : "Go to Download"}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
}
