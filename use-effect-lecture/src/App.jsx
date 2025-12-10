import { useEffect, useState } from "react";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemon(data.results);
        setNext(data.next);
        setPrev(data.previous);
      })
      .catch(console.error);
  }, [url]);

  return (
    <div className="">
      {pokemon.map((p) => (
        <div key={p.name}>{p.name}</div>
      ))}

      <div className="space-x-2">
        <button
          disabled={!next}
          className="rounded bg-emerald-500 px-2 py-1 disabled:bg-gray-200"
          onClick={(e) => {
            setUrl(next);
          }}
        >
          Next
        </button>
        <button
          className="rounded bg-emerald-500 px-2 py-1 disabled:bg-gray-200"
          disabled={!prev}
          onClick={(e) => {
            setUrl(prev);
          }}
        >
          Prev
        </button>
      </div>
    </div>
  );
};

export default App;
