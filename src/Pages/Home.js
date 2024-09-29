import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate('/login');
  };

  return (
    <div className="home-container">
      <div className="card">
        <h3>Welcome, {userName?.name}</h3>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
