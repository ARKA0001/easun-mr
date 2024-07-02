import React, { useEffect, useRef } from "react";
import { activeSection } from "@/store/Section";
import { useRecoilState } from "recoil";

export default function SectionNav() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  return (
    <div className="section-nav">
      <div
        className={
          currentActiveSection === 1 ? "section-label active" : "section-label"
        }
      >
        Test Order Details Observation
      </div>
      <div
        className={
          currentActiveSection === 2 ? "section-label active" : "section-label"
        }
      >
        Observation on Visual /Aesthetic Requirements Checks - Manual Entry
      </div>
      <div
        className={
          currentActiveSection === 3 ? "section-label active" : "section-label"
        }
      >
        General / Standard Requirements
      </div>
      <div
        className={
          currentActiveSection === 4 ? "section-label active" : "section-label"
        }
      >
        General / Stickers / Caution / Attention Requirements
      </div>
      <div
        className={
          currentActiveSection === 5 ? "section-label active" : "section-label"
        }
      >
        Legend EBOM Requirements
      </div>
      <div
        className={
          currentActiveSection === 6 ? "section-label active" : "section-label"
        }
      >
        Performance and Application Test Requirements
      </div>
      <div
        className={
          currentActiveSection === 7 ? "section-label active" : "section-label"
        }
      >
        CAM Sequence Test Requirements
      </div>
      <div
        className={
          currentActiveSection === 8 ? "section-label active" : "section-label"
        }
      >
        Application Test Requirements
      </div>
    </div>
  );
}
