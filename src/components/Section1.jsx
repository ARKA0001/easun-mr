"use client";

import React from "react";
import moveSection from "@/utils/SectionMove";
import { useRecoilState } from "recoil";
import { activeSection } from "@/store/Section";
import { useForm } from "react-hook-form";

export default function Section1() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  const handleSectionMove = (currentSection, moveAction) => {
    console.log(currentSection);
    setCurrentActiveSection(moveSection(currentSection, moveAction));
  };

  const {required, handleSubmit} = useForm()

  const onSubmit = () => {

  }

  return (
    <div className="form-section">

        <form onSubmit={handleSubmit(onSubmit())}>
          <div className="user-input row">
            <label htmlFor="field1" className="field-label">Inspection Lot No</label>
            <input type="text" name="" id="field1" className="user-value" />
          </div>

        </form>




      <button onClick={() => handleSectionMove(1, 1)}>Save & Next</button>
    </div>
  );
}
