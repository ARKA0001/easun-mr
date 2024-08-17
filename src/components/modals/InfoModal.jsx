import React from "react";
import { useState, useEffect } from "react";

export default function InfoModal({ showModal, modalMessage, messageAction }) {
  const [infoMessage, setInfoMessage] = useState(null);
  const [modalText, setModalText] = useState("");

  useEffect(() => {
    if (modalMessage === "DONE_LV") {
      setInfoMessage("START_HV");
      setModalText("Set High Voltage and click Run");
    } else if (modalMessage === "DONE_HV") {
      setInfoMessage("START_NV");
      setModalText("Set Nominal Voltage and click Run");
    } else if (modalMessage === "DONE_NV") {
      setInfoMessage("DONE_NV");
      setModalText(
        "Testing completed. Please Download report from report section"
      );
    }
  }, [modalMessage]);

  return (
    showModal && (
      <div className="modal-container">
        <div className="modal">
          <div className="message">Information</div>
          <div className="info">{modalText}</div>
          <div className="actions">
            {/* <button>Close</button> */}
            {infoMessage && (
              <button
                onClick={() => messageAction(infoMessage)}
                className="resume-button"
              >
                {(infoMessage === "START_HV" || infoMessage === "START_NV") &&
                infoMessage != "DONE_NV"
                  ? "Run"
                  : "Ok"}
              </button>
            )}
            {infoMessage === "DONE_NV" && (
              <>
                <button
                  onClick={() => messageAction("DONE_NV")}
                  className="resume-button"
                >
                  Ok
                </button>
                <button
                  onClick={() => messageAction("START_NEW")}
                  className="resume-button"
                >
                 Start New Test
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
}
