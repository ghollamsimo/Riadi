import Reatc from 'react'
import Boxrelax from '../assets/img/boxrelax.png'
import Smart from '../assets/img/smartchecklist.png'
import Savemore from '../assets/img/savemore.png'
const HowitworksSection = () =>{
    return(
        <>
            <section className="py-10  sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-semibold text-white">How does it
                            work?</h2>
                        <p className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
                            Keep calm & travel on
                        </p>
                    </div>

                    <div className="relative mt-12 lg:mt-20">
                        <div className="hidden md:block absolute inset-x-0 top-10">
                            <img className="w-full"
                                 src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                                 alt=""/>
                        </div>

                        <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                            <div>
                                <div
                                    className="nc-NcImage mb-8 max-w-[200px] mx-auto">
                                    <span className="text-xl font-semibold text-gray-700">
                                        <img src={Boxrelax}/>
                                    </span>
                                </div>
                                <h3 className="mt-6 text-xl font-semibold leading-tight text-white md:mt-10">Book & relax
                                </h3>
                                <p className="mt-4 text-base text-gray-400"> Let each trip be an inspirational journey, each room a peaceful space
                                </p>
                            </div>

                            <div>
                                <div
                                    className="nc-NcImage mb-8 max-w-[200px] mx-auto">
                                    <span className="text-xl font-semibold text-gray-700">
                                        <img src={Smart}/>
                                    </span>
                                </div>
                                <h3 className="mt-6 text-xl font-semibold leading-tight text-white md:mt-10">Smart checklist
                                </h3>
                                <p className="mt-4 text-base text-gray-400">Amet minim mollit non Let each trip be an inspirational journey, each room a peaceful space
                                </p>
                            </div>

                            <div>
                                <div
                                    className="nc-NcImage text-white mb-8 max-w-[200px] mx-auto">
                                    <span className="text-xl font-semibold text-gray-700">
                                        <img src={Savemore}/>
                                    </span>
                                </div>
                                <h3 className="mt-6 text-white text-xl font-semibold leading-tight  md:mt-10">Save more
                                </h3>
                                <p className="mt-4 text-base text-gray-400">Amet minim mollit non Let each trip be an inspirational journey, each room a peaceful space
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HowitworksSection