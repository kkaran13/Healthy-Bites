import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';
import BMIPage3 from './pages/BMIPage3';
import BMIPage1 from './pages/BMIPage1';
import BMIPage2 from './pages/BMIPage2';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Planner from './pages/Planner';
import Contact from './pages/Contact';
import About from './pages/About';
import SimpleChatbot from './components/SimpleChatbot';
import Nutritioncalculator from './pages/Nutritioncalculator';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Planner" element={<Planner />} />
        <Route path="/Nutritioncalculator" element={<Nutritioncalculator />} />

        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/dashboard/BMIPage1" element={<BMIPage1 />} />
        <Route path="/dashboard/BMIPage2" element={<BMIPage2 />} />
        <Route path="/dashboard/BMIPage3" element={<BMIPage3 />} />
      </Routes>

      <SimpleChatbot />

    </div>
  );
}

export default App;
