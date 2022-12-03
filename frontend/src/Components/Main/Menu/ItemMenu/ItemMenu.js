import React, { useContext, useState, useRef } from "react";
import CartContext from "../../../../store/cart-context";
import "./ItemMenu.css";

const ItemMenu = (props) => {
  const [amount, setAmount] = useState(1);
  const amountRef = useRef();
  const ctx = useContext(CartContext);

  const changeAmount = (e) => {
    setAmount(Number(e.target.value));
  };
  const addToCart = async () => {
    if (amountRef.current.value <= 0) return;

    const itemToCart = { ...props.item, amount: +amountRef.current.value };
    ctx.onAddItem(itemToCart);
  };

  return (
    <React.Fragment>
      <div className="ItemMenu">
        <div className="left-side">
          <h3 className="item-name">{props.item.name}</h3>
          <span className="item-describes">{props.item.describes}</span>
          <span className="item-price">{props.item.price}</span>
        </div>
        <div className="right-side">
          <div>
            <span>Amount</span>
            <input
              type="number"
              min={1}
              // value={amount}
              ref={amountRef}
              defaultValue={1}
              max={10}
              onChange={changeAmount}
            />
          </div>
          <button onClick={addToCart}>+ Add</button>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default ItemMenu;
