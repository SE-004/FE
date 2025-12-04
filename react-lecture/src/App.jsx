import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const name = "John Doe";
  const age = 20;
  const batchName = "SE#04";

  const paragraphStyle = { fontSize: "2rem", color: "gray" };

  return (
    <>
      <Navbar logo={batchName} />
      <Navbar logo="SE#03" />
      <h1 className="main-header"> Hello World </h1>
      <p style={paragraphStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugit,
        inventore eos asperiores sequi odio velit maxime ea ad minus labore
        placeat explicabo magni repellat error quasi et itaque aliquid.
      </p>

      <p>
        Hello i am {name.toUpperCase()}, and i am {age} years old.
      </p>
    </>
  );
}

export default App;
