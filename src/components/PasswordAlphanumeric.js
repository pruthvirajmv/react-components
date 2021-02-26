import "../styles.css";
import React, { useState } from "react";

function AlphanumericPassword() {
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState("");
  let numeric = /[0-9]/;

  return (
    <>
      <h1> Alphanumeric Password </h1>
      <div>
        Enter Password:
        <input onChange={(e) => setPassword(e.target.value)} type="password" />
      </div>
      <br></br>
      <div>
        <button
          onClick={() => setCheck(password.match(numeric) ? "" : "Error")}
        >
          submit
        </button>
        <br></br>
        <br></br>
        <div>{check}</div>
      </div>
    </>
  );
}

export function PasswordAlphanumeric() {
  return (
    <div className="PasswordAlphanumeric">
      <AlphanumericPassword />
    </div>
  );
}
