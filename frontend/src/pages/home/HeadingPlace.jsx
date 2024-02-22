import React, {Fragment} from 'react';
import dist from "../../assets/img/mrrakech.jpg";
import {CiLocationOn} from "react-icons/ci";
import Bennefits from "../../components/Bennefits.jsx";

const HeadingPlace = () =>{
    return (
        <Fragment>
            <div className='font-normal'>
                <div>
                <h1 className='text-3xl px-3 sm:px-36 text-white pb-2 md:text-4xl font-semibold'>Heading of sections</h1>
                <p className='text-gray-300 px-3 sm:px-36 text-xl'>Discover Many Place</p>
                </div>

                <section className="py-2 text-white sm:py-16 lg:py-2">
                    <div className="px-4 mx-auto sm:px-6  max-w-7xl">
                        <div className="grid grid-cols-2 gap-6 mt-10 lg:gap-14 lg:grid-cols-4">
                            <div className="relative group">
                                <div className="overflow-hidden rounded-xl aspect-w-1 aspect-h-1">
                                    <img
                                        className="object-cover w-full h-[20rem] transition-all duration-300 group-hover:scale-125"
                                        src={dist}
                                        alt=""/>
                                </div>
                                <div className="flex items-start justify-between mt-2 space-x-4">
                                    <div>
                                        <h3 className="text-xs font-bold text-white sm:text-sm md:text-base">
                                            <a href="#" title="">
                                                Riad In Jame3 Al Fana
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                            </a>
                                        </h3>
                                        <div className="text-xs text-gray-400 sm:text-sm md:text-base">
                                            How Many Riads In This Distination
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Bennefits/>
        </Fragment>
    )
}
export default HeadingPlace