import ControlBar from "./ControlBar";
import TestLesson from "@/app/LessonsTxt/Classes_and_their_Uses.mdx";

export default function Lesson() {
  return (
    <div>
      {/* <ControlBar/> */}
      <div className="h-screen flex flex-col items-center">
        <div className="bg-orange-900 border-cyan-200 rounded-lg border-4">
          <TestLesson />
        </div>
      </div>
    </div>
  );
}
