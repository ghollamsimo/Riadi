import React , {Fragment} from "react";

const Hero = () =>{
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
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
                                type="submit"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 text-white rounded-3xl shadow-md bg-[#4f46e5] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Start Your Search
                            </button>

                        </div>
                    </div>
                </div>
                <div className="relative px-4 sm:px-0">
                    <div className="absolute inset-0  h-1/2"/>
                    <div
                        className="relative grid mx-auto overflow-hidden divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
                        <div className="inline-block p-8 text-center">
                            <div
                                className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full ">
                                <svg
                                    className="w-10 h-10 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <p className="font-bold tracking-wide text-gray-800">
                                Make it better
                            </p>
                        </div>
                        <div className="inline-block p-8 text-center">
                            <div
                                className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full ">
                                <svg
                                    className="w-10 h-10 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <p className="font-bold tracking-wide text-gray-800">
                                Do it faster
                            </p>
                        </div>
                        <div className="inline-block p-8 text-center">
                            <div
                                className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full ">
                                <svg
                                    className="w-10 h-10 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <p className="font-bold tracking-wide text-gray-800">
                                Working harder
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default Hero;