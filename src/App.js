import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home';
import Register from './Componets/Register';
import Login from './Componets/Login';
import ProtectedRoutes from './Services/ProtectedRoutes';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/register" element={<Register/>}/> 
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<ProtectedRoutes />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
