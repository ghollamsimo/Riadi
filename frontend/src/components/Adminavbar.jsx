import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/img/google.png'
import Aos from "aos";
const AdminNavbar = () => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleNotification = () => {
        setIsNotificationOpen(!isNotificationOpen);
    };

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    return (
        <nav className="sticky  mb-7 top-4 z-40 flex flex-row justify-end flex-wrap items-center  rounded-full  p-2 ">
            <div className="relative mt-[3px] flex h-[61px] w-full flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:bg-gray-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
                {/* Search input */}
                <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
                    <p className="pl-3 pr-2 text-xl"></p>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="block p-4 text-white h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none dark:bg-gray-900  sm:w-fit"
                    />
                </div>

                {/* Notification dropdown */}
                <div className="relative">
                    <span
                        className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
                        onClick={toggleNotification}
                    >
                        {/* Your notification icon */}
                    </span>
                    {/* Dropdown content */}
                    {isNotificationOpen && (
                        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            {/* Notification items go here */}
                        </div>
                    )}
                </div>

                {/* Profile dropdown */}
                <div className="relative">
                    <div
                        className="cursor-pointer text-white"
                        onClick={toggleProfile}
                    >
                        {/* Profile icon */}
                        <img className="h-10 w-10 rounded-full" src={Image} alt="Profile" />
                    </div>
                    {/* Dropdown content */}
                    {isProfileOpen && (
                        <div className="absolute transition-all right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 " data-aos='fade-down'>
                            <div className="py-1">
                                {/* Profile Settings */}
                                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Profile Settings
                                </Link>
                                {/* Newsletter Settings */}
                                <Link to="/newsletter" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Newsletter Settings
                                </Link>
                                {/* Logout */}
                                <Link to="/logout" className="block px-4 py-2 text-sm text-red-500 hover:text-red-700 hover:bg-gray-100">
                                    Log Out
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default AdminNavbar;
