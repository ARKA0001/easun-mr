"use client";

import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function CookieProvider({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userCookie = Cookies.get("user");

    if (userCookie) {
      setLoading(false); // Allow rendering if the cookie is valid
    } else {
      router.push('/auth/Login'); // Redirect if the cookie is invalid
    }
  }, [router]);

  if (loading) {
    return null; // Render nothing or a loading spinner while checking the cookie
  }

  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  );
}
