import './App.css';
import './HomePage.css';
import './LoginPage.css';
//import './CustomerSignUp.css';

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage.js";
import ShoppingPage from "./ShoppingPage.js";
//import CartPage from "./CartPage";
//import CheckoutPage from "./CheckoutPage";
import LoginPage from "./CustomerLogin.js";
import SignupPage from "./CustomerSignUp.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cart" element={<ShoppingPage />} /> {/* Add the shopping page route */}
      </Routes>
    </Router>
  );
}

export default App;
