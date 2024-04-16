import {useEffect} from "react";
import {fetchRiad} from "../../redux/actions/RiadAction.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import moment from "moment";

const SingleRiadPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const riad = useSelector((state) => state.riadsData.datalist.riad);
    const images = useSelector((state) => state.riadsData.datalist.riad);

    console.log('riad:', riad);
    const formattedCheckoutDate = riad && moment(riad.checkout).format('MMM DD');
    const formattedCheckinDate = riad && moment(riad.checkin).format('MMM DD');

    useEffect(() => {
        dispatch(fetchRiad(id));
    }, [dispatch, id]);

    return (
        <>
            <div className="container py-5 px-8 relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">

                {images?.images?.map((item, index) => {
                    console.log(index)
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

            <div className="grid grid-cols-2 gap-10 p-5 px-8">
                <div className='border h-fit px-3 py-5 text-white border-gray-600 rounded-lg w-full'>
                    <div className="flex px-8 justify-between items-center">
            <span
                className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100">
                {riad && riad.categorie.name}
            </span>
                        <div className="flow-root">
                            <div className="flex text-neutral-700 dark:text-neutral-300 text-sm -mx-3 -my-1.5">
                    <span
                        className="py-1.5 px-3 flex rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                        </svg>
                        <span className="hidden sm:block ml-2.5">Share</span>
                    </span>
                                <span
                                    className="py-1.5 px-3 flex rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                        <span className="hidden sm:block ml-2.5">Save</span>
                    </span>
                            </div>
                        </div>
                    </div>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>
                        {riad && riad.name}
                    </h1>
                    <div className="flex items-center space-x-4">

                        <span>·</span><span className='flex'> <CiLocationOn/><span
                        className="ml-1"> {riad && riad.localisation}</span></span>
                    </div>

                    <div className="flex items-center">

                        <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">Hosted by <span
                            className="text-neutral-900 dark:text-neutral-200 font-medium">{riad && riad.drriad.user.name}</span></span>
                    </div>
                    <div className="w-full pt-6 border-b border-neutral-100 dark:border-neutral-700"></div>

                    <div
                        className="flex pt-6 items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
                        <div className="flex items-center space-x-4 "><i className=" las la-user text-2xl "></i><span
                            className="">{riad && riad.guests} <span
                            className="hidden sm:inline-block">guests</span></span></div>
                        <div className="flex items-center space-x-3"><i className=" las la-bed text-2xl"></i><span
                            className=" ">{riad && riad.rooms} <span
                            className="hidden sm:inline-block">Rooms</span></span></div>

                    </div>
                </div>

                    <div className=' pt-3 col-span-1 flex justify-end w-fit border border-gray-500 rounded-xl'>
                        <div className={"flex flex-col w-fit"}>
                            <div className="flex w-fit p-4  text-white justify-between">
            <span className="text-3xl font-semibold">{riad && riad.currency} {riad && riad.prix}<span
                className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">/night</span></span>
                            </div>

                            <div className='px-8 flex gap-5 text-white w-fit justify-between '>
                                <div
                                    className="StayDatesRangeInput rounded-xl px-24 border border-gray-600  relative flex flex-1 z-[11]"
                                    data-headlessui-state="">
                                    <button
                                        className="flex-1  flex relative p-3 items-center space-x-3 focus:outline-none "
                                        type="button" aria-expanded="false" data-headlessui-state=""
                                        id="headlessui-popover-button-:r4:">
                                        <div className="text-neutral-300 dark:text-neutral-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                                                 className="w-5 h-5 lg:w-7 lg:h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-grow text-left"><span
                                            className="block xl:text-lg font-semibold">{formattedCheckinDate} - {formattedCheckoutDate}</span><span
                                            className="block mt-1 text-sm text-neutral-400 leading-none font-light">Check in - Check out</span>
                                        </div>
                                    </button>
                                </div>
                                <div className="border rounded-xl border-gray-600 items-center focus:outline-none  ">
                                    <button
                                        className="relative z-10 flex-1 flex text-left items-center p-3 space-x-3 focus:outline-none"
                                        type="button" aria-expanded="false" data-headlessui-state=""
                                        id="headlessui-popover-button-:r6:">
                                        <div className="text-neutral-300 dark:text-neutral-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                                                 className="w-5 h-5 lg:w-7 lg:h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-grow"><span
                                            className="block xl:text-lg font-semibold">{riad && riad.guests} Guests</span><span
                                            className="block mt-1 text-sm text-neutral-400 leading-none font-light">Guests</span>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div className="flex pb-2 text-white px-12 pt-10 flex-col space-y-4">
                                <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
                                    <span>{riad && riad.currency} {riad && riad.prix} x {riad && riad.maxnight} night</span><span>{riad && riad.prix * riad.maxnight} {riad && riad.currency}</span>
                                </div>
                                <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
                                <div className="flex justify-between font-semibold">
                                    <span>Total</span><span>{riad && riad.prix * riad.maxnight} {riad && riad.currency}</span>
                                </div>
                                <button
                                    className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 bg-[#4F46E5] ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
                                    rel="noopener noreferrer">Reserve
                                </button>
                            </div>
                        </div>
                    </div>


                <div className="listingSection__wrap px-6 py-6 text-white border border-gray-600 rounded-xl"><h2
                    className="text-2xl font-semibold">Riad information</h2>
                    <div className="w-14 pt-6 border-b border-neutral-200 dark:border-gray-600"></div>
                    <div className="text-neutral-6000 pt-6 dark:text-neutral-300">
                        <span>{riad && riad.description}</span>
                    </div>
                </div>

                <div className="listingSection__wrap">
                    <div><h2 className="text-2xl font-semibold">Amenities </h2><span
                        className="block mt-2 text-neutral-500 dark:text-neutral-400"> About the property's amenities and services</span>
                    </div>
                    <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
                    <div
                        className="grid grid-cols-1 xl:grid-cols-3 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
                        <div className="flex items-center space-x-3"><i className="text-3xl las la-key"></i><span
                            className=" ">la-key</span></div>
                        <div className="flex items-center space-x-3"><i
                            className="text-3xl las la-luggage-cart"></i><span
                            className=" ">la-luggage-cart</span></div>
                        <div className="flex items-center space-x-3"><i className="text-3xl las la-shower"></i><span
                            className=" ">la-shower</span></div>
                        <div className="flex items-center space-x-3"><i className="text-3xl las la-smoking"></i><span
                            className=" ">la-smoking</span></div>
                        <div className="flex items-center space-x-3"><i className="text-3xl las la-snowflake"></i><span
                            className=" ">la-snowflake</span></div>
                        <div className="flex items-center space-x-3"><i className="text-3xl las la-spa"></i><span
                            className=" ">la-spa</span></div>
                        <div className="flex items-center space-x-3"><i className="text-3xl las la-suitcase"></i><span
                            className=" ">la-suitcase</span></div>
                        <div className="flex items-center space-x-3"><i
                            className="text-3xl las la-suitcase-rolling"></i><span
                            className=" ">la-suitcase-rolling</span>
                        </div>
                        <div className="flex items-center space-x-3"><i className="text-3xl las la-swimmer"></i><span
                            className=" ">la-swimmer</span></div>
                        <div className="flex items-center space-x-3"><i
                            className="text-3xl las la-swimming-pool"></i><span
                            className=" ">la-swimming-pool</span></div>
                        <div className="flex items-center space-x-3"><i className="text-3xl las la-tv"></i><span
                            className=" ">la-tv</span></div>
                        <div className="flex items-center space-x-3"><i
                            className="text-3xl las la-umbrella-beach"></i><span
                            className=" ">la-umbrella-beach</span></div>
                    </div>
                    <div className="w-14 border-b border-neutral-200"></div>
                    <div>
                        <button
                            className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">View
                            more 20 amenities
                        </button>
                    </div>
                </div>

            </div>


        </>
    );
};

export default SingleRiadPage