import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <h2>React Hooks - Increment</h2>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
}

export default App;
