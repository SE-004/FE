const Counter = ({ counter, setCounter }) => {
  return (
    <div>
      <p> Counter: {counter}</p>
      <button
        onClick={(e) => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        onClick={(e) => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
    </div>
  );
};


export default Counter