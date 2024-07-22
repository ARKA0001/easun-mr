"use client";

import React from "react";
import moveSection from "@/utils/SectionMove";
import { useRecoilState } from "recoil";
import { activeSection, savedSection } from "@/store/Section";
import { useForm } from "react-hook-form";

export default function Section8() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);
  const [savedSectionCount, setSavedSectionCount] =
    useRecoilState(savedSection);

  const handleSectionMove = () => {
    setCurrentActiveSection(10);
    setSavedSectionCount(9);
  };

  const { required, handleSubmit } = useForm();
  const onSubmit = () => {};

  return (
    <div className="form-section">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="user-input">
            <label htmlFor="field1" className="field-label">
              Perform under voltage test for one complete cycle
            </label>
            <div className="row-input">
              UV
              <input type="text" name="" id="field1" className="user-value" />V
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
              <input type="text" name="" id="field1" className="user-value" />V
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
              <input type="text" name="" id="field1" className="user-value" />V
            </div>
          </div>
        </div>
        <button onClick={() => handleSectionMove()} className="action-button">
          Save & Next
        </button>
      </form>
    </div>
  );
}
