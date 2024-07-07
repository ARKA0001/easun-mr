import React from "react";
import moveSection from "@/utils/SectionMove";
import { useRecoilState } from "recoil";
import { activeSection } from "@/store/Section";
import { useForm } from "react-hook-form";

export default function Section3() {
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
                DM Counter reading minimum 500 endurance operation before start
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
                Hand crank provided inside the DM with paint shade matching
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
                Earth bride provided between DM & DOOR
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
                Availablity of Scheme and Pouch
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
                Availablity of Hand crank with Spring dowel
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
                Function of DOOR lock with PAD
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
                Avalability of top flange shaft "o" Ring, Gaurd, Pouch
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
                No any spillage of wire sleeve, copper strings and dust, uellow
                paint and any
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
                Earth bolt provided on both directions
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
                Gland plate matching with uniform paint
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
                Terminal block transparent protection cover provided for Stud
                and Nut Type
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
                Push button alignment
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
              <label htmlFor="toggle-13" className="field-label">
                Window glass & gasket seated properrly
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
          <tr>
            <td className="user-input user-toggle">
              <label htmlFor="toggle-14" className="field-label">
                Whote spiral sleeves provided on all the wire bunches
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
        </table>
      </form>

      <button onClick={() => handleSectionMove(3, 1)} className="action-button">
        Save & Next
      </button>
    </div>
  );
}
