import "../styles.css";
import React, { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState([]);
  // const [complete, setComplete] = useState(false);

  const addTask = () => {
    if (task.length > 0) {
      if (!todoList.some((item) => item.name === task))
        setTodoList([...todoList, { name: task, status: false }]);
    }
    setTask([]);
    //console.log(task);
  };

  const completeTask = (task) => {
    // console.log(task);
    let updatedList = todoList.map((item) => {
      if (item.name === task.name) {
        return { ...item, status: !item.status };
      } else return item;
    });
    setTodoList(updatedList);
  };

  const removeTask = (task) => {
    //console.log(task);
    if (task.status) {
      let updatedList = todoList.reduce((list, item) => {
        if (task.name !== item.name) {
          //console.log(item.status);
          list.push(item);
        }
        return list;
      }, []);
      setTodoList(updatedList);
    }
  };

  //console.log(todoList);

  return (
    <div className="Todo">
      <input
        placeholder="Enter your to do"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />{" "}
      <button onClick={addTask}>Do it</button>
      <h1> Your Do List </h1>
      <div style={{ marginTop: "-20px", fontSize: "0.7rem" }}>
        (click on task when you're done)
      </div>
      <ol>
        {todoList.map((item, index) => (
          <li key={index}>
            {/* <ShowList name={item} /> */}
            <span
              style={{
                textDecoration: item.status ? "line-through" : "",
                cursor: "pointer"
              }}
              onClick={() => completeTask(item)}
            >
              {item.name}
            </span>
            <span
              style={{
                cursor: "pointer"
              }}
              onClick={() => removeTask(item)}
            >
              {" "}
              🚮
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

// const ShowList = ({ name }) => {
//   const [complete, setComplete] = useState(false);

//   return (
//     <>
//       <p
//         style={{
//           textDecoration: complete ? "line-through" : "",
//           cursor: "pointer"
//         }}
//         onClick={() => setComplete(() => !complete)}
//       >
//         {name}
//       </p>
//     </>
//   );
// };

export function TodoApp() {
  return (
    <div className="App">
      <h1> Do It </h1>
      <Todo />
    </div>
  );
}
