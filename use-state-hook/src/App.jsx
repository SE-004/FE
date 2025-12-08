import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [show, setShow] = useState(true);
  const [value, setvalue] = useState("");

  return (
    <>
      <h1 className="text-2xl">Counters:</h1>
      <div className="space-y-4">
        <Counter />
        <Counter initialValue={10} />
        <Counter initialValue={20} />
      </div>

      <div className="my-4 flex flex-col w-sm">
        <button
          className="border rounded px-2 py-1 bg-purple-300"
          onClick={(e) => {
            setShow(!show);
          }}
        >
          {show ? "Hide Paragraph" : "Show Paragraph"}
        </button>
        {show && (
          <div className="border border-black rounded shadow p-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              perspiciatis placeat quos aliquam, vero repellendus commodi fugiat
              aspernatur dignissimos in corrupti illum consectetur itaque
              dolorum sequi aperiam eaque magni modi! das
            </p>
          </div>
        )}
      </div>
      <input
        className="border p-2"
        type="text"
        onChange={(e) => {
          setvalue(e.target.value);
        }}
      />
      <p>Preview: {value}</p>
    </>
  );
}

export default App;
