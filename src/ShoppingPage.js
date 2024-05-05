import React, { useState } from 'react';
import axios from 'axios';

import './ShoppingPage.css';

function ShoppingPage() {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  
  const products = [
    { id: 1, name: 'iPhone 15', price: '$500', image: 'iphone.jpg', alt: 'iPhone 15', productId: '2364' },
    { id: 2, name: 'iPad Pro', price: '$800', image: 'ipad.jpg', alt: 'iPad Pro', productId: '2365' },
    { id: 3, name: 'MacBook Pro', price: '$1200', image: 'macbook.jpg', alt: 'MacBook Pro', productId: '2366' },
    { id: 4, name: 'Apple Watch Series 7', price: '$400', image: 'applewatch.jpg', alt: 'Apple Watch Series 7', productId: '2367' },
  ];

  const addToCart = (productId) => {
    const productData = {
      productId: productId,
      quantity: 1
    };

    axios.post('http://localhost:8080/cart/', productData, { withCredentials: true })
      .then(response => {
        if (response.data && response.data.success) {
          setCartCount(currentCount => currentCount + 1);
        }
      })
      .catch(error => {
        console.error('Error adding item to cart:', error);
      });
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="shopping-container">
      <h2>Welcome to Our Shop</h2>
      <div className="header">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <div className="cart-section">
          <div className="cart-icon">
            🛒 <span>{cartCount}</span>
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
      <div className="products-container">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.productId}>
            <img src={product.image} alt={product.alt} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product.productId)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingPage;
