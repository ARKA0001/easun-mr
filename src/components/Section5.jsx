"use client";

import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { activeSection, savedSection, testIdStore } from "@/store/Section";
import { useForm, useWatch } from "react-hook-form";
import html2canvas from "html2canvas";
import { Section5DataStore } from "@/store/FormData";

export default function Section5() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  const [savedSectionCount, setSavedSectionCount] =
    useRecoilState(savedSection);

  const handleSectionMove = () => {
    setCurrentActiveSection(7);
    setSavedSectionCount(6);
  };

  const [section5FormData, setSection5FormData] =
    useRecoilState(Section5DataStore);

  const [testId, setTestId] = useRecoilState(testIdStore);

  const { register, handleSubmit, setValue, control } = useForm();
  const watchedFields = useWatch({ control });

  const onSubmit = async (data) => {
    console.log("This is section 5 data");
    console.log(section5FormData);
    const section = document.getElementById("section5-form-1");
    const canvas = await html2canvas(section);
    const imgData = canvas.toDataURL("image/png");
    const blob = await (await fetch(imgData)).blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${testId ? testId : "default"}-section5-form-1.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
    console.log("Image saved successfully");

    takePartImage("section5-form-2", true);
    takePartImage("section5-form-3", false);
    handleSectionMove();
  };

  const takePartImage = async (fileName, hasNextSection) => {
    console.log("This is section 5 data");
    console.log(section5FormData);
    const section = document.getElementById(fileName);
    const canvas = await html2canvas(section);
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
    if (section5FormData && Object.keys(section5FormData).length > 0) {
      Object.keys(section5FormData).forEach((field) => {
        setValue(field, section5FormData[field]);
      });
    }
  }, [setSection5FormData, setValue]);

  useEffect(() => {
    setSection5FormData(watchedFields);
  }, [watchedFields, setSection5FormData]);

  return (
    <div className="form-section" id="section5-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="section5-form-1" id="section5-form-1">
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
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        value="Seimens"
                        {...register("fieldE1")}
                      />
                      <label htmlFor="section5-field1">Seimens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        value="Schenider"
                        {...register("fieldE1")}
                      />
                      <label htmlFor="section5-field1">Schneider</label>
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
                        name="section5-field-raise"
                        id="section5-field2"
                        className="user-value"
                        value="415"
                        {...register("fieldE2")}
                      />
                      <label htmlFor="section5-field2">415 VAC/DC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field3"
                        className="user-value"
                        value="220"
                        {...register("fieldE2")}
                      />
                      <label htmlFor="section5-field3">220 VAC/DC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        value="110"
                        {...register("fieldE2")}
                      />
                      <label htmlFor="section5-field4">110 VAC/DC</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section5-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section5-field5"
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
                        name="section5-field-make-lower"
                        id="section5-lower-field1"
                        className="user-value"
                        value="Seimens"
                        {...register("fieldE4")}
                      />
                      <label htmlFor="section5-lower-field1">Seimens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        value="Schneider"
                        {...register("fieldE4")}
                      />
                      <label htmlFor="section5-field1">Schneider</label>
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
                        name="section5-field-lower"
                        id="section5-lower-field2"
                        className="user-value"
                        {...register("fieldE5")}
                        value="415"
                      />
                      <label htmlFor="section5-lower-field2">415 VAC/DC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field3"
                        className="user-value"
                        value="220"
                        {...register("fieldE5")}
                      />
                      <label htmlFor="section5-lower-field3">220 VAC/DC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        {...register("fieldE5")}
                      />
                      <label htmlFor="section5-lower-field4">110 VAC/DC</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section5-field-lower-observation"
                    className="field-label"
                  >
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section5-field-lower-observation"
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
                        name="section5-field-make-lower"
                        id="section5-lower-field1"
                        className="user-value"
                        {...register("fieldE7")}
                        value="Seimens"
                      />
                      <label htmlFor="section5-lower-field1">Seimens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE7")}
                        value="Scneider"
                      />
                      <label htmlFor="section5-field1">Schneider</label>
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
                        name="section5-field-lower"
                        id="section5-lower-field2"
                        className="user-value"
                        {...register("fieldE8")}
                        value="415"
                      />
                      <label htmlFor="section5-lower-field2">415 VAC/DC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field3"
                        className="user-value"
                        value="220"
                        {...register("fieldE8")}
                      />
                      <label htmlFor="section5-lower-field3">220 VAC/DC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        value="110"
                        {...register("fieldE8")}
                      />
                      <label htmlFor="section5-lower-field4">110 VAC/DC</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section5-field-lower-observation"
                    className="field-label"
                  >
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section5-field-lower-observation"
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
                        name="section5-field-make-lower"
                        id="section5-lower-field1"
                        className="user-value"
                        value="Seimens"
                        {...register("fieldE10")}
                      />
                      <label htmlFor="section5-lower-field1">Seimens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        value="Schneider"
                        {...register("fieldE10")}
                      />
                      <label htmlFor="section5-field1">Schneider</label>
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
                        name="section5-field-lower"
                        id="section5-lower-field2"
                        className="user-value"
                        value="415"
                        {...register("fieldE11")}
                      />
                      <label htmlFor="section5-lower-field2">415 VAC/DC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        value="110"
                        {...register("fieldE11")}
                      />
                      <label htmlFor="section5-lower-field4">110 VAC/DC</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section5-field-lower-observation"
                    className="field-label"
                  >
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section5-field-lower-observation"
                    className="user-value"
                    {...register("fieldE12")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
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
                        name="section5-field-make-lower"
                        id="section5-lower-field1"
                        className="user-value"
                        value="1"
                        {...register("fieldE13")}
                      />
                      <label htmlFor="section5-lower-field1">AC-1</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        value="2"
                        {...register("fieldE13")}
                      />
                      <label htmlFor="section5-field1">AC-II</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        value="k6"
                        {...register("fieldE13")}
                      />
                      <label htmlFor="section5-field1">K6</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        value="k7"
                        {...register("fieldE13")}
                      />
                      <label htmlFor="section5-field1">K7</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE13")}
                        value="sch1"
                      />
                      <label htmlFor="section5-field1">SHC1</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        value="shc2"
                        {...register("fieldE13")}
                      />
                      <label htmlFor="section5-field1">SHC2</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE14")}
                        value="ac5"
                      />
                      <label htmlFor="section5-field1">AC-5</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section5-field-lower-observation"
                    className="field-label"
                  >
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section5-field-lower-observation"
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
                        name="section5-field-make-lower"
                        id="section5-lower-field1"
                        className="user-value"
                        value="Seimens"
                        {...register("fieldE16")}
                      />
                      <label htmlFor="section5-lower-field1">Seimens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        value="scnieder"
                        {...register("fieldE16")}
                      />
                      <label htmlFor="section5-field1">Schneider</label>
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
                        name="section5-field-lower"
                        id="section5-lower-field2"
                        className="user-value"
                        {...register("fieldE17")}
                        value="1.6"
                      />
                      <label htmlFor="section5-lower-field2">1.6-2.4 A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        value="2.4"
                        {...register("fieldE17")}
                      />
                      <label htmlFor="section5-lower-field4">2.4-4A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        {...register("fieldE17")}
                        value="4"
                      />
                      <label htmlFor="section5-lower-field4">4-6A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        {...register("fieldE17")}
                        value="10"
                      />
                      <label htmlFor="section5-lower-field4">6-10A</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section5-field-lower-observation"
                    className="field-label"
                  >
                    Set Value
                  </label>
                  <textarea
                    id="section5-field-lower-observation"
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
                        name="section5-field-make-lower"
                        id="section5-lower-field1"
                        className="user-value"
                        value="seimens"
                        {...register("fieldE19")}
                      />
                      <label htmlFor="section5-lower-field1">Seimens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        value="scneider"
                        {...register("fieldE19")}
                      />
                      <label htmlFor="section5-field1">Schneider</label>
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
                        name="section5-field-lower"
                        id="section5-lower-field2"
                        className="user-value"
                        {...register("fieldE20")}
                        value="110"
                      />
                      <label htmlFor="section5-lower-field2">110 VAC/DC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        value="220"
                        {...register("fieldE20")}
                      />
                      <label htmlFor="section5-lower-field4">220 VAC/DC</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section5-field-lower-observation"
                    className="field-label"
                  >
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section5-field-lower-observation"
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
                        name="section5-field-make-lower"
                        id="section5-lower-field1"
                        className="user-value"
                        value="seimens"
                        {...register("fieldE21")}
                      />
                      <label htmlFor="section5-lower-field1">Seimens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        value="scneider"
                        {...register("fieldE21")}
                      />
                      <label htmlFor="section5-field1">Schneider</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE21")}
                        value="eapl"
                      />
                      <label htmlFor="section5-field1">EAPL</label>
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
                        name="section5-field-lower"
                        id="section5-lower-field2"
                        className="user-value"
                        value="1"
                        {...register("fieldE22")}
                      />
                      <label htmlFor="section5-lower-field2">1</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        value="2"
                        {...register("fieldE22")}
                      />
                      <label htmlFor="section5-lower-field4">2</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section5-field-lower-observation"
                    className="field-label"
                  >
                    Set Value
                  </label>
                  <textarea
                    id="section5-field-lower-observation"
                    className="user-value"
                    {...register("fieldE23")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="form-main-group">
            <div className="form-group">
              <div className="section-title">Heather Switch</div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="" className="field-label radio-label">
                    Make
                  </label>
                  <div className="radio-input">
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-lower-field1"
                        className="user-value"
                        value="sx112"
                        {...register("fieldE25")}
                      />
                      <label htmlFor="section5-lower-field1">
                        Kaycee SX 112
                      </label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE25")}
                        value="114"
                      />
                      <label htmlFor="section5-field1">SX 114 A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE25")}
                        value="114c"
                      />
                      <label htmlFor="section5-field1">SX 114 C</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE25")}
                        value="61197"
                      />
                      <label htmlFor="section5-field1">SALZER - 61197</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section5-field-lower-observation"
                    className="field-label"
                    {...register("fieldE26")}
                  >
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section5-field-lower-observation"
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
                        name="section5-field-make-lower"
                        id="section5-lower-field1"
                        className="user-value"
                        {...register("fieldE28")}
                        value="remi"
                      />
                      <label htmlFor="section5-lower-field1">Remi</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE28")}
                        value="bbl"
                      />
                      <label htmlFor="section5-field1">BBL</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE28")}
                        value="rotomac"
                      />
                      <label htmlFor="section5-field1">Rotomac</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE28")}
                        value="dharani"
                      />
                      <label htmlFor="section5-field1">Dharani</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE28")}
                        value="kec"
                      />
                      <label htmlFor="section5-field1">KEC</label>
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
                        name="section5-field-lower"
                        id="section5-lower-field2"
                        className="user-value"
                        {...register("fieldE29")}
                        value="230"
                      />
                      <label htmlFor="section5-lower-field2">230V</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        {...register("fieldE29")}
                        value="380"
                      />
                      <label htmlFor="section5-lower-field4">380V</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        {...register("fieldE29")}
                        value="400"
                      />
                      <label htmlFor="section5-lower-field4">400V</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        {...register("fieldE29")}
                        value="415"
                      />
                      <label htmlFor="section5-lower-field4">415V</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        {...register("fieldE29")}
                        value="430"
                      />
                      <label htmlFor="section5-lower-field4">430V</label>
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
                        name="section5-field-lower"
                        id="section5-lower-field2"
                        className="user-value"
                        {...register("fieldE30")}
                        value="55"
                      />
                      <label htmlFor="section5-lower-field2">55-0-55v</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        {...register("fieldE30")}
                        value="110"
                      />
                      <label htmlFor="section5-lower-field4">110-0-110v</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section5-field-lower-observation"
                    className="field-label"
                  >
                    Serial No
                  </label>
                  <textarea
                    id="section5-field-lower-observation"
                    className="user-value"
                    {...register("fieldE31")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section5-form-2" id="section5-form-2">
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
                        name="section5-field-make-lower"
                        id="section5-lower-field1"
                        className="user-value"
                        {...register("fieldE32")}
                        value="ampitron"
                      />
                      <label htmlFor="section5-lower-field1">Ampitron</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE32")}
                        value="ashoka"
                      />
                      <label htmlFor="section5-field1">Ashoka</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE32")}
                        value="saraswathi"
                      />
                      <label htmlFor="section5-field1">Saraswathi</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE32")}
                        value="quantum"
                      />
                      <label htmlFor="section5-field1">Quantum</label>
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
                        name="section5-field-lower"
                        id="section5-lower-field2"
                        className="user-value"
                        {...register("fieldE33")}
                        value="230"
                      />
                      <label htmlFor="section5-lower-field2">230V</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        {...register("fieldE33")}
                        value="380"
                      />
                      <label htmlFor="section5-lower-field4">380V</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        {...register("fieldE33")}
                        value="400"
                      />
                      <label htmlFor="section5-lower-field4">400V</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        {...register("fieldE33")}
                        value="415"
                      />
                      <label htmlFor="section5-lower-field4">415V</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        {...register("fieldE33")}
                        value="430"
                      />
                      <label htmlFor="section5-lower-field4">430V</label>
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
                        name="section5-field-lower"
                        id="section5-lower-field2"
                        className="user-value"
                        {...register("fieldE34")}
                        value="55"
                      />
                      <label htmlFor="section5-lower-field2">55-0-55v</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        {...register("fieldE34")}
                        value="110"
                      />
                      <label htmlFor="section5-lower-field4">110-0-110v</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section5-field-lower-observation"
                    className="field-label"
                  >
                    Serial No
                  </label>
                  <textarea
                    id="section5-field-lower-observation"
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
                        name="section5-field-make-lower"
                        id="section5-lower-field1"
                        className="user-value"
                        {...register("fieldE35")}
                        value="pyros"
                      />
                      <label htmlFor="section5-lower-field1">Pyros</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE35")}
                        value="pyros"
                      />
                      <label htmlFor="section5-field1">Ashoka</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE35")}
                        value="rkh"
                      />
                      <label htmlFor="section5-field1">RKH</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE35")}
                        value="ego"
                      />
                      <label htmlFor="section5-field1">Sai EGO</label>
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
                        name="section5-field-lower"
                        id="section5-lower-field2"
                        className="user-value"
                        {...register("fieldE36")}
                        value="230"
                      />
                      <label htmlFor="section5-lower-field2">230 VAC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        {...register("fieldE36")}
                        value="110"
                      />
                      <label htmlFor="section5-lower-field4">110 VAC</label>
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
                        name="section5-field-lower"
                        id="section5-lower-field2"
                        className="user-value"
                        {...register("fieldE37")}
                        value="40"
                      />
                      <label htmlFor="section5-lower-field2">40W</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        {...register("fieldE37")}
                        value="80"
                      />
                      <label htmlFor="section5-lower-field4">80W</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-lower"
                        id="section5-lower-field4"
                        className="user-value"
                        {...register("fieldE37")}
                        value="100"
                      />
                      <label htmlFor="section5-lower-field4">100W</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section5-field-lower-observation"
                    className="field-label"
                  >
                    Serial No
                  </label>
                  <textarea
                    id="section5-field-lower-observation"
                    className="user-value"
                    {...register("fieldE38")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
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
                        name="section5-field-make-lower"
                        id="section5-lower-field1"
                        className="user-value"
                        {...register("fieldE40")}
                        value="ego"
                      />
                      <label htmlFor="section5-lower-field1">
                        Sai EGO 230 VAC
                      </label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE40")}
                        value="sunvic"
                      />
                      <label htmlFor="section5-field1">Sunvic 230VAC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-make-lower"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE40")}
                        value="grish"
                      />
                      <label htmlFor="section5-field1">Grish EGO 230VAC</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label
                    htmlFor="section5-field-lower-observation"
                    className="field-label"
                    {...register("fieldE41")}
                  >
                    Actual Observation with Label identification
                  </label>
                  <textarea
                    id="section5-field-lower-observation"
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
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE42")}
                        value="copper"
                      />
                      <label htmlFor="section5-field1">Copper Busman</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE42")}
                        value="seimens"
                      />
                      <label htmlFor="section5-field1">Seimens</label>
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
                  <label htmlFor="section5-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section5-field5"
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
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE45")}
                        value="elmex"
                      />
                      <label htmlFor="section5-field1">Elmex</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE45")}
                        value="connect"
                      />
                      <label htmlFor="section5-field1">Connect Well</label>
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
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE48")}
                        value="elmex"
                      />
                      <label htmlFor="section5-field1">Elmex</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE48")}
                        value="connect"
                      />
                      <label htmlFor="section5-field1">Connect Well</label>
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
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE51")}
                        value="elmex"
                      />
                      <label htmlFor="section5-field1">Elmex</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE51")}
                        value="connect"
                      />
                      <label htmlFor="section5-field1">Connect Well</label>
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
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE54")}
                        value="seimens"
                      />
                      <label htmlFor="section5-field1">Seimens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE54")}
                        value="technix"
                      />
                      <label htmlFor="section5-field1">Technic</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE54")}
                        value="others"
                      />
                      <label htmlFor="section5-field1">Others</label>
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
                        name="section5-field-raise"
                        id="section5-field2"
                        className="user-value"
                        {...register("fieldE55")}
                        value="yellow"
                      />
                      <label htmlFor="section5-field2">Yellow</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field3"
                        className="user-value"
                        {...register("fieldE55")}
                        value="white"
                      />
                      <label htmlFor="section5-field3">White</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE55")}
                        value="spring"
                      />
                      <label htmlFor="section5-field4">Spring Return</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section5-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section5-field5"
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
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE57")}
                        value="stay"
                      />
                      <label htmlFor="section5-field1">Stay Put</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE57")}
                        value="red"
                      />
                      <label htmlFor="section5-field1">Red</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE57")}
                        value="transparent"
                      />
                      <label htmlFor="section5-field1">Transparent Red</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section5-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section5-field5"
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
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE59")}
                        value="seimens"
                      />
                      <label htmlFor="section5-field1">Seimens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE59")}
                        value="abb"
                      />
                      <label htmlFor="section5-field1">ABB</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE59")}
                        value="legrand"
                      />
                      <label htmlFor="section5-field1">Legrand</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE59")}
                        value="scheider"
                      />
                      <label htmlFor="section5-field1">Schneider</label>
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
                        name="section5-field-raise"
                        id="section5-field2"
                        className="user-value"
                        {...register("fieldE60")}
                        value="2a"
                      />
                      <label htmlFor="section5-field2">2A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field3"
                        className="user-value"
                        {...register("fieldE60")}
                        value="4a"
                      />
                      <label htmlFor="section5-field3">4A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE60")}
                        value="6a"
                      />
                      <label htmlFor="section5-field4">6A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE60")}
                        value="10a"
                      />
                      <label htmlFor="section5-field4">10A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE60")}
                        value="16a"
                      />
                      <label htmlFor="section5-field4">16A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE60")}
                        value="32a"
                      />
                      <label htmlFor="section5-field4">32A</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section5-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section5-field5"
                    className="user-value"
                    {...register("fieldE61")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section5-form-3" id="section5-form-3">
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
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE62")}
                        value="seimens"
                      />
                      <label htmlFor="section5-field1">Seimens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE62")}
                        value="abb"
                      />
                      <label htmlFor="section5-field1">ABB</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE62")}
                        value="legrand"
                      />
                      <label htmlFor="section5-field1">Legrand</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE62")}
                        value="scneider"
                      />
                      <label htmlFor="section5-field1">Schneider</label>
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
                        name="section5-field-raise"
                        id="section5-field2"
                        className="user-value"
                        {...register("fieldE63")}
                        value="2a"
                      />
                      <label htmlFor="section5-field2">2A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field3"
                        className="user-value"
                        {...register("fieldE63")}
                        value="4a"
                      />
                      <label htmlFor="section5-field3">4A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE63")}
                        value="6a"
                      />
                      <label htmlFor="section5-field4">6A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE63")}
                        value="10a"
                      />
                      <label htmlFor="section5-field4">10A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE63")}
                        value="16a"
                      />
                      <label htmlFor="section5-field4">16A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE63")}
                        value="32a"
                      />
                      <label htmlFor="section5-field4">32A</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section5-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section5-field5"
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
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE66")}
                        value="seimens"
                      />
                      <label htmlFor="section5-field1">Seimens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE66")}
                        value="abb"
                      />
                      <label htmlFor="section5-field1">ABB</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE66")}
                        value="legrand"
                      />
                      <label htmlFor="section5-field1">Legrand</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE66")}
                        value="schenider"
                      />
                      <label htmlFor="section5-field1">Schneider</label>
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
                        name="section5-field-raise"
                        id="section5-field2"
                        className="user-value"
                        {...register("fieldE67")}
                        value="2a"
                      />
                      <label htmlFor="section5-field2">2A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field3"
                        className="user-value"
                        {...register("fieldE67")}
                        value="4a"
                      />
                      <label htmlFor="section5-field3">4A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE67")}
                        value="6a"
                      />
                      <label htmlFor="section5-field4">6A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE67")}
                        value="10a"
                      />
                      <label htmlFor="section5-field4">10A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE67")}
                        value="16a"
                      />
                      <label htmlFor="section5-field4">16A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE67")}
                        value="32a"
                      />
                      <label htmlFor="section5-field4">32A</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section5-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section5-field5"
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
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE70")}
                        value="seimens"
                      />
                      <label htmlFor="section5-field1">Seimens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE70")}
                        value="abb"
                      />
                      <label htmlFor="section5-field1">ABB</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE70")}
                        value="legrand"
                      />
                      <label htmlFor="section5-field1">Legrand</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE70")}
                        value="scneider"
                      />
                      <label htmlFor="section5-field1">Schneider</label>
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
                        name="section5-field-raise"
                        id="section5-field2"
                        className="user-value"
                        {...register("fieldE71")}
                        value="2a"
                      />
                      <label htmlFor="section5-field2">2A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field3"
                        className="user-value"
                        {...register("fieldE71")}
                        value="4a"
                      />
                      <label htmlFor="section5-field3">4A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE71")}
                        value="6a"
                      />
                      <label htmlFor="section5-field4">6A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE71")}
                        value="10a"
                      />
                      <label htmlFor="section5-field4">10A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE71")}
                        value="16a"
                      />
                      <label htmlFor="section5-field4">16A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE71")}
                        value="32a"
                      />
                      <label htmlFor="section5-field4">32A</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section5-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section5-field5"
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
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE75")}
                        value="seimens"
                      />
                      <label htmlFor="section5-field1">Seimens</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE75")}
                        value="abb"
                      />
                      <label htmlFor="section5-field1">ABB</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE75")}
                        value="legrand"
                      />
                      <label htmlFor="section5-field1">Legrand</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE75")}
                        value="scneider"
                      />
                      <label htmlFor="section5-field1">Schneider</label>
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
                        name="section5-field-raise"
                        id="section5-field2"
                        className="user-value"
                        {...register("fieldE76")}
                        value="2a"
                      />
                      <label htmlFor="section5-field2">2A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field3"
                        className="user-value"
                        {...register("fieldE76")}
                        value="4a"
                      />
                      <label htmlFor="section5-field3">4A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE76")}
                        value="6a"
                      />
                      <label htmlFor="section5-field4">6A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE76")}
                        value="10a"
                      />
                      <label htmlFor="section5-field4">10A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE76")}
                        value="16a"
                      />
                      <label htmlFor="section5-field4">16A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE76")}
                        value="32a"
                      />
                      <label htmlFor="section5-field4">32A</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section5-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section5-field5"
                    className="user-value"
                    {...register("fieldE77")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
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
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE78")}
                        value="61197"
                      />
                      <label htmlFor="section5-field1">Salzer 61197</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE78")}
                        value="sx145"
                      />
                      <label htmlFor="section5-field1">Kaycee SX145</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE78")}
                        value="legrand"
                      />
                      <label htmlFor="section5-field1">Legrand</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section5-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section5-field5"
                    className="user-value"
                    {...register("fieldE79")}
                    value="61197"
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
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE80")}
                        value="minilec"
                      />
                      <label htmlFor="section5-field1">Minilec</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE80")}
                        value="gic"
                      />
                      <label htmlFor="section5-field1">
                        GIC (SM301 Series)
                      </label>
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
                        name="section5-field-raise"
                        id="section5-field2"
                        className="user-value"
                        {...register("fieldE81")}
                        value="230"
                      />
                      <label htmlFor="section5-field2">230 VAC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field3"
                        className="user-value"
                        {...register("fieldE81")}
                        value="415"
                      />
                      <label htmlFor="section5-field3">
                        Auxiliary Supply - 415V
                      </label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE81")}
                        value="6a"
                      />
                      <label htmlFor="section5-field4">6A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE81")}
                        value="10a"
                      />
                      <label htmlFor="section5-field4">10A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE81")}
                        value="16a"
                      />
                      <label htmlFor="section5-field4">16A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field-raise"
                        id="section5-field4"
                        className="user-value"
                        {...register("fieldE81")}
                        value="32a"
                      />
                      <label htmlFor="section5-field4">32A</label>
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
                    {...register("fieldE83")}
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
                  <label htmlFor="section5-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section5-field5"
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
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE90")}
                        value="philips"
                      />
                      <label htmlFor="section5-field1">Philips</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE90")}
                        value="Bajaj"
                      />
                      <label htmlFor="section5-field1">Bajaj</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE90")}
                        value="syska"
                      />
                      <label htmlFor="section5-field1">Syska</label>
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
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE91")}
                        value="led"
                      />
                      <label htmlFor="section5-field1">LED</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE91")}
                        value="cfl"
                      />
                      <label htmlFor="section5-field1">CFL</label>
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
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE92")}
                        value="4w"
                      />
                      <label htmlFor="section5-field1">4W</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE92")}
                        value="5w"
                      />
                      <label htmlFor="section5-field1">5W</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE92")}
                        value="9w"
                      />
                      <label htmlFor="section5-field1">9W</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE92")}
                        value="12w"
                      />
                      <label htmlFor="section5-field1">12W</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section5-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section5-field5"
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
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE95")}
                        value="110"
                      />
                      <label htmlFor="section5-field1">110 VAC</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE95")}
                        value="230"
                      />
                      <label htmlFor="section5-field1">230VAC</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section5-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section5-field5"
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
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE98")}
                        value="anchor"
                      />
                      <label htmlFor="section5-field1">Anchor</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE98")}
                        value="legrand"
                      />
                      <label htmlFor="section5-field1">Legrand</label>
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
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE99")}
                        value="5a"
                      />
                      <label htmlFor="section5-field1">5A</label>
                    </label>
                    <label htmlFor="" className="radio">
                      <input
                        type="radio"
                        name="section5-field1"
                        id="section5-field1"
                        className="user-value"
                        {...register("fieldE99")}
                        value="15a"
                      />
                      <label htmlFor="section5-field1">15A</label>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="user-input">
                  <label htmlFor="section5-field5" className="field-label">
                    Actual Observation with label identification
                  </label>
                  <textarea
                    id="section5-field5"
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
