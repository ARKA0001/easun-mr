import { actionModalStore, actionMessageStore } from "@/store/Section";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

export default function DownloadReport() {
  const [responseMessage, setResponseMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [actionModal, setActionModal] = useRecoilState(actionModalStore);
  const [actionMessage, setActionMessage] = useRecoilState(actionMessageStore);

  const downloadReport = async () => {
    setLoading(true);
    console.log("Download Report is pressed");
    try {
      // const res = await fetch("http://localhost:8080/device/runTest", {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      // if (!res.ok) {
      //   throw new Error(`HTTP error! status: ${res.status}`);
      // }
      // const result = await res.json();
      const result = "IN PROGRESS";
      console.log(result)
      setLoading(false);
      if (result != "IN PROGRESS") {
        setResponseMessage(result);
      } else {
        setActionMessage("IN PROGRESS");
        setActionModal(true);
      }
    } catch (error) {
      throw new Error(`HTTP error! status:`, error);
    } finally {
      console.log("Download Process completed");
    }
  };

  return (
    <div className="form-section data-section dowload-section">
      {responseMessage && (
        <div className="success-container">{responseMessage}</div>
      )}

      {loading && (
        <div className="progress-container">
          <p className="loading-info">
            Please wait while your file is being downloaded...
          </p>
          <div className="progress-bar"></div>
        </div>
      )}
      <button className="download-report" onClick={downloadReport}>
        Download Report
      </button>
    </div>
  );
}
