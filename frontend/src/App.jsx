import {Fragment, useEffect, useState} from 'react';
import {Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
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
import { ToastContainer} from "react-toastify";
import SingleRiadPage from "./pages/drriad/SingleRiadPage.jsx";
import NotFounde from "./pages/home/NotFounde.jsx";
import MultipleUpdateSteps from "./update/RiadUpdate/MultipleUpdateSteps.jsx";
import RiadSinglePage from "./pages/home/RiadSinglePage.jsx";
function App() {
    const location = useLocation();
    const [user, setUser] = useState(null);
    const {http} = Api()
    const excludedRoutes = ['/dashboard' , '/editecategory' , '/gestionriads' , '/categories' , '/repas' , '/' , '/home' ];
    const navigate = useNavigate()
    const shouldDisplayNavbar = !excludedRoutes.some(route => location.pathname.includes(route));
  //  const navigate = useNavigate();
    const token = getCookie('ACCESS_TOKEN');


    useEffect(() => {
        const fetchUserData = async () => {
            try {
//                console.log('Token:', token);
                if (!token) {
                    console.error('Access token is missing');
                    return ;
                }
                const decodedToken = decodeToken(token);
//                console.log('jjjjjjjjjjjj:', decodedToken);
                const response = await http.get(`/user/${decodedToken}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
//                console.log('userrole:', response.data[0].role);
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
            console.error('Error decodin token:', error);
            return null;
        }
    };

    const isAdmin = user && user.role === 'Admin';
    const isDrRiad = user && user.role === 'DrRaid';
    const isClient = user && user.role === 'Client';


//    console.log('ddddddd' , logOut())

    return (
        <>


            {shouldDisplayNavbar && (
                <Fragment>
                    <Navbar />
                    <MobileNavbar />
                </Fragment>
            )}
            <Routes>
                <Route path='' element={<Login setUser={setUser} />} />
                <Route path='/register' element={<Register />} />
                <Route path='/profile/:id' element={<Profile />} />
                <Route path='*' element={<NotFounde/>}/>
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
                        <Route path='/directeur'  element={<Drriad user={user}/>} />
                        <Route path='/createriad' element={<MultiStepForm />} />
                        <Route path='/riaddetails/:id' element={<SingleRiadPage/>}/>
                        <Route path='/update/:id' element={<MultipleUpdateSteps/> }/>
                        </>
                )}

                {isClient && (
                    <>
                        <Route path='/riad/:id' element={<RiadSinglePage/>} />
                        <Route path='/home' element={<Home id={user}/>} />
                    </>
                )}

            </Routes>
<ToastContainer/>
        </>
    )
}

export default App;