import "../styles.css";
import React, { useState } from "react";

const ShowPassword = () => {
  const [status, setStatus] = useState(false);

  return (
    <>
      <h1>Show Password</h1>
      <div>
        <label>Password: </label>
        <input type={status ? "text" : "password"}></input>
        <span> </span>
        <button onClick={() => setStatus(!status)}>
          {status ? "hide 🙈" : "show 🙉"}
        </button>
      </div>
    </>
  );
};

export function PasswordShow() {
  return (
    <div className="PasswordShow">
      <ShowPassword />
    </div>
  );
}
