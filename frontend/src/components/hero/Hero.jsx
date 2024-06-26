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
            <section className="mt-24 relative py-12 bg-transparent overflow-hidden sm:pb-16 lg:pb-20 xl:pb-24">
                <div className=" mx-auto relative max-w-7xl">
                    <div className=" grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
                        <div className="">
                            <h1 className="text-4xl text-white font-normal font-serif sm:text-5xl lg:text-6xl xl:text-7xl">Riadi
                                Best, Real Estate</h1>
                            <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">Accompanying us, you have a trip full of experiences. With Riadi, booking accommodation, resort villas, hotels..</p>


                        </div>

                        <div className="relative  grid grid-cols-2  px-24">
                            <img src={HeroImage} alt="..." className='col-span-2 rounded-xl w-full'/>

                        </div>
                    </div>
                </div>
            </section>


        </Fragment>

    )
}

export default Hero;