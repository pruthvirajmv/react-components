import "../styles.css";
import React, { useState } from "react";

const Toast = ({ type, color }) => {
  const [showToast, setShowToast] = useState(true);

  return (
    <div>
      <div>
        <button onClick={() => setShowToast((showToast) => !showToast)}>
          {type}
        </button>
      </div>
      <div
        style={{
          display: showToast ? "none" : "",
          border: "1px solid",
          borderRadius: "8px",
          width: "200px",
          paddingTop: "12px",
          position: "relative",
          backgroundColor: color,
          top: "10px"
        }}
      >
        <button
          style={{ position: "absolute", top: "2px", right: "2px" }}
          onClick={() => setShowToast((showToast) => !showToast)}
        >
          {" "}
          X
        </button>
        <p> {type} Toast is here </p>
      </div>
    </div>
  );
};

export function Toaster() {
  return (
    <div className="App">
      <div styles={{ position: "relative" }}>
        <Toast type="Error" color="rgba(239, 68, 68)" />{" "}
        <Toast type="Success" color="rgba(52, 211, 153)" />{" "}
        <Toast type="Warning" color="rgba(252, 211, 77)" />
      </div>
    </div>
  );
}
