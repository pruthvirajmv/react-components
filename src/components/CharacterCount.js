import "../styles.css";
import React, { useState } from "react";

function CharacterCounter() {
  const [count, setCount] = useState(0);

  function CharCounter(e) {
    let char = e.target.value;
    setCount(char.length);
  }

  return (
    <>
      <h1>Character Counter </h1>
      <div>
        <textarea
          type="text"
          onChange={CharCounter}
          style={{
            maxHeight: "100px",
            maxWidth: "300px",
            minHeight: "100px",
            minWidth: "300px"
          }}
        ></textarea>
      </div>
      <div> character count : {count} </div>
    </>
  );
}

export default function CharacterCount() {
  return (
    <div className="CharacterCounter">
      <CharacterCounter />
    </div>
  );
}
