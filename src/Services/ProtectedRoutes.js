import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem('loggedin');

  useEffect(() => {
    if (auth !== 'true') {
      navigate('/login'); // Navigate to login page if not authenticated
    }
  }, [auth, navigate]);

  return auth === 'true' ? <Outlet /> : null;
};

export default ProtectedRoutes;
