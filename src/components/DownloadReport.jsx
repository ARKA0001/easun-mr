import { actionModalStore, actionMessageStore, responseMessageStore } from "@/store/Section";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import PotentialFreeCheck from "./PotentialFreeCheck";

export default function DownloadReport() {
  const [responseMessage, setResponseMessage] = useRecoilState(responseMessageStore);
  const [loading, setLoading] = useState(false);
  const [actionModal, setActionModal] = useRecoilState(actionModalStore);
  const [actionMessage, setActionMessage] = useRecoilState(actionMessageStore);

  return (
    <div className="form-section data-section dowload-section">
      {responseMessage && (
        <div className="success-container">{responseMessage}</div>
      )}

      <PotentialFreeCheck />

      {loading && (
        <div className="progress-container">
          <p className="loading-info">
            Please wait while your file is being downloaded...
          </p>
          <div className="progress-bar"></div>
        </div>
      )}
      {/* <button className="download-report" onClick={downloadReport}>
        Download Report
      </button> */}
    </div>
  );
}
