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

  const handleSave = (sectionId) => {};
  return (
    <div>
      This is section8
      <button onClick={() => handleSectionMove(8, 0)}>Back</button>
      <button onClick={() => handleSave(8)}>Save</button>
    </div>
  );
}
