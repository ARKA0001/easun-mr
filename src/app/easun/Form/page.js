"use client";

import React, { useState } from "react";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import SectionNav from "@/components/SectionNav";
import FormNavbar from "@/components/FormNavbar";
import "../../page.css";
import { useRecoilState } from "recoil";
import {
  actionMessageStore,
  actionModalStore,
  activeSection,
  cycleStore,
  directionStore,
  errorMessageStore,
  errorModalStore,
  infoMessageStore,
  infoModalStore,
  maSignal1Store,
  maSignal2Store,
  motorCurrentStore,
  operationStore,
  socketStore,
  startMessageStore,
  startModalStore,
  tapPositionStore,
  testDataSection1,
  testVoltageStore,
} from "@/store/Section";
import TestSection1 from "@/components/TestSection1";
import TestSection2 from "@/components/TestSection2";
import DownloadReport from "@/components/DownloadReport";
import "../../../components/style/ComponentStyles.css";
import InfoModal from "@/components/modals/InfoModal";
import ErrorModal from "@/components/modals/ErrorModal";
import ActionModal from "@/components/modals/ActionModal";
import StartModal from "@/components/modals/StartModal";

export default function Page() {
  const currentDate = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDay = currentDate.getDate();
  const currentMonthIndex = currentDate.getMonth();
  const currentMonth = monthNames[currentMonthIndex];
  const currentYear = currentDate.getFullYear();

  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  const renderSection = () => {
    switch (currentActiveSection) {
      case 0:
        return <TestSection1 />;
      case 1:
        return <TestSection2 />;
      case 2:
        return <Section1 />;
      case 3:
        return <Section2 />;
      case 4:
        return <Section3 />;
      case 5:
        return <Section4 />;
      case 6:
        return <Section5 />;
      case 7:
        return <Section6 />;
      case 8:
        return <Section7 />;
      case 9:
        return <Section8 />;
      case 10:
        return <DownloadReport />;
      default:
        return null;
    }
  };

  const [infoModal, setInfoModal] = useRecoilState(infoModalStore);
  const [errorModal, setErrorModal] = useRecoilState(errorModalStore);
  const [actionModal, setActionModal] = useRecoilState(actionModalStore);
  const [startModal, setStartModal] = useRecoilState(startModalStore);

  const [tapPosition, setTapPosition] = useRecoilState(tapPositionStore);

  // const [tapPosition, setTapPosition] = useState("9 << 12");
  const [direction, setDirection] = useRecoilState(directionStore);
  const [cycles, setCycles] = useRecoilState(cycleStore);
  const [operations, setOperations] = useRecoilState(operationStore);
  const [socket, setSocket] = useRecoilState(socketStore);
  const [testVoltage, setTestVoltage] = useRecoilState(testVoltageStore);
  const [ma1, setMa1] = useRecoilState(maSignal1Store);
  const [ma2, setMa2] = useRecoilState(maSignal2Store);
  const [mCurrent, setMCurrent] = useRecoilState(motorCurrentStore);

  const [info, setInfo] = useRecoilState(infoMessageStore);
  const [error, setError] = useRecoilState(errorMessageStore);
  const [action, setAction] = useRecoilState(actionMessageStore);
  const [start, setStart] = useRecoilState(startMessageStore);
  const [testData, setTestData] = useRecoilState(testDataSection1);

  const resumeAction = (value) => {
    console.log(value);
    sendMessage(value);
    setAction(null);
    setActionModal(false);
  };

  const runAction = () => {
    console.log("Run button is pressed");
    console.log("START_LV");
    sendInitialMessage("START_LV");
    setStartModal(false);
  };

  const handleSectionMove = () => {
    console.log("Section is going to be moved from 1 to 2");
    setCurrentActiveSection(2);
    setSavedSectionCount(1);
  };

  const messageAction = (value) => {
    console.log(value);
    if (value === "DONE_NV") {
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
      setStartModal(false);
    }
  };

  return (
    <>
      {infoModal && (
        <InfoModal
          showModal={infoModal}
          modalMessage={info}
          messageAction={messageAction}
        />
      )}
      {errorModal && (
        <ErrorModal
          showModal={errorModal}
          modalMessage={error}
          errorAction={errorAction}
        />
      )}
      {actionModal && (
        <ActionModal
          showModal={actionModal}
          modalMessage={action}
          resumeAction={resumeAction}
        />
      )}
      {startModal && (
        <StartModal
          showModal={startModal}
          modalMessage={start}
          runAction={runAction}
        />
      )}
      <div className="form-page">
        <div className="main-navbar">
          <FormNavbar />
        </div>
        <div className="form-main-content">
          <div className="left-main-side">
            <SectionNav />
          </div>

          <div className="right-main-side">
            {currentActiveSection === 0 && (
              <h3>
                <span> OLTC DRIVE MECHANISM AUTOMATED TEST</span>

                <span className="date-data">
                  {currentDay} {currentMonth},{currentYear}
                </span>
              </h3>
            )}

            {currentActiveSection != 0 && (
              <div className="TestDataSection2">
                <div className="section section-info">
                  <div className="box count data">
                    <table>
                      <tr>
                        <td>Tap Position</td>
                        <td>{tapPosition}</td>
                      </tr>
                      <tr>
                        <td>Direction</td>
                        <td>{direction}</td>
                      </tr>
                      <tr>
                        <td>Cycles</td>
                        <td>{cycles}</td>
                      </tr>
                      <tr>
                        <td>Operations</td>
                        <td>{operations}</td>
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
                        <td>OLTC Variant</td>
                        <td>{testData.testType}</td>
                      </tr>
                      <tr>
                        <td>Test Voltage</td>
                        <td>{testVoltage}</td>
                      </tr>
                    </table>
                  </div>
                  <div className="box data">
                    <table>
                      <tr>
                        <td>mA-Signal 1</td>
                        <td>{ma1}</td>
                      </tr>
                      <tr>
                        <td>mA-Signal 2</td>
                        <td>{ma2}</td>
                      </tr>
                      <tr>
                        <td>Motor Current</td>
                        <td>{mCurrent}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            )}
            {renderSection()}
          </div>
        </div>
      </div>
    </>
  );
}
