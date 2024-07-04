"use client";

import React from "react";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import SectionNav from "@/components/SectionNav";
import FormNavbar from "@/components/FormNavbar";
import "../../page.css";
import { useRecoilState } from "recoil";
import { activeSection } from "@/store/Section";
import TestSection1 from "@/components/TestSection1";
import TestSection2 from "@/components/TestSection2";

export default function Page() {
  const currentDate = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDay = currentDate.getDate();
  const currentMonthIndex = currentDate.getMonth();
  const currentMonth = monthNames[currentMonthIndex];
  const currentYear = currentDate.getFullYear();

  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  const renderSection = () => {
    switch (currentActiveSection) {
      case "testSection1":
        return <TestSection1 />;
      case "testSection2":
        return <TestSection2 />;
      case 1:
        return <Section1 />;
      case 2:
        return <Section2 />;
      case 3:
        return <Section3 />;
      case 4:
        return <Section4 />;
      case 5:
        return <Section5 />;
      case 6:
        return <Section6 />;
      case 7:
        return <Section7 />;
      case 8:
        return <Section8 />;
      default:
        return null;
    }
  };

  return (
    <div className="form-page">
      <div className="main-navbar">
        <FormNavbar />
      </div>
      <div className="form-main-content">
        <div className="left-main-side">
          <SectionNav />
        </div>

        <div className="right-main-side">
          <h3>
            <span> OLTC DRIVE MECHANISM AUTOMATED TEST</span>

            <span className="date-data">
              {currentDay} {currentMonth},{currentYear}
            </span>
          </h3>
          {renderSection()}
        </div>
      </div>
    </div>
  );
}
