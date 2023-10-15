import ControlBar from "./ControlBar";
import testLesson from "@/app/LessonsTxt/testLesson.mdx";

export default function Lesson() {
  return (
    <div>
      {/* <ControlBar/> */}
      <div className="h-screen flex flex-col items-center">
        <div className="bg-orange-900 border-cyan-200 rounded-lg border-4">
          <testLesson />
        </div>
      </div>
    </div>
  );
}
