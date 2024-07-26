import React from "react";
import { testDataSection1, testId, savedSection } from "@/store/Section";
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
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);
  const [tesIdResponse, setTestIdResponse] = useRecoilState(testId);
  const [checks, setChecks] = useState([]);
  const [savedSectionCount, setSavedSectionCount] =
    useRecoilState(savedSection);

  //Modal related state variables
  const [infoModal, setInfoModal] = useState(false);
  const [actionModal, setActionModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [startModal, setStartModal] = useState(false);

  // We socket related state variables
  const [socket, setSocket] = useState(null);
  const [tapPosition, setTapPosition] = useState(0);
  const [ma1, setMa1] = useState(0);
  const [ma2, setMa2] = useState(0);
  const [motorMa, setMotorMa] = useState(0);
  const [error, setError] = useState([]);
  const [info, setInfo] = useState(null);
  const [action, setAction] = useState(null);
  const [start, setStart] = useState(null);
  const [input, setInput] = useState();
  const [trueCheck, setTrueCheck] = useState([]);
  const [falseCheck, setFalseCheck] = useState(["b40002_5"]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/controller-test");

    ws.onopen = () => {
      console.log("Connected to Controller Test WebSocket server");
    };

    ws.onmessage = (event) => {
      const message = event.data;
      const [key, value] = message.split(":").map((str) => str.trim());
      console.log("This is key", key);
      console.log("This is value", value);
      switch (key) {
        case "tapPosition":
          handleTapPositionChange(value);
          break;
        case "checks":
          handleChecks(value);
          break;
        case "errors":
          handleError(value);
          break;
        case "info":
          handleInfo(value);
          break;
        case "action":
          setAction(value);
          break;
        default:
          console.log("Unknown message type:", key);
      }
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    setSocket(ws);

    // return () => {
    //   ws.close();
    // };
  }, []);

  useEffect(() => {
    setTrueCheck([]);
    setFalseCheck([]);
  }, [tapPosition]);

  const handleInfo = (value) => {
    setInfo(value);
    setInfoModal(true);
  };

  const handleError = (errors) => {
    const errorList = errors.split(",").map((str) => str.trim());
    setError(errorList);
    setErrorModal(true);
  };

  const sendMessage = (value) => {
    if (socket) {
      console.log("Data is sent", input);
      socket.send(value);
      // setInput("");
    }
  };
  const sendInitialMessage = (value) => {
    if (socket) {
      console.log("Data is sent", value);
      socket.send(value);
    }
  };

  const handleStartRequest = () => {
    setResponse(null);
    setStartActive(false);
    setStartModal(true);
    setStart("Set Lower Voltage and click Run");
  };

  const handleSectionMove = () => {
    console.log("Section is going to be moved from 1 to 2");
    setCurrentActiveSection(2);
    setSavedSectionCount(1);
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

  const resumeAction = (value) => {
    console.log(value);
    sendMessage(value);
    setAction(null);
  };

  const runAction = () => {
    console.log("Run button is pressed");
    console.log("START_LV");
    sendInitialMessage("START_LV");
    setStartModal(false);
  };

  const handleTapPositionChange = (value) => {
    const tapList = value.split(",").map((str) => str.trim());
    setTrueCheck([]);
    setFalseCheck([]);
    setTapPosition(tapList[0]);
    setMa1(tapList[1]);
    setMa2(tapList[2]);
    setMotorMa(tapList[3]);
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

  const messageAction = (value) => {
    console.log(value);
    if (value === "DONE_HV") {
      handleSectionMove();
    } else {
      sendMessage(value);
    }
    setInfo(null);
    setInfoModal(false);
  };

  const errorAction = () => {
    socket.send("CONTINUE");
    setError(null);
    setErrorModal(false);
  };

  return (
    <>
      {infoModal && (
        <InfoModal
          showModal={infoModal}
          closeModal={closeInfoModal}
          modalMessage={info}
          messageAction={messageAction}
        />
      )}
      {errorModal && (
        <ErrorModal
          showModal={errorModal}
          closeModal={closeErrorModal}
          modalMessage={error}
          errorAction={errorAction}
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
        <div className="test-status">
          <button
            className="start"
            onClick={handleStartRequest}
            disabled={!startActive}
          >
            Start
          </button>
          <button
            className="pause"
            // disabled={startActive}
            disabled={true}
          >
            Pause
          </button>
          <button
            className="restart"
            // disabled={startActive}
            disabled={true}
            onClick={restartTest}
          >
            Restart
          </button>
        </div>
        <div className="section section-info">
          <div className="box count data">
            <table>
              <tr>
                <td>Tap Position</td>
                <td>{tapPosition}</td>
              </tr>
              <tr>
                <td> mA- Signal1</td>
                <td>{ma1}</td>
              </tr>
              <tr>
                <td> mA- Signal2</td>
                <td>{ma2}</td>
              </tr>
              <tr>
                <td>Motor Current</td>
                <td>{motorMa}</td>
              </tr>
            </table>
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
          {/* <div className="box test-status data">
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
          </div> */}
        </div>

        <table className="section steps">
          <tr>
            <td
              className={
                trueCheck.includes("b40001_0")
                  ? "success automation-step"
                  : falseCheck.includes("b40001_0")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field1">Upper Limit Reached - 1</label>
            </td>
            <td
              className={
                trueCheck.includes("b40001_1")
                  ? "success automation-step"
                  : falseCheck.includes("b40001_1")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field2">Upper Limit Reached - 2</label>
            </td>
            <td
              className={
                trueCheck.includes("b40001_2")
                  ? "success automation-step"
                  : falseCheck.includes("b40001_2")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field3">Lower Limit Reached - 1</label>
            </td>
            <td
              className={
                trueCheck.includes("b40001_3")
                  ? "success automation-step"
                  : falseCheck.includes("b40001_3")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field4">Lower Limit Reached - 2</label>
            </td>
          </tr>
          <tr>
            <td
              className={
                falseCheck.includes("b40001_4")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field5">MPR Trip - 1</label>
            </td>
            <td
              className={
                falseCheck.includes("b40001_5")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field6">MPR Trip - 2</label>
            </td>
            <td
              className={
                trueCheck.includes("b40001_6")
                  ? "success automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field7">Tap Change in Progress - 1</label>
            </td>
            <td
              className={
                trueCheck.includes("b40001_7")
                  ? "success automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field8">Tap Change in Progress - 2</label>
            </td>
          </tr>

          <tr>
            <td
              className={
                falseCheck.includes("b40001_8")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field9">Tap Change delay - 1</label>
            </td>
            <td
              className={
                falseCheck.includes("b40001_9")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field10">Tap Change delay - 2</label>
            </td>
            <td
              className={
                trueCheck.includes("b40001_10L1")
                  ? "success automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field11">Local - 1</label>
            </td>
            <td
              className={
                trueCheck.includes("b40001_10R1")
                  ? "success automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field12">Remote - 1</label>
            </td>
          </tr>

          <tr>
            <td
              className={
                trueCheck.includes("b40001_11L2")
                  ? "success automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field13">Local - 2</label>
            </td>
            <td
              className={
                trueCheck.includes("b40001_11R2")
                  ? "success automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field14">Remote - 2</label>
            </td>
            <td
              className={
                falseCheck.includes("b40001_12")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field15">SPP</label>
            </td>
            <td
              className={
                trueCheck.includes("b40001_13")
                  ? "success automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field16">Control Supply Healthy</label>
            </td>
          </tr>

          <tr>
            <td
              className={
                falseCheck.includes("b40001_14")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field17">Control Supply Unhealthy</label>
            </td>
            <td
              className={
                trueCheck.includes("b40001_15")
                  ? "success automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field18">Power Supply 415V Helathy</label>
            </td>
            <td
              className={
                falseCheck.includes("b40002_0")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field19">Power Supply 415V Unhealthy</label>
            </td>
            <td
              className={
                trueCheck.includes("b40002_1")
                  ? "success automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field20">Interlocking Circuit</label>
            </td>
          </tr>

          <tr>
            <td
              className={
                trueCheck.includes("b40002_2")
                  ? "success automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field21">Proximity Switch Healthy</label>
            </td>
            <td
              className={
                trueCheck.includes("b40002_3")
                  ? "success automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field22">
                Tap Changer Healthy Monitoring
              </label>
            </td>
            <td
              className={
                trueCheck.includes("b40002_5")
                  ? "success automation-step"
                  : falseCheck.includes("b40002_5")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field23">OOD Tap</label>
            </td>
            <td
              className={
                trueCheck.includes("b40002_6")
                  ? "success automation-step"
                  : falseCheck.includes("b40002_6")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field24">Even Tap</label>
            </td>
          </tr>

          <tr>
            <td
              className={
                trueCheck.includes("b40002_7")
                  ? "success automation-step"
                  : falseCheck.includes("b40002_7")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field25">OOD Tap Indication</label>
            </td>
            <td
              className={
                trueCheck.includes("b40002_8")
                  ? "success automation-step"
                  : falseCheck.includes("b40002_8")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field26">Even Tap Indication</label>
            </td>
            <td
              className={
                falseCheck.includes("b40002_9")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field27">TDR Switch</label>
            </td>
          </tr>
        </table>
        {/* <table className="section steps">{renderRows()}</table> */}
        {/* <button className="action-button" onClick={() => handleSectionMove()}>
          Fill Form
        </button> */}
      </div>
    </>
  );
}
