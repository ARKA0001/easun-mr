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
      setModalText(
        "Set Nominal Voltage and Tap position 2 in TPI switch (if present) and click Run"
      );
    }
    // else if (modalMessage === "DONE_NV" || modalMessage === "DONE") {
    //   setInfoMessage("DONE_NV");
    //   setModalText(
    //     "Testing completed. Please Download report from report section"
    //   );
    // }
    else if (modalMessage === "DONE_NV") {
      setInfoMessage("DONE_NV");
      setModalText("Insert Hand Cranck.");
    } else if (modalMessage === "ERROR_HC") {
      setInfoMessage("DONE_NV");
      setModalText("Error Hand Cranck.");
    } else if (modalMessage === "ERROR_IL") {
      setInfoMessage("DONE_PR");
      setModalText("Error Interlocking.");
    } else if (modalMessage === "ERROR_PR") {
      setInfoMessage("DONE_HC");
      setModalText("Error Proximity.");
    } else if (modalMessage === "DONE_HC") {
      setInfoMessage("DONE_PR");
      setModalText("Check Proximity.");
    } else if (modalMessage === "DONE_IL" || modalMessage === "DONE") {
      setInfoMessage("DONE");
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
            {infoMessage === "START_HV" || infoMessage === "START_NV" ? (
              <button
                onClick={() => messageAction(infoMessage)}
                className="resume-button"
              >
                {infoMessage === "START_HV" || infoMessage === "START_NV"
                  ? "Run"
                  : "Ok"}
              </button>
            ) : (
              <></>
            )}
            {infoMessage === "DONE_NV" && (
              <>
                <button
                  onClick={() => messageAction("SKIP_HC")}
                  className="resume-button"
                >
                  Skip
                </button>
                <button
                  onClick={() => messageAction("START_HC")}
                  className="resume-button"
                >
                  Proceed Next
                </button>
              </>
            )}
            {infoMessage === "DONE_HC" && (
              <>
                <button
                  onClick={() => messageAction("SKIP_PR")}
                  className="resume-button"
                >
                  Skip
                </button>
                <button
                  onClick={() => messageAction("START_PR")}
                  className="resume-button"
                >
                  Proceed Next
                </button>
              </>
            )}
            {infoMessage === "DONE_PR" && (
              <>
                <button
                  onClick={() => messageAction("SKIP_PR")}
                  className="resume-button"
                >
                  Skip
                </button>
                <button
                  onClick={() => messageAction("START_PR")}
                  className="resume-button"
                >
                  Proceed Next
                </button>
              </>
            )}
            {infoMessage === "DONE" && (
              <>
                <button
                  onClick={() => messageAction("DONE")}
                  className="resume-button"
                >
                  Download Report
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
}
