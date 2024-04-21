import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Image from '../assets/img/google.png'
import Aos from "aos";
import Api from "../api/Api.jsx";
import getCookie from "../helpers/cookie.js";
const AdminNavbar = ({user}) => {
    const {http} = Api()
    const token = getCookie('ACCESS_TOKEN');
    const navigate = useNavigate()
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

//    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const logOut = async () => {
        try {
            await http.post('/logout' , token );
            navigate('/')
//            toast.success('Logged out successfully');
        } catch (error) {
            console.error('Error logging out:' , error.message);
        }
    };

    return (
        <nav className="sticky w-full h-16 mb-5 flex justify-between text-white z-40 items-center p-2 bg-gray-800">
                <div className='w-full'>
                    <input type='text' className='block  border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1'/>
                </div>
            <div className="flex justify-between">

                <div
                    className="cursor-pointer  text-white"
                    onClick={toggleProfile}
                >
                    <span>Settings</span>
                    {isProfileOpen && (
                        <div
                            className="absolute transition-all right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 "
                            data-aos='fade-down'>
                            <div className="py-1">
                                <button onClick={logOut}
                                      className="block px-4 py-2 text-sm text-red-500 hover:text-red-700 hover:bg-gray-100">
                                    Log Out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default AdminNavbar;
