import React, { useState, useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";
import "./Cart.css";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const [allItems, setAllItems] = useState(ctx.cartItems);

  useEffect(() => {
    const value = ctx.cartItems.reduce(
      (result, item) => result + item.price * item.amount,
      0
    );
    setTotalAmount(value);
    setAllItems(ctx.cartItems);
  }, [ctx.cartItems]);

  const hideCart = () => {
    props.onHideCart();
  };

  const orderMeal = () => {
    if (!allItems.length) return;
    console.log("your order: \n", allItems);
  };

  const increaseAmount = (item) => {
    const items = [...ctx.cartItems];
    items.map((i) => {
      if (i.name === item.name) {
        i.amount++;
        ctx.onEditItem(item.name, i);
      }
    });
    setAllItems(ctx.cartItems);
  };

  const decreaseAmount = async (item) => {
    item.amount--;
    item.amount < 1 ? ctx.onRemoveItem(item) : ctx.onEditItem(item);
    setAllItems(ctx.cartItems);
  };

  return (
    <div className="Cart">
      <div className="cart-background" onClick={hideCart}></div>
      <div className="myCart">
        {allItems.length ? (
          <div className="cart-items">
            {allItems.map((i) => (
              <React.Fragment key={Math.random()}>
                <div className="cart-item">
                  <div className="cart-item-left-side">
                    <h3>{i.name}</h3>
                    <div>
                      <div className="cart-item-price">
                        ${(i.price * i.amount).toFixed(2)}
                      </div>
                      <div className="cart-item-amount">
                        <span>x</span> <span>{i.amount}</span>
                      </div>
                    </div>
                  </div>
                  <div className="cart-item-right-side">
                    <button onClick={() => decreaseAmount(i)}>-</button>
                    <button onClick={() => increaseAmount(i)}>+</button>
                  </div>
                </div>
                <hr />
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div>
            <h2>Your cart is empty!</h2>
          </div>
        )}
        <div className="sum-up">
          <div className="total-amount-area">
            <h3>Total Amount</h3>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <div className="sum-up-buttons">
            <button className="close-cart-btn" onClick={hideCart}>
              close
            </button>
            {allItems.length > 0 && (
              <button className="order-cart-btn" onClick={orderMeal}>
                order
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
