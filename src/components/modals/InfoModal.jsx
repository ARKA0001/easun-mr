import React from "react";
import { useState, useEffect } from "react";

export default function InfoModal({ showModal, closeModal, modalMessage, messageAction }) {
  const [infoMessage, setInfoMessage] = useState(null);
  const [modalText, setModalText] = useState("");

  useEffect(() => {
    if (modalMessage === "DONE_LV") {
      setInfoMessage("START_NV");
      setModalText("Set Nominal Voltage and click Run");
    } else if (modalMessage === "DONE_NV") {
      setInfoMessage("START_HV");
      setModalText("Set High Voltage and click Run");
    } else if (modalMessage === "DONE_HV") {
      setInfoMessage("DONE_HV");
      setModalText("Testing completed for LV, NV, HV. Please Download report");
    }
  }, [modalMessage]);


  // const renderModalMessage = (message) => {
  //   if (message === "DONE_LV") {
  //     setInfoMessage("START_NV");
  //     return "Set Nominal Voltage and click Run";
  //   } else if (message === "DONE_NV") {
  //     setInfoMessage("START_HV");
  //     return "Set High Voltage and click Run";
  //   } else if (message === "DONE_HV") {
  //     setInfoMessage("DONE_HV");
  //     return "Testing completed for LV, NV, HV. Please Download report";
  //   }
  // };

  return (
    showModal && (
      <div className="modal-container">
        <div className="modal">
          <div className="message">Information</div>
          <div className="info">{modalText}</div>
          <div className="actions">
            <button>Close</button>
            {infoMessage && (
              <button
                onClick={()=>messageAction(infoMessage)}
                className="resume-button"
              >
                {infoMessage === "START_HV" || infoMessage === "START_NV"
                  ? "Run"
                  : "Save & Next"}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
}
