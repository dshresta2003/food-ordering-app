import React, { useState } from 'react';
import './Menu.css';
import { useCart } from '../CartContext'; // Adjust path if necessary

const Menu = () => {
  const { addToCart } = useCart();
  
  // Define initial menu items
  const initialMenuItems = [
    { name: "Margherita Pizza", price: "₹250", img: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/margherita-pizza-5.jpg" },
    { name: "Pepperoni Pizza", price: "₹300", img: "https://i.pinimg.com/originals/57/48/f6/5748f66613de9ac009fd9337e99b6e6b.jpg" },
    { name: "Cheeseburger", price: "₹200", img: "https://www.thecookingcollective.com.au/wp-content/uploads/2020/02/DSC_0369-600x860.jpg" },
    { name: "Chicken Burger", price: "₹220", img: "https://www.recipetineats.com/wp-content/uploads/2017/07/Chicken-Burgers-4.jpg" },
    { name: "Spaghetti Bolognese", price: "₹270", img: "https://www.foodelicacy.com/wp-content/uploads/2020/12/spaghetti-bolognese-plated-4.jpg" },
    { name: "Caesar Salad", price: "₹180", img: "https://tse4.mm.bing.net/th?id=OIP.w4r5rpVWHIRAdJ4u1skaIgHaLH&pid=Api&P=0&h=180" },
    { name: "French Fries", price: "₹130", img: "https://www.thespruceeats.com/thmb/IHKuXcx3uUI1IWkM_cnnQdFH-zQ=/3485x2323/filters:fill(auto,1)/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg" },
    { name: "Grilled Chicken", price: "₹300", img: "https://www.simplyrecipes.com/thmb/sSzNLyBEtqtjHlgSrvdWo2L86eU=/5156x3437/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-Chicken-LEAD-SEO-Horizontal-1b86ef1e115444ba8b6fb216f2810c7c.jpg" },
    { name: "Fish Tacos", price: "₹220", img: "https://tse1.mm.bing.net/th?id=OIP.EzGyLD3q5mYdT_Tq5Z_sxgHaFY&pid=Api&P=0&h=180" },
    { name: "Sushi Roll", price: "₹350", img: "https://www.thespruceeats.com/thmb/IyxiJdbwFaixy4iolNYTLjBmW_w=/4288x2848/filters:fill(auto,1)/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg" },
    { name: "BBQ Ribs", price: "₹500", img: "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/poulet-et-cotes-levees-bbq-bdf5dd8c.jpg" },
    { name: "Veggie Wrap", price: "₹150", img: "https://tse3.mm.bing.net/th?id=OIP.RAfgRWgQcyNhYTRJVJecLAHaE7&pid=Api&P=0&h=180" },
    { name: "Chicken Biryani", price: "₹400", img:"https://healthyrecipes101.com/wp-content/uploads/2018/10/Chicken-Biryani-recipe-1080x1620.jpg" },
    { name: "Fried Rice", price: "₹200", img: "https://i.pinimg.com/originals/83/cb/54/83cb54d2fc232727c316b0f8f1f767b0.jpg" },
    { name: "Chocolate Cake", price: "₹140", img: "https://www.mybakingaddiction.com/wp-content/uploads/2011/10/lr-0968.jpg" },
    { name: "Ice Cream Sundae", price: "₹120", img: "https://izzycooking.com/wp-content/uploads/2021/05/Raspberry-Sundae.jpg" },
  ];

  // State to manage quantity
  const [quantities, setQuantities] = useState(
    initialMenuItems.reduce((acc, item) => {
      acc[item.name] = 0; // Initialize all quantities to 1
      return acc;
    }, {})
  );

  const handleIncrement = (item) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [item.name]: prevQuantities[item.name] + 1
    }));
  };

  const handleDecrement = (item) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [item.name]: Math.max(1, prevQuantities[item.name] - 1) // Prevent going below 1
    }));
  };

  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: quantities[item.name] });
  };

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="menu-items">
        {initialMenuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.img} alt={item.name} className="menu-item-img" />
            <div className="menu-item-details">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <div className="quantity-controls">
                <button className="quantity-btn" onClick={() => handleDecrement(item)}>-</button>
                <span className="quantity">{quantities[item.name]}</span>
                <button className="quantity-btn" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
