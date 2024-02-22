import {Fragment , useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";
import HeroImage from '../../assets/img/hero.png';

import './Hero.css'

const Hero = () =>{
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = newValue => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };

    return (

        <Fragment>
            <section className=" relative py-12 bg-transparent overflow-hidden sm:pb-16 lg:pb-20 xl:pb-24">
                <div className=" mx-auto relative max-w-7xl">
                    <div className=" grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
                        <div className="">
                            <h1 className="text-4xl text-white font-bold font-serif sm:text-5xl lg:text-6xl xl:text-7xl">Riadi
                                Best, Real Estate</h1>
                            <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">Accompanying us, you have a trip full of experiences. With Riadi, booking accommodation, resort villas, hotels..</p>

                            <div className="absolute w-full h-full mt-3  rounded-full pr-16 sm:mt-12">
                                <section className="search-sec relative z-50 search w-full bg-[#1F2937] py-4">
                                    <div className="container mx-auto">
                                        <form action="#" method="post" noValidate="novalidate">
                                            <div className="grid grid-cols-1 lg:grid-cols-12">
                                                <div className="lg:col-span-3 md:col-span-6 col-span-12 p-2">
                                                    <input type="text"
                                                           className="w-full text-white bg-transparent p-2 border-r-2 border-white  focus:outline-none"
                                                           placeholder="Location"/>
                                                </div>
                                                <div className="lg:col-span-3 md:col-span-6 col-span-12 p-2">
                                                    <input type="text"
                                                           className="w-full bg-transparent p-2 border-r-2 border-white text-white focus:outline-none"
                                                           placeholder="Enter Name Of Riad"/>
                                                </div>
                                                <div className="lg:col-span-3 z-50 relative h-full w-full md:col-span-6 col-span-12 p-2 bg-transparent" >
                                                    <Datepicker value={value} onChange={handleValueChange}/>

                                                </div>
                                                <div className="lg:col-span-3 md:col-span-6 col-span-12 p-2 ">
                                                    <button type="button"
                                                            className="w-full bg-[#4f46e5] text-white px-4 py-2 rounded">Search
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </section>

                            </div>
                        </div>

                        <div className="relative grid grid-cols-2  px-24">
                            <img src={HeroImage} alt="..." className='col-span-2 w-full'/>

                        </div>
                    </div>
                </div>
            </section>


        </Fragment>

    )
}

export default Hero;