"use server"

import { cookies } from "next/headers";

export default async function LoginCall(username, password) {
  if (username === "easunmr" && password === "easunmr@1234") {
    cookies().set("user", username);
    console.log("User is now logged in");
    return true;
  } else {
    // throw new Error("Invalid Username and Password");
    return false;
  }
}
