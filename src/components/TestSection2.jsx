import React from "react";
import { testDataSection1, testId } from "@/store/Section";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { activeSection } from "@/store/Section";
import TestSuccessful from "./modals/TestSuccessful";

export default function TestSection2() {
  const [testData, setTestData] = useRecoilState(testDataSection1);

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [startActive, setStartActive] = useState(true);
  const [moveNextSection, setMoveNextSection] = useRecoilState(activeSection);
  const [tesIdResponse, setTestIdResponse] = useRecoilState(testId);
  const [checks, setChecks] = useState([]);
  const [testSuccessfulModal, setTestSuccessfulModal] = useState(false);

  const handlePutRequest = async () => {
    setLoading(true);
    setResponse(null);
    setStartActive(false);

    try {
      const res = await fetch("http://localhost:8080/device/testData/1234", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const result = await res.json();
      setResponse(null);
      setChecks(result.data.checkedFields);
      setTestIdResponse(result.testId);
      handleSectionMove("testSection2", 1);
      setTestSuccessfulModal(true)
    } catch (error) {
      setResponse(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSectionMove = (currentSection, moveAction) => {
    console.log(moveAction);
    setMoveNextSection("download-report");
  };

  const closeTestSuccessModal = () => {
    console.log("Modal Close is pressed")
    setTestSuccessfulModal(false)
  }

  const restartTest = () => {
    setStartActive(true)
  }

  return (
    <>
      {testSuccessfulModal && (
        <TestSuccessful showModal={testSuccessfulModal} closeModal={closeTestSuccessModal}/>
      )}
      <div className="form-section data-section TestDataSection2">
        {response && <div className="error-message">{response}</div>}

        <div className="section section-info">
          <div className="box count data">
            <div className="count-no">12</div>
            <div className="info">Current Tap Position</div>
          </div>
          <div className="box data">
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
          <div className="box test-status data">
            <div className="status">Test Status</div>
            <div className="actions">
              <button
                className="start"
                onClick={handlePutRequest}
                disabled={!startActive}
              >
                Start
              </button>
              <button className="pause" disabled={startActive}>
                Pause
              </button>
              <button className="restart" disabled={startActive} onClick={restartTest}>
                Restart
              </button>
            </div>
          </div>
        </div>
        {loading && (
          <div className="progress-container">
            <p className="loading-info">
              Please wait while data is fetched from device...
            </p>
            <div className="progress-bar"></div>
          </div>
        )}
        <table className="section steps">
          <tr>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field1"
                id="check-field1"
                checked={checks.includes("field1")}
                disabled
              />
              <label htmlFor="check-field1">
                1. Upper Limit Reached Indication 1
              </label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field2"
                id="check-field2"
                checked={checks.includes("field2")}
                disabled
              />
              <label htmlFor="check-field2">
                2. Upper Limit Reached Indication 2
              </label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field3"
                id="check-field3"
                checked={checks.includes("field3")}
                disabled
              />
              <label htmlFor="check-field3">
                3. Lower Limit Reached Indication 1
              </label>
            </td>
          </tr>
          <tr>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field4"
                id="check-field4"
                checked={checks.includes("field4")}
                disabled
              />
              <label htmlFor="check-field4">
                4. Lower Limit Reached Indication 2
              </label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field5"
                id="check-field5"
                checked={checks.includes("field5")}
                disabled
              />
              <label htmlFor="check-field5">5. MPR Trip Indication 1</label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field6"
                id="check-field6"
                checked={checks.includes("field6")}
                disabled
              />
              <label htmlFor="check-field6">6. MPR Trip Indication 2</label>
            </td>
          </tr>

          <tr>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field7"
                id="check-field7"
                checked={checks.includes("field7")}
                disabled
              />
              <label htmlFor="check-field7">
                7. Tap Change in Progress Indications 1
              </label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field8"
                id="check-field8"
                checked={checks.includes("field8")}
                disabled
              />
              <label htmlFor="check-field8">
                8. Tap Change in Progress Indication 2
              </label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field9"
                id="check-field9"
                checked={checks.includes("field9")}
                disabled
              />
              <label htmlFor="check-field9">
                9. Tap Change delay/struck up 1
              </label>
            </td>
          </tr>

          <tr>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field10"
                id="check-field10"
                checked={checks.includes("field10")}
                disabled
              />
              <label htmlFor="check-field10">
                10. Tap Change delay/strcuk up 1
              </label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field11"
                id="check-field11"
                checked={checks.includes("field11")}
                disabled
              />
              <label htmlFor="check-field11">11. Local Indication</label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field12"
                id="check-field12"
                checked={checks.includes("field12")}
                disabled
              />
              <label htmlFor="check-field12">12. Remote Indication</label>
            </td>
          </tr>

          <tr>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field13"
                id="check-field13"
                checked={checks.includes("field13")}
                disabled
              />
              <label htmlFor="check-field13">13. ODD Indication</label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field14"
                id="check-field214"
                checked={checks.includes("field14")}
                disabled
              />
              <label htmlFor="check-field14">14. EVEN Indication</label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field15"
                id="check-field15"
                checked={checks.includes("field15")}
                disabled
              />
              <label htmlFor="check-field15">
                15. SPP Potential Free Indication
              </label>
            </td>
          </tr>

          <tr>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field16"
                id="check-field16"
                checked={checks.includes("field16")}
                disabled
              />
              <label htmlFor="check-field16">
                16. Control Supply Free Indication
              </label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field17"
                id="check-field17"
                checked={checks.includes("field17")}
                disabled
              />
              <label htmlFor="check-field17">
                17. Control Supply Unhealthy Indication
              </label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field18"
                id="check-field18"
                checked={checks.includes("field18")}
                disabled
              />
              <label htmlFor="check-field18">
                18. Power Supply 415V Helathy Condition
              </label>
            </td>
          </tr>

          <tr>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field19"
                id="check-field19"
                checked={checks.includes("field19")}
                disabled
              />
              <label htmlFor="check-field19">
                19. Power Supply 415V Unhealthy
              </label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field20"
                id="check-field20"
                checked={checks.includes("field20")}
                disabled
              />
              <label htmlFor="check-field20">20. AC Supply Fail</label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field21"
                id="check-field21"
                checked={checks.includes("field21")}
                disabled
              />
              <label htmlFor="check-field21">
                21. ILC (Interlocking) Circuit Indicators
              </label>
            </td>
          </tr>

          <tr>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field22"
                id="check-field22"
                checked={checks.includes("field22")}
                disabled
              />
              <label htmlFor="check-field22">
                22. Proximity Switch Healthy Indications
              </label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field23"
                id="check-field23"
                checked={checks.includes("field23")}
                disabled
              />
              <label htmlFor="check-field23">
                23. Tap Changer Healthy Monitoring
              </label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field24"
                id="check-field24"
                checked={checks.includes("field24")}
                disabled
              />
              <label htmlFor="check-field24">24. TDR Potential Free</label>
            </td>
          </tr>
        </table>

        <button
          className="action-button"
          onClick={() => handleSectionMove("testSection2", 2)}
        >
          Save and Next
        </button>
      </div>
    </>
  );
}
