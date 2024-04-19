import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import config from "../helpers/config.js";
import {toast} from "react-toastify";
import Api from "../api/Api.jsx";
import getCookie from "../helpers/cookie.js";
import Wishlist from "../modal/Wishlist.jsx";

const ProfileSettings = ({user }) => {
    const {http} = Api()
    const [settings , setSettings] = useState(false)
    const navigate = useNavigate()
    const token = getCookie('ACCESS_TOKEN');
    const [wishlists , setWishlists] = useState(false)
    const handleOpen = () => {
        setSettings(!settings)
    }

    const logOut = async () => {
        try {
            await http.post('/logout' , token );
            navigate('/')
//            toast.success('Logged out successfully');
        } catch (error) {
            console.error('Error logging out:' , error.message);
        }
    };
//    console.log("user" , user)
    return (
        <>


            <button onClick={() => handleOpen(true)}>
                Settings</button>

            {settings && (
                <>
                    <div
                        className="absolute z-10 w-screen max-w-[260px] px-4 mt-4 -right-10 sm:right-0 sm:px-0 opacity-100 translate-y-0"
                        id="headlessui-popover-panel-:r1c:" tabIndex="-1" data-headlessui-state="open">
                        <div className=" overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 bg-white dark:bg-[#1F2937] p-7"><Link to={`/profile/${user?.id}`}
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
                            </Link><a
                                className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                href="/home-3##">
                                <div
                                    className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                         className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path>
                                    </svg>
                                </div>
                                <div className="ml-4"><p className="text-sm font-medium ">Messages</p></div>
                            </a>

                                <button onClick={() => {
                                setWishlists(true);
                                setSettings(false)
                            }}
                                className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                <div
                                    className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                         className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                                    </svg>
                                </div>
                                <div className="ml-4"><p className="text-sm font-medium ">Wishlists</p></div>
                            </button><a
                                className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                href="/home-3##">
                                <div
                                    className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                         className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                                    </svg>
                                </div>
                                <div className="ml-4"><p className="text-sm font-medium ">Booking</p></div>
                            </a></div>
                            <hr className="h-[1px] border-t border-neutral-300 dark:border-neutral-700"/>
                            <div className="relative grid gap-6 bg-white dark:bg-[#1F2937] p-7"><a href="##" className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                <div
                                    className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                         className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"></path>
                                    </svg>
                                </div>
                                <div className="ml-4"><p className="text-sm font-medium ">Help</p></div>
                            </a><div
                                   className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                <div
                                    className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                         className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"></path>
                                    </svg>
                                </div>
                                <div className="ml-4"><p className="text-sm font-medium "> {user && (
                                    <li>
                                        <button onClick={logOut} >Logout</button>
                                    </li>
                                )}
                                    {!user && (
                                        <li>
                                            <Link to="/">
                                                <button className="">Login</button>
                                            </Link>
                                        </li>
                                    )}</p></div>
                            </div></div>
                        </div>
                    </div>
                </>
            )}

            {wishlists && <Wishlist setOpenModal={setWishlists}/> }
        </>
    )
}

export default ProfileSettings