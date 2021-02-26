import React, { useState } from "react";
import "../styles.css";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Simple Counter </h1>
      <button
        onClick={() => {
          // c = c - 1;
          //return setCount(count - 1);
          return setCount((count) => count - 1);
        }}
      >
        {" "}
        -{" "}
      </button>
      <span> {count} </span>
      <button
        onClick={() => {
          return setCount(count + 1);
        }}
      >
        {" "}
        +{" "}
      </button>
    </>
  );
}

export function SimpleCounter() {
  return (
    <div className="SimpleCounter">
      <Counter />
    </div>
  );
}
