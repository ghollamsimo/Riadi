import {Fragment, useState} from 'react';
import { Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/nav/Navbar.jsx';
import MobileNavbar from './components/MobileNavbar.jsx';
import Register from './pages/auth/Register.jsx';
import Dashboard from "./pages/admin/Dashboard.jsx";
import Drriad from "./pages/drriad/Dashboard.jsx";
import './App.css'
import Profile from "./pages/auth/Profile.jsx";
import Griads from "./pages/admin/Griads.jsx";
import GCategorie from "./pages/admin/GCategorie.jsx";
import GRepas from "./pages/admin/GRepas.jsx";
import MultiStepForm from "./pages/drriad/MultiStepForm.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    const location = useLocation();
    const [ user, setUser ] = useState(null)

    const excludedRoutes = ['/dashboard' , '/editecategory' , '/gestionriads' , '/categories' , '/repas' ];

    const shouldDisplayNavbar = !excludedRoutes.some(route => location.pathname.includes(route));

    return (
        <>

            {shouldDisplayNavbar && (
                <Fragment>
                    <Navbar user={user} setUser={setUser}/>
                    <MobileNavbar />
                </Fragment>
            )}
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/profile/:id'  element={<Profile/>}/>
                <Route path='/directeur' element={<Drriad/>}/>
                <Route path='/gestionriads' element={<Griads/>}/>
                <Route path='/categories' element={<GCategorie/>}/>
                <Route path='/repas' element={<GRepas/>}/>
                <Route path='/createriad' element={<MultiStepForm/>}/>
            </Routes>

        </>
    );
}

export default App;