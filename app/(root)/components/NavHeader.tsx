import React from "react";

export default function NavHeader() {
  return (
    <div className="sticky top-20 flex w-screen bg-emerald-950 h-20 text-4xl justify-around text-ltTan">
      {/* I think the next thing is to turn these into nav links and have them create/ update state to pass into the dashboard component, to update what' being rendered. I'm not sure how to make the state work though,as it's going through a layout */}
      <button>Lessons</button>
      <button>Kata</button>
      <button>Notes</button>
    </div>
  );
}
