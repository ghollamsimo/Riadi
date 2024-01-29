import React , {Fragment , useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";
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
            <div className="mb-16 w-full">
                <div className="w-full">
                    <div
                        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <div>
                                <p className="inline-block px-3 py-px mb-4  text-xs font-semibold tracking-wider text-black uppercase rounded-full bg-white">
                                    Brand new
                                </p>
                            </div>
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-white lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                        id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                    >
                      <circle cx="1" cy="1" r=".7"/>
                    </pattern>
                  </defs>
                  <rect
                      fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                      width="52"
                      height="24"
                  />
                </svg>
                <span className="relative text-5xl font-serif font-normal text-white">Raid</span>
              </span>{' '}
                                <span className='text-white font-normal font-serif text-5xl'>,Room & Good experiences</span>

                            </h2>
                            <p className="text-base text-gray-300 font-medium md:text-lg font-mono">
                                Accompanying us, you have a trip full of experiences. With Riadi, booking accommodation, resort Riad, Room
                            </p>
                        </div>
                        <div className="flex items-center sm:justify-center">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 text-white rounded-3xl shadow-md bg-[#4f46e5] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Start Your Search
                            </button>

                        </div>
                    </div>
                </div>
                <div className=" px-4 sm:px-0">
                    <div className=" inset-0  h-1/2"/>

                        <section className="search-sec search  bg-[#1F2937] py-4">
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
                                        <div className="lg:col-span-3 md:col-span-6 col-span-12 p-2">
                                            <Datepicker value={value} onChange={handleValueChange} />

                                        </div>
                                        <div className="lg:col-span-3 md:col-span-6 col-span-12 p-2">
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
        </Fragment>

    )
}

export default Hero;