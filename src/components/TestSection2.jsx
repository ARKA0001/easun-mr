import React from "react";
import { testDataSection1 } from "@/store/Section";
import { useRecoilState } from "recoil";
import { useState } from "react";

export default function TestSection2() {
  const [testData, setTestData] = useRecoilState(testDataSection1);

  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [startActive, setStartActive] = useState(true) 

  const handlePutRequest = async () => {
    setLoading(true);
    setResponse(null);
    setStartActive(false)

    try {
      const res = await fetch("http://localhost:8080/device/testData/1234", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const result = await res.json();
      setResponse(result);
    } catch (error) {
      setResponse({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-section data-section TestDataSection2">
      <div className="section">
        <div className="box count">
          <div className="count-no">12</div>
          <div className="info">Current Tap Position</div>
        </div>
        <div className="box">
          <table>
            <tr>
              <td>Serial No</td>
              <td>{testData.serialNumber}</td>
            </tr>
            <tr>
              <td>Test Type</td>
              <td>{testData.testType}</td>
            </tr>
            <tr>
              <td>Test Voltage</td>
              <td>Nominal</td>
            </tr>
            <tr>
              <td>Cycle No</td>
              <td>{testData.cycles}</td>
            </tr>
            <tr>
              <td>Maximum Tap Positions</td>
              <td>{testData.tapPositionMax}</td>
            </tr>
          </table>
        </div>
        <div className="box test-status">
          <div className="status">Test Status</div>
          <div className="actions">
            <button className="start" onClick={handlePutRequest} disabled={!startActive}>
              Start
            </button>
            <button className="pause" disabled={startActive}>Pause</button>
            <button className="restart" disabled={startActive}>Restart</button>
          </div>
        </div>
      </div>

      <table className="section steps">
        <tr>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">1. Upper Limit Reached Indication 1</label>
          </td>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">2. Upper Limit Reached Indication 2</label>
          </td>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">3. Lower Limit Reached Indication 1</label>
          </td>
        </tr>
        <tr>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">4. Lower Limit Reached Indication 2</label>
          </td>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">5. MPR Trip Indication 1</label>
          </td>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">6. MPR Trip Indication 2</label>
          </td>
        </tr>

        <tr>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">7. Tap Change in Progress Indications 1</label>
          </td>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">8. Tap Change in Progress Indication 2</label>
          </td>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">9. Tap Change delay/struck up 1</label>
          </td>
        </tr>

        <tr>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">10. Tap Change delay/strcuk up 1</label>
          </td>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">11. Local Indication</label>
          </td>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">12. Remote Indication</label>
          </td>
        </tr>

        <tr>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">13. ODD Indication</label>
          </td>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">14. EVEN Indication</label>
          </td>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">15. SPP Potential Free Indication</label>
          </td>
        </tr>

        <tr>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">16. Control Supply Free Indication</label>
          </td>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">17. Control Supply Unhealthy Indication</label>
          </td>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">18. Power Supply 415V Helathy Condition</label>
          </td>
        </tr>

        <tr>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">19. Power Supply 415V Unhealthy</label>
          </td>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">20. AC Supply Fail</label>
          </td>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">21. ILC (Interlocking) Circuit Indicators</label>
          </td>
        </tr>

        <tr>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">22. Proximity Switch Healthy Indications</label>
          </td>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">23. Tap Changer Healthy Monitoring</label>
          </td>
          <td className="automation-step">
            <input type="radio" name="" id="" />
            <label htmlFor="">22. TDR Potential Free</label>
          </td>
        </tr>
      </table>

      <button className="report-download" disabled={loading}>
        Download Report
      </button>
    </div>
  );
}
