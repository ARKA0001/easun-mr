"use client";

import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function MainNavbar() {
  const router = useRouter();

  const handleLogOut = async () => {
    console.log("Log out is pressed");
    Cookies.remove("easun-mr-user");
    console.log("Logged out");
    router.push("/auth/Login");
  };

  return (
    <div className="main-navbar">
      <div className="easun-logo">
        <img src="../easun-logo.png" alt="main logo" />
      </div>
      <div className="log-out">
        <button onClick={handleLogOut}>
          {" "}
          <FiLogOut className="logout-icon" />
          <p>Log out</p>
        </button>
      </div>
    </div>
  );
}
