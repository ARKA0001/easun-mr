import React from "react";
import moveSection from "@/utils/SectionMove";
import { useRecoilState } from "recoil";
import { activeSection, savedSection } from "@/store/Section";
import { useForm } from "react-hook-form";

export default function Section6() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  const [savedSectionCount, setSavedSectionCount] =
    useRecoilState(savedSection);

  const handleSectionMove = () => {
    setCurrentActiveSection(8);
    setSavedSectionCount(7);
  };

  const { required, handleSubmit } = useForm();
  const onSubmit = () => {
    handleSectionMove();
  };

  return (
    <div className="form-section">
      <form onSubmit={handleSubmit(onSubmit)}>
        <table className="toggle-table">
          <tbody>
            <tr className="section-title">
              <td className="user-input user-toggle">IR Test</td>
              <td className="user-input user-toggle"></td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1" className="field-label">
                  Perform IR test before HV test and Note down the value
                </label>
              </td>
              <td className="toggle-container">
                <input type="checkbox" id="toggle-1" className="toggle-input" />
                <label htmlFor="toggle-1" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-2" className="field-label">
                  Perform IR test after HV test and Note down the value
                </label>
              </td>
              <td className="toggle-container">
                <input type="checkbox" id="toggle-2" className="toggle-input" />
                <label htmlFor="toggle-2" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>

            <tr className="section-title">
              <td className="user-input user-toggle">HV Test</td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-3" className="field-label">
                  Perform IR test before HV Test and note down the value
                </label>
              </td>
              <td className="toggle-container">
                <input type="checkbox" id="toggle-3" className="toggle-input" />
                <label htmlFor="toggle-3" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-4" className="field-label">
                  Perform IR test after HV test and Note down the value
                </label>
              </td>
              <td className="toggle-container">
                <input type="checkbox" id="toggle-4" className="toggle-input" />
                <label htmlFor="toggle-4" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>

            <tr className="section-title">
              <td className="user-toggle user-input">Revolution</td>
              <td className="user-toggle user-input"></td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-4" className="field-label">
                  Insert hand cranck and check the manual revolution on both the
                  direction two taps
                </label>
              </td>
              <td className="toggle-container">
                <input type="checkbox" id="toggle-4" className="toggle-input" />
                <label htmlFor="toggle-4" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr className="section-title">
              <td className="user-toggle user-input">Voltage</td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-7" className="field-label">
                  Ensure control and power voltage as per the schematic diagram
                </label>
              </td>
              <td className="toggle-container">
                <input type="checkbox" id="toggle-7" className="toggle-input" />
                <label htmlFor="toggle-7" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr className="section-title">
              <td className="user-toggle user-input">HC Safety Switch</td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-8" className="field-label">
                  Insert the hand crank in S8 or B8 switch give pulse via S1 or
                  S2 raise
                </label>
              </td>
              <td className="toggle-container">
                <input type="checkbox" id="toggle-8" className="toggle-input" />
                <label htmlFor="toggle-8" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr className="section-title">
              <td className="user-toggle user-input">TPI</td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-9" className="field-label">
                  Check the center position of tap. No fo position indecator
                  wheel w.r.t tap no in
                </label>
              </td>
              <td className="toggle-container">
                <input type="checkbox" id="toggle-9" className="toggle-input" />
                <label htmlFor="toggle-9" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-10" className="field-label">
                  Run the DM at local manual mode for one complete cylce and
                  check
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-10"
                  className="toggle-input"
                />
                <label htmlFor="toggle-10" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr className="section-title">
              <td className="user-toggle user-input">Pulse</td>
            </tr>

            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-11" className="field-label">
                  Perform that test - Single pulse via push button raise
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-11"
                  className="toggle-input"
                />
                <label htmlFor="toggle-11" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-12" className="field-label">
                  Continous pulse via pushbutton raise or lower
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-12"
                  className="toggle-input"
                />
                <label htmlFor="toggle-12" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-12" className="field-label">
                  press and hold the push button either raise
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-12"
                  className="toggle-input"
                />
                <label htmlFor="toggle-12" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr className="section-title">
              <td className="user-toggle user-input">Path sequence</td>
            </tr>

            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-12" className="field-label">
                  Perform phase sequence test - Change the motor phase
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-12"
                  className="toggle-input"
                />
                <label htmlFor="toggle-12" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr className="section-title">
              <td className="user-toggle user-input">Counter Pulse</td>
            </tr>

            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-13" className="field-label">
                  Perform the test - single pule via Raise or Lower Trip the
                  LEPB (MPR)
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-13"
                  className="toggle-input"
                />
                <label htmlFor="toggle-13" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr className="section-title">
              <td className="user-toggle user-input">Electrical Limit lower</td>
            </tr>

            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-14" className="field-label">
                  Pulse to lower push button switch, motor and contractor should
                  not pick
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-14"
                  className="toggle-input"
                />
                <label htmlFor="toggle-14" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr className="section-title">
              <td className="user-toggle user-input">Mechanical End Limit</td>
            </tr>

            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-15" className="field-label">
                  Perform the test - Use hand crank rotate in lower direction up
                  to mechanical
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-15"
                  className="toggle-input"
                />
                <label htmlFor="toggle-15" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-16" className="field-label">
                  Perform the test - Use hand crank rotate in raise direction up
                  to mechanical limit
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-16"
                  className="toggle-input"
                />
                <label htmlFor="toggle-16" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr className="section-title">
              <td className="user-toggle user-input">Electrical Limit Raise</td>
            </tr>

            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-17" className="field-label">
                  Perform the test - Pulse to Raise end tap - pulse to raise
                  push button switch
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-17"
                  className="toggle-input"
                />
                <label htmlFor="toggle-17" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr className="section-title">
              <td className="user-toggle user-input">TBs Check</td>
            </tr>

            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-18" className="field-label">
                  Check all the TB Ferrules to be matching with schematic TB
                  list
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-18"
                  className="toggle-input"
                />
                <label htmlFor="toggle-18" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-19" className="field-label">
                  All the lugs should be uniformly crimped with same color code
                  except 1.5
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-19"
                  className="toggle-input"
                />
                <label htmlFor="toggle-19" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr className="section-title">
              <td className="user-toggle user-input">Door Switch</td>
            </tr>

            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-21" className="field-label">
                  Check the functionality of DOOR limit switch by closing the
                  door
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-20"
                  className="toggle-input"
                />
                <label htmlFor="toggle-20" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr className="section-title">
              <td className="user-toggle user-input">Raise</td>
            </tr>

            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-21" className="field-label">
                  Mechanical end limit revolution
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-21"
                  className="toggle-input"
                />
                <label htmlFor="toggle-21" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Raise</span>
                  <span className="toggle-text off">No Raise</span>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={() => handleSectionMove()}
          className="action-button"
        >
          Save & Next
        </button>
      </form>
    </div>
  );
}
