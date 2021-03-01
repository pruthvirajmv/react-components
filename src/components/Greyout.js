import "../styles.css";
import React, { useState } from "react";

const Cart = () => {
  const [cartList, setCartList] = useState([]);

  const productList = [
    { name: "Tshirt", count: 1, stock: 2, greyout: false },
    { name: "Trousers", count: 1, stock: 4, greyout: false },
    { name: "Shoes", count: 1, stock: 2, greyout: false }
  ];

  const cartUpdate = (select) => {
    if (cartList.some((item) => item.name === select.name)) {
      let update = cartList.reduce((cart, item) => {
        if (item.name === select.name) {
          if (item.count < item.stock) {
            cart.push({ ...item, count: item.count + 1, greyout: false });
          } else {
            cart.push({ ...item, greyout: true });
          }
        } else {
          cart.push(item);
        }
        return cart;
      }, []);
      setCartList(update);
    } else {
      //cartList.push(select); react will not re-reneder for push
      setCartList([...cartList, select]);
    }
  };

  const removeItem = (select) => {
    if (cartList.some((item) => item.name === select.name)) {
      let update = cartList.reduce((cart, item) => {
        // console.log(cart);
        // console.log(item);
        if (item.name === select.name) {
          if (item.count > 1)
            cart.push({ ...item, count: item.count - 1, greyout: false });
        } else {
          //console.log(item);
          cart.push(item);
        }
        //console.log(cart);
        return cart;
      }, []);
      //console.log(update);
      setCartList(update);
    }
  };
  //console.log(cartList);

  return (
    <>
      <div>
        <h1> Proucts </h1>
        <ul>
          {productList.map((item) => (
            <li
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: cartList.some(
                  (cartitem) => item.name === cartitem.name && cartitem.greyout
                )
                  ? "grey"
                  : ""
              }}
              key={item.name}
            >
              {" "}
              {item.name}
              <button
                disabled={
                  cartList.some(
                    (cartitem) =>
                      item.name === cartitem.name && cartitem.greyout
                  )
                    ? true
                    : false
                }
                onClick={() => cartUpdate(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>

        <h1> Your Cart </h1>

        <ul className="cart">
          {cartList.map((item) => (
            <li key={item.name}>
              {" "}
              {item.name}{" "}
              <div>
                Qty in Cart -{" "}
                <button onClick={() => removeItem(item)}>-</button> {item.count}{" "}
                <button
                  disabled={item.greyout}
                  onClick={() => cartUpdate(item)}
                >
                  +
                </button>
              </div>{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export function GreyOut() {
  return (
    <div className="App">
      <Cart />
    </div>
  );
}
