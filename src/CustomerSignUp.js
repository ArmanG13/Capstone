import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [uniqueId, setUniqueId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
      uniqueId: uniqueId,
    };

    axios.post('http://localhost:8080/customer/signup', userData)
      .then(response => {
        console.log('Signup successful', response.data);
        navigate('/cart');
      })
      .catch(error => {
        console.error('There was an error during signup', error);
      });
  };

  return (
    <div>
      <h2 style={{ marginLeft: '20px' }}>Sign Up</h2>
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
        <div style={{ marginLeft: '20px' }}>
          <label style={{ color: 'blue' }}>Username:</label>
          <input
            type="text"
            value={uniqueId}
            onChange={(e) => setUniqueId(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginLeft: '20px' }}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;
