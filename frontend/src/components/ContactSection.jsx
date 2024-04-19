import CONTACT from '../assets/img/contact.png'
import {IoClose} from "react-icons/io5";
const ContactSection = () => {
    return(
        <>
            <div className='bg-[#0E131F] text-white py-12 mx-auto '>
            <div className="nc-SectionSubscribe2 px-28 relative flex flex-col lg:flex-row lg:items-center "
                 data-nc-id="SectionSubscribe2">
                <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5"><h2
                    className="font-semibold text-4xl">Join our newsletter 🎉</h2><span
                    className="block mt-5 text-neutral-500 dark:text-neutral-400">Read and share new perspectives on just about any topic. Everyone’s welcome.</span>
                    <ul className="space-y-4 mt-10">
                        <li className="flex items-center space-x-4"><span
                            className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100  relative">01</span><span
                            className="font-medium text-neutral-700 dark:text-neutral-300">Get more discount</span></li>
                        <li className="flex items-center space-x-4"><span
                            className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100  relative">02</span><span
                            className="font-medium text-neutral-700 dark:text-neutral-300">Get premium magazines</span>
                        </li>
                    </ul>
                    <form className="mt-10 relative max-w-sm"><input type="email"
                                                                     className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                                                     required="" aria-required="true"
                                                                     placeholder="Enter your email"/>
                        <button
                            className="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-[#4F46E5] hover:bg-primary-700 text-neutral-50 absolute transform top-1/2 -translate-y-1/2 right-[5px]  w-9 h-9  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
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
                <div className="flex-grow">
                    <div className="nc-NcImage " data-nc-id="NcImage"><img
                        src={CONTACT}
                        className="object-cover w-full h-full" alt="nc-imgs"/></div>
                </div>
            </div>
            </div>
        </>
    )
}

export default ContactSection