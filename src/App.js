import './App.css';
// import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/Landing_Page';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import FindDoctorSearch from './Components/BookingConsultation/FindDoctorSearch/FindDoctorSearch';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';
import Notification from './Components/Notification/Notification';
import Reviews from './Components/Reviews/Reviews';
import ProfileForm from './Components/ProfileCard/ProfileCard';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Notification>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<Login />} /> 
            <Route path="/signup" element={<SignUp />} /> 
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/booking-consultation" element={<BookingConsultation />} /> {/* Route for searching doctors */}
            <Route path='/finddoctor' element={<FindDoctorSearch />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path='/profile' element={<ProfileForm />} />
            <Route path='/reports' element={<ReportsLayout />} /> 
        </Routes>
        </Notification>
        </BrowserRouter>
    </div>
  );
}

export default App;
