import React, { useState } from "react";

export default function DownloadReport() {
  const [responseMessage, setResponseMessage] = useState();
  const [loading, setLoading] = useState(false);
  const downloadReport = async () => {
    setLoading(true)
    console.log("Download Report is pressed");
    try {
      const res = await fetch("http://localhost:8080/device/runTest", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const result = await res.json();
      setLoading(false)
      setResponseMessage(result)
    } catch (error) {
      throw new Error(`HTTP error! status:`, error);
    } finally {
      console.log("Download Process completed");
    }
  };

  return (
    <div className="form-section data-section dowload-section">
      {responseMessage}
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
