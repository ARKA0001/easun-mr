import React from "react";
import moveSection from "@/utils/SectionMove";
import { useRecoilState } from "recoil";
import { activeSection } from "@/store/Section";
import { useForm } from "react-hook-form";

export default function Section6() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  const handleSectionMove = (currentSection, moveAction) => {
    console.log(currentSection);
    setCurrentActiveSection(moveSection(currentSection, moveAction));
  };

  const { required, handleSubmit } = useForm();
  const onSubmit = () => {};

  return (
    <div className="form-section">
      <form onSubmit={handleSubmit(onSubmit())}>
        <table className="toggle-table">
          <div className="toggle-section">
            <div className="section-title">IR Test</div>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1" className="field-label">
                  Perform IR test before HV test and Note down the value
                </label>
              </td>
              <td class="toggle-container">
                <input type="checkbox" id="toggle-1" class="toggle-input" />
                <label for="toggle-1" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-2" className="field-label">
                  Perform IR test after HV test and Note down the value
                </label>
              </td>
              <td class="toggle-container">
                <input type="checkbox" id="toggle-2" class="toggle-input" />
                <label for="toggle-2" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
                </label>
              </td>
            </tr>
          </div>
          <div className="toggle-section">
            <div className="section-title">HV Test</div>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-3" className="field-label">
                  Perform IR test before HV Test and note down the value
                </label>
              </td>
              <td class="toggle-container">
                <input type="checkbox" id="toggle-3" class="toggle-input" />
                <label for="toggle-3" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-4" className="field-label">
                  Perform IR test after HV test and Note down the value
                </label>
              </td>
              <td class="toggle-container">
                <input type="checkbox" id="toggle-4" class="toggle-input" />
                <label for="toggle-4" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
                </label>
              </td>
            </tr>
          </div>
          <div className="toggle-section">
            <div className="section-title">Revolution</div>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-4" className="field-label">
                  Insert hand cranck and check the manual revolution on both the
                  direction two taps
                </label>
              </td>
              <td class="toggle-container">
                <input type="checkbox" id="toggle-4" class="toggle-input" />
                <label for="toggle-4" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
                </label>
              </td>
            </tr>
          </div>
          <div className="toggle-section">
            <div className="section-title">Voltage</div>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-7" className="field-label">
                  Ensure control and power voltage as per the schematic diagram
                </label>
              </td>
              <td class="toggle-container">
                <input type="checkbox" id="toggle-7" class="toggle-input" />
                <label for="toggle-7" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
                </label>
              </td>
            </tr>
          </div>
          <div className="toggle-section">
            <div className="section-title">HC Safety Switch</div>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-8" className="field-label">
                  Insert the hand crank in S8 or B8 switch give pulse via S1 or
                  S2 raise
                </label>
              </td>
              <td class="toggle-container">
                <input type="checkbox" id="toggle-8" class="toggle-input" />
                <label for="toggle-8" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
                </label>
              </td>
            </tr>
          </div>
          <div className="toggle-section">
            <div className="section-title">TPI</div>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-9" className="field-label">
                  Check the center position of tap. No fo position indecator
                  wheel w.r.t tap no in
                </label>
              </td>
              <td class="toggle-container">
                <input type="checkbox" id="toggle-9" class="toggle-input" />
                <label for="toggle-9" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
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
              <td class="toggle-container">
                <input type="checkbox" id="toggle-10" class="toggle-input" />
                <label for="toggle-10" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
                </label>
              </td>
            </tr>
          </div>
          <div className="toggle-section">
            <div className="section-title">Pulse</div>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-11" className="field-label">
                  Perform that test - Single pulse via push button raise
                </label>
              </td>
              <td class="toggle-container">
                <input type="checkbox" id="toggle-11" class="toggle-input" />
                <label for="toggle-11" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-12" className="field-label">
                  Continous pulse via pushbutton raise or lower
                </label>
              </td>
              <td class="toggle-container">
                <input type="checkbox" id="toggle-12" class="toggle-input" />
                <label for="toggle-12" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-12" className="field-label">
                  press and hold the push button either raise
                </label>
              </td>
              <td class="toggle-container">
                <input type="checkbox" id="toggle-12" class="toggle-input" />
                <label for="toggle-12" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
                </label>
              </td>
            </tr>
          </div>
          <div className="toggle-section">
            <div className="section-title">Path sequence</div>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-12" className="field-label">
                  Perform phase sequence test - Change the motor phase
                </label>
              </td>
              <td class="toggle-container">
                <input type="checkbox" id="toggle-12" class="toggle-input" />
                <label for="toggle-12" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
                </label>
              </td>
            </tr>
          </div>
          <div className="toggle-section">
            <div className="section-title">Counter pulse</div>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-13" className="field-label">
                  Perform the test - single pule via Raise or Lower Trip the
                  LEPB (MPR)
                </label>
              </td>
              <td class="toggle-container">
                <input type="checkbox" id="toggle-13" class="toggle-input" />
                <label for="toggle-13" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
                </label>
              </td>
            </tr>
          </div>
          <div className="toggle-section">
            <div className="section-title">Electrical Limit lower</div>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-14" className="field-label">
                  Pulse to lower push button switch, motor and contractor should
                  not pick
                </label>
              </td>
              <td class="toggle-container">
                <input type="checkbox" id="toggle-14" class="toggle-input" />
                <label for="toggle-14" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
                </label>
              </td>
            </tr>
          </div>
          <div className="toggle-section">
            <div className="section-title">Mechanical End Limit</div>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-15" className="field-label">
                  Perform the test - Use hand crank rotate in lower direction up
                  to mechanical
                </label>
              </td>
              <td class="toggle-container">
                <input type="checkbox" id="toggle-15" class="toggle-input" />
                <label for="toggle-15" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
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
              <td class="toggle-container">
                <input type="checkbox" id="toggle-16" class="toggle-input" />
                <label for="toggle-16" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
                </label>
              </td>
            </tr>
          </div>
          <div className="toggle-section">
            <div className="section-title">Electrical Limit Raise</div>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-17" className="field-label">
                  Perform the test - Pulse to Raise end tap - pulse to raise
                  push button switch
                </label>
              </td>
              <td class="toggle-container">
                <input type="checkbox" id="toggle-17" class="toggle-input" />
                <label for="toggle-17" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
                </label>
              </td>
            </tr>
          </div>
          <div className="toggle-section">
            <div className="section-title">TBs Check</div>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-18" className="field-label">
                  Check all the TB Ferrules to be matching with schematic TB
                  list
                </label>
              </td>
              <td class="toggle-container">
                <input type="checkbox" id="toggle-18" class="toggle-input" />
                <label for="toggle-18" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
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
              <td class="toggle-container">
                <input type="checkbox" id="toggle-19" class="toggle-input" />
                <label for="toggle-19" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
                </label>
              </td>
            </tr>
          </div>
          <div className="toggle-section">
            <div className="section-title">Door switch</div>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-21" className="field-label">
                  Check the functionality of DOOR limit switch by closing the
                  door
                </label>
              </td>
              <td class="toggle-container">
                <input type="checkbox" id="toggle-20" class="toggle-input" />
                <label for="toggle-20" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Yes</span>
                  <span class="toggle-text off">No</span>
                </label>
              </td>
            </tr>
          </div>
          <div className="toggle-section">
            <div className="section-title">Raise</div>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-21" className="field-label">
                  Mechanical end limit revolution
                </label>
              </td>
              <td class="toggle-container">
                <input type="checkbox" id="toggle-21" class="toggle-input" />
                <label for="toggle-21" class="toggle-label">
                  <span class="toggle-switch"></span>
                  <span class="toggle-text on">Raise</span>
                  <span class="toggle-text off">No Raise</span>
                </label>
              </td>
            </tr>
          </div>
        </table>
      </form>

      <button onClick={() => handleSectionMove(6, 1)} className="action-button">
        Save & Next
      </button>
    </div>
  );
}
