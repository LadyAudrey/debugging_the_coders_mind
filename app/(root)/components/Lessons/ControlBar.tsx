export default function ControlBar() {
  return (
    <div className="flex flex-row w-screen justify-around bg-emerald-950">
      <button>Slides</button>
      <button>Text</button>
      <h2>Lesson Title</h2>
      <input className="toggle" type="checkbox" />
    </div>
  );
}