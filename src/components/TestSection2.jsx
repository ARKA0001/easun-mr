import React from "react";
import {
  testDataSection1,
  testId,
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
} from "@/store/Section";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import { activeSection } from "@/store/Section";

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
      manualButtonState(false);
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
  const handlePowerInfoChange = (value) => {
    const powerList = value.split(",").map((str) => str.trim());
    setMa1(powerList[0]);
    setMa2(powerList[1]);
    setMotorCurrent(powerList[2]);
  };

  const handleTransmission = (event) => {
    setTransmission(event.target.value);
  };

  const manualAction = (value) => {
    console.log("Data to socket:", value);
    sendMessage(value);
    setManualButtonState(true);
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
                <button className="start">Start</button>
                <button className="pause" disabled>
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
                  : falseCheck.includes("b40002_5")
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
                  : falseCheck.includes("b40002_7")
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
                trueCheck.includes("b40002_10")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field27">TPI Indication</label>
            </td>
            <td
              className={
                trueCheck.includes("b40002_5")
                  ? "success automation-step"
                  : falseCheck.includes("b40002_6")
                  ? "failure automation-step"
                  : "automation-step"
              }
            >
              <label htmlFor="check-field24">Even Tap</label>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
