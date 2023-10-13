import React from "react";
import Image from "next/image";
import SignOutButton from "./SignOutButton";

export default function TopHeader() {
  return (
    <div className="sticky top-0 flex w-screen z-50 bg-emerald-950 justify-between">
      <div className="h-20 w-1/6 relative">
        <Image fill src={"/assets/Logo.svg"} alt="logo" />
      </div>
      <input type="search" className="h-15 w-1/2 m-4 rounded-md border-4" />
      <div className="h-20 w-1/6 relative">
        <Image fill src={"/assets/Logo.svg"} alt="logo" />
      </div>
      <SignOutButton />
    </div>
  );
}
