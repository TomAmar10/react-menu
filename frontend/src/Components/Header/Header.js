import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import "./Header.css";

const Header = (props) => {
  const ctx = useContext(CartContext);
  const count = ctx.cartItems.reduce((result, item) => result + item.amount, 0);
  const [btnStyle, setBtnStyle] = useState("");

  useEffect(() => {
    if (!ctx.cartItems.length) return;
    setBtnStyle("bump");
    const timer = setTimeout(() => {
      setBtnStyle("");
    }, 300);

    return () => clearTimeout(timer);
  }, [ctx.cartItems]);

  const showCart = () => {
    props.onShowCart();
  };

  return (
    <div className="Header">
      <div>Tom's place</div>
      <div>
        <button onClick={showCart} className={btnStyle}>
          <img src={require("../../images/cart.png")} alt="" /> Your Cart
          <span>{count}</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
