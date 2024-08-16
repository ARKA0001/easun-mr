"use client";

import Cookies from "js-cookie";

export default function LoginCall(username, password) {
  if (username === "easunmr" && password === "easunmr@1234") {
    Cookies.set("easun-mr-user", username); // Set the cookie on the client side
    console.log("User is now logged in");
    return true;
  } else {
    return false;
  }
}
