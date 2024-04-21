import {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRaids } from "../../redux/actions/RiadAction";
import Pagination from "react-js-pagination";
import { CiLocationOn } from "react-icons/ci";
import { GrUpdate } from "react-icons/gr";
import { FiTrash2 } from "react-icons/fi";
import TableServices from "../../data/TableServices";
import NavbarDirecteur from "../../components/NavbarDirecteur.jsx";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import DeleteRiad from "../../modal/DeleteRiad.jsx";
import Navbar from "../../components/nav/Navbar.jsx";
import ProfileSettings from "../../components/ProfileSettings.jsx";
import {fetchReservation} from "../../redux/actions/ReservationAction.jsx";
import { GrValidate } from "react-icons/gr";
import AcceptedReservationModal from "../../modal/AcceptedReservation.jsx";


const Dashboard = ({ user}) => {
    const dispatch = useDispatch();
    const [Accepted , setAccepted] = useState(false)
    const [Delete , setDelete] = useState(false)
    const [id , setId] = useState(null)
    const riads = useSelector((state) => state.riadsData.datalist);
    const reservation = useSelector((state) => state.reservations.datalist[0]?.riad)
    const reservationStatus = useSelector((state) => state.reservations.datalist[0])
    console.log('whati whati yalala', reservation)
    useEffect(() => {
        dispatch(fetchRaids());
        dispatch(fetchReservation())

    }, [dispatch]);

    const handlePageChange = (pageNum) => {
        dispatch(fetchRaids(pageNum));
    };
    const renderRiads = () => {
        return (

            <div className='grid grid-cols-1 md:gap-7 sm:grid-cols-2'>
                {riads?.data?.map(riad => (
                    <div key={riad.id} className="border border-gray-700 p-4 rounded-xl">
                        <div className="relative group">
                            <div className="overflow-hidden rounded aspect-w-1 aspect-h-1">
                                <img
                                    className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                                    src={`http://localhost:8000/storage/images/${riad.cover}`}
                                    alt=""
                                />
                            </div>
                            <div className="absolute left-3 top-3">
                                <p className="sm:px-3 sm:py-1 px-1.5 py-1 text-[8px] sm:text-xs font-bold flex tracking-wide text-white bg-[#111827] rounded-full gap-2">
                                    <span><CiLocationOn className="mt-0.5" /></span> {riad.localisation}
                                </p>
                            </div>

                            <div className="absolute gap-2 flex justify-between right-3 top-3">
                                <Link to={`/update/${riad.id}`} className="sm:py-1 px-1 py-1 text-[8px] sm:text-sm font-bold flex tracking-wide text-white bg-[#111827] rounded-full gap-2">
                                    <span><GrUpdate /></span>
                                </Link>

                                <button onClick={() => { setDelete(true)
                                    setId(riad.id)
                                }} className="sm:py-1 px-1 py-1 text-[8px] sm:text-sm font-bold flex tracking-wide text-white bg-[#111827] rounded-full gap-2">
                                    <span><FiTrash2 /></span>
                                </button>
                            </div>
                            <div className="flex items-start justify-between mt-4 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-white sm:text-sm md:text-base">
                                        <Link to={`/riaddetails/${riad.id}`} title="">
                                            {riad.name}
                                            <span className="inset-0" aria-hidden="true"></span>
                                        </Link>
                                    </h3>
                                    <div className="text-xs text-white sm:text-sm md:text-base line-clamp-1">
                                        <p>{riad.description}</p>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="text-xs text-white sm:text-sm md:text-base">{riad.currency} {riad.prix}<span className="text-gray-400">/night</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        );
    };

    return (
        <>
            <NavbarDirecteur user={user}/>
            <main className='container px-12 mt-36 mb-24 lg:mb-32 flex flex-col lg:flex-row'>
                <div className="block flex-grow mb-24 lg:mb-0">
                    <div className='lg:sticky lg:top-24'>
                        <div
                            className=" w-full flex flex-col items-center text-center sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-6 sm:space-y-7 px-0 sm:p-6 xl:p-8">

                            <div className="space-y-3 text-center flex flex-col items-center"><h2
                                className="text-3xl font-semibold text-white">{user.name}</h2>

                            </div>
                            <p className="text-neutral-500 dark:text-neutral-400">Providing lake views, The Symphony 9
                                Tam Coc in Ninh Binh provides accommodation, an outdoor.</p>
                            <div className="border-b border-neutral-200 dark:border-neutral-700 w-14"></div>
                            {reservation ? (
                                <>
                                    <div className=''>
                                        <div className="border border-gray-700 p-4 rounded-xl">
                                            <div className="relative group">
                                                <div className="overflow-hidden rounded aspect-w-1 aspect-h-1">
                                                    <img
                                                        className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                                                        src={`http://localhost:8000/storage/images/${reservation?.cover}`}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="absolute left-3 top-3">
                                                    <p className="sm:px-3 sm:py-1 px-1.5 py-1 text-[8px] sm:text-xs font-bold flex tracking-wide text-white bg-[#111827] rounded-full gap-2">
                                                        <span><CiLocationOn
                                                            className="mt-0.5"/></span> {reservation?.localisation}
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
                                                <div className="flex items-start justify-between mt-4 space-x-4">
                                                    <div>
                                                        <h3 className="text-xs font-bold text-white sm:text-sm md:text-base">
                                                            <Link to={`/riaddetails/${reservation?.id}`} title="">
                                                                {reservation?.name}
                                                                <span className="inset-0" aria-hidden="true"></span>
                                                            </Link>
                                                        </h3>
                                                        <div
                                                            className="text-xs text-white sm:text-sm md:text-base line-clamp-1">
                                                            <p>{reservation?.description}</p>
                                                        </div>
                                                    </div>

                                                    <div className="text-right">
                                                        <p className="text-xs text-white sm:text-sm md:text-base">{reservation?.currency} {reservation?.prix}<span
                                                            className="text-gray-400">/night</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </>
                            ) : (
                                <>
                                    <div className='text-gray-400'>No Reservation Found</div>
                                </>
                            )}

                        </div>


                    </div>
                </div>
                <div className='w-full  lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pl-10 flex-shrink-0'>
                    <div className='border border-gray-700 p-4 rounded-xl'>
                        <div><h2 className="text-2xl text-white font-semibold">{user.email} listings</h2><span
                            className="block mt-2 text-neutral-500 dark:text-neutral-400">Kevin Francis's listings is very rich, 5 star reviews help him to be more branded.</span>
                        </div>
                        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
                        <TableServices/>
                        {renderRiads()}
                        <div className='text-white flex mt-16 justify-center items-center'>
                            <Pagination
                                totalItemsCount={riads.total}
                                activePage={riads.current_page}
                                itemsCountPerPage={riads.per_page}
                                onChange={handlePageChange}
                                itemClass='page-item'
                                linkClass='page-link bg-[#4F46E5] px-5 py-3 rounded-full mx-1'
                                itemClassFirst='first:ml-0 mx-1'
                                itemClassLast='last:mr-0 mx-1'
                                itemClassPrev='mx-1'
                                itemClassNext='mx-1'
                                activeClass='font-bold'
                                hideDisabled='true'
                                innerClass='flex'
                                activeLinkClass='bg-[#4F46E5] hover:bg-[#4F46E7] rounded-full mx-1'
                                linkClassFirst='mx-1'
                                linkClassPrev='mx-1'
                                linkClassNext='mx-1'
                                linkClassLast='mx-1'
                            />
                        </div>

                    </div>
                </div>
            </main>
            {Delete && <DeleteRiad Modal={setDelete} item={id}/>}
            {Accepted && <AcceptedReservationModal setOpenModal={setAccepted} item={id}/>}
        </>
    );
};

export default Dashboard;
