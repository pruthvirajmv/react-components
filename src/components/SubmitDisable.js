import "../styles.css";
import React, { useState } from "react";

const DisableSubmit = () => {
  const [confirm, setConfirm] = useState("");
  const [reconfirm, setReconfirm] = useState("");

  return (
    <>
      <h1>Disable Submit </h1>
      <div>
        <label>New Password: </label>
        <input
          value={confirm}
          type="password"
          onChange={(e) => setConfirm(e.target.value)}
        ></input>
      </div>
      <br></br>
      <div>
        <label>Re-enter Password: </label>
        <input
          value={reconfirm}
          type="password"
          onChange={(e) => setReconfirm(e.target.value)}
        ></input>
      </div>
      <br></br>
      <button
        disabled={reconfirm.length > 0 && confirm === reconfirm ? false : true}
      >
        submit
      </button>
    </>
  );
};

export function SubmitDisable() {
  return (
    <div className="SubmitDisable">
      <DisableSubmit />
    </div>
  );
}
