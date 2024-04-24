import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {fetchRaids} from "../redux/actions/RiadAction.jsx";
import {fetchReservation} from "../redux/actions/ReservationAction.jsx";
import {CiLocationOn} from "react-icons/ci";
import {GrValidate} from "react-icons/gr";
import {Link} from "react-router-dom";
import DeleteRiad from "./DeleteRiad.jsx";
import AcceptedReservationModal from "./AcceptedReservation.jsx";


const ReservationModal = ({setOpenModal}) => {
    const dispatch = useDispatch();
    const reservation = useSelector((state) => state.reservations.datalist);
    const reservationStatus = useSelector((state) => state.reservations.datalist[0]);
    const [Accepted , setAccepted] = useState(false)
    const [id , setId] = useState(null)
    const [Delete , setDelete] = useState(false)

    useEffect(() => {
        dispatch(fetchReservation())
    }, [dispatch]);


    return(
        <>
            <div className='fixed inset-0 z-50 '>
                <div className="min-h-screen  px-4 text-center">
                    <div className="fixed inset-0  " id="headlessui-dialog-overlay-:ra:"
                         aria-hidden="true" data-headlessui-state="open"></div>
                    <div className="inline-block py-8 h-screen w-full max-w-4xl opacity-100 scale-100">
                        <div
                            className="inline-flex pb-2 flex-col w-full text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-[#0E131F] dark:border dark:border-gray-700 dark:text-neutral-100 shadow-xl h-full">
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
                                                                     className="w-5 h-5"><path fillRule="evenodd"
                                                                                               d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                                                                               clipRule="evenodd"></path></svg></button></span>
                            </div>
                            <div >
                                <div className="grid grid-cols-2 gap-6 px-4 mt-10 lg:gap-14 lg:grid-cols-3">
                                    {reservation && reservation.length > 0 ? (
                                        reservation.map((item, index) => (
                                            <div key={index?.id} className=''>
                                                    <div className="relative group">
                                                        <div className="overflow-hidden rounded aspect-w-1 aspect-h-1">
                                                            <img
                                                                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                                                                src={`http://localhost:8000/storage/images/${item?.riad?.cover}`}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="absolute left-3 top-3">
                                                            <p className="sm:px-3 sm:py-1 px-1.5 py-1 text-[8px] sm:text-xs font-bold flex tracking-wide text-white bg-[#111827] rounded-full gap-2">
                                                        <span><CiLocationOn
                                                            className="mt-0.5"/></span> {item?.
                                                                riad?.localisation}
                                                            </p>
                                                        </div>

                                                        <div className="absolute gap-2 flex justify-between right-3 top-3">
                                                            <button
                                                                onClick={() => {
                                                                    setAccepted(true);
                                                                    setId(reservationStatus?.id)
                                                                }}
                                                                className="sm:py-1 px-1 py-1 text-[20px] sm:text-lg font-bold flex tracking-wide text-white bg-[#111827] rounded-full gap-2">
                                                                <span><GrValidate/></span>
                                                            </button>

                                                        </div>
                                                        <div className="flex items-start justify-between mt-4 space-x-8">
                                                            <div>
                                                                <h3 className="text-xs font-bold text-white sm:text-sm md:text-base">
                                                                    <Link to={`/riaddetails/${item?.
                                                                        riad?.id}`} title="">
                                                                        Client Name:
                                                                        {item?.client?.user?.name}
                                                                        <span className="inset-0" aria-hidden="true"></span>
                                                                    </Link>
                                                                </h3>
                                                                <div
                                                                    className="text-xs text-white sm:text-sm md:text-base line-clamp-1">
                                                                    <p>{item?.riad?.description}</p>
                                                                </div>
                                                            </div>

                                                            <div className="text-right">
                                                                <p className="text-xs text-white sm:text-sm md:text-base">{item?.
                                                                    riad?.currency} {item?.
                                                                    riad?.prix}<span
                                                                    className="text-gray-400">/night</span></p>
                                                            </div>
                                                        </div>
                                                </div>

                                            </div>

                                        ))
                                    ) : (
                                        <div className='  flex justify-center mt-64'>No Reservation found</div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {Delete && <DeleteRiad Modal={setDelete} item={id}/>}
            {Accepted && <AcceptedReservationModal setOpenModal={setAccepted} item={id}/>}
        </>
    )
}

export default ReservationModal