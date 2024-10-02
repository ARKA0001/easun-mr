import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { activeSection, savedSection, testIdStore } from "@/store/Section";
import { useForm, useWatch } from "react-hook-form";
import html2canvas from "html2canvas";
import {
  backSideOptionsStore,
  bottomSideOptionsStore,
  frontSideOptionsStore,
  leftSideOptionsStore,
  rightSideOptionsStore,
  Section3DataStore,
  topSideOptionsStore,
} from "@/store/FormData";

export default function Section3() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  const [savedSectionCount, setSavedSectionCount] =
    useRecoilState(savedSection);

  const handleSectionMove = () => {
    setCurrentActiveSection(5);
    setSavedSectionCount(4);
  };

  const [frontSideOptions, setFrontSideOptions] = useRecoilState(
    frontSideOptionsStore
  );
  const [backSideOptions, setBackSideOptions] =
    useRecoilState(backSideOptionsStore);
  const [leftSideOptions, setLeftSideOptions] =
    useRecoilState(leftSideOptionsStore);
  const [rightSideOptions, setRightSideOptions] = useRecoilState(
    rightSideOptionsStore
  );
  const [topSideOptions, setTopSideOptions] =
    useRecoilState(topSideOptionsStore);
  const [bottomSideOptions, setBottomSideOptions] = useRecoilState(
    bottomSideOptionsStore
  );

  const [testId, setTestId] = useRecoilState(testIdStore);

  const handleFrontSideOptions = (event) => {
    const { value, checked } = event.target;
    setFrontSideOptions((prevItems) => {
      if (checked) {
        return [...prevItems, value];
      } else {
        return prevItems.filter((item) => item !== value);
      }
    });
  };
  const handleBackSideOptions = (event) => {
    const { value, checked } = event.target;
    setBackSideOptions((prevItems) => {
      if (checked) {
        return [...prevItems, value];
      } else {
        return prevItems.filter((item) => item !== value);
      }
    });
  };
  const handleLeftSideOptions = (event) => {
    const { value, checked } = event.target;
    setLeftSideOptions((prevItems) => {
      if (checked) {
        return [...prevItems, value];
      } else {
        return prevItems.filter((item) => item !== value);
      }
    });
  };
  const handleRightSideOptions = (event) => {
    const { value, checked } = event.target;
    setRightSideOptions((prevItems) => {
      if (checked) {
        return [...prevItems, value];
      } else {
        return prevItems.filter((item) => item !== value);
      }
    });
  };
  const handleTopSideOptions = (event) => {
    const { value, checked } = event.target;
    setTopSideOptions((prevItems) => {
      if (checked) {
        return [...prevItems, value];
      } else {
        return prevItems.filter((item) => item !== value);
      }
    });
  };
  const handleBottomSideOptions = (event) => {
    const { value, checked } = event.target;
    setBottomSideOptions((prevItems) => {
      if (checked) {
        return [...prevItems, value];
      } else {
        return prevItems.filter((item) => item !== value);
      }
    });
  };

  const [section3FormData, setsection3FormData] =
    useRecoilState(Section3DataStore);

  const { register, handleSubmit, setValue, control } = useForm();
  const watchedFields = useWatch({ control });

  const onSubmit = async (data) => {
    console.log("This is section 3 data");
    console.log(section3FormData);
    // Take screenshort
    const section = document.getElementById("section3-form-1");
    const canvas = await html2canvas(section, {
      scale: 2,
      backgroundColor: "#FFFFFF",
      useCORS: true,
    });
    const imgData = canvas.toDataURL("image/png");
    const blob = await (await fetch(imgData)).blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${testId ? testId : "default"}-section3-form-1.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
    console.log("Image saved successfully");
    takeSectionScreenShot("section3-form-2", true);
    takeSectionScreenShot("section3-form-3", true);
    takeSectionScreenShot("section3-form-4", false);
  };

  const takeSectionScreenShot = async (fileName, hasNextSection) => {
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
    if (section3FormData && Object.keys(section3FormData).length > 0) {
      Object.keys(section3FormData).forEach((field) => {
        setValue(field, section3FormData[field]);
      });
    }
  }, [setsection3FormData, setValue]);

  useEffect(() => {
    setsection3FormData(watchedFields);
  }, [watchedFields, setsection3FormData]);

  return (
    <div className="form-section" id="section3-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-section-info" id="section3-form-1">
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field18" className="field-label">
                Serial No
              </label>
              <input
                type="text"
                name="field18"
                id="field18"
                className="user-value"
                {...register("field18")}
              />
            </div>
          </div>
          <div className="section-title">Verification of Name Plate</div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field19" className="field-label">
                Description
              </label>
              <input
                type="text"
                name="field19"
                id="field19"
                className="user-value"
                {...register("field19")}
              />
            </div>
            <div className="user-input">
              <label htmlFor="field20" className="field-label">
                Motor Voltage
              </label>
              <input
                type="text"
                name="field20"
                id="field20"
                className="user-value"
                {...register("field20")}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field21" className="field-label">
                Control Voltage
              </label>
              <input
                type="text"
                name="field21"
                id="field21"
                className="user-value"
                {...register("field21")}
              />
            </div>
            <div className="user-input">
              <label htmlFor="field22" className="field-label">
                Frequency
              </label>
              <input
                type="text"
                name="field22"
                id="field22"
                className="user-value"
                {...register("field22")}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field23" className="field-label">
                Tr. Resistance Value
              </label>
              <input
                type="text"
                name="field23"
                id="field23"
                className="user-value"
                {...register("field23")}
              />
            </div>
            <div className="user-input">
              <label htmlFor="field24" className="field-label">
                Year of MFG
              </label>
              <input
                type="text"
                name="field24"
                id="field24"
                className="user-value"
                {...register("field24")}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field25" className="field-label">
                Schematic Diagram No
              </label>
              <input
                type="text"
                name="field25"
                id="field25"
                className="user-value"
                {...register("field25")}
              />
            </div>
            <div className="user-input">
              <label htmlFor="field26" className="field-label">
                DM Paint Shade External
              </label>
              <input
                type="text"
                name="field26"
                id="field26"
                className="user-value"
                {...register("field26")}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field27" className="field-label">
                DM Paint Shade Internal
              </label>
              <input
                type="text"
                name="field27"
                id="field27"
                className="user-value"
                {...register("field27")}
              />
            </div>
            <div className="user-input">
              <label htmlFor="field28" className="field-label">
                Paint Thickness
              </label>
              <input
                type="text"
                name="field28"
                id="field28"
                className="user-value"
                {...register("field28")}
              />
            </div>
          </div>
        </div>
        <div className="form-section-info" id="section3-form-2">
          <div className="section-title">Paint Scratches / Finishing</div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label check-label">
                Front Side
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="front-1"
                  id="front-1"
                  className="user-value"
                  value="No Scratches"
                  checked={frontSideOptions.includes("No Scratches")}
                  onChange={handleFrontSideOptions}
                />
                <label htmlFor="front-1">No Scratches</label>
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="front-2"
                  id="front-2"
                  className="user-value"
                  value="Line Mark"
                  checked={frontSideOptions.includes("Line Mark")}
                  onChange={handleFrontSideOptions}
                />
                <label htmlFor="front-2">Line Mark</label>
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="front-3"
                  id="front-3"
                  className="user-value"
                  value="Painting Peel Off"
                  checked={frontSideOptions.includes("Painting Peel Off")}
                  onChange={handleFrontSideOptions}
                />
                <label htmlFor="front-3">Painting Peel Off</label>
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="front-4"
                  id="front-4"
                  className="user-value"
                  value="Paint Fade"
                  checked={frontSideOptions.includes("Paint Fade")}
                  onChange={handleFrontSideOptions}
                />
                <label htmlFor="front-4">Paint Fade</label>
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label check-label">
                Back Side
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="back-1"
                  id="back-1"
                  className="user-value"
                  value="No Scratches"
                  checked={backSideOptions.includes("No Scratches")}
                  onChange={handleBackSideOptions}
                />
                <label htmlFor="back-1">No Scratches</label>
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="back-2"
                  id="back-2"
                  className="user-value"
                  value="Line Mark"
                  checked={backSideOptions.includes("Line Mark")}
                  onChange={handleBackSideOptions}
                />
                <label htmlFor="back-2">Line Mark</label>
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="back-3"
                  id="back-3"
                  className="user-value"
                  value="Painting Peel Off"
                  checked={backSideOptions.includes("Painting Peel Off")}
                  onChange={handleBackSideOptions}
                />
                <label htmlFor="back-3">Painting Peel Off</label>
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="back-4"
                  id="back-4"
                  className="user-value"
                  value="Paint Fade"
                  checked={backSideOptions.includes("Paint Fade")}
                  onChange={handleBackSideOptions}
                />
                <label htmlFor="back-4">Paint Fade</label>
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label check-label">
                Left Side
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="left-1"
                  id="left-1"
                  className="user-value"
                  value="No Scratches"
                  checked={leftSideOptions.includes("No Scratches")}
                  onChange={handleLeftSideOptions}
                />
                <label htmlFor="left-1">No Scratches</label>
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="left-2"
                  id="left-2"
                  className="user-value"
                  value="Line Mark"
                  checked={leftSideOptions.includes("Line Mark")}
                  onChange={handleLeftSideOptions}
                />
                <label htmlFor="left-2">Line Mark</label>
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="left-3"
                  id="left-3"
                  className="user-value"
                  value="Painting Peel Off"
                  checked={leftSideOptions.includes("Painting Peel Off")}
                  onChange={handleLeftSideOptions}
                />
                <label htmlFor="left-3">Painting Peel Off</label>
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="left-4"
                  id="left-4"
                  className="user-value"
                  value="Paint Fade"
                  checked={leftSideOptions.includes("Paint Fade")}
                  onChange={handleLeftSideOptions}
                />
                <label htmlFor="left-4">Paint Fade</label>
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label check-label">
                Right Side
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="right-1"
                  id="right-1"
                  className="user-value"
                  value="No Scratches"
                  checked={rightSideOptions.includes("No Scratches")}
                  onChange={handleRightSideOptions}
                />
                <label htmlFor="right-1">No Scratches</label>
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="right-2"
                  id="right-2"
                  className="user-value"
                  value="Line Mark"
                  checked={rightSideOptions.includes("Line Mark")}
                  onChange={handleRightSideOptions}
                />
                <label htmlFor="right-2">Line Mark</label>
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="right-3"
                  id="right-3"
                  className="user-value"
                  value="Painting Peel Off"
                  checked={rightSideOptions.includes("Painting Peel Off")}
                  onChange={handleRightSideOptions}
                />
                <label htmlFor="right-3">Painting Peel Off</label>
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="right-4"
                  id="right-4"
                  className="user-value"
                  value="Paint Fade"
                  checked={rightSideOptions.includes("Paint Fade")}
                  onChange={handleRightSideOptions}
                />
                <label htmlFor="check-16">Paint Fade</label>
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label check-label">
                Top Side
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="top-1"
                  id="top-1"
                  className="user-value"
                  value="No Scratches"
                  checked={topSideOptions.includes("No Scratches")}
                  onChange={handleTopSideOptions}
                />
                <label htmlFor="top-1">No Scratches</label>
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="top-2"
                  id="top-2"
                  className="user-value"
                  value="Line Mark"
                  checked={topSideOptions.includes("Line Mark")}
                  onChange={handleTopSideOptions}
                />
                <label htmlFor="top-2">Line Mark</label>
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="top-3"
                  id="top-3"
                  className="user-value"
                  value="Painting Peel Off"
                  checked={topSideOptions.includes("Painting Peel Off")}
                  onChange={handleTopSideOptions}
                />
                <label htmlFor="top-3">Painting Peel Off</label>
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="top-4"
                  id="top-4"
                  className="user-value"
                  value="Paint Fade"
                  checked={topSideOptions.includes("Paint Fade")}
                  onChange={handleTopSideOptions}
                />
                <label htmlFor="top-4">Paint Fade</label>
              </label>
            </div>
          </div>
        </div>
        <div className="form-section-info" id="section3-form-3">
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label check-label">
                Bottom Side
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="bottom-1"
                  id="bottom-1"
                  className="user-value"
                  value="No Scratches"
                  checked={bottomSideOptions.includes("No Scratches")}
                  onChange={handleBottomSideOptions}
                />
                <label htmlFor="bottom-1">No Scratches</label>
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="bottom-2"
                  id="bottom-2"
                  className="user-value"
                  value="Line Mark"
                  checked={bottomSideOptions.includes("Line Mark")}
                  onChange={handleBottomSideOptions}
                />
                <label htmlFor="bottom-2">Line Mark</label>
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="bottom-3"
                  id="bottom-3"
                  className="user-value"
                  value="Painting Peel Off"
                  checked={bottomSideOptions.includes("Painting Peel Off")}
                  onChange={handleBottomSideOptions}
                />
                <label htmlFor="bottom-3">Painting Peel Off</label>
              </label>
              <label htmlFor="" className="check">
                <input
                  type="checkbox"
                  name="bottom-4"
                  id="bottom-4"
                  className="user-value"
                  value="Paint Fade"
                  checked={bottomSideOptions.includes("Paint Fade")}
                  onChange={handleBottomSideOptions}
                />
                <label htmlFor="bottom-4">Paint Fade</label>
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label
                htmlFor="section3-radio-1"
                className="field-label radio-label"
              >
                Power Voltage (motor)
              </label>
              <div className="radio-input">
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section3-power"
                    id="section3-power-1"
                    className="user-value"
                    value="380 AC/DC"
                    {...register("field35")}
                  />
                  <label htmlFor="section3-power-1">380 AC/DC</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section3-power"
                    id="section3-power-2"
                    className="user-value"
                    value="400 AC/DC"
                    {...register("field35")}
                  />
                  <label htmlFor="section3-power-2">400 AC/DC</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section3-power"
                    id="section3-power-3"
                    className="user-value"
                    value="415 AC/DC"
                    {...register("field35")}
                  />
                  <label htmlFor="section3-power-3">415 AC/DC</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section3-power"
                    id="section3-power-4"
                    className="user-value"
                    value="430 AC/DC"
                    {...register("field35")}
                  />
                  <label htmlFor="section3-power-4">430 AC/DC</label>
                </label>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label radio-label">
                Control Voltage
              </label>
              <div className="radio-input">
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section3-voltage"
                    id="section3-voltage-1"
                    className="user-value"
                    value="110 VAC/DC"
                    {...register("field36")}
                  />
                  <label htmlFor="section3-voltage-1">110 VAC/DC</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section3-voltage"
                    id="section3-voltage-2"
                    className="user-value"
                    value="230 VAC/DC"
                    {...register("field36")}
                  />
                  <label htmlFor="section3-voltage-2">230 VAC/DC</label>
                </label>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label radio-label">
                DM Material
              </label>
              <div className="radio-input">
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section3-material"
                    id="section3-material-1"
                    className="user-value"
                    value="MS"
                    {...register("field37")}
                  />
                  <label htmlFor="section3-material-1">MS</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section3-material"
                    id="section3-material-2"
                    className="user-value"
                    value="SS"
                    {...register("field37")}
                  />
                  <label htmlFor="section3-material-2">SS</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section3-material"
                    id="section3-material-3"
                    className="user-value"
                    value="Aluminum"
                    {...register("field37")}
                  />
                  <label htmlFor="section3-material-3">Aluminum</label>
                </label>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label radio-label">
                DM Door Hinge
              </label>
              <div className="radio-input">
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section3-door-hinge"
                    id="section3-door-hinge-1"
                    className="user-value"
                    value="Left"
                    {...register("field38")}
                  />
                  <label htmlFor="section3-door-hinge-1">Left</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section3-door-hinge"
                    id="section3-door-hinge-2"
                    className="user-value"
                    value="Right"
                    {...register("field38")}
                  />
                  <label htmlFor="section3-door-hinge-2">Right</label>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="form-section-info" id="section3-form-4">
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label radio-label">
                No Of Push Button Holes
              </label>
              <div className="radio-input">
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section3-buttons"
                    id="section3-buttons-1"
                    className="user-value"
                    value="3"
                    {...register("field39")}
                  />
                  <label htmlFor="section3-buttons-1">3</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section3-buttons"
                    id="section3-buttons-2"
                    className="user-value"
                    value="4"
                    {...register("field39")}
                  />
                  <label htmlFor="section3-buttons-2">4</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section3-buttons"
                    id="section3-buttons-3"
                    className="user-value"
                    value="5"
                    {...register("field39")}
                  />
                  <label htmlFor="section3-buttons-3">5</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section3-buttons"
                    id="section3-buttons-5"
                    className="user-value"
                    value="6"
                    {...register("field39")}
                  />
                  <label htmlFor="section3-buttons-5">6</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section3-buttons"
                    id="section3-buttons-6"
                    className="user-value"
                    value="7"
                    {...register("field39")}
                  />
                  <label htmlFor="section3-buttons-6">7</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section3-buttons"
                    id="section3-buttons-7"
                    className="user-value"
                    value="8"
                    {...register("field39")}
                  />
                  <label htmlFor="section3-buttons-7">8</label>
                </label>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="field1" className="field-label">
                No of ADS
              </label>
              <input
                type="text"
                name=""
                id="field9"
                className="user-value"
                {...register("field40")}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="user-input">
              <label htmlFor="" className="field-label radio-label">
                Type of TPI Resistance
              </label>
              <div className="radio-input">
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section3-tpi"
                    id="section3-tpi-1"
                    className="user-value"
                    value="1K Ohms"
                    {...register("field41")}
                  />
                  <label htmlFor="section3-tpi-1">1K Ohms</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section3-tpi"
                    id="section3-tpi-2"
                    className="user-value"
                    value="100K Ohms"
                    {...register("field41")}
                  />
                  <label htmlFor="section3-tpi-2">100K Ohms</label>
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
                    name="section3-quantity"
                    id="section3-quantity-1"
                    className="user-value"
                    value="1"
                    {...register("field42")}
                  />
                  <label htmlFor="section3-quantity-1">1</label>
                </label>
                <label htmlFor="" className="radio">
                  <input
                    type="radio"
                    name="section3-quantity"
                    id="section3-quantity-2"
                    className="user-value"
                    value="2"
                    {...register("field42")}
                  />
                  <label htmlFor="section3-quantity-2">2</label>
                </label>
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
