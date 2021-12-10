import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Demo } from "./TextAudio";

function App() {
  const [count, setCount] = useState(0);

  return (
    <p>
      <Demo />
    </p>
  );
}

export default App;
