import { NextResponse } from "next/server";
import crypto from "crypto";
import { cookies,  } from "next/headers";

export async function POST(req) {
  const data = await req.json();
  const username = data.username;
  const password = data.password;
  if (encryptCredentialsAndCompare(username, password)) {
    cookies().set("user",crypto.createHash("sha256").update(username).digest("hex"));
    return NextResponse.json({ message: "OK", data }, { status: 200 });
  } else {
    return NextResponse.json(
      { message: "Invalid Username or Passowrd" },
      { status: 200 }
    );
  }
}

export async function GET(){
  cookies().delete("user");
  return NextResponse.json({ message: "OK" }, { status: 200 });
}

const encryptCredentialsAndCompare = (username, password) => {
  const encryptedUsername = crypto.createHash("sha256").update(username).digest("hex");
  const encryptedPassword = crypto.createHash("sha256").update(password).digest("hex");
  console.log(process.env.EASUN_MR_USERNAME)
  if (
    encryptedUsername === process.env.EASUN_MR_USERNAME &&
    encryptedPassword === process.env.EASUN_MR_PASSWORD
  ) {
    return true;
  }
  return false;
};
