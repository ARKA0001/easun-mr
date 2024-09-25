import React, { useEffect } from "react";
import moveSection from "@/utils/SectionMove";
import { useRecoilState } from "recoil";
import { useForm, useWatch } from "react-hook-form";
import { activeSection, savedSection, testIdStore } from "@/store/Section";
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

  const [section6FormData, setSection6FormData] =
    useRecoilState(Section6DataStore);

  const [testId, setTestId] = useRecoilState(testIdStore);

  const { register, handleSubmit, setValue, control } = useForm();
  const watchedFields = useWatch({ control });

  const onSubmit = async (data) => {
    console.log("This is section 6 data");
    console.log(section6FormData);
    const section = document.getElementById("section6-form-1");
    const canvas = await html2canvas(section, {
      scale: 2,             
      backgroundColor: "#FFFFFF", 
      useCORS: true          
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
    takeSectionScreenshot("section6-form-2", true);
    takeSectionScreenshot("section6-form-3", true);
    takeSectionScreenshot("section6-form-4", true);
    takeSectionScreenshot("section6-form-5", true);
    takeSectionScreenshot("section6-form-6", true);
    takeSectionScreenshot("section6-form-7", false);

  };

  const takeSectionScreenshot = async (fileName, hasNextSection) => {
    console.log("This is section 6 data");
    const section = document.getElementById(fileName);
    const canvas = await html2canvas(section, {
      scale: 2,             
      backgroundColor: "#FFFFFF", 
      useCORS: true          
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
  }, [setSection6FormData, setValue]);

  useEffect(() => {
    setSection6FormData(watchedFields);
  }, [watchedFields, setSection6FormData]);
  return (
    <div className="form-section" id="section6-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <table className="toggle-table">
          <tbody>
            <div className="table-row-info" id="section6-form-1">
              <tr className="section-title">
                <td className="user-input user-toggle">IR Test</td>
                <td className="user-input user-toggle"></td>
              </tr>
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-1" className="field-label">
                    Perform IR test before HV test and Note down the value
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-1"
                    className="toggle-input"
                    {...register("fieldA1")}
                  />
                  <label htmlFor="toggle-1" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-2" className="field-label">
                    Perform IR test after HV test and Note down the value
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-2"
                    className="toggle-input"
                    {...register("fieldA2")}
                  />
                  <label htmlFor="toggle-2" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>
              <tr className="section-title">
                <td className="user-input user-toggle">HV Test</td>
              </tr>
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-3" className="field-label">
                    Perform IR test before HV Test and note down the value
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-3"
                    className="toggle-input"
                    {...register("fieldA3")}
                  />
                  <label htmlFor="toggle-3" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>
            </div>
            <div className="table-row-info" id="section6-form-2">
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-4" className="field-label">
                    Perform IR test after HV test and Note down the value
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-4"
                    className="toggle-input"
                    {...register("fieldA4")}
                  />
                  <label htmlFor="toggle-4" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>
              <tr className="section-title">
                <td className="user-toggle user-input">Revolution</td>
                <td className="user-toggle user-input"></td>
              </tr>
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-4A" className="field-label">
                    Insert hand cranck and check the manual revolution on both
                    the direction two taps
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-4A"
                    className="toggle-input"
                    {...register("fieldA5A")}
                  />
                  <label htmlFor="toggle-4A" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>
              <tr className="section-title">
                <td className="user-toggle user-input">Voltage</td>
              </tr>
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-7" className="field-label">
                    Ensure control and power voltage as per the schematic
                    diagram
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-7"
                    className="toggle-input"
                    {...register("fieldA6")}
                  />
                  <label htmlFor="toggle-7" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>
            </div>
            <div className="table-row-info" id="section6-form-3">
              <tr className="section-title">
                <td className="user-toggle user-input">HC Safety Switch</td>
              </tr>
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-8" className="field-label">
                    Insert the hand crank in S8 or B8 switch give pulse via S1
                    or S2 raise
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-8"
                    className="toggle-input"
                    {...register("fieldA7")}
                  />
                  <label htmlFor="toggle-8" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>
              <tr className="section-title">
                <td className="user-toggle user-input">TPI</td>
              </tr>
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-9" className="field-label">
                    Check the center position of tap. No fo position indecator
                    wheel w.r.t tap no in
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-9"
                    className="toggle-input"
                    {...register("fieldA8")}
                  />
                  <label htmlFor="toggle-9" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-10" className="field-label">
                    Run the DM at local manual mode for one complete cylce and
                    check
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-10"
                    className="toggle-input"
                    {...register("fieldA9")}
                  />
                  <label htmlFor="toggle-10" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>
            </div>
            <div className="table-row-info" id="section6-form-4">
              <tr className="section-title">
                <td className="user-toggle user-input">Pulse</td>
              </tr>
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-11" className="field-label">
                    Perform that test - Single pulse via push button raise
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-11"
                    className="toggle-input"
                    {...register("fieldA10")}
                  />
                  <label htmlFor="toggle-11" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>

              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-1B" className="field-label">
                    Continous pulse via pushbutton raise or lower
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-1B"
                    className="toggle-input"
                    {...register("fieldA11B")}
                  />
                  <label htmlFor="toggle-1B" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-1A" className="field-label">
                    Press and hold the push button either raise
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-1A"
                    className="toggle-input"
                    {...register("fieldA12")}
                  />
                  <label htmlFor="toggle-1A" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>
              <tr className="section-title">
                <td className="user-toggle user-input">Phase sequence</td>
              </tr>
            </div>
            <div className="table-row-info" id="section6-form-5">
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-12" className="field-label">
                    Perform phase sequence test - Change the motor phase
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-12"
                    className="toggle-input"
                    {...register("fieldA13")}
                  />
                  <label htmlFor="toggle-12" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>
              <tr className="section-title">
                <td className="user-toggle user-input">Counter Pulse</td>
              </tr>
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-13" className="field-label">
                    Perform the test - single pule via Raise or Lower Trip the
                    LEPB (MPR)
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-13"
                    className="toggle-input"
                    {...register("field14")}
                  />
                  <label htmlFor="toggle-13" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>
              <tr className="section-title">
                <td className="user-toggle user-input">
                  Electrical Limit lower
                </td>
              </tr>
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-14" className="field-label">
                    Pulse to lower push button switch, motor and contractor
                    should not pick
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-14"
                    className="toggle-input"
                    {...register("fieldA15")}
                  />
                  <label htmlFor="toggle-14" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>
            </div>
            <div className="table-row-info" id="section6-form-6">
              <tr className="section-title">
                <td className="user-toggle user-input">Mechanical End Limit</td>
              </tr>
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-15" className="field-label">
                    Perform the test - Use hand crank rotate in lower direction
                    up to mechanical
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-15"
                    className="toggle-input"
                  />
                  <label htmlFor="toggle-15" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-16" className="field-label">
                    Perform the test - Use hand crank rotate in raise direction
                    up to mechanical limit
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-16"
                    className="toggle-input"
                    {...register("fieldA16")}
                  />
                  <label htmlFor="toggle-16" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>
              <tr className="section-title">
                <td className="user-toggle user-input">
                  Electrical Limit Raise
                </td>
              </tr>
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-17" className="field-label">
                    Perform the test - Pulse to Raise end tap - pulse to raise
                    push button switch
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-17"
                    className="toggle-input"
                    {...register("fieldA17")}
                  />
                  <label htmlFor="toggle-17" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>
            </div>
            <div className="table-row-info" id="section6-form-7">
              <tr className="section-title">
                <td className="user-toggle user-input">TBs Check</td>
              </tr>
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-18" className="field-label">
                    Check all the TB Ferrules to be matching with schematic TB
                    list
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-18"
                    className="toggle-input"
                    {...register("fieldA18")}
                  />
                  <label htmlFor="toggle-18" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-19" className="field-label">
                    All the lugs should be uniformly crimped with same color
                    code except 1.5
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-19"
                    className="toggle-input"
                    {...register("fieldA19")}
                  />
                  <label htmlFor="toggle-19" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>
              <tr className="section-title">
                <td className="user-toggle user-input">Door Switch</td>
              </tr>
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-21" className="field-label">
                    Check the functionality of DOOR limit switch by closing the
                    door
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-20"
                    className="toggle-input"
                    {...register("fieldA20")}
                  />
                  <label htmlFor="toggle-20" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Yes</span>
                    <span className="toggle-text off">No</span>
                  </label>
                </td>
              </tr>
              <tr className="section-title">
                <td className="user-toggle user-input">Raise</td>
              </tr>
              <tr>
                <td className="user-input user-toggle">
                  <label htmlFor="toggle-21" className="field-label">
                    Mechanical end limit revolution
                  </label>
                </td>
                <td className="toggle-container">
                  <input
                    type="checkbox"
                    id="toggle-21"
                    className="toggle-input"
                    {...register("fieldA21")}
                  />
                  <label htmlFor="toggle-21" className="toggle-label">
                    <span className="toggle-switch"></span>
                    <span className="toggle-text on">Raise</span>
                    <span className="toggle-text off">No Raise</span>
                  </label>
                </td>
              </tr>
            </div>
          </tbody>
        </table>
        <button type="submit" className="action-button">
          Save & Next
        </button>
      </form>
    </div>
  );
}
