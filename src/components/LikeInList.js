import "../styles.css";
import React, { useState } from "react";

const itemList = [
  { name: "neog", count: 0 },
  { name: "tanay", count: 3000 }
];

const List = () => {
  const [componentList, setComponentList] = useState(itemList);
  //console.log(componentList);

  const likeIncrement = (component) => {
    setComponentList(
      componentList.map((item) => {
        if (item.name === component.name) {
          return { ...item, count: item.count + 1 };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <>
      <ul>
        {componentList.map((component, index) => (
          <li key={index}>
            {" "}
            {component.name} <span>{component.count} </span>
            <button
              style={{
                color: "red"
              }}
              onClick={() => likeIncrement(component)}
            >
              {" "}
              ♥{" "}
            </button>{" "}
          </li>
        ))}
      </ul>
    </>
  );
};

export function LikeInList() {
  return (
    <div className="LikeList">
      <h1>List with Like</h1>
      <List />
    </div>
  );
}
