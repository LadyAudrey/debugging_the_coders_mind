import React from "react";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="bg-gradient-b from-cyan-900 to-emerald-950 grid-cols-1 items-center">
      <Image
        className="content-center"
        height={500}
        width={500}
        src="/assets/Sapling.svg"
        alt="graphic of a sapling"
      ></Image>
    </div>
  );
}
