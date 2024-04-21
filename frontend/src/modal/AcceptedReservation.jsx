import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchReservation, ReservationAccepted, ReservationRejected} from "../redux/actions/ReservationAction.jsx";

const AcceptedReservationModal = ({setOpenModal , item}) => {
    const dispatch = useDispatch()
    const handleUpdateStatus = () => {
        dispatch(ReservationAccepted(item))
        dispatch(fetchReservation())
        setOpenModal(false)
    }

    const handleRejected = () => {
        dispatch(ReservationRejected(item))
        dispatch(fetchReservation())
        setOpenModal(false)
    }

    console.log('test', item);
    return(
        <>
            <div id="YOUR_ID" className="fixed z-50 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 "></div>
                    </div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                          aria-hidden="true">&#8203;</span>


                    <div
                        className="inline-block dark:bg-[#0E131F] dark:border dark:border-gray-700 text-white align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                        <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                            <button onClick={() => setOpenModal(false)} type="button" data-behavior="cancel"
                                    className=" rounded-md text-gray-400 hover:text-gray-500 ">
                                <span className="sr-only">Close</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>

                        <div className="sm:flex sm:items-start">
                            <div
                                className="mx-auto text-white flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg className="h-6 w-6 text-green-600" stroke="currentColor" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-white">
                                    Do you want to Accepte This Reservation ?
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm leading-5 text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                                        mollitia inventore quod. Yay!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <button type="button"
                            onClick={handleUpdateStatus}
                            className="inline-flex justify-center w-full rounded-md  border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                        Accept
                    </button>
                </span>
                            <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <button type="button"
                            onClick={handleRejected}
                            className="inline-flex bg-red-600 justify-center w-full rounded-md   px-4 py-2  text-base leading-6 font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                        Rejected
                    </button>
                </span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default AcceptedReservationModal