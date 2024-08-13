import { NextResponse } from "next/server";
import { cookies,  } from "next/headers";

export async function GET(){
  cookies().delete("user");
  return NextResponse.json({ message: "OK" }, { status: 200 });
}

