import "../styles.css";
import React, { useState } from "react";

const Home = () => {
  return (
    <>
      <h1>neog.camp</h1>
      <p>
        neog.camp The camp is growing and so is this website. Depending on when
        you are visiting this site you should choose wisely.{" "}
      </p>
    </>
  );
};
const About = () => {
  return (
    <>
      <h1>i am new here </h1>
      <p>
        This camp is a place where you can start your programming journey from
        zero. In 6 months, we aim to train everyone to be industry-ready.
      </p>
    </>
  );
};

const Portfolio = () => {
  return (
    <>
      <h1>full stack roadmap</h1>
      <p>
        Welcome to the 16-week course of levelOne. Even if you're not part of
        neogcamp you can still use this as a signpost to learn individual items
        listed.{" "}
      </p>
    </>
  );
};

const compoList = [
  { name: "Home", compo: Home() },
  { name: "About", compo: About() },
  { name: "Portfolio", compo: Portfolio() }
];

export function SwitchTabs() {
  const [selectCompo, setSelectCompo] = useState(Home());

  return (
    <div className="App">
      {compoList.map((index) => (
        <button
          key={index.name}
          style={{ marginRight: "20px" }}
          onClick={() => setSelectCompo(() => index.compo)}
        >
          {index.name}
        </button>
      ))}
      {selectCompo}
    </div>
  );
}
