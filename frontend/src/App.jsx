import {Fragment, useEffect, useState} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
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
import Login from "./pages/auth/Login.jsx";
import Home from "./pages/home/Home.jsx";
import getCookie from "./helpers/cookie.js";
import Api from "./api/Api.jsx";
import {jwtDecode} from 'jwt-decode';

function App() {
    const location = useLocation();
    const [ user, setUser ] = useState(null)

    const excludedRoutes = ['/dashboard' , '/editecategory' , '/gestionriads' , '/categories' , '/repas' ];

    const shouldDisplayNavbar = !excludedRoutes.some(route => location.pathname.includes(route));
  //  const navigate = useNavigate();


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = getCookie('ACCESS_TOKEN');
                console.log('Token:', token);
                if (!token) {
                    console.error('Access token is missing');
                    return;
                }
                const { http } = Api();
                const decodedToken = decodeToken(token);
                console.log('Decoded token:', decodedToken);
                const response = await http.get(`/user/${decodedToken}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
//                console.log('User data:', response.data[0].role);
                setUser(response.data[0]);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, []);

    const decodeToken = (token) => {
        try {
            const decoded = jwtDecode(token);
            return decoded.sub;
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    };

    const isAdmin = user && user.role === 'Admin';
    const isDrRiad = user && user.role === 'DrRiad';
    const isClient = user && user.role === 'Client';


    return (
        <>

            {shouldDisplayNavbar && (
                <Fragment>
                    <Navbar user={user} setUser={setUser}/>
                    <MobileNavbar />
                </Fragment>
            )}
            <Routes>
                <Route path='login' element={<Login setUser={setUser} />} />
                <Route path='/register' element={<Register />} />
                <Route path='/profile/:id' element={<Profile />} />
                {isAdmin && (
                    <>
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/gestionriads' element={<Griads />} />
                        <Route path='/categories' element={<GCategorie />} />
                        <Route path='/repas' element={<GRepas />} />
                    </>
                )}
                {isDrRiad && (
                    <>
                        <Route path='/directeur' element={<Drriad />} />
                        <Route path='/createriad' element={<MultiStepForm />} />
                    </>
                )}
                {isClient && (
                    <>
                        <Route path='' element={<Home />} />
                    </>
                )}
            </Routes>

        </>
    );
}

export default App;