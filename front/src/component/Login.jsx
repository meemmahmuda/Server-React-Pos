import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      // Simulate successful login
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{
      backgroundColor: '#f0f2f5', // Light background color for the entire page
      height: '100vh', // Full height to cover the page
      display: 'flex', // Center the login form
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '400px',
        width: '100%', // Full width for responsiveness
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Deeper shadow effect
        backgroundColor: '#fff'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>POS Login</h2>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <button type="submit" style={{
            padding: '10px',
            width: '100%',
            borderRadius: '4px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
