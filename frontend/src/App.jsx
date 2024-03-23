import  { Fragment } from 'react';
import { Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/nav/Navbar.jsx';
import MobileNavbar from './components/MobileNavbar.jsx';
import Register from './pages/auth/Register.jsx';
import Dashboard from "./pages/admin/Dashboard.jsx";
import Drriad from "./pages/drriad/Dashboard.jsx";
import './App.css'
import UpdateCategorie from "./update/UpdateCategorie.jsx";
import Profile from "./pages/auth/Profile.jsx";

function App() {
    const location = useLocation();

    const excludedRoutes = ['/dashboard' , '/editecategory'];

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
                <Route path='/editecategory/:id' element={<UpdateCategorie/>}/>
                <Route path='/profile/:id'  element={<Profile/>}/>
                <Route path='/driadprofile' element={<Drriad/>}/>
            </Routes>
        </>
    );
}

export default App;