import {CiLocationOn} from "react-icons/ci";
import {GrFavorite} from "react-icons/gr";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Aos from "aos";
import {AddReservation} from "../../redux/actions/ReservationAction.jsx";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";

const PayPage = ({setOpenModal , id}) => {
    const dispatch = useDispatch()
    const [guests , setGuests] = useState(1)
    const [guestsDropDown , setGuestsDropDown] = useState(false)
    const [dateDropDown , setDateDropDown] = useState(false)
    const [night , setDate] = useState(1)
    const [Waiting] = useState('Waiting')
    const [Manual] = useState('Manual')
 //   const [Manual] = useState('Manual')
  //  console.log('guests' , guests)
    const handleChangeGuests = () => {
        if (guests < 15){
            setGuests(guests + 1)
        }
    }
    const handleMinGuests = () => {
        if (guests > 1){
            setGuests(guests - 1)
        }
    }
    const handleMaxDate = () => {
        if (night < 30){
            setDate(night + 1)
        }
    }

    const handleMinDate = () => {
        if (night > 1){
            setDate(night - 1)
        }
    }

    const  handleOpenguests = () => {
        setGuestsDropDown(!guestsDropDown)
    }
    const handleOpendate = () => {
        setDateDropDown(!dateDropDown)
    }
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);
//    console.log('di' , id?.id)

    const handleReservations = async (e) => {
        e.preventDefault()
        if (guests){
            if (id?.etat === 'Automatic'){
                await dispatch(AddReservation(id?.id , {guests , night}))
            }else if (id?.etat === 'Manual'){
                await dispatch(AddReservation(id?.id , {guests , night  }))
            }
        }else {
            toast.error('Please enter The Number Of Guests')
        }
    }
    return(
        <>
            <div className='fixed inset-0 z-50 ' data-aos="fade-up">
                <div className="min-h-screen  px-4 text-center">
                    <div className="fixed inset-0  " id="headlessui-dialog-overlay-:ra:"
                         aria-hidden="true" data-headlessui-state="open"></div>
                    <div className="inline-block  py-8 h-screen w-full max-w-4xl opacity-100 scale-100">
                        <div
                            className="inline-flex pb-2 flex-col w-full mx-auto text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-[#0E131F] dark:border dark:border-gray-700 dark:text-neutral-100 shadow-xl h-fit">
                            <div
                                className="relative  flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                                <h3 className="text-lg font-medium leading-6 text-white"
                                    id="headlessui-dialog-title-70">Reservation</h3><span
                                className="absolute left-3 top-3"><button
                                onClick={() => setOpenModal(false)}
                                className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700  focus:outline-none"><span
                                className="sr-only">Close</span><svg xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 24 24"
                                                                     fill="currentColor" aria-hidden="true"
                                                                     className="w-5 h-5"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg></button></span>
                            </div>
                            <div
                                className="">

                                <div className=''>

                                    <div className="w-full">
                                        <div
                                            className="w-full flex flex-col sm:rounded-2xl    space-y-8 px-0 sm:p-6 xl:p-8">
                                            <h2 className="text-3xl lg:text-4xl font-semibold">Confirm Your
                                                Reservation </h2>
                                            <div className="border-b border-gray-600 dark:border-neutral-700"></div>
                                            <div>
                                                <div>
                                                    <h3 className="text-2xl font-semibold">Your trip</h3>
                                                    <div className="nc-NcModal">
                                                        <span className="block lg:hidden underline mt-1 cursor-pointer">View booking details</span>
                                                    </div>
                                                </div>
                                                <div
                                                    className="mt-6 border border-neutral-200 dark:border-gray-700 rounded-3xl flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-neutral-200 dark:divide-neutral-700 overflow-hidden z-10">
                                                    <button
                                                        onClick={handleOpendate}
                                                        className="text-left flex-1 p-5 flex justify-between space-x-5 hover:bg-neutral-50 dark:hover:bg-gray-900"
                                                        type="button">
                                                        <div className="flex flex-col">
                                                            <span className="text-sm text-neutral-400">Date</span>
                                                            <span
                                                                className="mt-1.5 text-lg font-semibold">{night} \night</span>
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                             viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                                             aria-hidden="true"
                                                             className="w-6 h-6 text-neutral-6000 dark:text-neutral-400">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
                                                        </svg>
                                                    </button>
                                                    <button type="button"
                                                            onClick={handleOpenguests}
                                                            className="text-left flex-1 p-5 flex justify-between space-x-5 hover:bg-neutral-50 dark:hover:bg-gray-900">
                                                        <div className="flex flex-col">
                                                            <span className="text-sm text-neutral-400">Guests</span>
                                                            <span className="mt-1.5 text-lg font-semibold"><span
                                                                className="line-clamp-1">{guests} Guests</span></span>
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                             viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                                             aria-hidden="true"
                                                             className="w-6 h-6 text-neutral-6000 dark:text-neutral-400">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <form onSubmit={handleReservations}>

                                                <div className=' '>
                                                    <div className='flex justify-between'>
                                                    {dateDropDown && (
                                                        <>
                                                            <div className=''>
                                                                <div
                                                                    className="w-full  z-50 sm:min-w-[340px] max-w-sm dark:bg-gray-800  top-full -mt-5 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl ring-1 ring-black ring-opacity-5 opacity-100 translate-y-0"
                                                                    id="headlessui-popover-panel-:r9:" tabIndex="-1"
                                                                    data-headlessui-state="open">
                                                                    <div
                                                                        className="nc-NcInputNumber flex items-center justify-between space-x-5 w-full"
                                                                        data-nc-id="NcInputNumber">

                                                                        <div className="flex flex-col"><span
                                                                            className="font-medium text-neutral-800 dark:text-neutral-200">Max Number Of Night</span><span
                                                                            className="text-xs text-neutral-500 dark:text-neutral-400 font-normal">Ages 18 or above</span>
                                                                        </div>
                                                                        <div
                                                                            className="nc-NcInputNumber flex items-center justify-between w-28">
                                                                            <button
                                                                                onClick={handleMinDate}
                                                                                className={`w-8 h-8 rounded-full  border border-gray-600 outline-0 text-white bg-white dark:bg-transparent flex items-center justify-center  dark:border-neutral-500  dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default`}
                                                                                type="button">
                                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                                     viewBox="0 0 24 24"
                                                                                     fill="currentColor"
                                                                                     aria-hidden="true"
                                                                                     className="w-4 h-4">
                                                                                    <path fillRule="evenodd"
                                                                                          d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                                                                                          clipRule="evenodd"></path>
                                                                                </svg>
                                                                            </button>
                                                                            <input type='number' name='date'
                                                                                   value={night}
                                                                                   readOnly
                                                                                   className='outline-0 bg-transparent pl-3 w-12 text-center mx-auto'/>
                                                                            <button
                                                                                onClick={handleMaxDate}
                                                                                className={`w-8 h-8 rounded-full  border border-gray-600 outline-0 text-white bg-white dark:bg-transparent flex items-center justify-center  dark:border-neutral-500  dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default`}
                                                                                type="button">
                                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                                     viewBox="0 0 24 24"
                                                                                     fill="currentColor"
                                                                                     aria-hidden="true"
                                                                                     className="w-4 h-4">
                                                                                    <path fillRule="evenodd"
                                                                                          d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                                                                                          clipRule="evenodd"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                        <div className=' justify-end'>
                                                    {guestsDropDown && (
                                                        <>
                                                            <div className='flex justify-end'>
                                                                <div
                                                                    className="w-full  z-50 sm:min-w-[340px] max-w-sm dark:bg-gray-800  top-full -mt-5 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl ring-1 ring-black ring-opacity-5 opacity-100 translate-y-0"
                                                                    id="headlessui-popover-panel-:r9:" tabIndex="-1"
                                                                    data-headlessui-state="open">
                                                                    <div
                                                                        className="nc-NcInputNumber flex items-center justify-between space-x-5 w-full"
                                                                        data-nc-id="NcInputNumber">

                                                                        <div className="flex flex-col"><span
                                                                            className="font-medium text-neutral-800 dark:text-neutral-200">Guests</span><span
                                                                            className="text-xs text-neutral-500 dark:text-neutral-400 font-normal">Ages 18 or above</span>
                                                                        </div>
                                                                        <div
                                                                            className="nc-NcInputNumber flex items-center justify-between w-28">
                                                                            <button
                                                                                onClick={handleMinGuests}
                                                                                className={`w-8 h-8 rounded-full  border border-gray-600 outline-0 text-white bg-white dark:bg-transparent flex items-center justify-center  dark:border-neutral-500  dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default`}
                                                                                type="button">
                                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                                     viewBox="0 0 24 24"
                                                                                     fill="currentColor"
                                                                                     aria-hidden="true"
                                                                                     className="w-4 h-4">
                                                                                    <path fillRule="evenodd"
                                                                                          d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                                                                                          clipRule="evenodd"></path>
                                                                                </svg>
                                                                            </button>
                                                                            <input type='number' name='guests'
                                                                                   value={guests}

                                                                                   readOnly
                                                                                   className='outline-0 bg-transparent pl-3 w-12 text-center mx-auto'/>
                                                                            <button
                                                                                onClick={handleChangeGuests}
                                                                                className={`w-8 h-8 rounded-full  border border-gray-600 outline-0 text-white bg-white dark:bg-transparent flex items-center justify-center  dark:border-neutral-500  dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default`}
                                                                                type="button">
                                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                                     viewBox="0 0 24 24"
                                                                                     fill="currentColor" aria-hidden="true" className="w-4 h-4">
                                                                                    <path fillRule="evenodd"
                                                                                          d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                                                                                          clipRule="evenodd"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                        </div>
                                                    </div>
                                                    <button

                                                        type='submit'
                                                        className="nc-Button mt-5 mx-auto w-full relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 ttnc-ButtonPrimary disabled:bg-opacity-70 bg-[#4F46E5] hover:bg-primary-700 text-neutral-50 "> Reservation
                                                    </button>
                                        </div>
                                            </form>

                                    </div>
                                </div>


                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default PayPage