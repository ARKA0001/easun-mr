"use client";

import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  activeSection,
  savedSection,
  testDataSection1,
  testId,
} from "@/store/Section";
import { useForm, setValue } from "react-hook-form";
import "./style/ComponentStyles.css";
import html2canvas from "html2canvas";

export default function TestSection1() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  const [testSectionData, setTestSectionData] =
    useRecoilState(testDataSection1);

  const [savedSectionCount, setSavedSectionCount] =
    useRecoilState(savedSection);

  const [formId, setFormId] = useRecoilState(testId);

  const handleTestDataMove = () => {
    console.log("Section is going to be moved from 0 to 1");
    setCurrentActiveSection(1);
    setSavedSectionCount(0);
  };

  const { register, handleSubmit } = useForm();

  const takeScreenshort = async (sectionId, testId) => {
    const section = document.getElementById(sectionId);
    const canvas = await html2canvas(section);
    const imgData = canvas.toDataURL("image/png");
    const blob = await (await fetch(imgData)).blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${testId ? testId : 'default'}-testSection1.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);

    console.log("Image saved successfully");
  };

  const onSubmit = async (data) => {
    const testDataPayload = {
      serialNumber: data.field1,
      oVariant: data.field2,
      tapPositionIndicationInput: data.field3,
      endLimits: data.field4,
      progressIndicators: data.field5,
      testingCycle: data.field6,
    };
    console.log(testDataPayload);
    setTestSectionData(testDataPayload);

    try {
      const res = await fetch("http://localhost:8080/device/testData", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testDataPayload),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const result = await res.json();
      console.log("Form Id from response", result.data);
      setFormId(result.data);

      if (takeScreenshort("testSection1", result.data)) {
        handleTestDataMove();
      } else {
        alert(
          "There is an error while saving the image. Please contact support team"
        );
      }
    } catch (error) {
      throw new Error(`HTTP error! status:`, error);
    } finally {
      console.log("Sending process completed");
      if (takeScreenshort("testSection1", null)) {
        handleTestDataMove();
      } else {
        alert(
          "There is an error while saving the image. Please contact support team"
        );
      }
    }
  };

  return (
    <div className="form-section data-section">
      <form onSubmit={handleSubmit(onSubmit)} id="testSection1">
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
              required
            />
          </div>
          <div className="user-input">
            <label htmlFor="field2" className="field-label">
              Test Type
            </label>
            <select name="field2" id="field2" {...register("field2")} required>
              <option value="" disabled>
                Select Variant
              </option>
              <option value="1-5-9">Variant 1-5-9</option>
              <option value="1-9b-17">Variant 1-9b-17</option>
              <option value="1-9-17">Variant 1-9-17</option>
              <option value="1-11b-21">Variant 1-11b-21</option>
              <option value="1-14b-27">Variant 1-14b-27</option>
              <option value="1-17b-35">Variant 1-17b-35</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field3" className="field-label">
              Tap Position Indication Input
            </label>
            <select name="field3" id="field3" {...register("field3")} required>
              <option value="" disabled>
                Input Type
              </option>
              <option value="0">Resistance</option>
              <option value="1">4-20mA</option>
            </select>
          </div>
          <div className="user-input">
            <label htmlFor="field4" className="field-label">
              No of End Limits
            </label>
            <input
              type="number"
              name="field4"
              id="field4"
              className="user-value"
              {...register("field4")}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field5" className="field-label">
              No. Tap Change in progress indications
            </label>
            <input
              type="number"
              name="field5"
              id="field5"
              className="user-value"
              {...register("field5")}
              required
            />
          </div>
          <div className="user-input">
            <label htmlFor="field6" className="field-label">
              Testing cycle
            </label>
            <select className="user-value" {...register("field6")} required>
              <option value="Standard">Standard</option>
              <option value="Short">Short</option>
            </select>
          </div>
        </div>
        <button type="submit" className="action-button">
          Save & Next
        </button>
      </form>
    </div>
  );
}
