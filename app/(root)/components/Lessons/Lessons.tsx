import React from "react";
import ControlBar from "./ControlBar";
import Lesson from "./Lesson";
import Notes from "../Notes";
import IDEsandbox from "../IDEsandbox";

export default function Lessons() {
  return (
    <div className="min-top-40 h-full flex flex-col items-center bg-gradient-to-b from-cyan-900 to-emerald-950 text-white">
      <ControlBar />
      <div className="flex flex-row m-5 w-4/5 h-full">
        <Lesson />
        <Notes />
      </div>
    </div>
  );
}
