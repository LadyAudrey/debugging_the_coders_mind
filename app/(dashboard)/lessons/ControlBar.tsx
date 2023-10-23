export default function ControlBar() {
  return (
    <div className="sticky flex flex-row justify-center top-40 w-full bg-emerald-950">
      {/* until I create the slide option, having these buttons is irrelevant, I want the h2 centered and the checkbox on the right*/}
      {/* <button>Slides</button>
      <button>Text</button> */}
      <h2>Lesson Title</h2>
      {/* will end up having a 2-point slider across 3 options */}
      <input className="toggle" type="checkbox" />
    </div>
  );
}
