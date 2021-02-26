import "../styles.css";
import React, { useState } from "react";

function DisableSubmit() {
  let flag = true;
  const [confirm, setConfirm] = useState("");
  const [reconfirm, setReconfirm] = useState("");
  if (confirm === reconfirm) {
    flag = false;
    console.log(confirm);
  }

  return (
    <>
      <h1>Disable Submit </h1>
      <table style={{ margin: "auto" }}>
        <tbody>
          <tr>
            <td>New Password:</td>
            <td>
              <input
                type="password"
                onChange={(e) => setConfirm(e.target.value)}
              ></input>
            </td>
          </tr>

          <tr>
            <td>Re-enter Password:</td>
            <td>
              <input
                type="password"
                onChange={(e) => setReconfirm(e.target.value)}
              ></input>
            </td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <button disabled={flag}>submit</button>
    </>
  );
}

export function SubmitDisable() {
  return (
    <div className="SubmitDisable">
      <DisableSubmit />
    </div>
  );
}
