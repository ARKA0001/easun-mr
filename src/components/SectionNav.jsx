import React, { useState } from "react";
import { activeSection, savedSection } from "@/store/Section";
import { useRecoilState } from "recoil";

export default function SectionNav() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  const [openDropdown, setOpenDropdown] = useState(null);

  const [savedSectionCount, setSavedSectionCount] =
    useRecoilState(savedSection);

  const handleSectionMove = (currentSection) => {
    if (currentActiveSection != 0) {
      setCurrentActiveSection(currentSection);
    }
  };

  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };
  return (
    <div className="section-nav">
      <button
        className="nav-item section-label"
        onClick={() => toggleDropdown(1)}
      >
        OLTC Test
        <span className="dropdown-toggle">
          {openDropdown === 1 ? "▲" : "▼"}
        </span>
      </button>
      {openDropdown === 1 && (
        <ul className="dropdown-menu">
          <button
            className={
              currentActiveSection === 0
                ? "section-label active"
                : "section-label"
            }
            // onClick={() => handleSectionMove(0)}
          >
            Automated Test Data
          </button>

          <button
            className={
              currentActiveSection === 1
                ? "section-label active"
                : "section-label"
            }
            onClick={() => handleSectionMove(1)}
          >
            OLTC Test Process
          </button>
        </ul>
      )}

      <button
        className="nav-item section-label"
        onClick={() => toggleDropdown(2)}
      >
        Manual Report Entry
        <span className="dropdown-toggle">
          {openDropdown === 2 ? "▲" : "▼"}
        </span>
      </button>

      {openDropdown === 2 && (
        <ul className="dropdown-menu">
          <button
            className={
              currentActiveSection === 2
                ? "section-label active"
                : "section-label"
            }
            onClick={() => handleSectionMove(2)}
          >
            Test Order Details Observation
          </button>
          <button
            className={
              currentActiveSection === 3
                ? "section-label active"
                : "section-label"
            }
            onClick={() => handleSectionMove(3)}
          >
            Observation on Visual /Aesthetic Requirements Checks - Manual Entry
          </button>
          <button
            className={
              currentActiveSection === 4
                ? "section-label active"
                : "section-label"
            }
            onClick={() => handleSectionMove(4)}
          >
            General / Standard Requirements
          </button>
          <button
            className={
              currentActiveSection === 5
                ? "section-label active"
                : "section-label"
            }
            onClick={() => handleSectionMove(5)}
          >
            General / Stickers / Caution / Attention Requirements
          </button>
          <button
            className={
              currentActiveSection === 6
                ? "section-label active"
                : "section-label"
            }
            onClick={() => handleSectionMove(6)}
          >
            Legend EBOM Requirements
          </button>
          <button
            className={
              currentActiveSection === 7
                ? "section-label active"
                : "section-label"
            }
            onClick={() => handleSectionMove(7)}
          >
            Performance and Application Test Requirements
          </button>
          <button
            className={
              currentActiveSection === 8
                ? "section-label active"
                : "section-label"
            }
            onClick={() => handleSectionMove(8)}
          >
            CAM Sequence Test Requirements
          </button>
          <button
            className={
              currentActiveSection === 9
                ? "section-label active"
                : "section-label"
            }
            onClick={() => handleSectionMove(9)}
          >
            Application Test Requirements
          </button>
        </ul>
      )}

      <button
        className={
          currentActiveSection === 10 ? "section-label active" : "section-label"
        }
        onClick={() => handleSectionMove(10)}
      >
        Download Report
      </button>
    </div>
  );
}
