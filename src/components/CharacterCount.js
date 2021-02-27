import "../styles.css";
import React, { useState } from "react";

const CharacterCounter = () => {
  const [count, setCount] = useState("");

  return (
    <>
      <h1>Character Counter </h1>
      <div>
        <textarea
          value={count}
          maxLength="10"
          type="text"
          onChange={(e) => setCount(e.target.value)}
          style={{
            maxHeight: "100px",
            maxWidth: "300px",
            minHeight: "100px",
            minWidth: "300px"
          }}
        ></textarea>
      </div>
      <div> Max. character allowed : 10 </div>
      <div> Remaining character count : {10 - count.length} </div>
    </>
  );
};

export function CharacterCount() {
  return (
    <div className="CharacterCounter">
      <CharacterCounter />
    </div>
  );
}
