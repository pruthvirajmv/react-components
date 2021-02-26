import "../styles.css";
import React, { useState } from "react";

const itemList = [
  { name: "neog", count: 0 },
  { name: "tanay", count: 3000 }
];

function List() {
  const [componentList, setComponentList] = useState(itemList);
  console.log(componentList);

  const likeIncrement = (item) => {
    setComponentList(
      componentList.map((ele) => {
        if (ele.name === item.name) {
          return { ...ele, count: ele.count + 1 };
        } else {
          return ele;
        }
      })
    );
  };

  return (
    <>
      <ul>
        {componentList.map((item, index) => (
          <li key={index}>
            {" "}
            {item.name} <span>{item.count} </span>
            <button onClick={() => likeIncrement(item)}> ♥ </button>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export function LikeInList() {
  return (
    <div className="LikeList">
      <h1>List with Like</h1>
      <List />
    </div>
  );
}
