"use client";

import React, { useEffect } from "react";

import { useRecoilState } from "recoil";
import { activeSection, savedSection, testId } from "@/store/Section";
import { useForm, useWatch } from "react-hook-form";
import html2canvas from "html2canvas";
import { Section8DataStore } from "@/store/FormData";

export default function Section8() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);
  const [savedSectionCount, setSavedSectionCount] =
    useRecoilState(savedSection);

  const [section8FormData, setSection8FormData] =
    useRecoilState(Section8DataStore);

  const [testIdResponse, setTestIdResponse] = useRecoilState(testId);

  const { register, handleSubmit, setValue, control } = useForm();
  const watchedFields = useWatch({ control });

  const handleSectionMove = () => {
    setCurrentActiveSection(10);
    setSavedSectionCount(9);
  };

  const onSubmit = async (data) => {
    console.log("This is section 8 data");
    console.log(section8FormData);
    const section = document.getElementById("section8-form");
    const canvas = await html2canvas(section);
    const imgData = canvas.toDataURL("image/png");
    const blob = await (await fetch(imgData)).blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${testId ? testId : "default"}-section8-form.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);

    console.log("Image saved successfully");
    handleSectionMove();
  };

  useEffect(() => {
    if (section8FormData && Object.keys(section8FormData).length > 0) {
      Object.keys(section8FormData).forEach((field) => {
        setValue(field, section8FormData[field]);
      });
    }
  }, [setSection8FormData, setValue]);

  useEffect(() => {
    setSection8FormData(watchedFields);
  }, [watchedFields, setSection8FormData]);

  return (
    <div className="form-section" id="section8-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Perform under voltage test for one complete cycle
            </label>
            <div className="row-input">
              UV
              <input
                type="text"
                name=""
                id="field1"
                className="user-value"
                {...register("fieldH1")}
              />
              V
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Perform over voltage test for one complete cycle
            </label>
            <div className="row-input">
              UV
              <input
                type="text"
                name=""
                id="field1"
                className="user-value"
                {...register("fieldH2")}
              />
              V
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Perform normal voltage test for 8 complete cycle of operation
            </label>
            <div className="row-input">
              UV
              <input
                type="text"
                name=""
                id="field1"
                className="user-value"
                {...register("fieldH3")}
              />
              V
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
