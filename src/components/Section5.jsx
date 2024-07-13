"use client";

import React from "react";
import moveSection from "@/utils/SectionMove";
import { useRecoilState } from "recoil";
import { activeSection } from "@/store/Section";
import { useForm } from "react-hook-form";

export default function Section5() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  const handleSectionMove = (currentSection, moveAction) => {
    console.log(currentSection);
    setCurrentActiveSection(moveSection(currentSection, moveAction));
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log("This is section 5 data");
    const section4Data = {
      field57: data.field57,
    };

    console.log(section4Data);
    handleSectionMove(5, 1);

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
                    {...register("field69")}
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
                  />
                  <label htmlFor="section5-field2">415 VAC/DC</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field3"
                    className="user-value"
                  />
                  <label htmlFor="section5-field3">220 VAC/DC</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
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
              <textarea id="section5-field5" className="user-value"></textarea>
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
                  />
                  <label htmlFor="section5-lower-field1">Seimens</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-lower-field2">415 VAC/DC</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field3"
                    className="user-value"
                  />
                  <label htmlFor="section5-lower-field3">220 VAC/DC</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
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
              ></textarea>
            </div>
          </div>
        </div>
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
                  />
                  <label htmlFor="section5-lower-field1">Seimens</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-lower-field2">415 VAC/DC</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field3"
                    className="user-value"
                  />
                  <label htmlFor="section5-lower-field3">220 VAC/DC</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-lower-field1">Seimens</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-lower-field2">415 VAC/DC</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
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
              ></textarea>
            </div>
          </div>
        </div>
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
                  />
                  <label htmlFor="section5-lower-field1">AC-1</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">AC-II</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">K6</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">K7</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">SHC1</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">SHC2</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-lower-field1">Seimens</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-lower-field2">1.6-2.4 A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-lower-field4">2.4-4A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-lower-field4">4-6A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
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
              ></textarea>
            </div>
          </div>
        </div>
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
                  />
                  <label htmlFor="section5-lower-field1">Seimens</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-lower-field2">110 VAC/DC</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-lower-field1">Seimens</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">Schneider</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-lower-field2">1</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
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
              ></textarea>
            </div>
          </div>
        </div>
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
                  />
                  <label htmlFor="section5-lower-field1">Kaycee SX 112</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">SX 114 A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">SX 114 C</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-lower-field1">Remi</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">BBL</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">Rotomac</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">Dharani</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-lower-field2">230V</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-lower-field4">380V</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-lower-field4">400V</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-lower-field4">415V</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-lower-field2">55-0-55v</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
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
              ></textarea>
            </div>
          </div>
        </div>
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
                  />
                  <label htmlFor="section5-lower-field1">Ampitron</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">Ashoka</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">Saraswathi</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-lower-field2">230V</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-lower-field4">380V</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-lower-field4">400V</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-lower-field4">415V</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-lower-field2">55-0-55v</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-lower-field1">Pyros</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">Ashoka</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">RKH</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-lower-field2">230 VAC</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-lower-field2">40W</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-lower-field4">80W</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-lower"
                    id="section5-lower-field4"
                    className="user-value"
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
              ></textarea>
            </div>
          </div>
        </div>
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
                  />
                  <label htmlFor="section5-lower-field1">Sai EGO 230 VAC</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">Sunvic 230VAC</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-make-lower"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-field1">Copper Busman</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
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
              <input type="text" name="" id="field1" className="user-value" />
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="section5-field5" className="field-label">
                Actual Observation with label identification
              </label>
              <textarea id="section5-field5" className="user-value"></textarea>
            </div>
          </div>
        </div>
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
                  />
                  <label htmlFor="section5-field1">Elmex</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">Connect Well</label>
                </label>
              </div>
            </div>
            <div className="user-input">
              <label htmlFor="field2" className="field-label">
                Part Name
              </label>
              <select name="field2" id="field2">
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
              <input type="text" name="" id="field1" className="user-value" />
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
                  />
                  <label htmlFor="section5-field1">Elmex</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">Connect Well</label>
                </label>
              </div>
            </div>
            <div className="user-input">
              <label htmlFor="field2" className="field-label">
                Part Name
              </label>
              <select name="field2" id="field2">
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
              <input type="text" name="" id="field1" className="user-value" />
              <label htmlFor="field1" className="field-label">
                Nos
              </label>
            </div>
          </div>
        </div>
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
                  />
                  <label htmlFor="section5-field1">Elmex</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">Connect Well</label>
                </label>
              </div>
            </div>
            <div className="user-input">
              <label htmlFor="field2" className="field-label">
                Part Name
              </label>
              <select name="field2" id="field2">
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
              <input type="text" name="" id="field1" className="user-value" />
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
                  />
                  <label htmlFor="section5-field1">Seimens</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">Technic</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-field2">Yellow</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field3"
                    className="user-value"
                  />
                  <label htmlFor="section5-field3">White</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
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
              <textarea id="section5-field5" className="user-value"></textarea>
            </div>
          </div>
        </div>
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
                  />
                  <label htmlFor="section5-field1">Stay Put</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">Red</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
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
              <textarea id="section5-field5" className="user-value"></textarea>
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
                  />
                  <label htmlFor="section5-field1">Seimens</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">ABB</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">Legrand</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-field2">2A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field3"
                    className="user-value"
                  />
                  <label htmlFor="section5-field3">4A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-field4">6A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-field4">10A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-field4">16A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
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
              <textarea id="section5-field5" className="user-value"></textarea>
            </div>
          </div>
        </div>
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
                  />
                  <label htmlFor="section5-field1">Seimens</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">ABB</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">Legrand</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-field2">2A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field3"
                    className="user-value"
                  />
                  <label htmlFor="section5-field3">4A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-field4">6A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-field4">10A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-field4">16A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
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
              <textarea id="section5-field5" className="user-value"></textarea>
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
                  />
                  <label htmlFor="section5-field1">Seimens</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">ABB</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">Legrand</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-field2">2A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field3"
                    className="user-value"
                  />
                  <label htmlFor="section5-field3">4A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-field4">6A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-field4">10A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-field4">16A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
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
              <textarea id="section5-field5" className="user-value"></textarea>
            </div>
          </div>
        </div>
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
                  />
                  <label htmlFor="section5-field1">Seimens</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">ABB</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">Legrand</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-field2">2A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field3"
                    className="user-value"
                  />
                  <label htmlFor="section5-field3">4A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-field4">6A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-field4">10A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-field4">16A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
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
              <textarea id="section5-field5" className="user-value"></textarea>
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
                  />
                  <label htmlFor="section5-field1">Seimens</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">ABB</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">Legrand</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-field2">2A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field3"
                    className="user-value"
                  />
                  <label htmlFor="section5-field3">4A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-field4">6A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-field4">10A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-field4">16A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
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
              <textarea id="section5-field5" className="user-value"></textarea>
            </div>
          </div>
        </div>
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
                  />
                  <label htmlFor="section5-field1">Salzer 61197</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">Kaycee SX145</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
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
              <textarea id="section5-field5" className="user-value"></textarea>
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
                  />
                  <label htmlFor="section5-field1">Minilec</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">GIC (SM301 Series)</label>
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
                  />
                  <label htmlFor="section5-field2">230 VAC</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field3"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-field4">6A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-field4">10A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
                  />
                  <label htmlFor="section5-field4">16A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field-raise"
                    id="section5-field4"
                    className="user-value"
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
              <input type="text" name="" id="field1" className="user-value" />
            </div>
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                OV
              </label>
              <input type="text" name="" id="field1" className="user-value" />
            </div>
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Timer
              </label>
              <input type="text" name="" id="field1" className="user-value" />
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="section5-field5" className="field-label">
                Actual Observation with label identification
              </label>
              <textarea id="section5-field5" className="user-value"></textarea>
            </div>
          </div>
        </div>
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
                  />
                  <label htmlFor="section5-field1">Philips</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">Bajaj</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-field1">LED</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-field1">4W</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">5W</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">9W</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
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
              <textarea id="section5-field5" className="user-value"></textarea>
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
                  />
                  <label htmlFor="section5-field1">110 VAC</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">230VAC</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
                  />
                  <label htmlFor="section5-field1">Syska</label>
                </label>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="section5-field5" className="field-label">
                Actual Observation with label identification
              </label>
              <textarea id="section5-field5" className="user-value"></textarea>
            </div>
          </div>
        </div>
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
                  />
                  <label htmlFor="section5-field1">Anchor</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
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
                  />
                  <label htmlFor="section5-field1">5A</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section5-field1"
                    id="section5-field1"
                    className="user-value"
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
              <textarea id="section5-field5" className="user-value"></textarea>
            </div>
          </div>
        </div>
      </form>

      <button onClick={() => handleSectionMove(5, 1)} className="action-button">
        Save & Next
      </button>
    </div>
  );
}
