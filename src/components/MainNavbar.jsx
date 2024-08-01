"use client";

import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function MainNavbar() {
  const router = useRouter();

  const handleLogOut = async () => {
    console.log("Log out is pressed");
    const response = await fetch("/api/easun/Login");
    const result = await response.json();
    if (result.message === "OK") {
      console.log("Logged out");
      router.push("/Login");
    }
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
