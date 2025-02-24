import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartSummary = ({ isCart = false }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-summary">
      {
        !isCart &&
        <Link to="/cart" style={{ color: "white" }}>
          <h3>Cart Summary:</h3>
        </Link>
      }


      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice} USD</p>

      {
        isCart && totalItems > 0 &&
        <Link to="/checkout" style={{ color: "white" }}>
          <h3>Checkout</h3>
        </Link>
      }
    </div>
  );
};

export default CartSummary;