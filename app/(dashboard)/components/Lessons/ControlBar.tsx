export default function ControlBar() {
  return (
    <div className="flex flex-row w-screen justify-around bg-emerald-950">
      <button>Slides</button>
      <button>Text</button>
      <h2>Lesson Title</h2>
      {/* will end up having a 2-point slider across 3 options */}
      <input className="toggle" type="checkbox" />
    </div>
  );
}