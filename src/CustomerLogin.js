import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Ensure this import is present

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
        // You can store authentication tokens or redirect the user here
      })
      .catch(error => {
        // Handle login error
        console.error('Login error', error);
        setError('Invalid email or password. Please try again.'); // Set error message
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>} {/* Display error message */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
