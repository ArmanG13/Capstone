import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function LoginPage() {
  // State hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare the login data
    const loginData = {
      email: email,
      password: password
    };

    // Make a POST request to the login endpoint
    axios.post('http://localhost:8080/customer/login', loginData)
      .then(response => {
        // Handle successful login response
        console.log('Login successful', response.data);
        navigate('/cart');
      })
      .catch(error => {
        // Handle login error
        console.error('Login error', error);
        setError('Invalid email or password. Please try again.'); // Set error message
      });
  };

  return (
    <div>
      <h2 style={{ marginLeft: '20px' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginLeft: '20px' }}>
          <label style={{ color: 'blue' }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginLeft: '20px' }}>
          <label style={{ color: 'blue' }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message" style={{ color: 'red', marginTop: '10px' }}>{error}</div>} {/* Display error message */}
        <button type="submit" style={{ marginLeft: '20px' }}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
