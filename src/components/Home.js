import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/menu');
  };

  return (
    <div className="home-container">
      <h1>Welcome to Chef Food </h1>
      <p>Order your favorite meals from Chef Food!</p>
      <button className="btn btn-primary" onClick={handleOrderNow}>Order Now</button>

      <div className="about-us">
        <h2>About Us</h2>
        <p>
          At Chef Food, we are dedicated to providing you with an exceptional dining experience right at your fingertips. Our mission is to connect you with the finest restaurants and eateries in town, ensuring that you can enjoy delicious, high-quality meals from the comfort of your home.
          We take pride in curating a diverse menu that caters to all tastes and preferences, from classic favorites to unique culinary creations. Our team is passionate about food and committed to excellence, striving to deliver your orders promptly and with the utmost care.
          With a user-friendly app and a customer-centric approach, we aim to make your food ordering experience as seamless and enjoyable as possible. Thank you for choosing Food Order – where every meal is a delight!
        </p>
      </div>

      <div className="most-ordered-items">
        <h2>Most Ordered Items</h2>
        <div className="items-list">
          <div className="item">
            <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/margherita-pizza-5.jpg" alt="Margherita Pizza" />
            <h3>Margherita Pizza</h3>
            <p>₹250</p>
          </div>
          <div className="item">
            <img src="https://i.pinimg.com/originals/57/48/f6/5748f66613de9ac009fd9337e99b6e6b.jpg" alt="Pepperoni Pizza" />
            <h3>Pepperoni Pizza</h3>
            <p>₹300</p>
          </div>
          <div className="item">
            <img src="https://healthyrecipes101.com/wp-content/uploads/2018/10/Chicken-Biryani-recipe-1080x1620.jpg" alt="Chicken Biryani" />
            <h3>Chicken Biryani</h3>
            <p>₹400</p>
          </div>
          {/* Add more items as needed */}
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>Contact us: <a href="mailto:info@ChefFood.com">info@foodorder.com</a></p>
          <p>Follow us on:
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
          </p>
          <p>&copy; 2024 Chef Food . All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
