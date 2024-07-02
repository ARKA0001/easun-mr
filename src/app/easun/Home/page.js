"use client"

import "../../page.css";
import MainNavbar from "@/components/MainNavbar";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const goToForm = () => {
    console.log("Added")
    router.push("./Form")
  }

  return (
    <div className="easun-home-page">
      <MainNavbar loginpage="main-page" />
      <div className="easun-main">
        <button className="redirect-easun-form" onClick={goToForm}>
        <p>Automation Test for HMI Devices</p> <MdOutlineNavigateNext className="next-icon"/>
        </button>
      </div>
    </div>
  );
}
