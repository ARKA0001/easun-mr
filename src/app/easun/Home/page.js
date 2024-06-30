"use client"

import "../../page.css";
import MainNavbar from "@/components/MainNavbar";
import { MdOutlineNavigateNext } from "react-icons/md";

export default function Home() {
  return (
    <div className="easun-home-page">
      <MainNavbar loginpage="main-page" />
      <div className="easun-main">
        <button className="redirect-easun-form">
        <p>Automation Test for HMI Devices</p> <MdOutlineNavigateNext className="next-icon"/>
        </button>
      </div>
    </div>
  );
}
