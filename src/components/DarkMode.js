import "../styles.css";
import React, { useState } from "react";

const Switch = () => {
  const [darkmode, setDarkMode] = useState(false);

  return (
    <div>
      <button onClick={() => setDarkMode(() => !darkmode)}>
        {darkmode ? "LightMode" : "DarkMode"}
      </button>
      <h1 className={darkmode ? "DarkMode" : "App"}> Dark Mode Text </h1>
    </div>
  );
};

export function DarkMode() {
  return (
    <div className="App">
      <Switch />
    </div>
  );
}
