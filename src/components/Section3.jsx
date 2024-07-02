import React from "react";
import moveSection from "@/utils/SectionMove";
import { useRecoilState } from "recoil";
import { activeSection } from "@/store/Section";

export default function Section3() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  const handleSectionMove = (currentSection, moveAction) => {
    console.log(currentSection);
    setCurrentActiveSection(moveSection(currentSection, moveAction));
  };
  return (
    <div>
      This is section3
      <button onClick={() => handleSectionMove(3, 0)}>Back</button>
      <button onClick={() => handleSectionMove(3, 1)}>Save & Next</button>
    </div>
  );
}
