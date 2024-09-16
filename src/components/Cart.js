import React from 'react';
import { useCart } from '../CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return <div className="cart-empty">Cart is empty</div>;
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-item-img" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ₹{item.price.slice(1) * item.quantity}</p>
              <button className="remove-btn" onClick={() => removeFromCart(item.name)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
