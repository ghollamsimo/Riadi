import React, {useState, Fragment, useEffect} from "react";
import Hero from "../../components/hero/Hero.jsx";
import HeadingPlace from "./HeadingPlace.jsx";
import Riadimage from '../../assets/img/image-header.jpg'
import { CiLocationOn } from "react-icons/ci";
import Filterdistination from "../../components/Filterdistination.jsx";
import HowitworksSection from "../../components/HowitworksSection.jsx";
import axios from "axios";
import Loadingdata from "../../components/Loadingdata.jsx";

const RiadCard = () =>{
    const [loading , setLoading] = useState(true)
    const [riads  ,setRiads] = useState([]);

    useEffect(() =>{
        axios.get(`http://127.0.0.1:8000/api/riads`).then(response => {
            //console.log(response.data);
            setRiads(response.data)
            setLoading(false)
        })
    }, [])


    if (loading){
        return (
            <Loadingdata/>
        )
    }
    let riadsDetials = "";
    riadsDetials = riads.map( (item, index) => {

        return (
            <div  className="px-4 mx-auto sm:px-6  max-w-7xl" key={index}>
                <div className="grid grid-cols-2 gap-6 mt-10 lg:gap-14 lg:grid-cols-3">
                    <div className="relative group">
                        <div className="overflow-hidden rounded aspect-w-1 aspect-h-1">
                            <img
                                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                                src={Riadimage}
                                alt=""/>
                        </div>
                        <div className="absolute left-3 top-3">
                            <p className="sm:px-3 sm:py-1 px-1.5 py-1 text-[8px] sm:text-xs font-bold flex tracking-wide text-white  bg-[#111827] rounded-full gap-2">
                                <span><CiLocationOn className='mt-0.5'/></span> {item.localisation}</p>
                        </div>
                        <div className="flex items-start justify-between mt-4 space-x-4">
                            <div>
                                <h3 className="text-xs font-bold text-white sm:text-sm md:text-base">
                                    <a href="#" title="">
                                        {item.name}
                                        <span className="absolute inset-0" aria-hidden="true"></span>
                                    </a>
                                </h3>
                                <div className="text-xs text-white sm:text-sm md:text-base">
                                    <p>{item.description}</p>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="text-xs text-white sm:text-sm md:text-base">${item.prix}<span
                                    className='text-gray-400'>/night</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    })
    //console.log(riadsDetials)
    return (
        <Fragment>
            <Hero/>
            <HeadingPlace/>
            <section className="py-3 bg-[#0E131F] rounded-t-3xl text-white sm:py-16 lg:py-2">
                <div className='px-4 sm:pt-14 pt-5 '>
                    <h1 className={`${`text-3xl sm:px-24 text-white md:text-4xl font-semibold`}`}>Featured places
                        to stay
                    </h1>
                    <p className={`${`text-gray-300 lg:text-xl text-lg sm:px-24 sm:text-2xl pt-3 pb-7`}`}>Popular places
                        to stay that Chisfis recommends for you
                    </p>
                    <div className={`${`px-0 sm:px-24 sm:pb-2`}`}>
                        <Filterdistination/>

                    </div>
                </div>
                {riadsDetials}
            </section>
            <HowitworksSection/>

        </Fragment>

    )
}

export default RiadCard;