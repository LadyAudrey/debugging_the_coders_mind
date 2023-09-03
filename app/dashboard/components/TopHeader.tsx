import React from "react";
import Image from "next/image";
import { SignOut } from "@supabase/supabase-js";

export default function TopHeader() {
  const { error } = await supabase.auth.signOut();
  return (
    <header className="flex  w-screen bg-dkGreen h-20 justify-between">
      <div className="h-20 w-1/6 relative">
        <Image fill src={"/assets/Logo.svg"} alt="logo" />
      </div>
      <input
        type="search"
        className="h-15 w-1/2 m-4 rounded-md border-4 border-midTan bg-ltGreen"
      />
      <div className="h-20 w-1/6 relative">
        <Image fill src={"/assets/Logo.svg"} alt="logo" />
      </div>
      <button>Sign Out</button>
    </header>
  );
}
