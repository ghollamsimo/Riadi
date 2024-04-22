import {useEffect, useState} from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {DeleteNotification, fetchNotification} from "../redux/actions/NotificationAction.jsx";
import moment from 'moment';
import {fetchReservationIfconfirmed} from "../redux/actions/ReservationAction.jsx";
import Pay from "../modal/Pay.jsx";
import { IoClose } from "react-icons/io5";
import {fetchCount} from "../redux/actions/CountAction.jsx";

const Notification = () => {
    const [Reservation , setReservation] = useState(false)
    const [id ,setId] = useState(null)

    const dispatch = useDispatch();
    const notification = useSelector((state) => state.notification);
    const notifid = useSelector((state) => state.notification.datalist[0]?.id);
    const reservationId = useSelector((state) => state.notification.datalist[0]?.reservation_id);
   console.log('tetete',reservationId)
    //  console.log('nooot', notification)
    useEffect(() => {
        dispatch(fetchNotification());
        if (reservationId) {
            dispatch(fetchReservationIfconfirmed(reservationId));
        }
    }, [dispatch, reservationId]);
    const displayTimeDifference = (createdAt) => {
        if (!createdAt || !moment(createdAt).isValid()) {
            return 'Invalid date';
        }

        const differenceInMinutes = moment().diff(moment(createdAt), 'minutes');
        return `${differenceInMinutes} minutes ago`;
    };

    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const toggleNotification = () => {
        setIsNotificationOpen(!isNotificationOpen);
    };

    const handleDelete = (id) => {

        dispatch(DeleteNotification(id))

        dispatch(fetchNotification())
        dispatch(fetchCount())
    }
    return(
        <>
            <div className="text-white">
                <span
                    className="flex cursor-pointer text-xl  text-neutral-300 "
                    onClick={toggleNotification}
                >
                    <IoNotificationsOutline />
                </span>
                {isNotificationOpen && (
                    <div className='absolute z-10 text-left w-screen max-w-xs sm:max-w-sm px-4 mt-3 sm:right-0 sm:px-0 opacity-100 translate-y-0'>
                        <div className="overflow-hidden rounded-2xl w-fit shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-8 bg-white dark:bg-[#1F2937] p-7">
                                <h3 className="text-xl font-semibold">Notifications</h3>



                                {notification?.datalist?.map(item => (
                                    <span
                                        onClick={() => {
                                            if (item.message === `Continue The Process of Payment for ${item.riad.name}`) {
                                                setReservation(true);
                                                setId(item.reservation_id);
                                                setIsNotificationOpen(false);
                                            }
                                        }}
                                        key={item.id}
                                        className="flex cursor-pointer p-2 pr-8 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 relative"
                                    >
        <div
            className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-8 h-8 sm:w-12 sm:h-12">
            <img className="absolute inset-0 w-full h-full object-cover rounded-full"
                 src={`http://localhost:8000/storage/images/${item.riad.cover}`} alt="John Doe"/>
            <span className="wil-avatar__name">J</span>
        </div>
        <div className="ml-3 sm:ml-4 space-y-1">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-200">{item.riad.drriad.user.name}</p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{item.message}</p>
            <p className="text-xs text-gray-400 dark:text-gray-400">{displayTimeDifference(item.created_at)}</p>
        </div>

        <button
            className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500"></button>
         <span onClick={() => handleDelete(item.id)} className='text-gray-400'><IoClose/></span>
    </span>
                                ))}


                            </div>
                        </div>
                    </div>
                )}
            </div>

            {Reservation && <Pay setOpenModal={setReservation} id={id} />}
        </>
    )
}

export default Notification