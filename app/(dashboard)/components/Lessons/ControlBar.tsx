export default function ControlBar() {
  return (
    <div className="sticky flex flex-row top-40 w-full justify-around bg-emerald-950">
      <button>Slides</button>
      <button>Text</button>
      <h2>Lesson Title</h2>
      {/* will end up having a 2-point slider across 3 options */}
      <input className="toggle" type="checkbox" />
    </div>
  );
}
