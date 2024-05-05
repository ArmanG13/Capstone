import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [uniqueId, setUniqueId] = useState(''); // State for the unique ID
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
      uniqueId: uniqueId, // Ensure this is included in your request body
    };

    axios.post('http://localhost:8080/customer/signup', userData)
      .then(response => {
        console.log('Signup successful', response.data);
        navigate('/cart'); // Redirect to the cart or another page upon successful signup
      })
      .catch(error => {
        console.error('There was an error during signup', error);
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
        <div>
          <label>Unique ID:</label>
          <input
            type="text"
            value={uniqueId}
            onChange={(e) => setUniqueId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;
