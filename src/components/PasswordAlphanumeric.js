import "../styles.css";
import React, { useState } from "react";

const AlphanumericPassword = () => {
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState("");
  const numeric = /[0-9]/;

  return (
    <>
      <h1> Alphanumeric Password </h1>
      <div>
        <label>Enter Password: </label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" />
      </div>
      <br></br>
      <div>
        <button
          onClick={() =>
            setCheck(
              password.match(numeric)
                ? "Alphanumeric criteria passed"
                : "No alpha character/s in password"
            )
          }
        >
          submit
        </button>

        <p>{check}</p>
      </div>
    </>
  );
};

export function PasswordAlphanumeric() {
  return (
    <div className="PasswordAlphanumeric">
      <AlphanumericPassword />
    </div>
  );
}
