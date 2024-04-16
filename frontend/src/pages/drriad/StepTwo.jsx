import { useEffect, useState, useCallback } from "react";
import Aos from "aos";

const StepTwo = ({ handleNext, handlePrev, handleChange }) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const [count, setCount] = useState(1);
    const [room, setRoom] = useState(1);
    const [minnight , setMinnight] = useState(1);
    const [maxnight , setMaxnight] = useState(1);
    const handlePlusOne = () => {
        if (count < 20) {
            setCount(count + 1);
        }
    };

    const handleMinesOne = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handlePlusRoom = () => {
        if (room < 20) {
            setRoom(room + 1);
        }
    };

    const handleMinesRoom = () => {
        if (room > 1) {
            setRoom(room - 1);
        }
    };

    const handlePlusMinNight = () => {
        if (minnight < 31) {
            setMinnight(minnight + 1);
        }
    };

    const handleMineMinNight = () => {
        if (minnight > 1) {
            setMinnight(minnight - 1);
        }
    };

    const handlePlusMaxnight = () => {
        if (maxnight < 31) {
            setMaxnight(maxnight + 1);
        }
    };

    const handleMineMaxNight = () => {
        if (maxnight > 1) {
            setMaxnight(maxnight - 1);
        }
    };

    useEffect(() => {
        handleChange({ target: { name: 'guests', value: count } });
    }, [count, handleChange]);

    useEffect(() => {
        handleChange({ target: { name: 'rooms', value: room } });
    }, [room, handleChange]);

    useEffect(() => {
        handleChange({ target: { name: 'minnight', value: minnight } });
    }, [minnight, handleChange]);

    useEffect(() => {
        handleChange({ target: { name: 'maxnight', value: maxnight } });
    }, [maxnight, handleChange]);


    return (
        <>
            <div className="listingSection__wrap  text-white px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32"
                 data-aos="fade-down">

                <div className='space-y-11 border border-gray-600 p-12 rounded-xl'>
                    <div><span className="text-4xl font-semibold">02</span> <span
                        className="text-lg text-neutral-500 dark:text-neutral-400">/ 3</span></div>
                    <h2 className="text-2xl font-semibold">Size of your location</h2>
                    <div className="w-14  border-b border-neutral-200 dark:border-neutral-700"></div>
                    <div className="space-y-8">
                        <div className=""><label
                            className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                            data-nc-id="Label">Acreage (m2)</label>
                            <div className="mt-1"><select
                                name='acreage'
                                onChange={handleChange}
                                className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1">
                                <option className='text-black' value="100">100</option>
                                <option className='text-black' value="200">200</option>
                                <option className='text-black' value="300">300</option>
                                <option className='text-black' value="400">400</option>
                                <option className='text-black' value="500">500</option>
                            </select></div>
                        </div>
                        <div className="nc-NcInputNumber flex items-center justify-between space-x-5 w-full"
                             data-nc-id="NcInputNumber">
                            <div className="flex flex-col"><span
                                className="font-medium text-neutral-800 dark:text-neutral-200">Guests</span></div>
                            <div className="nc-NcInputNumber flex items-center justify-between w-28">
                                <button
                                    onClick={handleMinesOne}
                                    className={`w-8 h-8 rounded-full  border border-gray-600 outline-0 text-white bg-white dark:bg-transparent flex items-center justify-center  dark:border-neutral-500  dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default`}
                                    type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         aria-hidden="true" className="w-4 h-4">
                                        <path fillRule="evenodd"
                                              d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </button>
                                <input type='number' name='guests' value={count} readOnly
                                       className='outline-0 bg-transparent pl-3 w-12 text-center mx-auto'/>
                                <button
                                    onClick={handlePlusOne}
                                    className={`w-8 h-8 rounded-full  border border-gray-600 outline-0 text-white bg-white dark:bg-transparent flex items-center justify-center  dark:border-neutral-500  dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default`}
                                    type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         aria-hidden="true" className="w-4 h-4">
                                        <path fillRule="evenodd"
                                              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="nc-NcInputNumber flex items-center justify-between space-x-5 w-full"
                             data-nc-id="NcInputNumber">
                            <div className="flex flex-col"><span
                                className="font-medium text-neutral-800 dark:text-neutral-200">Rooms</span></div>
                            <div className="nc-NcInputNumber flex items-center justify-between w-28">
                                <button
                                    onClick={handleMinesRoom}
                                    className={`w-8 h-8 rounded-full  border border-gray-600 outline-0 text-white bg-white dark:bg-transparent flex items-center justify-center  dark:border-neutral-500  dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default`}
                                    type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         aria-hidden="true" className="w-4 h-4">
                                        <path fillRule="evenodd"
                                              d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </button>
                                <input type='number' name='rooms' value={room} readOnly
                                       className='outline-0 bg-transparent pl-3 w-12 text-center mx-auto'/>
                                <button
                                    onClick={handlePlusRoom}
                                    className={`w-8 h-8 rounded-full  border border-gray-600 outline-0 text-white bg-white dark:bg-transparent flex items-center justify-center  dark:border-neutral-500  dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default`}
                                    type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         aria-hidden="true" className="w-4 h-4">
                                        <path fillRule="evenodd"
                                              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="nc-NcInputNumber flex items-center justify-between space-x-5 w-full"
                             data-nc-id="NcInputNumber">
                            <div className="flex flex-col"><span
                                className="font-medium text-neutral-800 dark:text-neutral-200">Min Night</span></div>
                            <div className="nc-NcInputNumber flex items-center justify-between w-28">
                                <button
                                    onClick={handleMineMinNight}
                                    className={`w-8 h-8 rounded-full  border border-gray-600 outline-0 text-white bg-white dark:bg-transparent flex items-center justify-center  dark:border-neutral-500  dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default`}
                                    type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         aria-hidden="true" className="w-4 h-4">
                                        <path fillRule="evenodd"
                                              d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </button>
                                <input type='number' name='minnight' value={minnight} readOnly
                                       className='outline-0 bg-transparent pl-3 w-12 text-center mx-auto'/>
                                <button
                                    onClick={handlePlusMinNight}
                                    className={`w-8 h-8 rounded-full  border border-gray-600 outline-0 text-white bg-white dark:bg-transparent flex items-center justify-center  dark:border-neutral-500  dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default`}
                                    type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         aria-hidden="true" className="w-4 h-4">
                                        <path fillRule="evenodd"
                                              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="nc-NcInputNumber flex items-center justify-between space-x-5 w-full"
                             data-nc-id="NcInputNumber">
                            <div className="flex flex-col"><span
                                className="font-medium text-neutral-800 dark:text-neutral-200">Max Night</span></div>
                            <div className="nc-NcInputNumber flex items-center justify-between w-28">
                                <button
                                    onClick={handleMineMaxNight}
                                    className={`w-8 h-8 rounded-full  border border-gray-600 outline-0 text-white bg-white dark:bg-transparent flex items-center justify-center  dark:border-neutral-500  dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default`}
                                    type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         aria-hidden="true" className="w-4 h-4">
                                        <path fillRule="evenodd"
                                              d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </button>
                                <input type='number' name='minnight' value={maxnight} readOnly
                                       className='outline-0 bg-transparent pl-3 w-12 text-center mx-auto'/>
                                <button
                                    onClick={handlePlusMaxnight}
                                    className={`w-8 h-8 rounded-full  border border-gray-600 outline-0 text-white bg-white dark:bg-transparent flex items-center justify-center  dark:border-neutral-500  dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default`}
                                    type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         aria-hidden="true" className="w-4 h-4">
                                        <path fillRule="evenodd"
                                              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end py-6 space-x-5">
                    <button
                        className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 border-gray-600 border hover:bg-primary-700 text-neutral-50  focus:outline-none hover:border-gray-600"
                        onClick={handlePrev}
                    >
                        Go back
                    </button>
                    <button
                        className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-[#4F46E5] hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
                        onClick={handleNext}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </>
    );
};

export default StepTwo;
