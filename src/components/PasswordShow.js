import "../styles.css";
import React, { useState } from "react";

function ShowPassword() {
  const [show, setShow] = useState("password");
  const [status, setStatus] = useState("show 🙉");

  function toggle(e) {
    e.preventDefault(); //since using form
    if (show === "password") {
      setShow("text");
      setStatus("hide 🙈");
    } else if (show === "text") {
      setShow("password");
      setStatus("show 🙉");
    }
    e.preventDefault();
  }
  return (
    <>
      <h1>Show Password</h1>
      <form>
        <div>
          <input type={show}></input>
          <span> </span>
          <button onClick={toggle}>{status}</button>
        </div>
      </form>
    </>
  );
}

export function PasswordShow() {
  return (
    <div className="PasswordShow">
      <ShowPassword />
    </div>
  );
}

//since button used inside the form, it will refresh the page as soon as button is clicked (subnit)
