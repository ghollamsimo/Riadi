import { useEffect, useState , Fragment } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Login from "../../pages/auth/Login.jsx";
import { Link, useNavigate , Routes , Route } from "react-router-dom";
import "./navbar.scss";
import RiadCard from "../../pages/home/RiadCard.jsx";
import { TbPoint } from "react-icons/tb";
import { IoFilter } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Button, Modal } from 'flowbite-react';
import Modalsearch from "../Modalsearch.jsx";


function Navbar() {
    const [showModal, setShowModal] = useState(false);

    return (
        <Fragment>
        <header className="header static backdrop-blur-2xl">
            <div className="header__content">
                <Link to="/" className="header__content__logo md:flex hidden font-extrabold font-serif">
                    Riadi <span><TbPoint /></span>
                </Link>
                <nav
                    className={`${"navbar header__content__nav"} 
         `}
                >
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/profile">Riads</Link>
                        </li>
                        <li>
                            <Link to="/Works">Distination</Link>
                        </li>
                        <li>
                            <Link to="/help">Help</Link>
                        </li>

                        <Link to="/register">
                            <button className="btn">Register</button>
                        </Link>
                        <Link to="/login">
                            <button className="btn btn__login">Login</button>
                        </Link>
                    </ul>
                </nav>
                <div className="lg:hidden flex w-full">
                    <label
                        onClick={() => {
                            setShowModal(true);
                        }}
                        className="w-full cursor-pointer transition-all	 bg-transparent min-w-sm max-w-4xl flex flex-col-2 md:flex-row items-center justify-center border border-gray-500 py-2 px-2 rounded-2xl  shadow-2xl focus-within:border-gray-300"
                        htmlFor="search-bar">

                        <button

                            className="w-fit md:w-auto px-3 bg-transparent  text-white fill-white active:scale-95 duration-100 text-2xl will-change-transform overflow-hidden relative rounded-full transition-all disabled:opacity-70">

                            <div className="relative">

                                <div
                                    className="flex items-center justify-center h-3 w-full absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                                    <svg className="opacity-0 animate-spin w-full h-full"
                                         xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                stroke-width="4"></circle>
                                        <path className="opacity-75" fill="currentColor"
                                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                </div>

                                <div className="flex items-center transition-all opacity-1 valid:"><span
                                    className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                        <CiSearch/>
                </span>
                                </div>

                            </div>

                        </button>

                        <div className="px-2 py-2 w-full rounded-md flex-1 outline-none bg-transparent text-gray-300">your keyword here</div>

                        <button
                            className="w-fit  md:w-auto px-3 py-3 bg-transparent border-gray-500 text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-full transition-all disabled:opacity-70">

                            <div className="relative">

                                <div
                                    className="flex items-center justify-center h-3 w-full absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                                    <svg className="opacity-0 animate-spin w-full h-full"
                                         xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                stroke-width="4"></circle>
                                        <path className="opacity-75" fill="currentColor"
                                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                </div>

                                <div className="flex items-center transition-all opacity-1 valid:"><span
                                    className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                        <IoFilter/>
                </span>
                                </div>

                            </div>

                        </button>
                    </label>
                </div>
            </div>
        </header>
            {showModal && <Modalsearch setOpenModal={setShowModal} />}

            <Routes>
                <Route path='login' element={<Login/>}/>
                <Route path='' element={<RiadCard/>}/>
            </Routes>


        </Fragment>
    );
}

export default Navbar;