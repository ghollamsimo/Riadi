import React from 'react';
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";

const SideBar = () => {
    const isMobile = window.innerWidth < 1024;
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`fixed inset-y-0 left-0 z-50 lg:w-40 bg-gray-800 overflow-y-auto transition-all duration-300 ease-in-out ${isOpen ? '' : 'w-0'}`}>
            {/* Sidebar Header */}
            <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        {/* Your logo or sidebar icon */}
                    </div>
                    <div className="ml-2">
                        <span className="text-xl font-bold text-white">Sidebar</span>
                    </div>
                </div>
                {/* Display toggle button only on mobile */}
                {isMobile && (
                    <div className="flex items-center">
                        {/* Toggle Button */}
                        <button onClick={toggleSidebar} className="text-gray-400 hover:text-white focus:outline-none focus:text-white">
                            {isOpen ? (
                                <FaAngleDoubleLeft />
                            ) : (
                                <FaAngleDoubleRight />
                            )}
                        </button>
                    </div>
                )}
            </div>

            {/* Sidebar content */}
            <div className="pt-5 pb-4">
                <nav className="mt-5 px-2 space-y-1">
                    <a href="#" className="group flex items-center px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">
                        <svg className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                        Dashboard
                    </a>
                    {/* Add more links here */}
                </nav>
            </div>
        </div>
    );
}

export default SideBar;
