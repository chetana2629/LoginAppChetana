import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    password: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if (loggedUser && loggedUser.name === input.name && loggedUser.password === input.password) {
      localStorage.setItem('loggedin', 'true'); // Store 'true' as a string
      alert('Login Successful!');
      navigate('/'); // Add navigation to the next page
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h2>Login</h2>

          <div className="input-box">
            {/* User icon */}
            <i className="bx bxs-user"></i>
            <input
              name="name"
              value={input.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your username"
              required
            />
            <br /><br />

            {/* Lock icon */}
            <i className="bx bxs-lock-alt"></i>
            <input
              name="password"
              value={input.password}
              onChange={handleChange}
              type="password" // Use password type for security
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forget password?</a>
          </div>

          <div className="registration-link">
            <p>Don't have an account? <Link to="/register">Register</Link></p>
          </div>

          <button onClick={handleLogin}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Login;
