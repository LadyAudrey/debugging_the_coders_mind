import React from "react";
import ClientProgress from "./ClientProgress";
import Drills from "./Drills";
import Lessons from "./Lessons";
import LastLesson from "./LastLesson";
import Notes from "./Notes";

export default function Dashboard() {
  return (
    <div className="bg-midGreen flex justify-around h-fluid">
      {/* which one of these are displayed depends on which of the navigation buttons are activated--
      if Dashboard{render LastLesson and ClientProgress}
      if Lessons{render Lessons and Notes}
      if Kata{render Drill and Notes}
      if(Notes){render Notes} */}
      <div className="card">
        {/* <LastLesson /> */}
        <Drills />
      </div>
      <div className="card">
        <Notes />
        {/* <ClientProgress /> */}
      </div>
    </div>
  );
}
