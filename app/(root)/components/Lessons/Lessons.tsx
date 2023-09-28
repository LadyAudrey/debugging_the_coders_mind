import React from "react";
import IDEsandbox from "../IDEsandbox";
import Lesson from "./Lesson";

export default function Lessons() {
  return (
    <div className="text-white h-full flex flex-col">
      <Lesson />
      {/* this component has 4 buttons, each to change the time of media or to bring up the coding sandbox. The content changes based on which button is activated. It also has an expand toggl<div>page</div>e, to make the current media full screen */}
      {/* <div>I hold the media, updating based on the buttons below</div> */}
      {/* <div className="flex flex-row">
        <button>
          Vi<div>page</div>deo
        </button>
        <button>Slides</button>
        <button>Transcript</button>
        <button>Coding Sandbox</button>
        <input className="toggle" type="checkbox" />
      </div> */}
    </div>
  );
}
