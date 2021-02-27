import "../styles.css";
import React, { useState } from "react";

const PasswordMatch = () => {
  const [confirm, setConfirm] = useState("");
  const [reconfirm, setReconfirm] = useState("");
  const [check, setCheck] = useState("");

  //console.log(confirm, reconfirm);
  return (
    <>
      <h1>Password Match </h1>
      <div>
        <label>New Password: </label>
        <input
          //value={confirm}
          type="password"
          onChange={(e) => setConfirm(e.target.value)}
        ></input>
      </div>
      <br></br>
      <div>
        <label>Re-Enter Password: </label>

        <input
          //value={reconfirm}
          type="password"
          onChange={(e) => setReconfirm(e.target.value)}
        ></input>
      </div>
      <br></br>
      <button
        onClick={() =>
          setCheck(confirm === reconfirm ? "Successful" : "Not a match")
        }
      >
        submit
      </button>
      <p>Passoward Reset Status: {check}</p>
    </>
  );
};

export function MatchPassword() {
  return (
    <div className="MatchPassword">
      <PasswordMatch />
    </div>
  );
}
