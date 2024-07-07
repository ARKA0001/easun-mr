import React from "react";
import moveSection from "@/utils/SectionMove";
import { useRecoilState } from "recoil";
import { activeSection } from "@/store/Section";
import { useForm } from "react-hook-form";

export default function Section2() {
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
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Serial No
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
        </div>
        <div className="section-title">Verification of Name Plate</div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Description
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Motor Voltage
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Control Voltage
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Frequency
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Tr. Resistance Value
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Year of MFG
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Schematic Diagram No
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              DM Paint Shade External
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              DM Paint Shade Internal
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Paint Thickness
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
        </div>
        <div className="section-title">Paint Scratches / Finishing</div>
        <div className="form-row">
          <div className="user-input">
            <label
              htmlFor="section1-reports"
              className="field-label check-label"
            >
              Front Side
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-1"
                id="check-1"
                className="user-value"
              />
              <label htmlFor="check-1">No Scratches</label>
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-2"
                id="check-2"
                className="user-value"
              />
              <label htmlFor="check-2">Line Mark</label>
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-3"
                id="check-3"
                className="user-value"
              />
              <label htmlFor="check-3">Painting Peel Off</label>
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-4"
                id="check-4"
                className="user-value"
              />
              <label htmlFor="check-4">Paint Fade</label>
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label
              htmlFor="section1-reports"
              className="field-label check-label"
            >
              Back Side
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-5"
                id="check-5"
                className="user-value"
              />
              <label htmlFor="check-5">No Scratches</label>
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-6"
                id="check-6"
                className="user-value"
              />
              <label htmlFor="check-6">Line Mark</label>
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-7"
                id="check-7"
                className="user-value"
              />
              <label htmlFor="check-7">Painting Peel Off</label>
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-8"
                id="check-8"
                className="user-value"
              />
              <label htmlFor="check-8">Paint Fade</label>
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label
              htmlFor="section1-reports"
              className="field-label check-label"
            >
              Left Side
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-9"
                id="check-9"
                className="user-value"
              />
              <label htmlFor="check-9">No Scratches</label>
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-10"
                id="check-10"
                className="user-value"
              />
              <label htmlFor="check-10">Line Mark</label>
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-11"
                id="check-11"
                className="user-value"
              />
              <label htmlFor="check-11">Painting Peel Off</label>
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-12"
                id="check-12"
                className="user-value"
              />
              <label htmlFor="check-12">Paint Fade</label>
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label
              htmlFor="section1-reports"
              className="field-label check-label"
            >
              Right Side
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-13"
                id="check-13"
                className="user-value"
              />
              <label htmlFor="check-13">No Scratches</label>
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-14"
                id="check-14"
                className="user-value"
              />
              <label htmlFor="check-14">Line Mark</label>
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-15"
                id="check-15"
                className="user-value"
              />
              <label htmlFor="check-15">Painting Peel Off</label>
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-16"
                id="check-16"
                className="user-value"
              />
              <label htmlFor="check-16">Paint Fade</label>
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label
              htmlFor="section1-reports"
              className="field-label check-label"
            >
              Top Side
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-17"
                id="check-17"
                className="user-value"
              />
              <label htmlFor="check-17">No Scratches</label>
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-18"
                id="check-18"
                className="user-value"
              />
              <label htmlFor="check-18">Line Mark</label>
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-19"
                id="check-19"
                className="user-value"
              />
              <label htmlFor="check-19">Painting Peel Off</label>
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-20"
                id="check-20"
                className="user-value"
              />
              <label htmlFor="check-20">Paint Fade</label>
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label
              htmlFor="section1-reports"
              className="field-label check-label"
            >
              Bottom Side
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-21"
                id="check-21"
                className="user-value"
              />
              <label htmlFor="check-21">No Scratches</label>
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-22"
                id="check-22"
                className="user-value"
              />
              <label htmlFor="check-22">Line Mark</label>
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-23"
                id="check-23"
                className="user-value"
              />
              <label htmlFor="check-23">Painting Peel Off</label>
            </label>
            <label htmlFor="" className="check">
              <input
                type="checkbox"
                name="check-24"
                id="check-24"
                className="user-value"
              />
              <label htmlFor="check-24">Paint Fade</label>
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label
              htmlFor="section2-radio-1"
              className="field-label radio-label"
            >
              Power Voltage (motor)
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-power"
                id="section2-power-1"
                className="user-value"
              />
              <label htmlFor="section2-power-1">380 AC/DC</label>
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-power"
                id="section2-power-2"
                className="user-value"
              />
              <label htmlFor="section2-power-2">400 AC/DC</label>
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-power"
                id="section2-power-3"
                className="user-value"
              />
              <label htmlFor="section2-power-3">415 AC/DC</label>
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-power"
                id="section2-power-4"
                className="user-value"
              />
              <label htmlFor="section2-power-4">430 AC/DC</label>
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="" className="field-label radio-label">
              Control Voltage
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-voltage"
                id="section2-voltage-1"
                className="user-value"
              />
              <label htmlFor="section2-voltage-1">110 VAC/DC</label>
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-voltage"
                id="section2-voltage-2"
                className="user-value"
              />
              <label htmlFor="section2-voltage-2">230 VAC/DC</label>
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="" className="field-label radio-label">
              DM Material
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-material"
                id="section2-material-1"
                className="user-value"
              />
              <label htmlFor="section2-material-1">MS</label>
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-material"
                id="section2-material-2"
                className="user-value"
              />
              <label htmlFor="section2-material-2">SS</label>
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-material"
                id="section2-material-3"
                className="user-value"
              />
              <label htmlFor="section2-material-3">Aluminum</label>
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="" className="field-label radio-label">
              DM Door Hinge
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-door-hinge"
                id="section2-door-hinge-1"
                className="user-value"
              />
              <label htmlFor="section2-door-hinge-1">Left</label>
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-door-hinge"
                id="section2-door-hinge-2"
                className="user-value"
              />
              <label htmlFor="section2-door-hinge-2">Right</label>
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="" className="field-label radio-label">
              No Of Push Button Holes
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-buttons"
                id="section2-buttons-1"
                className="user-value"
              />
              <label htmlFor="section2-buttons-1">3</label>
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-buttons"
                id="section2-buttons-2"
                className="user-value"
              />
              <label htmlFor="section2-buttons-2">4</label>
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-buttons"
                id="section2-buttons-3"
                className="user-value"
              />
              <label htmlFor="section2-buttons-3">5</label>
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-buttons"
                id="section2-buttons-5"
                className="user-value"
              />
              <label htmlFor="section2-buttons-5">6</label>
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-buttons"
                id="section2-buttons-6"
                className="user-value"
              />
              <label htmlFor="section2-buttons-6">7</label>
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-buttons"
                id="section2-buttons-7"
                className="user-value"
              />
              <label htmlFor="section2-buttons-7">8</label>
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              No of ADS
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="" className="field-label radio-label">
              Type of TPI Resistance
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-tpi"
                id="section2-tpi-1"
                className="user-value"
              />
              <label htmlFor="section2-tpi-1">1K Ohms</label>
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-tpi"
                id="section2-tpi-2"
                className="user-value"
              />
              <label htmlFor="section2-tpi-2">100K Ohms</label>
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="" className="field-label radio-label">
              Quantity
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-quantity"
                id="section2-quantity-1"
                className="user-value"
              />
              <label htmlFor="section2-quantity-1">11</label>
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section2-quantity"
                id="section2-quantity-2"
                className="user-value"
              />
              <label htmlFor="section2-quantity-2">2</label>
            </label>
          </div>
        </div>
      </form>

      <button onClick={() => handleSectionMove(2, 1)} className="action-button">
        Save & Next
      </button>
    </div>
  );
}
