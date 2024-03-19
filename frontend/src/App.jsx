import  { Fragment } from 'react';
import { Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/nav/Navbar.jsx';
import MobileNavbar from './components/MobileNavbar.jsx';
import Register from './pages/auth/Register.jsx';
import Dashboard from "./pages/admin/Dashboard.jsx"; // Assuming you have a Register component
import './App.css'

function App() {
    const location = useLocation();

    // Array of routes where you don't want to display Navbar and MobileNavbar
    const excludedRoutes = ['/dashboard']; // Add more routes if needed

    // Function to check if current location matches any route in excludedRoutes
    const shouldDisplayNavbar = !excludedRoutes.some(route => location.pathname.includes(route));

    return (
        <>
            {shouldDisplayNavbar && (
                <Fragment>
                    <Navbar />
                    <MobileNavbar />
                </Fragment>
            )}
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path='/dashboard' element={<Dashboard/>} />
                {/* Define more routes here */}
            </Routes>
        </>
    );
}

export default App;