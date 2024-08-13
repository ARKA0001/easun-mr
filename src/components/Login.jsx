"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiUser } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import "../app/page.css";
import { cookies } from "next/headers";

export default function Login() {
  const [showPassword, setShowPassword] = useState("password");
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  const handleShowPassword = () => {
    setShowPassword(showPassword === "password" ? "text" : "password");
    setIsChecked(!isChecked);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const username = data.username;
    const password = data.password;

    if (username === "easunmr" && password === "easunmr@1234") {
      cookies().set("user", username);
      console.log("User is now logged in");
      router.push("../../easun/Home");
    } else {
      throw new Error("Invalid Username and Password");
    }

    // const response = await fetch("/api/easun/Login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: username,
    //     password: password,
    //   }),
    // });

    // const result = await response.json();
    // if (result.message === "OK") {
    // }
  };
  return (
    <div className="easun-login-page">
      <div className="login-info">
        <div className="left-login-section"></div>
        <div className="right-login-section">
          <div className="login-heading">
            <img src="../easun-logo.png" className="easun-logo" />
            <h1>Welcome Back</h1>
            <p className="login-description">
              Login with your username and password
            </p>
          </div>
          <div>
            {errors.root && (
              <div className="error-message-container">
                {errors.root.message}
              </div>
            )}
            {errors.email && (
              <p className="error-message-container">{errors.email.message}</p>
            )}
            {errors.password && (
              <div className="error-message-container">
                {errors.password.message}
              </div>
            )}
          </div>
          <div className="input-fields">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="username input-field">
                <FiUser className="input-icon" />
                <input
                  type="text"
                  {...register("username", {
                    required: "Username is required",
                  })}
                  className="username user-text-input"
                  placeholder="Username"
                />
              </div>

              <div className="password input-field">
                <MdLockOutline className="input-icon" />
                <input
                  type={showPassword}
                  className="password user-text-input"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </div>

              <div className="show-password">
                <input
                  type="checkbox"
                  name="show-password"
                  id="show-password"
                  checked={isChecked}
                  onChange={handleShowPassword}
                />
                <p className="show-password" onClick={handleShowPassword}>
                  Show password
                </p>
              </div>

              <button
                className="button login-submit"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "Loading..." : "Login Now"}
                {/* Login Now */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
