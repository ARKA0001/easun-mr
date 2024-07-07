import React from "react";
import moveSection from "@/utils/SectionMove";
import { useRecoilState } from "recoil";
import { activeSection } from "@/store/Section";
import { useForm } from "react-hook-form";

export default function Section4() {
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
          <tr>
            <td className="user-input user-toggle">
              <label htmlFor="toggle-1" className="field-label">
                IPX5 sticket with QA Sign
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
                HV test availability
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
          <tr>
            <td className="user-input user-toggle">
              <label htmlFor="toggle-3" className="field-label">
                DANGER STICKER as per the Motor Voltage
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
                Rotate the hand crank and check the raise and lower direction
                symbol
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
          <tr>
            <td className="user-input user-toggle">
              <label htmlFor="toggle-4" className="field-label">
                Phase sequences attention sticker
              </label>
            </td>
            <td class="toggle-container">
              <input type="checkbox" id="toggle-5" class="toggle-input" />
              <label for="toggle-5" class="toggle-label">
                <span class="toggle-switch"></span>
                <span class="toggle-text on">Yes</span>
                <span class="toggle-text off">No</span>
              </label>
            </td>
          </tr>
          <tr>
            <td className="user-input user-toggle">
              <label htmlFor="toggle-6" className="field-label">
                Proximity wiring shorting stickers
              </label>
            </td>
            <td class="toggle-container">
              <input type="checkbox" id="toggle-6" class="toggle-input" />
              <label for="toggle-6" class="toggle-label">
                <span class="toggle-switch"></span>
                <span class="toggle-text on">Yes</span>
                <span class="toggle-text off">No</span>
              </label>
            </td>
          </tr>
          <tr>
            <td className="user-input user-toggle">
              <label htmlFor="toggle-7" className="field-label">
                Hand revolution sticker
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
          <tr>
            <td className="user-input user-toggle">
              <label htmlFor="toggle-8" className="field-label">
                CAM switch stickers as per legend
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
          <tr>
            <td className="user-input user-toggle">
              <label htmlFor="toggle-9" className="field-label">
                ADS wire stickers/labels
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
                Electrical Limit switch stickets
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
          <tr>
            <td className="user-input user-toggle">
              <label htmlFor="toggle-11" className="field-label">
                Mechanical limit switch stickers
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
                Earthling sticker at both the sides near earth bolt
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
        </table>
      </form>

      <button onClick={() => handleSectionMove(4, 1)} className="action-button">
        Save & Next
      </button>
    </div>
  );
}
