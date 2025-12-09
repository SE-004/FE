import './index.css';

import { useState } from 'react';

const LightBulb = ({ isOn }) => {
  return (
    <div className={isOn ? 'container night' : 'container'}>
      <div className="bulb-light">
        <div id="light" />
        <div id="bulb">
          <div className="bulb-top">
            <div className="reflection" />
          </div>
          <div className="bulb-middle-1" />
          <div className="bulb-middle-2" />
          <div className="bulb-middle-3" />
          <div className="bulb-bottom" />
        </div>

        <div id="base">
          <div className="screw-top" />
          <div className="screw-a" />
          <div className="screw-b" />
          <div className="screw-a" />
          <div className="screw-b" />
          <div className="screw-a" />
          <div className="screw-b" />
          <div className="screw-c" />
          <div className="screw-d" />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isOn, setIsOn] = useState(false);
  const [counter, setCounter] = useState(0);
  const limit = 10;

  return (
    <>
      <button
        disabled={counter >= limit && !isOn}
        onClick={(e) => {
          if (counter >= limit && !isOn) {
            return;
          }

          setIsOn(!isOn);
          if (!isOn) {
            setCounter(counter + 1);
          }
        }}
      >
        {counter >= limit && !isOn ? 'locked' : isOn ? 'Turn off' : 'Turn on'}
      </button>
      <button
        disabled={!counter}
        onClick={(e) => {
          setCounter(0);
        }}
      >
        Reset
      </button>
      <button
        disabled={counter < limit}
        onClick={(e) => {
          setCounter(0);
        }}
      >
        {counter >= limit ? 'Reset Counter' : counter}
      </button>
      <LightBulb isOn={isOn} />
    </>
  );
};

export default App;
