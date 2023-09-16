import React from "react";

import IDEsandbox from "./IDEsandbox";

export default function Lessons() {
  return (
    <div>
      {/* this component has 4 buttons, each to change the time of media or to bring up the coding sandbox. The content changes based on which button is activated. It also has an expand toggle, to make the current media full screen */}
      <div>I hold the media, updating based on the buttons below</div>
      <div className="flex flex-row">
        <button>Video</button>
        <button>Slides</button>
        <button>Transcript</button>
        <button>Coding Sandbox</button>
        <input className="toggle" type="checkbox" />
      </div>
    </div>
  );
}
