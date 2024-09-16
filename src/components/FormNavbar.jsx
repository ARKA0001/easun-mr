"use client";

import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import Cookies from "js-cookie";

export default function FormNavbar() {
  const router = useRouter();

  const handleLogOut = async () => {
    console.log("Log out is pressed");
    Cookies.remove("easun-mr-user");

    console.log("Logged out");
    router.push("/auth/Login");
  };

  return (
    <div className="form-navbar">
      <div className="left-content">
        <button className="menu-wrapper">
          <IoMenu className="menu" />
        </button>

        <div className="easun-logo">
          <img src="../easun-logo.png" alt="main logo" />
        </div>
      </div>
      <div className="log-out right-content">
        <button onClick={handleLogOut} className="logout-button">
          {" "}
          <FiLogOut className="logout-icon" />
          <p>Log out</p>
        </button>
      </div>
    </div>
  );
}
