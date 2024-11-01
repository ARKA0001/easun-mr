import React from "react";
import {
  testDataSection1,
  testIdStore,
  savedSection,
  tapPositionStore,
  directionStore,
  cycleStore,
  operationStore,
  serialNoStore,
  oVariantStore,
  testVoltageStore,
  maSignal1Store,
  maSignal2Store,
  motorCurrentStore,
  infoModalStore,
  actionModalStore,
  errorModalStore,
  startModalStore,
  infoMessageStore,
  errorMessageStore,
  actionMessageStore,
  startMessageStore,
  socketStore,
  manualButtonStateStore,
  transmissionStore,
  startActiveStore,
  extraLabelStore,
} from "@/store/Section";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import { activeSection } from "@/store/Section";

export default function TestSection2() {
  const [testData, setTestData] = useRecoilState(testDataSection1);
  const [raiseValues, setRaiseValues] = useState([]);
  const [lowerValues, setLowerValues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [startActive, setStartActive] = useRecoilState(startActiveStore);
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);
  const [testId, setTestId] = useRecoilState(testIdStore);
  const [checks, setChecks] = useState([]);
  const [savedSectionCount, setSavedSectionCount] =
    useRecoilState(savedSection);
  const [manualButtonState, setManualButtonState] = useRecoilState(
    manualButtonStateStore
  );

  //Modal related state variables
  const [infoModal, setInfoModal] = useRecoilState(infoModalStore);
  const [actionModal, setActionModal] = useRecoilState(actionModalStore);
  const [errorModal, setErrorModal] = useRecoilState(errorModalStore);
  const [startModal, setStartModal] = useRecoilState(startModalStore);

  // We socket related state variables
  const [socket, setSocket] = useRecoilState(socketStore);

  const [motorMa, setMotorMa] = useState(0);
  const [error, setError] = useRecoilState(errorMessageStore);
  const [info, setInfo] = useRecoilState(infoMessageStore);
  const [action, setAction] = useRecoilState(actionMessageStore);
  const [start, setStart] = useRecoilState(startMessageStore);
  const [input, setInput] = useState();
  const [trueCheck, setTrueCheck] = useState([]);
  const [falseCheck, setFalseCheck] = useState([]);
  const [disableDropdown, setDisableDropdown] = useState(false);
  const [transmission, setTransmission] = useState("Automatic");
  const [testType, setTestType] = useState();
  const [extraLabel, setExtraLabel] = useRecoilState(extraLabelStore);

  // Default data display
  const [tapPosition, setTapPosition] = useRecoilState(tapPositionStore);
  const [direction, setDirection] = useRecoilState(directionStore);
  const [cycles, setCycles] = useRecoilState(cycleStore);
  const [operations, setOperations] = useRecoilState(operationStore);
  const [serialNo, setSerialNo] = useRecoilState(serialNoStore);
  const [oVariant, setOVariant] = useRecoilState(oVariantStore);
  const [testVoltage, setTestVoltage] = useRecoilState(testVoltageStore);
  const [ma1, setMa1] = useRecoilState(maSignal1Store);
  const [ma2, setMa2] = useRecoilState(maSignal2Store);
  const [motorCurrent, setMotorCurrent] = useRecoilState(motorCurrentStore);

  useEffect(() => {
    setSerialNo(testDataSection1.serialNumber);
    setOVariant(testDataSection1.testType);
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
        case "powerInfo":
          handlePowerInfoChange(value);
          break;
        case "raise":
          handleRaiseTableValues(value);
          break;
        case "lower":
          handleLowerTableValues(value);
          break;
        default:
          console.log("Unknown message type:", key);
      }
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    setSocket(ws);
  }, []);

  useEffect(() => {
    setTrueCheck([]);
    setFalseCheck([]);
  }, [tapPosition]);

  const handleInfo = (value) => {
    if (value === "DONE") {
      setManualButtonState(false);
    } else {
      setInfo(value);
      setInfoModal(true);
    }
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
    }
  };

  const handleChecks = (value) => {
    const [checksA, checksB] = value.split("||").map((str) => str.trim());
    const trueChecks = checksA.split(",").map((str) => str.trim());
    const falseChecks = checksB.split(",").map((str) => str.trim());
    setTrueCheck(trueChecks);
    setFalseCheck(falseChecks);
  };

  const restartTest = () => {
    setStartActive(true);
  };

  const handleTapPositionChange = (value) => {
    const tapList = value.split(",").map((str) => str.trim());
    setTapPosition(tapList[0]);
    setDirection(tapList[1]);
    setCycles(tapList[2]);
    setOperations(tapList[3]);
    setTestVoltage(tapList[4]);
  };

  const handleRaiseTableValues = (value) => {
    const raiseSet = value.split(",").map((str) => str.trim());
    setRaiseValues(raiseSet);
  };

  const handleLowerTableValues = (value) => {
    const lowerSet = value.split(",").map((str) => str.trim());
    setLowerValues(lowerSet);
  };
  const handlePowerInfoChange = (value) => {
    const powerList = value.split(",").map((str) => str.trim());
    setMa1(powerList[0]);
    setMa2(powerList[1]);
    setMotorCurrent(powerList[2]);
    setExtraLabel(powerList[3]);
  };

  const handleTransmission = (event) => {
    setTransmission(event.target.value);
  };

  const manualAction = (value) => {
    console.log("Data to socket:", value);
    sendMessage(value);
    setManualButtonState(true);
  };

  const handleTestType = (event) => {
    setTestType(event.target.value);
  };

  const handleStartRequest = () => {
    setDisableDropdown(true);
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

  const sendInitialMessage = (value) => {
    if (socket) {
      console.log("Data is sent", value);
      socket.send(value);
    }
  };

  const callMethodForOscilloscopeReport = async () => {
    try {
      const res = await fetch("/api/your-endpoint");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      else{
        console.log("Successfully called the report print API")
      }
    } catch (error) {
      throw new Error(`HTTP error! status:`, error);
    }
  };

  return (
    <>
      <div className="form-section data-section TestDataSection2">
        {response && <div className="error-message">{response}</div>}

        <div className="section test-mode">
          <label htmlFor="transmission" className="transmission-label">
            Test Type
          </label>
          <select
            name="transmission"
            id="transmission"
            disabled={disableDropdown}
            onChange={handleTransmission}
            value={transmission}
          >
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
          <div className="test-status">
            {transmission === "Automatic" && (
              <div className="automatic-transmission">
                <button
                  className="start"
                  onClick={handleStartRequest}
                  disabled={!startActive}
                >
                  Start
                </button>
                {/* <button
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
                </button> */}
              </div>
            )}
            {transmission === "Manual" && (
              <div className="manual-transmission">
                <button
                  className="raise"
                  disabled={manualButtonState}
                  onClick={() => manualAction("RAISE")}
                >
                  Raise
                </button>
                <button
                  className="lower"
                  disabled={manualButtonState}
                  onClick={() => manualAction("LOW")}
                >
                  Lower
                </button>
              </div>
            )}
          </div>
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
                trueCheck.includes("b40001_10")
                  ? "success automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field11">Local - 1</label>
            </td>
            <td
              className={
                trueCheck.includes("b40001_11")
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
                trueCheck.includes("b40001_13")
                  ? "success automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field13">Local - 2</label>
            </td>
            <td
              className={
                trueCheck.includes("b40001_14")
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
                falseCheck.includes("b40002_9")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field27">Emergency Stop</label>
            </td>
          </tr>

          <tr>
            <td
              className={
                trueCheck.includes("b40002_5")
                  ? "success automation-step"
                  : falseCheck.includes("b40002_5")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field24">Even Tap</label>
            </td>
            <td
              className={
                trueCheck.includes("b40001_15")
                  ? "success automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field18">Power Supply 415V Healthy</label>
            </td>
            <td
              className={
                falseCheck.includes("b40002_7")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field19">Power Supply 415V Unhealthy</label>
            </td>
            <td
              className={
                trueCheck.includes("b40002_0")
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
                trueCheck.includes("b40002_1")
                  ? "success automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field21">Proximity Switch Healthy</label>
            </td>
            <td
              className={
                trueCheck.includes("b40002_2")
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
                trueCheck.includes("b40002_3")
                  ? "success automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field22">Hand Cranck Switch</label>
            </td>
            <td
              className={
                trueCheck.includes("b40002_4")
                  ? "success automation-step"
                  : falseCheck.includes("b40002_4")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field23">OOD Tap</label>
            </td>
          </tr>

          <tr>
            <td
              className={
                trueCheck.includes("b40002_6")
                  ? "success automation-step"
                  : falseCheck.includes("b40002_6")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field25">OOD Tap Indication</label>
            </td>
            <td
              className={
                trueCheck.includes("b40002_15")
                  ? "success automation-step"
                  : falseCheck.includes("b40002_15")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field26">Even Tap Indication</label>
            </td>
            <td
              className={
                falseCheck.includes("b40002_8")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field27">TDR Switch</label>
            </td>
          </tr>
          <tr></tr>
        </table>

        <div className="cam-table">
          <div>
            <h2>Lower Check through Oscilloscope</h2>
            <table className="lower-check-table cms-table">
              <thead>
                <th>Sl No</th>
                <th>Description</th>
                <th>FAC</th>
                <th>Observed Value</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    O <sub>MD</sub>- C <sub>s12</sub>
                  </td>
                  <td>620 to 775 ms</td>
                  <td className="width-auto">{lowerValues[0]}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    O <sub>MD</sub>- C <sub>s13</sub>
                  </td>
                  <td>656 to 853 ms</td>
                  <td>{lowerValues[1]}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    O <sub>MD</sub>- C <sub>LLS</sub>
                  </td>
                  <td>4.5 to 5.0 sec</td>
                  <td>{lowerValues[2]}</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    O <sub>MD</sub>- O <sub>s12</sub>
                  </td>
                  <td>5.1 to 5.3 sec</td>
                  <td>{lowerValues[3]}</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    C <sub>s12</sub>- C <sub>s13</sub>
                  </td>
                  <td>36 to 78 ms</td>
                  <td>{lowerValues[4]}</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    O <sub>S12</sub>- O <sub>S13</sub>
                  </td>
                  <td>Min 10ms</td>
                  <td>{lowerValues[5]}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2>Raise Check through Oscilloscope</h2>
            <table className="raise-check-table cms-table">
              <thead>
                <th>Sl No</th>
                <th>Description</th>
                <th>FAC</th>
                <th>Observed Value</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    O <sub>MD</sub>- C <sub>S14</sub>
                  </td>
                  <td>620 to 775 ms</td>
                  <td>{raiseValues[0]}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    O <sub>MD</sub>- C <sub>S13</sub>
                  </td>
                  <td>656 to 853 ms</td>
                  <td>{raiseValues[1]}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    O <sub>MD</sub>- C <sub>RLS</sub>(Control)
                  </td>
                  <td>4.5 to 5.0 sec</td>
                  <td>{raiseValues[2]}</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    O <sub>MD</sub>- O <sub>S14</sub>
                  </td>
                  <td>5.1 to 5.3 sec</td>
                  <td>{raiseValues[3]}</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    C <sub>S14</sub>- C <sub>S13</sub>
                  </td>
                  <td>36 to 78 ms</td>
                  <td>{raiseValues[4]}</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    O <sub>S14</sub>- O <sub>S13</sub>
                  </td>
                  <td>Min 10ms</td>
                  <td>{raiseValues[5]}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>
        <button onClick={callMethodForOscilloscopeReport} className="action-button">
          Save Report
        </button>
      </div>
    </>
  );
}
