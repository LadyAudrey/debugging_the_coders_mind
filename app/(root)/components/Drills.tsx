import IDEsandbox from "./IDEsandbox";

export default function Drills() {
  return (
    <div>
      <div>
        {/* contains  prompt from drills and IDE sandbox, with buttons to collapse/ expand etc*/}
        <p>
          here's your prompt; eventually this will be created based on logics
        </p>
        <input className="toggle" type="checkbox" />
      </div>
      <IDEsandbox />
    </div>
  );
}
