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
            <label htmlFor="field1" className="field-label">
              Work Order / Unit
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Rev No
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
             Date
            </label>
            <input type="date" name="" id="field1" className="user-value" />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Serial No
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Phase Drawing
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Rev No
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
             Date
            </label>
            <input type="date" name="" id="field1" className="user-value" />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Customer
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
              Rev No
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
             Date
            </label>
            <input type="date" name="" id="field1" className="user-value" />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Description
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
          <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              End User
            </label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>
        </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Reports / Trackers @SAP Production
            </label>
            <label htmlFor="">
            <input type="radio" name="" id="field1" className="user-value" />
            <label htmlFor="">Check List</label>
            </label>
            <label htmlFor="">
            <input type="radio" name="" id="field1" className="user-value" />
            <label htmlFor="">Trackers</label>
            </label>
            
            <input type="checkbox" name="" id="field1" className="user-value" />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Internal Painting check list avalilability
            </label>
            <label htmlFor="">
            <input type="radio" name="" id="field1" className="user-value" />
            <label htmlFor="">Yes</label>
            </label>
            <label htmlFor="">
            <input type="radio" name="" id="field1" className="user-value" />
            <label htmlFor="">No</label>
            </label>
            
            <input type="checkbox" name="" id="field1" className="user-value" />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Special Features (if any)
            </label>
            <textarea name="" id="" rows={5}>

            </textarea>
          </div>
        </div>
      </form>

      <button onClick={() => handleSectionMove(1, 1)}>Save & Next</button>
    </div>
  );
}
