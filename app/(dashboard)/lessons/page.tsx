import React from "react";
import ControlBar from "./ControlBar";
import Lesson from "./Lesson";
import Notes from "../components/Notes";
import IDEsandbox from "../components/IDEsandbox";

export default function Lessons() {
  return (
    <div className="h-full flex flex-col items-center bg-gradient-to-b from-cyan-900 to-emerald-950 text-white">
      <ControlBar />
      <div className="flex flex-row justify-between m-5 h-[1000px]">
        {/* TDL - I want the dimensions to all be on the class card for these, haven't been successful in adding a responsive width to it, yet */}
        <Lesson />
        <Notes />
      </div>
    </div>
  );
}
