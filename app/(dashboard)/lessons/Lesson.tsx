import ControlBar from "./ControlBar";
import TestLesson from "@/app/LessonsTxt/Classes_and_their_Uses.mdx";

export default function Lesson() {
  return (
    <div>
      <div className="card bg-orange-950 border-cyan-200 rounded-lg border-4 prose overflow-scroll">
        <TestLesson />
      </div>
    </div>
  );
}
