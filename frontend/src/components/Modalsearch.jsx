import {useEffect, useState} from "react";
import { IoIosClose } from "react-icons/io";
import {CiSearch} from "react-icons/ci";
import {IoFilter} from "react-icons/io5";
import Aos from 'aos'
import "aos/dist/aos.css"
import { CiLocationOn } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa6";


function Modalsearch({ setOpenModal }) {
    useEffect(() =>{
        Aos.init({duration:500});
    }, [])

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="fixed  h-full inset-0 z-50 lg:hidden overflow-y-auto"  data-aos="fade-up">
                <div
                    className="fixed inset-0 lg:hidden w-full h-full bg-black opacity-40"
                    onClick={() => setOpenModal(false)}
                ></div>
                <div className="flex h-full lg:hidden items-center min-h-screen ">
                    <div className="relative h-full w-full max-w-lg p-4 mx-auto bg-[#1F2937]  shadow-lg">
                        <div className=" h-full sm:flex">
                            <button
                                className=" mb-10 transition-all flex-1 text-white w-fit rounded-md outline-none text-4xl "
                                onClick={() => setOpenModal(false)}>
                                <IoIosClose/>
                            </button>
                            <div
                                className="flex items-center justify-center flex-none mx-auto w-full">

                                <div className="lg:hidden flex w-full">
                                    <label
                                        className="w-full mb-14 bg-transparent min-w-sm max-w-4xl flex flex-col-2 md:flex-row items-center justify-center border border-gray-500 py-2 px-2 rounded-2xl  shadow-2xl focus-within:border-gray-300"
                                        htmlFor="search-bar">

                                        <button

                                            className="w-fit md:w-auto px-3 bg-transparent  text-white fill-white active:scale-95 duration-100 text-2xl will-change-transform overflow-hidden relative rounded-full transition-all disabled:opacity-70">

                                            <div className="relative">

                                                <div
                                                    className="flex items-center justify-center h-3 w-full absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                                                    <svg className="opacity-0 animate-spin w-full h-full"
                                                         xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10"
                                                                stroke="currentColor"
                                                                stroke-width="4"></circle>
                                                        <path className="opacity-75" fill="currentColor"
                                                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                                        </path>
                                                    </svg>
                                                </div>

                                                <div className="flex items-center transition-all opacity-1 valid:">
                                                    <span
                                                        className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                                  <CiSearch/>
                                                     </span>
                                                </div>

                                            </div>

                                        </button>

                                        <input type='text'
                                               className="px-2 py-2 w-full rounded-md flex-1 outline-none bg-transparent text-gray-300"
                                               placeholder='your keyword here'/>

                                        <button
                                            className="w-fit  md:w-auto px-3 py-3 bg-transparent border-gray-500 text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-full transition-all disabled:opacity-70">

                                            <div className="relative">

                                                <div
                                                    className="flex items-center justify-center h-3 w-full absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                                                    <svg className="opacity-0 animate-spin w-full h-full"
                                                         xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10"
                                                                stroke="currentColor"
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
                            <div className=" gap-4 lg:p-4 p-2  rounde-lg m-2">
                                <div className='text-white mb-5 text-xl'>All Results</div>
                                <div
                                    className="flex items-center justify-between w-full p-2 lg:rounded-full md:rounded-full cursor-pointer border-gray-500 border rounded-full">

                                    <div className="flex items-center">
                                        <div className="h-12 w-12 lg:mb-0 border md:mb-0 rounded-full mx-auto mr-3">
                                            <CiLocationOn className='mx-auto mt-2.5 text-white text-2xl' />
                                        </div>

                                        <div className="flex flex-col">

                                            <div className="text-sm leading-3 text-gray-200 font-bold w-full">
                                                Marrakeche
                                            </div>

                                            <div className="text-xs text-gray-400 w-full">
                                                Morroco
                                            </div>

                                        </div>

                                    </div>

                                    <FaChevronRight className='text-gray-300 mr-4'/>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Modalsearch