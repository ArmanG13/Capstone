import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file here

function HomePage() {
  const [products, setProducts] = useState([]);

  
  return (
    <div className="home-container">
      <h1 className="home-header">Welcome to VanVista</h1>
      <div className="products-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <Link to={`/product/${product.id}`} className="product-link">
              {product.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="auth-links">
        <Link to="/login" className="auth-link">Login</Link> |
        <Link to="/signup" className="auth-link">Sign Up</Link>
      </div>
    </div>
  );
}

export default HomePage;
