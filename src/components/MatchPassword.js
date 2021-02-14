import "../styles.css";
import React, { useState } from "react";

function PasswordMatch() {
  const [confirm, setConfirm] = useState("");
  const [reconfirm, setReconfirm] = useState("");

  const [check, setCheck] = useState("");

  return (
    <>
      <h1>Password Match </h1>
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
      <button onClick={() => setCheck(confirm !== reconfirm ? "" : "Error")}>
        submit
      </button>
      <br></br>
      <br></br>
      <div>{check}</div>
    </>
  );
}

export default function MatchPassword() {
  return (
    <div className="MatchPassword">
      <PasswordMatch />
    </div>
  );
}
