import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { activeSection, savedSection, testId } from "@/store/Section";
import { useForm, useWatch } from "react-hook-form";
import html2canvas from "html2canvas";
import {
  Section1DataStore,
  Section2DataStore,
  Section7DataStore,
} from "@/store/FormData";

export default function Section7() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  const [savedSectionCount, setSavedSectionCount] =
    useRecoilState(savedSection);

  const handleSectionMove = () => {
    setCurrentActiveSection(9);
    setSavedSectionCount(8);
  };

  const [section7FormData, setSection7FormData] =
    useRecoilState(Section7DataStore);

  const [testIdResponse, setTestIdResponse] = useRecoilState(testId);

  const { register, handleSubmit, setValue, control } = useForm();
  const watchedFields = useWatch({ control });

  const onSubmit = async (data) => {
    console.log("This is section 1 data");
    console.log(section7FormData);
    const section = document.getElementById("section7-form");
    const canvas = await html2canvas(section);
    const imgData = canvas.toDataURL("image/png");
    const blob = await (await fetch(imgData)).blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${testId}-section7-form.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);

    console.log("Image saved successfully");
  };
  useEffect(() => {
    if (section7FormData && Object.keys(section7FormData).length > 0) {
      Object.keys(section7FormData).forEach((field) => {
        setValue(field, section7FormData[field]);
      });
    }
  }, [setSection7FormData, setValue]);

  useEffect(() => {
    setSection7FormData(watchedFields);
  }, [watchedFields, setSection7FormData]);

  return (
    <div className="form-section" id="section7-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="section-title">
          Raise Directions - CAM Sequence - Before End Tap
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch
              </label>
              <p>S14 (3-3.5)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Red DIV Status
              </label>
              <p>Close-C-NC</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Sequence Status
              </label>
              <p>Open-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input
                type="text"
                name=""
                id="field1"
                className="user-value"
                {...register("fieldG1")}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch
              </label>
              <p>S13 (3-5.4)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Red DIV Status
              </label>
              <p>Close-C-NC</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Sequence Status
              </label>
              <p>Open-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input
                type="text"
                name=""
                id="field1"
                className="user-value"
                {...register("fieldG2")}
              />
            </div>
          </div>
          <div className="form-info  form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Acceptance Criteria
              </label>
              <input
                type="text"
                defaultValue={"Difference between S14 and S13 should be more than 0.25Div"}
                {...register("fieldG3")}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch
              </label>
              <p>S6-Control(28-30)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Red DIV Status
              </label>
              <p>Close-C-NC</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Sequence Status
              </label>
              <p>Open-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input type="text" name="" id="field1" className="user-value"  {...register("fieldG4")}/>
             
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch
              </label>
              <p>S14 (31.5-32)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Red DIV Status
              </label>
              <p>-</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                {" "}
                Switch Sequence Status
              </label>
              <p>Close-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input
                type="text"
                name=""
                id="field1"
                className="user-value"
                {...register("fieldG5")}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch
              </label>
              <p>S13 (31.5-32)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Red DIV Status
              </label>
              <p>-</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Sequence Status
              </label>
              <p>Close-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input
                type="text"
                name=""
                id="field1"
                className="user-value"
                {...register("fieldG6")}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch
              </label>
              <p>S6 - Power (33-33.5)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Red DIV Status
              </label>
              <p>Close-C-NC</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Sequence Status
              </label>
              <p>Open-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input
                type="text"
                name=""
                id="field1"
                className="user-value"
                {...register("fieldG7")}
              />
            </div>
          </div>
          <div className="form-info form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Acceptance Criteria
              </label>
              <input
                type="text"
                defaultValue="Difference between S14 and S13 should be more than 0.25Div"
                {...register("fieldG8")}
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
              <label htmlFor="" className="field-label">
                Switch
              </label>
              <p>S12 (3-3.5)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Red DIV Status
              </label>
              <p>Close-C-NC</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Sequence Status
              </label>
              <p>Open-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input
                type="text"
                name=""
                id="field1"
                className="user-value"
                {...register("fieldG9")}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch
              </label>
              <p>S13 (3-5.4)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Red DIV Status
              </label>
              <p>Close-C-NC</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Sequence Status
              </label>
              <p>Open-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input
                type="text"
                name=""
                id="field1"
                className="user-value"
                {...register("fieldG10")}
              />
            </div>
          </div>
          <div className="form-info form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Acceptance Criteria
              </label>
              <input
                type="text"
                defaultValue="Difference between S12 and S13 should be more than 0.25Div"
                {...register("fieldG11")}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch
              </label>
              <p>S7-Control(28-30)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Red DIV Status
              </label>
              <p>Close-C-NC</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Sequence Status
              </label>
              <p>Open-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input
                type="text"
                name=""
                id="field1"
                className="user-value"
                {...register("fieldG12")}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch
              </label>
              <p>S12 (31.5-32)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Red DIV Status
              </label>
              <p>-</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Sequence Status
              </label>
              <p>Close-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input
                type="text"
                name=""
                id="field1"
                className="user-value"
                {...register("fieldG13")}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch
              </label>
              <p>S13</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Red DIV Status
              </label>
              <p>-</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Sequence Status
              </label>
              <p>Open-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input
                type="text"
                name=""
                id="field1"
                className="user-value"
                {...register("fieldG14")}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch
              </label>
              <p>S7 Power (33-33.5)</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Red DIV Status
              </label>
              <p>Close-C-NC</p>
            </div>
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Switch Sequence Status
              </label>
              <p>Open-C-NC</p>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                Activated Division
              </label>
              <input
                type="text"
                name=""
                id="field1"
                className="user-value"
                {...register("fieldG15")}
              />
            </div>
          </div>
          <div className="form-info form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label">
                Acceptance Criteria
              </label>
              <input
                type="text"
                defaultValue="Difference between S13 and S17- Power should be more than 0.25Div"
                {...register("fieldG16")}
              />
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
