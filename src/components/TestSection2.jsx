import React from "react";
import { testDataSection1, testId } from "@/store/Section";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import { activeSection } from "@/store/Section";
import InfoModal from "./modals/InfoModal";
import ErrorModal from "./modals/ErrorModal";
import ActionModal from "./modals/ActionModal";
import StartModal from "./modals/StartModal";

export default function TestSection2() {
  const [testData, setTestData] = useRecoilState(testDataSection1);

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [startActive, setStartActive] = useState(true);
  const [moveNextSection, setMoveNextSection] = useRecoilState(activeSection);
  const [tesIdResponse, setTestIdResponse] = useRecoilState(testId);
  const [checks, setChecks] = useState([]);

  //Modal related state variables
  const [infoModal, setInfoModal] = useState(false);
  const [actionModal, setActionModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [startModal, setStartModal] = useState(false);

  // We socket related state variables
  const [socket, setSocket] = useState(null);
  const [tapPosition, setTapPosition] = useState(0);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);
  const [action, setAction] = useState(null);
  const [start, setStart] = useState(null);
  const [input, setInput] = useState();
  const [trueCheck, setTrueCheck] = useState([]);
  const [falseCheck, setFalseCheck] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/controller-test");

    ws.onopen = () => {
      console.log("Connected to Controller Test WebSocket server");
    };

    ws.onmessage = (event) => {
      const message = event.data;
      const [key, value] = message.split(":").map((str) => str.trim());

      switch (key) {
        case "tapPosition":
          handleTapPositionChange(value);
          break;
        case "checks":
          handleChecks(value);
          break;
        case "error":
          setError(value);
          break;
        case "info":
          setInfo(value);
          break;
        case "action":
          setAction(value);
          break;
        case "F":
          const newFailedArray = value.split(",").map((item) => item.trim());
          setFalseCheck((prevArray) => [...prevArray, ...newFailedArray]);
        case "S":
          const newSuccessArray = value.split(",").map((item) => item.trim());
          setTrueCheck((prevArray) => [...prevArray, ...newSuccessArray]);
        default:
          console.log("Unknown message type:", key);
      }
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket) {
      console.log("Data is sent", input)
      socket.send(input);
      // setInput("");
    }
  };
  const sendInitialMessage = (value) => {
    if (socket) {
      console.log("Data is sent", value)
      socket.send(value);
      // setInput("");
    }
  };

  const handleStartRequest = () => {
    // setLoading(true);
    setResponse(null);
    setStartActive(false);
    setStartModal(true);
    setStart("Set Lower Voltage and click Run");
  };

  const handleSectionMove = (currentSection, moveAction) => {
    console.log(moveAction);
    setMoveNextSection("download-report");
  };

  const handleChecks = (value) => {
    const [checksA, checksB] = value.split("||").map((str) => str.trim());
    const trueChecks = checksA.split(",").map((str) => str.trim());
    const falseChecks = checksB.split(",").map((str) => str.trim());
    setTrueCheck(trueChecks);
    setFalseCheck(falseChecks);
  };

  const closeInfoModal = () => {
    console.log("Info Modal Close is pressed");
    setInfoModal(false);
  };
  const closeErrorModal = () => {
    console.log("Error Modal Close is pressed");
    setErrorModal(false);
  };
  const closeActionModal = () => {
    console.log("Error Modal Close is pressed");
    setActionModal(false);
  };

  const restartTest = () => {
    setStartActive(true);
  };

  const resumeAction = () => {
    setInput("RESUME");
    sendMessage();
  };


  const runAction = () => {
    console.log("Run button is pressed");
    console.log("START_LV");
    sendInitialMessage("START_LV");
    setStartModal(false);
  };

  const downloadAction = () => {
    setMoveNextSection("download-report");
  };

  const handleTapPositionChange = (value) => {
    setTrueCheck([]);
    setFalseCheck([]);
    setTapPosition(value);
  };

  const [nameArray, setNameArray] = useState([
    "Name 1",
    "Name 2",
    "Name 3",
    "Name 4",
    "Name 5",
    "Name 6",
    "Name 7",
    "Name 8",
    "Name 9",
    "Name 10",
    // Add more names as needed
  ]);

  const [newNameArray, setNewNameArray] = useState([
    "New Name 1",
    "New Name 2",
    "New Name 3",
    // Add more new names as needed
  ]);

  const renderRows = () => {
    // const combinedArray = [...nameArray, ...newNameArray]; // Combine both arrays
    const combinedArray = [...trueCheck, ...falseCheck]; // Combine both arrays
    const numRows = Math.ceil(combinedArray.length / 3); // Calculate number of rows needed

    const rows = [];
    for (let i = 0; i < numRows; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        const index = i * 3 + j;
        if (index < combinedArray.length) {
          // const className = index < nameArray.length ? 'success automation-step' : 'failure automation-step';
          const className =
            index < trueCheck.length
              ? "success automation-step"
              : "failure automation-step";
          row.push(
            <td key={`cell-${index}`} className={className}>
              {combinedArray[index]}
            </td>
          );
        } else {
          row.push(<td key={`empty-${i}-${j}`}></td>);
        }
      }
      rows.push(<tr key={`row-${i}`}>{row}</tr>);
    }

    return rows;
  };

  return (
    <>
      {infoModal && (
        <InfoModal
          showModal={infoModal}
          closeModal={closeInfoModal}
          modalMessage={info}
          downloadAction={downloadAction}
        />
      )}
      {errorModal && (
        <ErrorModal
          showModal={errorModal}
          closeModal={closeErrorModal}
          modalMessage={error}
        />
      )}
      {actionModal && (
        <ActionModal
          showModal={actionModal}
          closeModal={closeActionModal}
          modalMessage={action}
          resumeAction={resumeAction}
        />
      )}
      {startModal && (
        <StartModal
          showModal={startModal}
          closeModal={closeActionModal}
          modalMessage={start}
          runAction={runAction}
        />
      )}
      <div className="form-section data-section TestDataSection2">
        {response && <div className="error-message">{response}</div>}

        <div className="section section-info">
          <div className="box count data">
            <div className="count-no">{tapPosition}</div>
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
                onClick={handleStartRequest}
                disabled={!startActive}
              >
                Start
              </button>
              <button className="pause" disabled={startActive}>
                Pause
              </button>
              <button
                className="restart"
                disabled={startActive}
                onClick={restartTest}
              >
                Restart
              </button>
            </div>
          </div>
        </div>
        {/* {loading && (
          <div className="progress-container">
            <p className="loading-info">
              Please wait while data is fetched from device...
            </p>
            <div className="progress-bar"></div>
          </div>
        )} */}
        {/* <table className="section steps">
          <tr>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field1"
                id="check-field1"
                checked={checks.includes("field1")}
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
              />
              <label htmlFor="check-field5">5. MPR Trip Indication 1</label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field6"
                id="check-field6"
                checked={checks.includes("field6")}
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
              />
              <label htmlFor="check-field11">11. Local Indication</label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field12"
                id="check-field12"
                checked={checks.includes("field12")}
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
              />
              <label htmlFor="check-field13">13. ODD Indication</label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field14"
                id="check-field214"
                checked={checks.includes("field14")}
              />
              <label htmlFor="check-field14">14. EVEN Indication</label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field15"
                id="check-field15"
                checked={checks.includes("field15")}
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
              />
              <label htmlFor="check-field20">20. AC Supply Fail</label>
            </td>
            <td className="automation-step">
              <input
                type="checkbox"
                name="check-field21"
                id="check-field21"
                checked={checks.includes("field21")}
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
              />
              <label htmlFor="check-field24">24. TDR Potential Free</label>
            </td>
          </tr>
        </table> */}
        <table className="section steps">{renderRows()}</table>
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
