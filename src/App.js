import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      setLoad((load) => (load > 99 ? clearInterval(int) : load + 1));
    }, 60);
    return () => clearInterval(int);
  }, []);

  const scale = (num, in_min, in_max, out_min, out_max) =>
    ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

  return (
    <div className="App">
      <section
        className="bg"
        style={{ filter: `blur(${scale(load, 0, 100, 30, 0)}px)` }}
      />
      <div
        className="loading-text"
        style={{ opacity: scale(load, 0, 100, 1, 0) }}
      >
        {load}%
      </div>
    </div>
  );
};

export default App;
