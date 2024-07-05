import './App.css';
// import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/Landing_Page';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<Login />} /> 
            <Route path="/signup" element={<SignUp />} /> 
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
