import "../styles.css";
import React, { useState } from "react";

function Cart() {
  const [add, setAdd] = useState({ Tshirt: 0, Trousers: 0, Shoes: 0 });

  var cartList = [{ name: "Tshirt" }, { name: "Trousers" }, { name: "Shoes" }];

  return (
    <>
      <div>
        <ul className="cart">
          <h3>Products List </h3>
          {cartList.map((item) => (
            <li key={item.name}>
              {" "}
              {item.name}
              <button
                styles={{ margin: "5px 10px" }}
                onClick={() =>
                  setAdd({ ...add, [item.name]: add[item.name] + 1 })
                }
              >
                add
              </button>{" "}
            </li>
          ))}
        </ul>
        <br></br>

        <ul className="cart">
          <h3>Cart List </h3>
          {cartList.map((item) => (
            <li key={item.name}>
              {" "}
              {item.name} <div>Qty in Cart - {add[item.name]}</div>{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function AddToCart() {
  return (
    <div className="App">
      <h1> Add To Cart </h1>
      <Cart />
    </div>
  );
}
