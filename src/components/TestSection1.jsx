"use client";

import React from "react";
import moveSection from "@/utils/SectionMove";
import { useRecoilState } from "recoil";
import { activeSection, testDataSection1 } from "@/store/Section";
import { useForm } from "react-hook-form";
import "./style/ComponentStyles.css";

export default function TestSection1() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  const [testSectionData, setTestSectionData] =
    useRecoilState(testDataSection1);

  const handleSectionMove = (currentSection, moveAction) => {
    console.log(currentSection);
    setCurrentActiveSection(moveSection(currentSection, moveAction));
  };

  const handleTestDataMove = () => {
    console.log("Test Data is moved now");
    setCurrentActiveSection("testSection2");
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const testDataPayload = {
      serialNumber: data.field1,
      testType: data.field2,
      cycles: parseInt(data.field3),
      underVoltageCycles: parseInt(data.field4),
      nominalVoltageCycles: parseInt(data.field5),
      highVoltageCycles: parseInt(data.field6),
      tapPositionMax: parseInt(data.field7),
      tapPositionIndicators: parseInt(data.field8),
      upperLimitInput: parseInt(data.field9),
      lowerLimitInput: parseInt(data.field10),
      tapChangeDelayIndication: parseInt(data.field11),
      tapChangeProgressIndication: parseInt(data.field12),
    };
    console.log(testDataPayload);
    setTestSectionData(testDataPayload);
    handleTestDataMove();
  };

  return (
    <div className="form-section data-section">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Serial No
            </label>
            <input
              type="text"
              name="field1"
              id="field1"
              className="user-value"
              {...register("field1")}
            />
          </div>
          <div className="user-input">
            <label htmlFor="field2" className="field-label">
              Test Type
            </label>
            <select
              name="field2"
              id="field2"
              {...register("field2")}
              defaultValue={""}
            >
              <option value="" disabled>
                Select Variant
              </option>
              <option value="Variant 1-5-9">Variant 1-5-9</option>
              <option value="Variant 1-9b-17">Variant 1-9b-17</option>
              <option value="Variant 1-9-17">Variant 1-9-17</option>
              <option value="Variant 1-11b-21">Variant 1-11b-21</option>
              <option value="Variant 1-14b-27">Variant 1-14b-27</option>
              <option value="Variant 1-17b-35">Variant 1-17b-35</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field3" className="field-label">
              No of Cycles
            </label>
            <input
              type="number"
              name="field3"
              id="field3"
              className="user-value"
              {...register("field3")}
            />
          </div>
          <div className="user-input">
            <label htmlFor="field4" className="field-label">
              Under Voltage Cycles
            </label>
            <input
              type="number"
              name="field4"
              id="field4"
              className="user-value"
              {...register("field4")}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field5" className="field-label">
              Nominal Voltage Cycles
            </label>
            <input
              type="number"
              name="field5"
              id="field5"
              className="user-value"
              {...register("field5")}
            />
          </div>
          <div className="user-input">
            <label htmlFor="field6" className="field-label">
              High Voltage Cycles
            </label>
            <input
              type="number"
              name="field6"
              id="field6"
              className="user-value"
              {...register("field6")}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field7" className="field-label">
              Maximum Tap Position
            </label>
            <input
              type="number"
              name="field7"
              id="field7"
              className="user-value"
              {...register("field7")}
            />
          </div>
          <div className="user-input">
            <label htmlFor="field8" className="field-label">
              No of Tap Position Indicators
            </label>
            <input
              type="number"
              name="field8"
              id="field8"
              className="user-value"
              {...register("field8")}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field9" className="field-label">
              No. Upper Limit Reached Input
            </label>
            <input
              type="number"
              name="field9"
              id="field9"
              className="user-value"
              {...register("field9")}
            />
          </div>
          <div className="user-input">
            <label htmlFor="field10" className="field-label">
              No. Lower Limit Reached Input
            </label>
            <input
              type="number"
              name="field10"
              id="field10"
              className="user-value"
              {...register("field10")}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field11" className="field-label">
              No. Tap Change delay/Struck up Indication
            </label>
            <input
              type="number"
              name="field11"
              id="field11"
              className="user-value"
              {...register("field11")}
            />
          </div>
          <div className="user-input">
            <label htmlFor="field12" className="field-label">
              No. Tap Change in progress indications
            </label>
            <input
              type="number"
              name="field12"
              id="field12"
              className="user-value"
              {...register("field12")}
            />
          </div>
        </div>
        <button type="submit" className="action-button">
          Save & Next
        </button>
      </form>
    </div>
  );
}
