"use client";

import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { activeSection, savedSection, testIdStore } from "@/store/Section";
import { useForm, useWatch } from "react-hook-form";
import html2canvas from "html2canvas";
import { Section6DataStore } from "@/store/FormData";

export default function Section6() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  const [savedSectionCount, setSavedSectionCount] =
    useRecoilState(savedSection);

  const handleSectionMove = () => {
    setCurrentActiveSection(8);
    setSavedSectionCount(7);
  };

  const [section6FormData, setsection6FormData] =
    useRecoilState(Section6DataStore);

  const [testId, setTestId] = useRecoilState(testIdStore);

  const { register, handleSubmit, setValue, control } = useForm();
  const watchedFields = useWatch({ control });

  const onSubmit = async (data) => {
    console.log("This is section 5 data");
    console.log(section6FormData);
    const section = document.getElementById("section6-form-1");
    const canvas = await html2canvas(section, {
      scale: 2,
      backgroundColor: "#FFFFFF",
      useCORS: true,
    });
    const imgData = canvas.toDataURL("image/png");
    const blob = await (await fetch(imgData)).blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${testId ? testId : "default"}-section6-form-1.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
    console.log("Image saved successfully");

    takePartImage("section6-form-2", true);
    takePartImage("section6-form-3", true);
    takePartImage("section6-form-4", true);
    takePartImage("section6-form-5", true);
    takePartImage("section6-form-6", true);
    takePartImage("section6-form-7", false);
  };

  const takePartImage = async (fileName, hasNextSection) => {
    console.log("This is section 5 data");
    console.log(section6FormData);
    const section = document.getElementById(fileName);
    const canvas = await html2canvas(section, {
      scale: 2,
      backgroundColor: "#FFFFFF",
      useCORS: true,
    });
    const imgData = canvas.toDataURL("image/png");
    const blob = await (await fetch(imgData)).blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${testId ? testId : "default"}-${fileName}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
    console.log("Image saved successfully");

    if (!hasNextSection) {
      handleSectionMove();
    }
  };

  useEffect(() => {
    if (section6FormData && Object.keys(section6FormData).length > 0) {
      Object.keys(section6FormData).forEach((field) => {
        setValue(field, section6FormData[field]);
      });
    }
  }, [setsection6FormData, setValue]);

  useEffect(() => {
    setsection6FormData(watchedFields);
  }, [watchedFields, setsection6FormData]);

  return (
    <div className="form-section" id="section6-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="section6-form-1" id="section6-form-1">
          <div className="form-main-group">
            <div className="form-group">
              <div className="section-title">Raise Contractor</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1"
                        id="section6-fieldA1"
                        className="user-value"
                        value="Siemens"
                        {...register("fieldE1")}
                      />
                      <label htmlFor="section6-fieldA1">Siemens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1"
                        id="section6-fieldA2"
                        className="user-value"
                        value="Schenider"
                        {...register("fieldE1")}
                      />
                      <label htmlFor="section6-fieldA2">Schneider</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1"
                        id="section6-fieldNA3"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE1")}
                      />
                      <label htmlFor="section6-fieldNA3">Nill</label>
                    </label>

                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-q")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Voltage Type
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-type-a"
                        id="section6-field2-type"
                        className="user-value"
                        value="AC"
                        {...register("fieldE2")}
                      />
                      <label htmlFor="section6-field2-type">AC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-type-a"
                        id="section6-field3-type"
                        className="user-value"
                        value="DC"
                        {...register("fieldE2")}
                      />
                      <label htmlFor="section6-field3-type">DC</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Voltage
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise"
                        id="section6-field2"
                        className="user-value"
                        value="415"
                        {...register("fieldE2-a")}
                      />
                      <label htmlFor="section6-field2">415</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise"
                        id="section6-field3"
                        className="user-value"
                        value="220"
                        {...register("fieldE2-a")}
                      />
                      <label htmlFor="section6-field3">220</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise"
                        id="section6-field4"
                        className="user-value"
                        value="110"
                        {...register("fieldE2-a")}
                      />
                      <label htmlFor="section6-field4">110</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section6-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section6-field5"
                    className="user-value"
                    {...register("fieldE3")}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="section-title">Lower Contractor</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower"
                        id="section6-lower-field1"
                        className="user-value"
                        value="Siemens"
                        {...register("fieldE4")}
                      />
                      <label htmlFor="section6-lower-field1">Siemens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower"
                        id="section6-field1-lower"
                        className="user-value"
                        value="Schneider"
                        {...register("fieldE4")}
                      />
                      <label htmlFor="section6-field1-lower">Schneider</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower"
                        id="section6-field1-lower-nill"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE4")}
                      />
                      <label htmlFor="section6-field1-lower-nill">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1-t2"
                        className="user-value extra-text"
                        {...register("fieldE82T2")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Voltage Type
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-type"
                        id="section6-field2-type-new"
                        className="user-value"
                        value="AC"
                        {...register("fieldE2-new1")}
                      />
                      <label htmlFor="section6-field2-type-new">AC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-type-new"
                        id="section6-field2-type-3"
                        className="user-value"
                        value="DC"
                        {...register("fieldE2-new1")}
                      />
                      <label htmlFor="section6-field2-type-3">DC</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Voltage
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower"
                        id="section6-lower-field2"
                        className="user-value"
                        {...register("fieldE5")}
                        value="415"
                      />
                      <label htmlFor="section6-lower-field2">415</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower"
                        id="section6-lower-field3"
                        className="user-value"
                        value="220"
                        {...register("fieldE5")}
                      />
                      <label htmlFor="section6-lower-field3">220</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower"
                        id="section6-lower-field4"
                        className="user-value"
                        {...register("fieldE5")}
                      />
                      <label htmlFor="section6-lower-field4">110</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section6-field-lower-observation"
                    className="field-label"
                  >
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section6-field-lower-observation"
                    className="user-value"
                    {...register("fieldE6")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="form-main-group">
            <div className="form-group">
              <div className="section-title">Step By Step Contractor</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-sts"
                        id="section6-lower-field1-sts"
                        className="user-value"
                        {...register("fieldE7")}
                        value="Siemens"
                      />
                      <label htmlFor="section6-lower-field1-sts">Siemens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-sts"
                        id="section6-field1-sts"
                        className="user-value"
                        {...register("fieldE7")}
                        value="Scneider"
                      />
                      <label htmlFor="section6-field1-sts">Schneider</label>
                    </label>

                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-sts"
                        id="section6-fieldNA3-sts"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE7")}
                      />
                      <label htmlFor="section6-fieldNA3-sts">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1-3"
                        className="user-value extra-text"
                        {...register("fieldE82T1-3")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Voltage Type
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-type-sts"
                        id="section6-field2-type-sts"
                        className="user-value"
                        value="AC"
                        {...register("fieldE2-sts")}
                      />
                      <label htmlFor="section6-field2-type-sts">AC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-type-sts"
                        id="section6-field3-sts"
                        className="user-value"
                        value="DC"
                        {...register("fieldE2-sts")}
                      />
                      <label htmlFor="section6-field3-sts">DC</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Voltage
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-sts-a"
                        id="section6-lower-field2-sts-a"
                        className="user-value"
                        {...register("fieldE8")}
                        value="415"
                      />
                      <label htmlFor="section6-lower-field2-sts-a">415</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-sts-a"
                        id="section6-lower-field3-sts-a"
                        className="user-value"
                        value="220"
                        {...register("fieldE8")}
                      />
                      <label htmlFor="section6-lower-field3-sts-a">220</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-sts-a"
                        id="section6-lower-field4-sts-a"
                        className="user-value"
                        value="110"
                        {...register("fieldE8")}
                      />
                      <label htmlFor="section6-lower-field4-sts-a">110</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section6-field-lower-observation"
                    className="field-label"
                  >
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section6-field-lower-observation"
                    className="user-value"
                    {...register("fieldE9")}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="section-title">Break Contractor</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-bc"
                        id="section6-lower-field1-bc"
                        className="user-value"
                        value="Siemens"
                        {...register("fieldE10")}
                      />
                      <label htmlFor="section6-lower-field1-bc">Siemens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-bc"
                        id="section6-field1-bc"
                        className="user-value"
                        value="Schneider"
                        {...register("fieldE10")}
                      />
                      <label htmlFor="section6-field1-bc">Schneider</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-bc"
                        id="section6-fieldNA3-bc"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE10")}
                      />
                      <label htmlFor="section6-fieldNA3-bc">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-np")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Voltage Type
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-type-bc"
                        id="section6-field2-type-bc"
                        className="user-value"
                        value="AC"
                        {...register("fieldE2-bc")}
                      />
                      <label htmlFor="section6-field2-type-bc">AC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-type-bc"
                        id="section6-field3-bc"
                        className="user-value"
                        value="DC"
                        {...register("fieldE2-bc")}
                      />
                      <label htmlFor="section6-field3-bc">DC</label>
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Voltage
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-bc"
                        id="section6-lower-field2-bc"
                        className="user-value"
                        value="415"
                        {...register("fieldE11-bc")}
                      />
                      <label htmlFor="section6-lower-field2-bc">415</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-bc"
                        id="section6-lower-field4-bc"
                        className="user-value"
                        value="110"
                        {...register("fieldE11-bc")}
                      />
                      <label htmlFor="section6-lower-field4-bc">110</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section6-field-lower-observation"
                    className="field-label"
                  >
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section6-field-lower-observation"
                    className="user-value"
                    {...register("fieldE12")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section6-form-2" id="section6-form-2">
          <div className="form-main-group">
            <div className="form-group">
              <div className="section-title">Additional Contractor</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Type
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-ac"
                        id="section6-lower-field1-a-ac"
                        className="user-value"
                        value="1"
                        {...register("fieldE13-ac")}
                      />
                      <label htmlFor="section6-lower-field1-a-ac">AC-1</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-ac"
                        id="section6-field1-a-ac"
                        className="user-value"
                        value="2"
                        {...register("fieldE13-ac")}
                      />
                      <label htmlFor="section6-field1-a-ac">AC-II</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-ac"
                        id="section6-field1-b-ac"
                        className="user-value"
                        value="k6"
                        {...register("fieldE13-ac")}
                      />
                      <label htmlFor="section6-field1-b-ac">K6</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-ac"
                        id="section6-field1-c-ac"
                        className="user-value"
                        value="k7"
                        {...register("fieldE13-ac")}
                      />
                      <label htmlFor="section6-field1-c-ac">K7</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-ac"
                        id="section6-field1-d-ac"
                        className="user-value"
                        {...register("fieldE13-ac")}
                        value="sch1"
                      />
                      <label htmlFor="section6-field1-d-ac">SHC1</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-ac"
                        id="section6-field1-e-ac"
                        className="user-value"
                        value="shc2"
                        {...register("fieldE13-ac")}
                      />
                      <label htmlFor="section6-field1-e-ac">SHC2</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-ac"
                        id="section6-field1-f-ac"
                        className="user-value"
                        {...register("fieldE13-ac")}
                        value="ac5"
                      />
                      <label htmlFor="section6-field1-f-ac">AC-5</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-ac"
                        id="section6-field1-g-ac"
                        className="user-value"
                        {...register("fieldE13-ac")}
                        value="na-ac"
                      />
                      <label htmlFor="section6-field1-g-ac">N/A</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section6-field-lower-observation"
                    className="field-label"
                  >
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section6-field-lower-observation"
                    className="user-value"
                    {...register("fieldE15")}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="section-title">Motor Protective Relay</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-mpr"
                        id="section6-lower-field1-mpr"
                        className="user-value"
                        value="Siemens"
                        {...register("fieldE16-mpr")}
                      />
                      <label htmlFor="section6-lower-field1-mpr">Siemens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-mpr"
                        id="section6-field1-mpr"
                        className="user-value"
                        value="scnieder"
                        {...register("fieldE16-mpr")}
                      />
                      <label htmlFor="section6-field1-mpr">Schneider</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-mpr"
                        id="section6-fieldNA3-mpr"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE16-mpr")}
                      />
                      <label htmlFor="section6-fieldNA3-mpr">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-mpr")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Current Rating
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-re"
                        id="section6-lower-field2-re"
                        className="user-value"
                        {...register("fieldE17-re")}
                        value="1.6"
                      />
                      <label htmlFor="section6-lower-field2-re">
                        1.6-2.4 A
                      </label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-re"
                        id="section6-lower-field4-re"
                        className="user-value"
                        value="2.4"
                        {...register("fieldE17-re")}
                      />
                      <label htmlFor="section6-lower-field4-re">2.4-4A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-re"
                        id="section6-lower-field4-a-re"
                        className="user-value"
                        {...register("fieldE17-re")}
                        value="4"
                      />
                      <label htmlFor="section6-lower-field4-a-re">4-6A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-re"
                        id="section6-lower-field4-b-re"
                        className="user-value"
                        {...register("fieldE17-re")}
                        value="10"
                      />
                      <label htmlFor="section6-lower-field4-b-re">6-10A</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section6-field-lower-observation"
                    className="field-label"
                  >
                    Set Value
                  </label>
                  <textarea
                    id="section6-field-lower-observation"
                    className="user-value"
                    {...register("fieldE18")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="form-main-group">
            <div className="form-group">
              <div className="section-title">Shunt Trip Coil</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-stc"
                        id="section6-lower-field1-stc"
                        className="user-value"
                        value="seimens"
                        {...register("fieldE19-stc")}
                      />
                      <label htmlFor="section6-lower-field1-stc">Siemens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-stc"
                        id="section6-field1-stc"
                        className="user-value"
                        value="scneider"
                        {...register("fieldE19-stc")}
                      />
                      <label htmlFor="section6-field1-stc">Schneider</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-stc"
                        id="section6-fieldNA3-stc"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE19-stc")}
                      />
                      <label htmlFor="section6-fieldNA3-stc">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-stc")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Voltage Type
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-type-stc"
                        id="section6-field2-type-stc"
                        className="user-value"
                        value="AC"
                        {...register("fieldE2-stc")}
                      />
                      <label htmlFor="section6-field2-type-stc">AC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-type-stc"
                        id="section6-field3-stc"
                        className="user-value"
                        value="DC"
                        {...register("fieldE2-stc")}
                      />
                      <label htmlFor="section6-field3-stc">DC</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Voltage
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-stc"
                        id="section6-lower-field2-stc"
                        className="user-value"
                        {...register("fieldE20-stc")}
                        value="110"
                      />
                      <label htmlFor="section6-lower-field2-stc">110 </label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-stc"
                        id="section6-lower-field4-stc"
                        className="user-value"
                        value="220"
                        {...register("fieldE20-stc")}
                      />
                      <label htmlFor="section6-lower-field4-stc">220 </label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section6-field-lower-observation"
                    className="field-label"
                  >
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section6-field-lower-observation"
                    className="user-value"
                    {...register("fieldE21")}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="section-title">TDR On/Off Delay</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-td"
                        id="section6-lower-field1-td"
                        className="user-value"
                        value="seimens"
                        {...register("fieldE21-td")}
                      />
                      <label htmlFor="section6-lower-field1-td">Siemens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-td"
                        id="section6-field1-td"
                        className="user-value"
                        value="scneider"
                        {...register("fieldE21-td")}
                      />
                      <label htmlFor="section6-field1-td">Schneider</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-td"
                        id="section6-field1-e-td"
                        className="user-value"
                        {...register("fieldE21-td")}
                        value="eapl"
                      />
                      <label htmlFor="section6-field1-e-td">EAPL</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-td"
                        id="section6-fieldNA3-td"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE21-td")}
                      />
                      <label htmlFor="section6-fieldNA3-td">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-td")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Quantity
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-tt"
                        id="section6-lower-field2-tt"
                        className="user-value"
                        value="1"
                        {...register("fieldE22-tt")}
                      />
                      <label htmlFor="section6-lower-field2-tt">1</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-tt"
                        id="section6-lower-field4-tt"
                        className="user-value-tt"
                        value="2"
                        {...register("fieldE22-tt")}
                      />
                      <label htmlFor="section6-lower-field4-tt">2</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section6-field-lower-observation"
                    className="field-label"
                  >
                    Set Value
                  </label>
                  <textarea
                    id="section6-field-lower-observation"
                    className="user-value"
                    {...register("fieldE23")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section6-form-3" id="section6-form-3">
          <div className="form-main-group">
            <div className="form-group">
              <div className="section-title">Heater Switch</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-hs"
                        id="section6-lower-field1-hs"
                        className="user-value"
                        value="sx112"
                        {...register("fieldE25-hs")}
                      />
                      <label htmlFor="section6-lower-field1-hs">
                        Kaycee SX 112
                      </label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-hs"
                        id="section6-field1-hs"
                        className="user-value"
                        {...register("fieldE25-hs")}
                        value="114"
                      />
                      <label htmlFor="section6-field1-hs">SX 114 A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-hs"
                        id="section6-field1-a-hs"
                        className="user-value"
                        {...register("fieldE25-hs")}
                        value="114c"
                      />
                      <label htmlFor="section6-field1-a-hs">SX 114 C</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-hs"
                        id="section6-field1-b-hs"
                        className="user-value"
                        {...register("fieldE25-hs")}
                        value="61197"
                      />
                      <label htmlFor="section6-field1-b-hs">
                        SALZER - 61197
                      </label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-hs"
                        id="section6-fieldNA3-hs"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE25-hs")}
                      />
                      <label htmlFor="section6-fieldNA3-hs">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-hs")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section6-field-lower-observation"
                    className="field-label"
                    {...register("fieldE26")}
                  >
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section6-field-lower-observation"
                    className="user-value"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="section-title">Motor</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-m"
                        id="section6-lower-field1-m"
                        className="user-value"
                        {...register("fieldE28-m")}
                        value="remi"
                      />
                      <label htmlFor="section6-lower-field1-m">Remi</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-m"
                        id="section6-field1-m"
                        className="user-value"
                        {...register("fieldE28-m")}
                        value="bbl"
                      />
                      <label htmlFor="section6-field1-m">BBL</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-m"
                        id="section6-field1-a-m"
                        className="user-value"
                        {...register("fieldE28-m")}
                        value="rotomac"
                      />
                      <label htmlFor="section6-field1-a-m">Rotomac</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-m"
                        id="section6-field1-b-m"
                        className="user-value"
                        {...register("fieldE28-m")}
                        value="dharani"
                      />
                      <label htmlFor="section6-field1-b-m">Dharani</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-m"
                        id="section6-field1-c-m"
                        className="user-value"
                        {...register("fieldE28-m")}
                        value="kec"
                      />
                      <label htmlFor="section6-field1-c-m">KEC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-m"
                        id="section6-fieldNA3-m"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE28-m")}
                      />
                      <label htmlFor="section6-fieldNA3-m">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-m")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Power
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-pp"
                        id="section6-lower-field2-pp"
                        className="user-value"
                        {...register("fieldE29-pp")}
                        value="230"
                      />
                      <label htmlFor="section6-lower-field2-pp">230V</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-pp"
                        id="section6-lower-field4-a-pp"
                        className="user-value"
                        {...register("fieldE29-pp")}
                        value="380"
                      />
                      <label htmlFor="section6-lower-field4-a-pp">380V</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-pp"
                        id="section6-lower-field4-b-pp"
                        className="user-value"
                        {...register("fieldE29-pp")}
                        value="400"
                      />
                      <label htmlFor="section6-lower-field4-b-pp">400V</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-pp"
                        id="section6-lower-field4-c-pp"
                        className="user-value"
                        {...register("fieldE29-pp")}
                        value="415"
                      />
                      <label htmlFor="section6-lower-field4-c-pp">415V</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-pp"
                        id="section6-lower-field4-d-pp"
                        className="user-value"
                        {...register("fieldE29-pp")}
                        value="430"
                      />
                      <label htmlFor="section6-lower-field4-d-pp">430V</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Secondary Coil
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-ee-pp"
                        id="section6-lower-field2-ee-pp"
                        className="user-value"
                        {...register("fieldE30-pp")}
                        value="55"
                      />
                      <label htmlFor="section6-lower-field2-ee-pp">
                        55-0-55v
                      </label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-ee-pp"
                        id="section6-lower-field4-we-pp"
                        className="user-value"
                        {...register("fieldE30-pp")}
                        value="110"
                      />
                      <label htmlFor="section6-lower-field4-we-pp">
                        110-0-110v
                      </label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section6-field-lower-observation"
                    className="field-label"
                  >
                    Serial No
                  </label>
                  <textarea
                    id="section6-field-lower-observation"
                    className="user-value"
                    {...register("fieldE31")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="form-main-group">
            {" "}
            <div className="form-group">
              <div className="section-title">AUX Supply Transformer</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-aux"
                        id="section6-lower-field1-aux"
                        className="user-value"
                        {...register("fieldE32-aux")}
                        value="ampitron"
                      />
                      <label htmlFor="section6-lower-field1-aux">
                        Ampitron
                      </label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-aux"
                        id="section6-field1-aux"
                        className="user-value"
                        {...register("fieldE32-aux")}
                        value="ashoka"
                      />
                      <label htmlFor="section6-field1-aux">Ashoka</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-aux"
                        id="section6-field1-a-aux"
                        className="user-value"
                        {...register("fieldE32-aux")}
                        value="saraswathi"
                      />
                      <label htmlFor="section6-field1-a-aux">Saraswathi</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-aux"
                        id="section6-field1-b-aux"
                        className="user-value"
                        {...register("fieldE32-aux")}
                        value="quantum"
                      />
                      <label htmlFor="section6-field1-b-aux">Quantum</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-aux"
                        id="section6-fieldNA3-aux"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE32-aux")}
                      />
                      <label htmlFor="section6-fieldNA3-aux">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-aux")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Power
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-op"
                        id="section6-lower-field2-a-op"
                        className="user-value"
                        {...register("fieldE33-op")}
                        value="230"
                      />
                      <label htmlFor="section6-lower-field2-a-op">230V</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-op"
                        id="section6-lower-field4-b-op"
                        className="user-value"
                        {...register("fieldE33-op")}
                        value="380"
                      />
                      <label htmlFor="section6-lower-field4-b-op">380V</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-op"
                        id="section6-lower-field4-c-op"
                        className="user-value"
                        {...register("fieldE33-op")}
                        value="400"
                      />
                      <label htmlFor="section6-lower-field4-c-op">400V</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-op"
                        id="section6-lower-field4-d-op"
                        className="user-value"
                        {...register("fieldE33-op")}
                        value="415"
                      />
                      <label htmlFor="section6-lower-field4-d-op">415V</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-op"
                        id="section6-lower-field4-e-op"
                        className="user-value"
                        {...register("fieldE33-op")}
                        value="430"
                      />
                      <label htmlFor="section6-lower-field4-e-op">430V</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Secondary Coil
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-q-op"
                        id="section6-lower-field2-q-op"
                        className="user-value"
                        {...register("fieldE34-q-op")}
                        value="55"
                      />
                      <label htmlFor="section6-lower-field2-q-op">
                        55-0-55v
                      </label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-q-op"
                        id="section6-lower-field4-w-op"
                        className="user-value"
                        {...register("fieldE34-q-op")}
                        value="110"
                      />
                      <label htmlFor="section6-lower-field4-w-op">
                        110-0-110v
                      </label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section6-field-lower-observation"
                    className="field-label"
                  >
                    Serial No
                  </label>
                  <textarea
                    id="section6-field-lower-observation"
                    className="user-value"
                    {...register("fieldE35")}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="section-title">Heater</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-h"
                        id="section6-lower-field1-h"
                        className="user-value"
                        {...register("fieldE35-h")}
                        value="pyros"
                      />
                      <label htmlFor="section6-lower-field1-h">Pyros</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-h"
                        id="section6-field1-h"
                        className="user-value"
                        {...register("fieldE35-h")}
                        value="pyros"
                      />
                      <label htmlFor="section6-field1-h">Ashoka</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-h"
                        id="section6-field1-a-h"
                        className="user-value"
                        {...register("fieldE35-h")}
                        value="rkh"
                      />
                      <label htmlFor="section6-field1-a-h">RKH</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-h"
                        id="section6-field1-b-h"
                        className="user-value"
                        {...register("fieldE35-h")}
                        value="ego"
                      />
                      <label htmlFor="section6-field1-b-h">Sai EGO</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-h"
                        id="section6-fieldNA3-h"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE35-h")}
                      />
                      <label htmlFor="section6-fieldNA3-h">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-h")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Voltage Type
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-type-h"
                        id="section6-field2-type-h"
                        className="user-value"
                        value="AC"
                        {...register("fieldE2-h")}
                      />
                      <label htmlFor="section6-field2-type-h">AC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-type-h"
                        id="section6-field3-h"
                        className="user-value"
                        value="DC"
                        {...register("fieldE2-h")}
                      />
                      <label htmlFor="section6-field3-h">DC</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Voltage
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-h"
                        id="section6-lower-field2-h"
                        className="user-value"
                        {...register("fieldE36-h")}
                        value="230"
                      />
                      <label htmlFor="section6-lower-field2-h">230</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-h"
                        id="section6-lower-field4-h"
                        className="user-value"
                        {...register("fieldE36-h")}
                        value="110"
                      />
                      <label htmlFor="section6-lower-field4-h">110</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Wattage
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-q-h"
                        id="section6-lower-field2-q-h"
                        className="user-value"
                        {...register("fieldE37-q-h")}
                        value="40"
                      />
                      <label htmlFor="section6-lower-field2-q-h">40W</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-q-h"
                        id="section6-lower-field4-w-h"
                        className="user-value"
                        {...register("fieldE37-q-h")}
                        value="80"
                      />
                      <label htmlFor="section6-lower-field4-w-h">80W</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-lower-q-h"
                        id="section6-lower-field4-r-h"
                        className="user-value"
                        {...register("fieldE37-q-h")}
                        value="100"
                      />
                      <label htmlFor="section6-lower-field4-r-h">100W</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section6-field-lower-observation"
                    className="field-label"
                  >
                    Serial No
                  </label>
                  <textarea
                    id="section6-field-lower-observation"
                    className="user-value"
                    {...register("fieldE38")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section6-form-4" id="section6-form-4">
          <div className="form-main-group">
            <div className="form-group">
              <div className="section-title">Thermostat</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-th"
                        id="section6-lower-field1-th"
                        className="user-value"
                        {...register("fieldE40-th")}
                        value="ego"
                      />
                      <label htmlFor="section6-lower-field1-th">
                        Sai EGO 230 VAC
                      </label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-th"
                        id="section6-field1-th"
                        className="user-value"
                        {...register("fieldE40-th")}
                        value="sunvic"
                      />
                      <label htmlFor="section6-field1-th">Sunvic 230VAC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-th"
                        id="section6-field1-a-th"
                        className="user-value"
                        {...register("fieldE40-th")}
                        value="grish"
                      />
                      <label htmlFor="section6-field1-a-th">
                        Grish EGO 230VAC
                      </label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-make-lower-th"
                        id="section6-fieldNA3-th"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE40-th")}
                      />
                      <label htmlFor="section6-fieldNA3-th">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-th")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section6-field-lower-observation"
                    className="field-label"
                    {...register("fieldE41")}
                  >
                    Actual Observation with Label identification
                  </label>
                  <textarea
                    id="section6-field-lower-observation"
                    className="user-value"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="section-title">Fuse/Link</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-fs"
                        id="section6-field1-fs"
                        className="user-value"
                        {...register("fieldE42-fs")}
                        value="copper"
                      />
                      <label htmlFor="section6-field1-fs">Copper Busman</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-fs"
                        id="section6-field1-a-fs"
                        className="user-value"
                        {...register("fieldE42-fs")}
                        value="seimens"
                      />
                      <label htmlFor="section6-field1-a-fs">Siemens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-fs"
                        id="section6-fieldNA3-fs"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE42-fs")}
                      />
                      <label htmlFor="section6-fieldNA3-fs">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-fs")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="field1" className="field-label">
                    Quantity
                  </label>
                  <input
                    type="text"
                    name=""
                    id="field1"
                    className="user-value"
                    {...register("fieldE43")}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section6-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section6-field5"
                    className="user-value"
                    {...register("fieldE44")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="form-main-group">
            {" "}
            <div className="form-group">
              <div className="section-title">Terminal Blocks 1</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-tb1"
                        id="section6-field1-tb1"
                        className="user-value"
                        {...register("fieldE45-tb1")}
                        value="elmex"
                      />
                      <label htmlFor="section6-field1-tb1">Elmex</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-tb1"
                        id="section6-field1-a-tb1"
                        className="user-value"
                        {...register("fieldE45-tb1")}
                        value="connect"
                      />
                      <label htmlFor="section6-field1-a-tb1">
                        Connect Well
                      </label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-tb1"
                        id="section6-fieldNA3-tb1"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE45-tb1")}
                      />
                      <label htmlFor="section6-fieldNA3-tb1">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-tb1")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
                <div className="user-input">
                  <label htmlFor="field2" className="field-label">
                    Part Name
                  </label>
                  <select name="field2" id="field2" {...register("fieldE46")}>
                    <option value="" disabled>
                      Select Part No
                    </option>
                    <option value="">CAT-M3</option>
                    <option value="">CAT-M4</option>
                    <option value="">CBT-M4</option>
                    <option value="">KLTDM4</option>
                    <option value="">STH4</option>
                    <option value="">CSTSB3</option>
                    <option value="">CSTSB4</option>
                    <option value="">CST 4UN</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="field1" className="field-label">
                    TB1
                  </label>
                  <input
                    type="text"
                    name=""
                    id="field1"
                    className="user-value"
                    {...register("fieldE4")}
                  />
                  <label htmlFor="field1" className="field-label">
                    Nos
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="section-title">Terminal Blocks 2</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-tb2"
                        id="section6-field1-tb2"
                        className="user-value"
                        {...register("fieldE48-tb2")}
                        value="elmex"
                      />
                      <label htmlFor="section6-field1-tb2">Elmex</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-tb2"
                        id="section6-field1-a-tb2"
                        className="user-value"
                        {...register("fieldE48-tb2")}
                        value="connect"
                      />
                      <label htmlFor="section6-field1-a-tb2">
                        Connect Well
                      </label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-tb2"
                        id="section6-fieldNA3-tb2"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE48-tb2")}
                      />
                      <label htmlFor="section6-fieldNA3-tb2">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-tb2")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
                <div className="user-input">
                  <label htmlFor="field2" className="field-label">
                    Part Name
                  </label>
                  <select name="field2" id="field2" {...register("fieldE49")}>
                    <option value="" disabled>
                      Select Part No
                    </option>
                    <option value="">CAT-M3</option>
                    <option value="">CAT-M4</option>
                    <option value="">CBT-M4</option>
                    <option value="">KLTDM4</option>
                    <option value="">STH4</option>
                    <option value="">CSTSB3</option>
                    <option value="">CSTSB4</option>
                    <option value="">CST 4UN</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="field1" className="field-label">
                    TB2
                  </label>
                  <input
                    type="text"
                    name=""
                    id="field1"
                    className="user-value"
                    {...register("fieldE50")}
                  />
                  <label htmlFor="field1" className="field-label">
                    Nos
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section6-form-5" id="section6-form-5">
          <div className="form-main-group">
            <div className="form-group">
              <div className="section-title">Terminal Blocks 3</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-tb3"
                        id="section6-field1-tb3"
                        className="user-value"
                        {...register("fieldE51-tb3")}
                        value="elmex"
                      />
                      <label htmlFor="section6-field1-tb3">Elmex</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-tb3"
                        id="section6-field1-a-tb3"
                        className="user-value"
                        {...register("fieldE51-tb3")}
                        value="connect"
                      />
                      <label htmlFor="section6-field1-a-tb3">
                        Connect Well
                      </label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-tb3"
                        id="section6-fieldNA3-tb3"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE51-tb3")}
                      />
                      <label htmlFor="section6-fieldNA3-tb3">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-tb3")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
                <div className="user-input">
                  <label htmlFor="field2" className="field-label">
                    Part Name
                  </label>
                  <select name="field2" id="field2" {...register("fieldE52")}>
                    <option value="" disabled>
                      Select Part No
                    </option>
                    <option value="">CAT-M3</option>
                    <option value="">CAT-M4</option>
                    <option value="">CBT-M4</option>
                    <option value="">KLTDM4</option>
                    <option value="">STH4</option>
                    <option value="">CSTSB3</option>
                    <option value="">CSTSB4</option>
                    <option value="">CST 4UN</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="field1" className="field-label">
                    TB3
                  </label>
                  <input
                    type="text"
                    name=""
                    id="field1"
                    className="user-value"
                    {...register("fieldE53")}
                  />
                  <label htmlFor="field1" className="field-label">
                    Nos
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="section-title">Push Button raise/lower</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-pbr"
                        id="section6-field1-pbr"
                        className="user-value"
                        {...register("fieldE54-pbr")}
                        value="seimens"
                      />
                      <label htmlFor="section6-field1-pbr">Siemens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-a-pbr"
                        id="section6-field1-a-pbr"
                        className="user-value"
                        {...register("fieldE54-pbr")}
                        value="technix"
                      />
                      <label htmlFor="section6-field1-a-pbr">Technic</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-b-pbr"
                        id="section6-fieldNA3-pbr"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE54-pbr")}
                      />
                      <label htmlFor="section6-fieldNA3-pbr">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-pbr")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Type
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-tp"
                        id="section6-field2-a-tp"
                        className="user-value"
                        {...register("fieldE55-tp")}
                        value="yellow"
                      />
                      <label htmlFor="section6-field2-a-tp">Yellow</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-tp"
                        id="section6-field3-b-tp"
                        className="user-value"
                        {...register("fieldE55-tp")}
                        value="white"
                      />
                      <label htmlFor="section6-field3-b-tp">White</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-tp"
                        id="section6-field4-c-tp"
                        className="user-value"
                        {...register("fieldE55-tp")}
                        value="spring"
                      />
                      <label htmlFor="section6-field4-c-tp">
                        Spring Return
                      </label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section6-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section6-field5"
                    className="user-value"
                    {...register("fieldE56")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="form-main-group">
            {" "}
            <div className="form-group">
              <div className="section-title">Trip Push Button</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Type
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-qw"
                        id="section6-field1-qw"
                        className="user-value"
                        {...register("fieldE57-qw")}
                        value="stay"
                      />
                      <label htmlFor="section6-field1-qw">Stay Put</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-qw"
                        id="section6-field1-q-qw"
                        className="user-value"
                        {...register("fieldE57-qw")}
                        value="red"
                      />
                      <label htmlFor="section6-field1-q-qw">Red</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-qw"
                        id="section6-field1-w-qw"
                        className="user-value"
                        {...register("fieldE57-qw")}
                        value="transparent"
                      />
                      <label htmlFor="section6-field1-w-qw">
                        Transparent Red
                      </label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section6-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section6-field5"
                    className="user-value"
                    {...register("fieldE58")}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="section-title">MCB1 Pole</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-mcb"
                        id="section6-field1-mcb"
                        className="user-value"
                        {...register("fieldE59-mcb")}
                        value="seimens"
                      />
                      <label htmlFor="section6-field1-mcb">Siemens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-mcb"
                        id="section6-field1-a-mcb"
                        className="user-value"
                        {...register("fieldE59-mcb")}
                        value="abb"
                      />
                      <label htmlFor="section6-field1-a-mcb">ABB</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-mcb"
                        id="section6-field1-b-mcb"
                        className="user-value"
                        {...register("fieldE59-mcb")}
                        value="legrand"
                      />
                      <label htmlFor="section6-field1-b-mcb">Legrand</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-mcb"
                        id="section6-field1-c-mcb"
                        className="user-value"
                        {...register("fieldE59-mcb")}
                        value="scheider"
                      />
                      <label htmlFor="section6-field1-c-mcb">Schneider</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-mcb"
                        id="section6-fieldNA3-mcb"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE59-mcb")}
                      />
                      <label htmlFor="section6-fieldNA3-mcb">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-mcb")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Current Rating
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-as"
                        id="section6-field2-a-as"
                        className="user-value"
                        {...register("fieldE60-as")}
                        value="2a"
                      />
                      <label htmlFor="section6-field2-a-as">2A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-as"
                        id="section6-field3-s-as"
                        className="user-value"
                        {...register("fieldE60-as")}
                        value="4a"
                      />
                      <label htmlFor="section6-field3-s-as">4A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-as"
                        id="section6-field4-aa-as"
                        className="user-value"
                        {...register("fieldE60-as")}
                        value="6a"
                      />
                      <label htmlFor="section6-field4-aa-as">6A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-as"
                        id="section6-field4-ss-as"
                        className="user-value"
                        {...register("fieldE60-as")}
                        value="10a"
                      />
                      <label htmlFor="section6-field4-ss-as">10A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-as"
                        id="section6-field4-aa-ss"
                        className="user-value"
                        {...register("fieldE60-as")}
                        value="16a"
                      />
                      <label htmlFor="section6-field4-aa-ss">16A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-as"
                        id="section6-field4-ss-aa"
                        className="user-value"
                        {...register("fieldE60-as")}
                        value="32a"
                      />
                      <label htmlFor="section6-field4-ss-aa">32A</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section6-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section6-field5"
                    className="user-value"
                    {...register("fieldE61")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section6-form-6" id="section6-form-6">
          <div className="form-main-group">
            <div className="form-group">
              <div className="section-title">MCB2 Pole</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-mcb2"
                        id="section6-field1-mcb2"
                        className="user-value"
                        {...register("fieldE62-mcb2")}
                        value="seimens"
                      />
                      <label htmlFor="section6-field1-mcb2">Siemens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-mcb2"
                        id="section6-field1-a-mcb2"
                        className="user-value"
                        {...register("fieldE62-mcb2")}
                        value="abb"
                      />
                      <label htmlFor="section6-field1-a-mcb2">ABB</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-mcb2"
                        id="section6-field1-b-mcb2"
                        className="user-value"
                        {...register("fieldE62-mcb2")}
                        value="legrand"
                      />
                      <label htmlFor="section6-field1-b-mcb2">Legrand</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-mcb2"
                        id="section6-field1-c-mcb2"
                        className="user-value"
                        {...register("fieldE62-mcb2")}
                        value="scneider"
                      />
                      <label htmlFor="section6-field1-c-mcb2">Schneider</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-mcb2"
                        id="section6-fieldNA3-mcb2"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE62-mcb2")}
                      />
                      <label htmlFor="section6-fieldNA3-mcb2">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Current Rating
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-sd"
                        id="section6-field2-sd"
                        className="user-value"
                        {...register("fieldE63-sd")}
                        value="2a"
                      />
                      <label htmlFor="section6-field2-sd">2A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-sd"
                        id="section6-field3-d"
                        className="user-value"
                        {...register("fieldE63-sd")}
                        value="4a"
                      />
                      <label htmlFor="section6-field3-d">4A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-sd"
                        id="section6-field4-sa"
                        className="user-value"
                        {...register("fieldE63-sd")}
                        value="6a"
                      />
                      <label htmlFor="section6-field4-sa">6A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-sd"
                        id="section6-field4-dd"
                        className="user-value"
                        {...register("fieldE63-sd")}
                        value="10a"
                      />
                      <label htmlFor="section6-field4-dd">10A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-sd"
                        id="section6-field4-dds"
                        className="user-value"
                        {...register("fieldE63-sd")}
                        value="16a"
                      />
                      <label htmlFor="section6-field4-dds">16A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-sd"
                        id="section6-field4-ssd"
                        className="user-value"
                        {...register("fieldE63-sd")}
                        value="32a"
                      />
                      <label htmlFor="section6-field4-ssd">32A</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section6-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section6-field5"
                    className="user-value"
                    {...register("fieldE64")}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="section-title">MCB3 Pole</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-mcb3"
                        id="section6-field1-mcb3"
                        className="user-value"
                        {...register("fieldE66-mcb3")}
                        value="seimens"
                      />
                      <label htmlFor="section6-field1-mcb3">Siemens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-mcb3"
                        id="section6-field1-a-mcb3"
                        className="user-value"
                        {...register("fieldE66-mcb3")}
                        value="abb"
                      />
                      <label htmlFor="section6-field1-a-mcb3">ABB</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-mcb3"
                        id="section6-field1-b-mcb3"
                        className="user-value"
                        {...register("fieldE66-mcb3")}
                        value="legrand"
                      />
                      <label htmlFor="section6-field1-b-mcb3">Legrand</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-mcb3"
                        id="section6-field1-c-mcb3"
                        className="user-value"
                        {...register("fieldE66-mcb3")}
                        value="schenider"
                      />
                      <label htmlFor="section6-field1-c-mcb3">Schneider</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-mcb3"
                        id="section6-fieldNA3-mcb3"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE66-mcb3")}
                      />
                      <label htmlFor="section6-fieldNA3-mcb3">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-mcb3")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Current Rating
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-er"
                        id="section6-field2-er"
                        className="user-value"
                        {...register("fieldE67-er")}
                        value="2a"
                      />
                      <label htmlFor="section6-field2-er">2A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-er"
                        id="section6-field3-e"
                        className="user-value"
                        {...register("fieldE67-er")}
                        value="4a"
                      />
                      <label htmlFor="section6-field3-e">4A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-er"
                        id="section6-field4-ee"
                        className="user-value"
                        {...register("fieldE67-er")}
                        value="6a"
                      />
                      <label htmlFor="section6-field4-ee">6A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-er"
                        id="section6-field4-era"
                        className="user-value"
                        {...register("fieldE67-er")}
                        value="10a"
                      />
                      <label htmlFor="section6-field4-era">10A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-er"
                        id="section6-field4-rr"
                        className="user-value"
                        {...register("fieldE67-er")}
                        value="16a"
                      />
                      <label htmlFor="section6-field4-rr">16A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-er"
                        id="section6-field4-eer"
                        className="user-value"
                        {...register("fieldE67-er")}
                        value="32a"
                      />
                      <label htmlFor="section6-field4-eer">32A</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section6-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section6-field5"
                    className="user-value"
                    {...register("fieldE68")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="form-main-group">
            <div className="form-group">
              <div className="section-title">MCB4 Pole</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-mcb4"
                        id="section6-field1-a-mcb4"
                        className="user-value"
                        {...register("fieldE70-mcb4")}
                        value="seimens"
                      />
                      <label htmlFor="section6-field1-a-mcb4">Siemens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-mcb4"
                        id="section6-field1-b-mcb4"
                        className="user-value"
                        {...register("fieldE70-mcb4")}
                        value="abb"
                      />
                      <label htmlFor="section6-field1-b-mcb4">ABB</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-mcb4"
                        id="section6-field1-c-mcb4"
                        className="user-value"
                        {...register("fieldE70-mcb4")}
                        value="legrand"
                      />
                      <label htmlFor="section6-field1-c-mcb4">Legrand</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-mcb4"
                        id="section6-field1-d-mcb4"
                        className="user-value"
                        {...register("fieldE70-mcb4")}
                        value="scneider"
                      />
                      <label htmlFor="section6-field1-d-mcb4">Schneider</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-mcb4"
                        id="section6-fieldNA3-mcb4"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE70-mcb4")}
                      />
                      <label htmlFor="section6-fieldNA3-mcb4">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-mcb4")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Current Rating
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-rt"
                        id="section6-field2-rt"
                        className="user-value"
                        {...register("fieldE71-rt")}
                        value="2a"
                      />
                      <label htmlFor="section6-field2-rt">2A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-rt"
                        id="section6-field3-rrt"
                        className="user-value"
                        {...register("fieldE71-rt")}
                        value="4a"
                      />
                      <label htmlFor="section6-field3-rrt">4A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-rt"
                        id="section6-field4-tt"
                        className="user-value"
                        {...register("fieldE71-rt")}
                        value="6a"
                      />
                      <label htmlFor="section6-field4-tt">6A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-rt"
                        id="section6-field4-ttr"
                        className="user-value"
                        {...register("fieldE71-rt")}
                        value="10a"
                      />
                      <label htmlFor="section6-field4-ttr">10A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-rt"
                        id="section6-field4-trt"
                        className="user-value"
                        {...register("fieldE71-rt")}
                        value="16a"
                      />
                      <label htmlFor="section6-field4-trt">16A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-rt"
                        id="section6-field4-trtr"
                        className="user-value"
                        {...register("fieldE71-rt")}
                        value="32a"
                      />
                      <label htmlFor="section6-field4-trtr">32A</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section6-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section6-field5"
                    className="user-value"
                    {...register("fieldE72")}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="section-title">1 Pole add on block for MCB</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-p1"
                        id="section6-field1-p1"
                        className="user-value"
                        {...register("fieldE75-p1")}
                        value="seimens"
                      />
                      <label htmlFor="section6-field1-p1">Siemens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-p1"
                        id="section6-field1-a-p1"
                        className="user-value"
                        {...register("fieldE75-p1")}
                        value="abb"
                      />
                      <label htmlFor="section6-field1-a-p1">ABB</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-p1"
                        id="section6-field1-b-p1"
                        className="user-value"
                        {...register("fieldE75-p1")}
                        value="legrand"
                      />
                      <label htmlFor="section6-field1-b-p1">Legrand</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-p1"
                        id="section6-field1-c-p1"
                        className="user-value"
                        {...register("fieldE75-p1")}
                        value="scneider"
                      />
                      <label htmlFor="section6-field1-c-p1">Schneider</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-p1"
                        id="section6-fieldNA3-p1"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE75-p1")}
                      />
                      <label htmlFor="section6-fieldNA3-p1">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-p1")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Current Rating
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-ty"
                        id="section6-field2-t"
                        className="user-value"
                        {...register("fieldE76-ty")}
                        value="2a"
                      />
                      <label htmlFor="section6-field2-t">2A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-ty"
                        id="section6-field3-y"
                        className="user-value"
                        {...register("fieldE76-ty")}
                        value="4a"
                      />
                      <label htmlFor="section6-field3-y">4A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-ty"
                        id="section6-field4-tta"
                        className="user-value"
                        {...register("fieldE76-ty")}
                        value="6a"
                      />
                      <label htmlFor="section6-field4-tta">6A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-ty"
                        id="section6-field4-yy"
                        className="user-value"
                        {...register("fieldE76-ty")}
                        value="10a"
                      />
                      <label htmlFor="section6-field4-yy">10A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-ty"
                        id="section6-field4-tty"
                        className="user-value"
                        {...register("fieldE76-ty")}
                        value="16a"
                      />
                      <label htmlFor="section6-field4-tty">16A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-ty"
                        id="section6-field4-yyt"
                        className="user-value"
                        {...register("fieldE76-ty")}
                        value="32a"
                      />
                      <label htmlFor="section6-field4-yyt">32A</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section6-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section6-field5"
                    className="user-value"
                    {...register("fieldE77")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section6-form-7" id="section6-form-7">
          <div className="form-main-group">
            {" "}
            <div className="form-group">
              <div className="section-title">TCSIS</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-tc"
                        id="section6-field1-tc"
                        className="user-value"
                        {...register("fieldE78-tc")}
                        value="61197"
                      />
                      <label htmlFor="section6-field1-tc">Salzer 61197</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-tc"
                        id="section6-field1-a-tc"
                        className="user-value"
                        {...register("fieldE78-tc")}
                        value="sx145"
                      />
                      <label htmlFor="section6-field1-a-tc">Kaycee SX145</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-tc"
                        id="section6-field1-b-tc"
                        className="user-value"
                        {...register("fieldE78-tc")}
                        value="legrand"
                      />
                      <label htmlFor="section6-field1-b-tc">Legrand</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-tc"
                        id="section6-fieldNA3-tc"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE78-tc")}
                      />
                      <label htmlFor="section6-fieldNA3-tc">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-tc")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section6-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section6-field5"
                    className="user-value"
                    {...register("fieldE79-aab")}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="section-title">Single Phase Preventer</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-sp"
                        id="section6-field1-sp"
                        className="user-value"
                        {...register("fieldE80-sp")}
                        value="minilec"
                      />
                      <label htmlFor="section6-field1-sp">Minilec</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-sp"
                        id="section6-field1-a-sp"
                        className="user-value"
                        {...register("fieldE80-sp")}
                        value="gic"
                      />
                      <label htmlFor="section6-field1-a-sp">
                        GIC (SM301 Series)
                      </label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-sp"
                        id="section6-fieldNA3-sp"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE80-sp")}
                      />
                      <label htmlFor="section6-fieldNA3-sp">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-sp")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Voltage
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-gg"
                        id="section6-field2-a-g"
                        className="user-value"
                        {...register("fieldE81-gg")}
                        value="230"
                      />
                      <label htmlFor="section6-field2-a-g">230 VAC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-gg"
                        id="section6-field3-b-g"
                        className="user-value"
                        {...register("fieldE81-gg")}
                        value="415"
                      />
                      <label htmlFor="section6-field3-b-g">
                        Auxiliary Supply - 415V
                      </label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-gg"
                        id="section6-field4-c-g"
                        className="user-value"
                        {...register("fieldE81-gg")}
                        value="6a"
                      />
                      <label htmlFor="section6-field4-c-g">6A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-gg"
                        id="section6-field4-d-g"
                        className="user-value"
                        {...register("fieldE81-gg")}
                        value="10a"
                      />
                      <label htmlFor="section6-field4-d-g">10A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-gg"
                        id="section6-field4-r-g"
                        className="user-value"
                        {...register("fieldE81-gg")}
                        value="16a"
                      />
                      <label htmlFor="section6-field4-r-g">16A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field-raise-gg"
                        id="section6-field4-rt-g"
                        className="user-value"
                        {...register("fieldE81-gg")}
                        value="32a"
                      />
                      <label htmlFor="section6-field4-rt-g">32A</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="field1" className="field-label">
                    UV
                  </label>
                  <input
                    type="text"
                    name=""
                    id="field1"
                    className="user-value"
                    {...register("fieldE82")}
                  />
                </div>
                <div className="user-input">
                  <label htmlFor="field1" className="field-label">
                    OV
                  </label>
                  <input
                    type="text"
                    name=""
                    id="field1"
                    className="user-value"
                    {...register("fieldEX83")}
                  />
                </div>
                <div className="user-input">
                  <label htmlFor="field1" className="field-label">
                    Timer
                  </label>
                  <input
                    type="text"
                    name=""
                    id="field1"
                    className="user-value"
                    {...register("fieldE83")}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section6-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section6-field5"
                    className="user-value"
                    {...register("fieldE84")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="form-main-group">
            <div className="form-group">
              <div className="section-title">Illumination Lamp</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-il"
                        id="section6-field1-a-il"
                        className="user-value"
                        {...register("fieldE90-il")}
                        value="philips"
                      />
                      <label htmlFor="section6-field1-a-il">Philips</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-il"
                        id="section6-field1-b-il"
                        className="user-value"
                        {...register("fieldE90-il")}
                        value="Bajaj"
                      />
                      <label htmlFor="section6-field1-b-il">Bajaj</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-il"
                        id="section6-field1-c-il"
                        className="user-value"
                        {...register("fieldE90-il")}
                        value="syska"
                      />
                      <label htmlFor="section6-field1-c-il">Syska</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-il"
                        id="section6-fieldNA3-il"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE90-il")}
                      />
                      <label htmlFor="section6-fieldNA3-il">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-il")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Type
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-xc"
                        id="section6-field1-xc"
                        className="user-value"
                        {...register("fieldE91-xc")}
                        value="led"
                      />
                      <label htmlFor="section6-field1-xc">LED</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-xc"
                        id="section6-field1-cx"
                        className="user-value"
                        {...register("fieldE91-xc")}
                        value="cfl"
                      />
                      <label htmlFor="section6-field1-cx">CFL</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Wattage
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-vb"
                        id="section6-field1-v"
                        className="user-value"
                        {...register("fieldE92-vb")}
                        value="4w"
                      />
                      <label htmlFor="section6-field1-v">4W</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-vb"
                        id="section6-field1-b"
                        className="user-value"
                        {...register("fieldE92-vb")}
                        value="5w"
                      />
                      <label htmlFor="section6-field1-b">5W</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-vb"
                        id="section6-field1-bb"
                        className="user-value"
                        {...register("fieldE92-vb")}
                        value="9w"
                      />
                      <label htmlFor="section6-field1-bb">9W</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-vb"
                        id="section6-field1-vvv"
                        className="user-value"
                        {...register("fieldE92-vb")}
                        value="12w"
                      />
                      <label htmlFor="section6-field1-vvv">12W</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section6-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section6-field5"
                    className="user-value"
                    {...register("fieldE92")}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="section-title">Trip/Signal Lamp</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Voltage
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-hh"
                        id="section6-field1-ha"
                        className="user-value"
                        {...register("fieldE95-hh")}
                        value="110"
                      />
                      <label htmlFor="section6-field1-ha">110 VAC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-hh"
                        id="section6-field1-hsa"
                        className="user-value"
                        {...register("fieldE95-hh")}
                        value="230"
                      />
                      <label htmlFor="section6-field1-hsa">230VAC</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section6-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section6-field5"
                    className="user-value"
                    {...register("fieldE96")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="form-main-group">
            {" "}
            <div className="form-group">
              <div className="section-title">Plug & Socket</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-ps"
                        id="section6-field1-a-ps"
                        className="user-value"
                        {...register("fieldE98-ps")}
                        value="anchor"
                      />
                      <label htmlFor="section6-field1-a-ps">Anchor</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-ps"
                        id="section6-field1-b-ps"
                        className="user-value"
                        {...register("fieldE98-ps")}
                        value="legrand"
                      />
                      <label htmlFor="section6-field1-b-ps">Legrand</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-ps"
                        id="section6-fieldNA3-ps"
                        className="user-value"
                        value="Nill"
                        {...register("fieldE98-ps")}
                      />
                      <label htmlFor="section6-fieldNA3-ps">Nill</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="text"
                        name=""
                        id="field1"
                        className="user-value extra-text"
                        {...register("fieldE82T1-ps")}
                        placeholder="Other"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Current Rating
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-eer"
                        id="section6-field1-eree"
                        className="user-value"
                        {...register("fieldE99-eer")}
                        value="5a"
                      />
                      <label htmlFor="section6-field1-eree">5A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section6-field1-eer"
                        id="section6-field1-ere"
                        className="user-value"
                        {...register("fieldE99-eer")}
                        value="15a"
                      />
                      <label htmlFor="section6-field1-ere">15A</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section6-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section6-field5"
                    className="user-value"
                    {...register("fieldE99")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="action-button">
          Save & Next
        </button>
      </form>
    </div>
  );
}
