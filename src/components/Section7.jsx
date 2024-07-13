import React from "react";
import moveSection from "@/utils/SectionMove";
import { useRecoilState } from "recoil";
import { activeSection } from "@/store/Section";
import { useForm } from "react-hook-form";

export default function Section7() {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="section-title">
          Raise Directions - CAM Sequence - Before End Tap
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch</label>
              <p>S14 (3-3.5)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Red DIV Status</label>
              <p>Close-C-NC</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Sequence Status</label>
              <p>Open-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input type="text" name="" id="field1" className="user-value" />
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch</label>
              <p>S13 (3-5.4)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Red DIV Status</label>
              <p>Close-C-NC</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Sequence Status</label>
              <p>Open-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input type="text" name="" id="field1" className="user-value" />
            </div>
          </div>
          <div className="form-info  form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">Acceptance Criteria</label>
              <input
                type="text"
                value="Difference between S14 and S13 should be more than 0.25Div"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch</label>
              <p>S6-Control(28-30)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Red DIV Status</label>
              <p>Close-C-NC</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Sequence Status</label>
              <p>Open-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input type="text" name="" id="field1" className="user-value" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch</label>
              <p>S14 (31.5-32)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Red DIV Status</label>
              <p>-</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label"> Switch Sequence Status</label>
              <p>Close-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input type="text" name="" id="field1" className="user-value" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch</label>
              <p>S13 (31.5-32)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Red DIV Status</label>
              <p>-</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Sequence Status</label>
              <p>Close-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input type="text" name="" id="field1" className="user-value" />
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch</label>
              <p>S6 - Power (33-33.5)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Red DIV Status</label>
              <p>Close-C-NC</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Sequence Status</label>
              <p>Open-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input type="text" name="" id="field1" className="user-value" />
            </div>
          </div>
          <div className="form-info form-row">
           
            <div className="user-input">
              <label htmlFor="" className="field-label">Acceptance Criteria</label>
              <input
                type="text"
                value="Difference between S14 and S13 should be more than 0.25Div"
              />
            </div>
          </div>
        </div>
        <div className="section-title">
          Lower Directions CAM Sequence - Before end tap (2 to 1)
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch</label>
              <p>S12 (3-3.5)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Red DIV Status</label>
              <p>Close-C-NC</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Sequence Status</label>
              <p>Open-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input type="text" name="" id="field1" className="user-value" />
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch</label>
              <p>S13 (3-5.4)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Red DIV Status</label>
              <p>Close-C-NC</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Sequence Status</label>
              <p>Open-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input type="text" name="" id="field1" className="user-value" />
            </div>
          </div>
          <div className="form-info form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">Acceptance Criteria</label>
              <input
                type="text"
                value="Difference between S12 and S13 should be more than 0.25Div"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch</label>
              <p>S7-Control(28-30)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Red DIV Status</label>
              <p>Close-C-NC</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Sequence Status</label>
              <p>Open-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input type="text" name="" id="field1" className="user-value" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch</label>
              <p>S12 (31.5-32)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Red DIV Status</label>
              <p>-</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Sequence Status</label>
              <p>Close-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input type="text" name="" id="field1" className="user-value" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch</label>
              <p>S13</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Red DIV Status</label>
              <p>-</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Sequence Status</label>
              <p>Open-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input type="text" name="" id="field1" className="user-value" />
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch</label>
              <p>S7 Power (33-33.5)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Red DIV Status</label>
              <p>Close-C-NC</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">Switch Sequence Status</label>
              <p>Open-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input type="text" name="" id="field1" className="user-value" />
            </div>
          </div>
          <div className="form-info form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">Acceptance Criteria</label>
              <input
                type="text"
                value="Difference between S13 and S17- Power should be more than 0.25Div"
              />
            </div>
          </div>
        </div>
      </form>

      <button onClick={() => handleSectionMove(7, 1)} className="action-button">
        Save & Next
      </button>
    </div>
  );
}
