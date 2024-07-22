"use client";

import React from "react";
import moveSection from "@/utils/SectionMove";
import { useRecoilState } from "recoil";
import { activeSection, savedSection, testId } from "@/store/Section";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Section1() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  const [savedSectionCount, setSavedSectionCount] =
    useRecoilState(savedSection);

  const handleSectionMove = () => {
    setCurrentActiveSection(3);
    setSavedSectionCount(2);
  };

  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  const [testIdResponse, setTestIdResponse] = useRecoilState(testId);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log("This is section 1 data");
    const section1Data = {
      field1: data.field1,
      field2: data.field2,
      field3: data.field3,
      field4: data.field4,
      field5: data.field5,
      field6: data.field6,
      field7: data.field7,
      field8: data.field8,
      field9: data.field9,
      field10: data.field10,
      field11: data.field11,
      field12: data.field12,
      field13: data.field13,
      field14: data.field14,
      field15: data.field15,
      field16: data.field16,
      field17: data.field17,
    };

    console.log(section1Data);
    handleSectionMove();

    // try {
    //   const res = await fetch("http://localhost:8080/device/testData/1/"+{testIdResponse}, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(section1Data),
    //   });

    //   if (!res.ok) {
    //     throw new Error(`HTTP error! status: ${res.status}`);
    //   }
    //   setResponse(null);
    //   handleSectionMove(1,1)
    // } catch (error) {
    //   setResponse({ error: error.message });
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="form-section">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Inspection Lot No
            </label>
            <input
              type="text"
              name=""
              id="field1"
              className="user-value"
              {...register("field1")}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field2" className="field-label">
              Work Order / Unit
            </label>
            <input
              type="text"
              name=""
              id="field2"
              className="user-value"
              {...register("field2")}
            />
          </div>
          <div className="user-input">
            <label htmlFor="field3" className="field-label">
              Rev No
            </label>
            <input
              type="text"
              name=""
              id="field3"
              className="user-value"
              {...register("field3")}
            />
          </div>
          <div className="user-input">
            <label htmlFor="field4" className="field-label">
              Date
            </label>
            <input
              type="date"
              name=""
              id="field4"
              className="user-value"
              {...register("field4")}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field5" className="field-label">
              Serial No
            </label>
            <input
              type="text"
              name=""
              id="field5"
              className="user-value"
              {...register("field5")}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field6" className="field-label">
              Phase Drawing
            </label>
            <input
              type="text"
              name=""
              id="field6"
              className="user-value"
              {...register("field6")}
            />
          </div>
          <div className="user-input">
            <label htmlFor="field7" className="field-label">
              Rev No
            </label>
            <input
              type="text"
              name=""
              id="field7"
              className="user-value"
              {...register("field7")}
            />
          </div>
          <div className="user-input">
            <label htmlFor="field8" className="field-label">
              Date
            </label>
            <input
              type="date"
              name=""
              id="field8"
              className="user-value"
              {...register("field8")}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field9" className="field-label">
              Customer
            </label>
            <input
              type="text"
              name=""
              id="field9"
              className="user-value"
              {...register("field9")}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field10" className="field-label">
              Schematic Diagram No
            </label>
            <input
              type="text"
              name=""
              id="field10"
              className="user-value"
              {...register("field10")}
            />
          </div>
          <div className="user-input">
            <label htmlFor="field11" className="field-label">
              Rev No
            </label>
            <input
              type="text"
              name=""
              id="field11"
              className="user-value"
              {...register("field11")}
            />
          </div>
          <div className="user-input">
            <label htmlFor="field12" className="field-label">
              Date
            </label>
            <input
              type="date"
              name=""
              id="field12"
              className="user-value"
              {...register("field12")}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field13" className="field-label">
              Description
            </label>
            <input
              type="text"
              name=""
              id="field13"
              className="user-value"
              {...register("field13")}
            />
          </div>

          <div className="user-input">
            <label htmlFor="field14" className="field-label">
              End User
            </label>
            <input
              type="text"
              name=""
              id="field14"
              className="user-value"
              {...register("field14")}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label
              htmlFor="section1-reports"
              className="field-label radio-label"
            >
              Reports / Trackers @SAP Production
            </label>
            <div className="radio-input">
              <label htmlFor="" className="radio">
                <input
                  type="radio"
                  name="section1-reports"
                  id="section1-field15-1"
                  className="user-value"
                  {...register("field15")}
                  value="Check List"
                />
                <label htmlFor="section1-field15-1">Check List</label>
              </label>
              <label htmlFor="" className="radio">
                <input
                  type="radio"
                  name="section1-reports"
                  id="section1-field15-2"
                  className="user-value"
                  {...register("field15")}
                  value="Trackers"
                />
                <label htmlFor="section1-field15-2">Trackers</label>
              </label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label
              htmlFor="section1-painting"
              className="field-label radio-label"
            >
              Internal Painting check list avalilability
            </label>
            <div className="radio-input">
              <label htmlFor="" className="radio">
                <input
                  type="radio"
                  name="section1-painting"
                  id="section1-field16-1"
                  className="user-value"
                  value="Yes"
                  {...register("field16")}
                />
                <label htmlFor="section1-field16-1">Yes</label>
              </label>
              <label htmlFor="" className="radio">
                <input
                  type="radio"
                  name="section1-painting"
                  id="section1-field16-2"
                  className="user-value"
                  value="No"
                  {...register("field16")}
                />
                <label htmlFor="section1-field16-2">No</label>
              </label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field17" className="field-label">
              Special Features (if any)
            </label>
            <textarea
              name="field17"
              id="field17"
              rows={5}
              {...register("field17")}
            ></textarea>
          </div>
        </div>
        <button className="action-button" type="submit">
          Save & Next
        </button>
      </form>
    </div>
  );
}
