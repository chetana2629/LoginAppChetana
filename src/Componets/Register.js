import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
// Import FontAwesome components and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh on form submission
    // Store user data in localStorage
    localStorage.setItem("user", JSON.stringify(input));
    
    // Navigate to the login page
    navigate("/login");
    
    console.log('Form submitted with data:', input);

    setInput({
      name: "",
      email: "",
      password: ""
    });
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h2>Register</h2>

          {/* Form with onSubmit */}
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              {/* FontAwesome User icon */}
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input 
                name="name"
                value={input.name}
                onChange={handleChange}
                type="text" 
                placeholder="Enter your username" 
                required
              />
              <br /><br />

              {/* FontAwesome Email icon */}
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input 
                name="email"
                value={input.email}
                onChange={handleChange}
                type="email" 
                placeholder="Enter your email" 
                required
              />
              <br /><br />

              {/* FontAwesome Lock icon */}
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input 
                name="password"
                value={input.password}
                onChange={handleChange}
                type="password" 
                placeholder="Enter your password" 
                required
              />
            </div>
            
            <button type="submit">Submit</button> {/* Button triggers handleSubmit */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
