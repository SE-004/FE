import { useState } from "react";

const Counter = ({ initialValue = 0 }) => {
  const [counter, setCounter] = useState(initialValue);

  return (
    <div className="border rounded w-sm px-4 py-2 bg-zinc-200 space-y-2">
      <p className="text-xl">Counter:{counter}</p>
      <div className="flex gap-2">
        <button
          className="border rounded p-2 bg-emerald-200"
          onClick={(e) => {
            setCounter(counter + 1);
          }}
        >
          Increment +
        </button>
        <button
          className="border rounded p-2 bg-red-200"
          onClick={(e) => {
            setCounter((prev) => prev - 1);
          }}
        >
          Decrement -
        </button>
      </div>
    </div>
  );
};

export default Counter;
