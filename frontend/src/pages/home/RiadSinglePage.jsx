import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {fetchRiad} from "../../redux/actions/RiadAction.jsx";
import moment from "moment/moment.js";
import Navbar from '../../components/nav/Navbar.jsx'
import {toast} from "react-toastify";
import {AddComment, DeleteComment, fetchCommentsCount} from "../../redux/actions/CommentAction.jsx";
import Footer from '../../components/Footer.jsx'
import { IoClose } from "react-icons/io5";
import PayPage from "./PayPage.jsx";
import {AddFavori} from "../../redux/Action.js";
import {ClipLoader} from "react-spinners";

const RiadSinglePage = () =>{
    const dispatch = useDispatch()
    const [favori ] = useState(false)
    const [comment , setComment] = useState('')
    const [dropdown , setDropdown] = useState(false)
    const [Pay , setPay] = useState(false)
    const [guests , setGuests] = useState(1)
    const {id} = useParams();
    const [loading , setLoading] = useState(true)
    const riad = useSelector((state) => state.riadsData.datalist?.riad);
    const repas = useSelector((state) => state.riadsData.datalist?.riad?.repas_names);
    const services = useSelector((state) => state.riadsData.datalist?.riad?.services_names);
    const comments = useSelector((state) => state.riadsData.datalist?.comment)
    const images = useSelector((state) => state.riadsData.datalist?.riad);
   // console.log('l9ees' , repas)
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
    const validate = () => {
        if (!comment){
            toast.error('Please enter a comment')
            return false
        }
        return true
    }
    const form = new FormData()
    form.append('comments', comment)
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            await dispatch(AddComment(riad?.id, form ) )
            dispatch(fetchRiad(id));
        }
    };
    const handleDelete = async (commentid) => {
        await dispatch(DeleteComment(commentid))
        dispatch(fetchRiad(id))
    }
    const handleFavorites = (riadId) => {
        dispatch(AddFavori(riadId , {favori}))
    }
    useEffect(() => {
        dispatch(fetchRiad(id));
        dispatch(fetchCommentsCount(riad?.id))
        setLoading(false)
    }, [dispatch, id]);

    const dateComments = riad && moment(comments.created_at).format('MMM DD, YYYY');
    const formattedCheckoutDate = riad && moment(riad.checkout).format('MMM DD');
    const checkout = riad && moment(riad.checkout).format('hh:mm A');
    const checkin = riad && moment(riad.checkout).format('hh:mm A');
    const formattedCheckinDate = riad && moment(riad.checkin).format('MMM DD');

    const handleOpen = () => {
        setDropdown(!dropdown)
    }

    return(
        <>
            <Navbar/>
            {loading ? (
                <div className='flex justify-center  items-center h-screen'>
                    <ClipLoader color="#ffffff"/>
                </div>
            ) : (
                <>
                    <div className="container mt-28 py-5 px-8 relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">

                        {images?.images?.map((item, index) => {
                            return (

                                <div key={index} className={`${
                                    index === 0 ? "col-span-2 row-span-2 sm:row-span-3 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer" : "relative rounded-md sm:rounded-xl overflow-hidden "
                                }`}>
                                    <div>
                                        <img src={`http://localhost:8000/storage/images/${item.image}`} alt=""/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <main className='px-12 mb-10 relative text-white z-10 mt-11 flex flex-col lg:flex-row '>
                        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10">
                            <div
                                className="listingSection__wrap px-12 py-6 border-gray-600 rounded-xl border space-y-6">
                                <div className="flex justify-between items-center">
                            <span
                                className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100">{riad && riad.categorie.name}</span>
                                    <div className="flow-root">
                                        <div
                                            className="flex text-neutral-700 dark:text-neutral-300 text-sm -mx-3 -my-1.5">

                                            <span onClick={() => handleFavorites(riad && riad.id)}
                                                  className="py-1.5 px-3 flex rounded-lg hover:bg-gray-600 dark:hover:bg-gray-800 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                        <span className="hidden sm:block ml-2.5">Save</span>
                    </span>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">{riad && riad.name}</h2>
                                <div className="flex items-center space-x-4">

                                    <span>·</span>
                                    <span>
                <i className="las la-map-marker-alt"></i>
                <span className="ml-1">{riad && riad.localisation}</span>
            </span>
                                </div>
                                <div className="flex items-center">

                                    <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">Hosted by <span
                                        className="text-neutral-900 dark:text-neutral-200 font-medium">{riad && riad.drriad.user.name}</span></span>
                                </div>
                                <div className="w-full border-b border-neutral-100 dark:border-neutral-700"></div>
                                <div
                                    className="flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
                                    <div className="flex items-center space-x-3">
                                        <i className="las la-user text-2xl"></i>
                                        <span>{riad && riad.guests} <span
                                            className="hidden sm:inline-block">guests</span></span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <i className="las la-bed text-2xl"></i>
                                        <span>{riad && riad.rooms} <span className="hidden sm:inline-block">Rooms</span></span>
                                    </div>

                                </div>
                            </div>

                            <div className="listingSection__wrap  px-12 py-6 border-gray-600 rounded-xl border"><h2
                                className="text-2xl font-semibold">Riad information</h2>
                                <div className="w-14 mt-5 border-b border-neutral-200 dark:border-neutral-700"></div>
                                <div className="text-neutral-6000 mt-5 dark:text-neutral-300">
                                    <span>{riad && riad.description}</span>
                                </div>
                            </div>

                            <div className="listingSection__wrap px-12 py-6 border-gray-600 rounded-xl border">
                                <div><h2 className="text-2xl font-semibold">Amenities </h2><span
                                    className="block mt-2 text-neutral-500 dark:text-neutral-400"> About the amenities and services</span>
                                </div>
                                <div className="w-14 mt-5 border-b border-neutral-200 dark:border-neutral-700"></div>
                                <div
                                    className="grid mt-5 grid-cols-1 xl:grid-cols-3 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
                                    {repas?.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-3"><i
                                            className="text-3xl las la-key"></i><span
                                            className=" ">{item}</span></div>
                                    ))}

                                </div>
                                <div className="w-14 mt-5 border-b border-neutral-200"></div>
                                <div
                                    className="grid mt-5 grid-cols-1 xl:grid-cols-3 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
                                    {services?.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-3"><i
                                            className="text-3xl las la-key"></i><span
                                            className=" ">{item}</span></div>
                                    ))}

                                </div>
                            </div>

                            <div className="listingSection__wrap px-12 py-6 border-gray-600 rounded-xl border">
                                <div><h2 className="text-2xl font-semibold">Room Rates </h2><span
                                    className="block mt-2 text-neutral-500 dark:text-neutral-400">Prices may increase on weekends or holidays</span>
                                </div>
                                <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
                                <div className="flow-root">
                                    <div
                                        className="text-sm mt-5 sm:text-base text-neutral-6000 dark:text-neutral-300 -mb-4">

                                        <div
                                            className="p-4 mt-5 bg-neutral-100 dark:bg-gray-800 flex justify-between items-center space-x-4 rounded-lg">
                                            <span>Minimum number of nights</span><span>{riad && riad.minnight} night</span>
                                        </div>
                                        <div className="p-4 flex justify-between items-center space-x-4 rounded-lg">
                                            <span>Max number of nights</span><span>{riad && riad.maxnight} nights</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="listingSection__wrap px-12 py-6 border-gray-600 rounded-xl border">
                                <h2 className="text-2xl font-semibold">Reviews ()</h2>
                                <div className="w-14 mt-5 border-b border-neutral-200 dark:border-neutral-700">

                                </div>
                                <div className="space-y-5">

                                    <div className="relative mt-5">
                                        <form onSubmit={handleSubmit}>
                                            <input type="text"
                                                   value={comment}
                                                   onChange={(e) => setComment(e.target.value)}
                                                   className="block w-full  border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-3xl  h-16 px-4 py-3 "
                                                   placeholder="Share your thoughts ..."/>
                                            <button
                                                className="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-[#4F46E5] hover:bg-primary-700 text-neutral-50 absolute right-2 top-1/2 transform -translate-y-1/2  w-12 h-12  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                                type='submit'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                                                     className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                </div>

                                <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
                                    {comments?.map(item => (
                                        <div key={item.id} className="nc-CommentListing flex space-x-4 py-8"
                                             data-nc-id="CommentListing">

                                            <div key={item} className="pt-0.5">
                                                <div
                                                    className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-10 w-10 text-lg ring-1 ring-white dark:ring-neutral-900">
                                                    <span className="wil-avatar__name">C</span></div>
                                            </div>
                                            <div className="flex-grow">
                                                <div className="flex justify-between space-x-3">
                                                    <div className="flex flex-col">
                                                        <div className="text-sm font-semibold">
                                                            <span>{item.client.user.name}</span></div>
                                                        <span
                                                            className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">{dateComments}</span>
                                                    </div>

                                                    <button onClick={() => handleDelete(item.id)} className=''>
                                                        <IoClose/></button>

                                                </div>
                                                <span
                                                    className="block mt-3 text-neutral-6000 dark:text-neutral-300">{item.comments}</span>
                                            </div>
                                        </div>
                                    ))}

                                </div>


                            </div>

                            <div className="listingSection__wrap px-12 py-6 border-gray-600 rounded-xl border"><h2
                                className="text-2xl font-semibold">Things to know</h2>
                                <div className="w-14 mt-5 border-b border-neutral-200 dark:border-neutral-700"></div>

                                <div><h4 className="text-lg mt-5 font-semibold">Check-in time</h4>
                                    <div
                                        className="mt-3 text-neutral-500 dark:text-neutral-400 max-w-md text-sm sm:text-base">
                                        <div
                                            className="flex w-full space-x-10 justify-between p-3 bg-neutral-100 dark:bg-gray-800 rounded-lg">
                                            <span>Check-in</span><span>{checkin}</span></div>
                                        <div className="flex space-x-10 justify-between p-3">
                                            <span>Check-out</span><span>{checkout}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-14 mt-5 border-b border-neutral-200 dark:border-neutral-700"></div>
                                <div className='mt-5'><h4 className="text-lg font-semibold">Rule Note</h4>
                                    <div className="prose sm:prose">
                                        <ul className="mt-3 text-neutral-500 dark:text-neutral-400 space-y-2">
                                            <li>{riad && riad.rule}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="hidden w-fit  lg:block flex-grow mt-14 lg:mt-0">
                            <div className="sticky  border rounded-xl  p-12 border-gray-600 top-28">
                                <div className="listingSectionSidebar__wrap ">

                                    <div className="flex justify-between">
                            <span className="text-3xl font-semibold">{riad && riad.currency} {riad && riad.prix}<span
                                className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">/night</span></span>

                                    </div>
                                    <form
                                        className="flex mt-10 flex-col border border-neutral-200 dark:border-gray-700 rounded-3xl">
                                        <div className="StayDatesRangeInput relative flex flex-1 z-[11]"
                                             data-headlessui-state="">
                                            <button
                                                className="flex-1 flex relative p-3 items-center space-x-3 focus:outline-none"
                                                type="button" aria-expanded="false" data-headlessui-state=""
                                                id="headlessui-popover-button-:rn:">
                                                <div className="text-neutral-300 dark:text-neutral-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24"
                                                         strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                                                         className="w-5 h-5 lg:w-7 lg:h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path>
                                                    </svg>
                                                </div>
                                                <div className="flex-grow text-left">
                                            <span
                                                className="block xl:text-lg font-semibold">{formattedCheckinDate} - {formattedCheckoutDate}</span>
                                                    <span
                                                        className="block mt-1 text-sm text-neutral-400 leading-none font-light">Check in - Check out</span>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="w-full border-b border-gray-600 dark:border-neutral-700"></div>
                                        <div className="flex relative flex-1" data-headlessui-state="">
                                            <div className="flex-1 flex items-center focus:outline-none rounded-b-3xl">
                                                <button
                                                    onClick={handleOpen}
                                                    className="relative z-10 flex-1 flex text-left items-center p-3 space-x-3 focus:outline-none"
                                                    type="button" aria-expanded="false" data-headlessui-state=""
                                                    id="headlessui-popover-button-:rp:">
                                                    <div className="text-neutral-300 dark:text-neutral-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                             viewBox="0 0 24 24"
                                                             strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                                                             className="w-5 h-5 lg:w-7 lg:h-7">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <span
                                                            className="block xl:text-lg font-semibold">{guests} Guests</span>
                                                        <span
                                                            className="block mt-1 text-sm text-neutral-400 leading-none font-light">Guests</span>
                                                    </div>
                                                </button>
                                            </div>

                                            {dropdown && (
                                                <>
                                                    <div
                                                        className="absolute right-0 z-10 w-full sm:min-w-[340px] max-w-sm dark:bg-gray-800  top-full mt-3 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl ring-1 ring-black ring-opacity-5 opacity-100 translate-y-0"
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
                                                                         fill="currentColor" aria-hidden="true"
                                                                         className="w-4 h-4">
                                                                        <path fillRule="evenodd"
                                                                              d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                                                                              clipRule="evenodd"></path>
                                                                    </svg>
                                                                </button>
                                                                <input type='number' name='guests' value={guests}
                                                                       onChange={(e) => setNumberOfGuuests(e.target.value)}
                                                                       readOnly
                                                                       className='outline-0 bg-transparent pl-3 w-12 text-center mx-auto'/>
                                                                <button
                                                                    onClick={handleChangeGuests}
                                                                    className={`w-8 h-8 rounded-full  border border-gray-600 outline-0 text-white bg-white dark:bg-transparent flex items-center justify-center  dark:border-neutral-500  dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default`}
                                                                    type="button">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                         viewBox="0 0 24 24"
                                                                         fill="currentColor" aria-hidden="true"
                                                                         className="w-4 h-4">
                                                                        <path fillRule="evenodd"
                                                                              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                                                                              clipRule="evenodd"></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </form>
                                    <div className="flex mt-8 flex-col space-y-4">
                                        <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
                                            <span>{riad && riad.currency} {riad && riad.prix} x {riad && riad.maxnight} night</span>
                                            <span>{riad && riad.prix * riad.maxnight} {riad && riad.currency}</span>
                                        </div>

                                        <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
                                        <div className="flex justify-between font-semibold">
                                            <span>Total</span>
                                            <span>{riad && riad.prix * riad.maxnight} {riad && riad.currency}</span>
                                        </div>
                                    </div>
                                    <button onClick={() => {
                                        setPay(true)
                                    }}
                                            className="nc-Button mt-5 mx-auto w-full relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 ttnc-ButtonPrimary disabled:bg-opacity-70 bg-[#4F46E5] hover:bg-primary-700 text-neutral-50 "
                                            rel="noopener noreferrer">Reserve
                                    </button>
                                </div>
                            </div>
                        </div>

                    </main>
                </>
            )}


            {Pay && <PayPage setOpenModal={setPay} id={riad}/>}
            <Footer/>
        </>
    )
}

export default RiadSinglePage