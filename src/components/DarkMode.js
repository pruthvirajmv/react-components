import "../styles.css";
import React, { useState } from "react";

function Switch() {
  const [darkmode, setDarkMode] = useState(false);
  let bgType = "App";
  let display = "DarkMode";

  if (darkmode) {
    bgType = "DarkMode";
    display = "LightMode";
  }

  return (
    <div>
      <button onClick={() => setDarkMode(() => !darkmode)}>{display}</button>
      <h1 className={bgType}> Dark Mode Text </h1>
    </div>
  );
}

export function DarkMode() {
  return (
    <div className="App">
      <Switch />
    </div>
  );
}
