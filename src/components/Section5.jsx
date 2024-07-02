import React from "react";
import moveSection from "@/utils/SectionMove";
import { useRecoilState } from "recoil";
import { activeSection } from "@/store/Section";

export default function Section2() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  const handleSectionMove = (currentSection, moveAction) => {
    console.log(currentSection);
    setCurrentActiveSection(moveSection(currentSection, moveAction));
  };
  return (
    <div>
      This is section5
      <button onClick={() => handleSectionMove(5, 0)}>Back</button>
      <button onClick={() => handleSectionMove(5, 1)}>Save & Next</button>
    </div>
  );
}
