"use client";

import React from "react";
import moveSection from "@/utils/SectionMove";
import { useRecoilState } from "recoil";
import { activeSection } from "@/store/Section";
import { useForm } from "react-hook-form";

export default function Section1() {
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
              Inspection Lot No
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field2" className="field-label">
              Work Order / Unit
            </label>
            <input type="text" name="" id="field2" className="user-value" />
          </div>
          <div className="user-input">
            <label htmlFor="field3" className="field-label">
              Rev No
            </label>
            <input type="text" name="" id="field3" className="user-value" />
          </div>
          <div className="user-input">
            <label htmlFor="field4" className="field-label">
              Date
            </label>
            <input type="date" name="" id="field4" className="user-value" />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field5" className="field-label">
              Serial No
            </label>
            <input type="text" name="" id="field5" className="user-value" />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field6" className="field-label">
              Phase Drawing
            </label>
            <input type="text" name="" id="field6" className="user-value" />
          </div>
          <div className="user-input">
            <label htmlFor="field7" className="field-label">
              Rev No
            </label>
            <input type="text" name="" id="field7" className="user-value" />
          </div>
          <div className="user-input">
            <label htmlFor="field8" className="field-label">
              Date
            </label>
            <input type="date" name="" id="field8" className="user-value" />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field9" className="field-label">
              Customer
            </label>
            <input type="text" name="" id="field9" className="user-value" />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field10" className="field-label">
              Schematic Diagram No
            </label>
            <input type="text" name="" id="field10" className="user-value" />
          </div>
          <div className="user-input">
            <label htmlFor="field11" className="field-label">
              Rev No
            </label>
            <input type="text" name="" id="field11" className="user-value" />
          </div>
          <div className="user-input">
            <label htmlFor="field12" className="field-label">
              Date
            </label>
            <input type="date" name="" id="field12" className="user-value" />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field13" className="field-label">
              Description
            </label>
            <input type="text" name="" id="field13" className="user-value" />
          </div>

          <div className="user-input">
            <label htmlFor="field14" className="field-label">
              End User
            </label>
            <input type="text" name="" id="field14" className="user-value" />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="section1-reports" className="field-label radio-label">
              Reports / Trackers @SAP Production
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section1-reports"
                id="field15"
                className="user-value"
              />
              <label htmlFor="field15">Check List</label>
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section1-reports"
                id="field16"
                className="user-value"
              />
              <label htmlFor="field16">Trackers</label>
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="section1-painting" className="field-label radio-label">
              Internal Painting check list avalilability
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section1-painting"
                id="field17"
                className="user-value"
              />
              <label htmlFor="field17">Yes</label>
            </label>
            <label htmlFor="" className="radio">
              <input
                type="radio"
                name="section1-painting"
                id="field18"
                className="user-value"
              />
              <label htmlFor="field18">No</label>
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Special Features (if any)
            </label>
            <textarea name="" id="" rows={5}></textarea>
          </div>
        </div>
      </form>

      <button onClick={() => handleSectionMove(1, 1)} className="action-button">
        Save & Next
      </button>
    </div>
  );
}
