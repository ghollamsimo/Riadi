import {useState} from "react";
import {Link} from "react-router-dom";
import ReservationModal from "../modal/Reservation.jsx";
import { MdElectricalServices } from "react-icons/md";
import Services from "../modal/Services.jsx";

const SettingsDirecteur = ({user , logout}) => {
    const [settings , setsettings] = useState(false)
    const [reservationModal , setReservationModal] = useState(false)
    const [services , setServices] = useState(false)
    const handleOpen = () => {
        setsettings(!settings)
    }

    return(
        <>
            <button onClick={() => handleOpen(true)}>
                Settings
            </button>

            {settings && (
                <>
                    <div
                        className="absolute z-10 w-screen max-w-[260px] px-4 mt-4 -right-10 sm:right-0 sm:px-0 opacity-100 translate-y-0"
                        id="headlessui-popover-panel-:r1c:" tabIndex="-1" data-headlessui-state="open">
                        <div className=" overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 bg-white dark:bg-[#1F2937] p-7"><Link
                                to={`/profile/${user?.id}`}
                                className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                                <div
                                    className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                         className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div className="ml-4"><p className="text-sm font-medium ">Account</p></div>
                            </Link>


                                <button
                                    onClick={() => {
                                        setReservationModal(true);
                                        setsettings(false)
                                    }}
                                    className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                    <div
                                        className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                             className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4"><p className="text-sm font-medium ">Reservation</p></div>
                                </button>

                                <button
                                    onClick={() => {
                                        setServices(true);
                                        setsettings(false)
                                    }}
                                    className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                    <div
                                        className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                                        <MdElectricalServices/>
                                    </div>
                                    <div className="ml-4"><p className="text-sm font-medium ">Services</p></div>
                                </button>

                                <Link to="/createriad"
                                    className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                    <div
                                        className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                                    </div>

                                    <div className="ml-4"><p className="text-sm font-medium ">Add Riad</p></div>
                                </Link>
                            </div>

                            <hr className="h-[1px] border-t border-neutral-300 dark:border-neutral-700"/>
                            <div className="relative grid gap-6 bg-white dark:bg-[#1F2937] p-7">
                                <div
                                    className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                    <div
                                        className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                                             className="w-6 h-6">
                                            <path strokeLinecap="round"
                                                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4"><p className="text-sm font-medium "> {user && (

                                        <button onClick={logout} >Logout</button>
                                )}
                                    {!user && (
                                            <Link to="/">
                                                <button className="">Login</button>
                                            </Link>
                                    )}</p></div>
                            </div></div>
                        </div>
                    </div>
                </>
            )}
            {reservationModal && <ReservationModal setOpenModal={setReservationModal}/>}
            {services && <Services setOpenModal={setServices}/>}
        </>
    )
}

export default SettingsDirecteur