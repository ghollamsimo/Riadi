import Navbar from '../../components/nav/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import ContactSection from "../../components/ContactSection.jsx";
import React from "react";
const ContactUs = () =>{
    return(
        <>
            <Navbar/>
            <div className="mb-24 mt-40 lg:mb-32" bis_skin_checked="1"><h2
                className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">Contact</h2>
                <div className="container max-w-7xl mx-auto" bis_skin_checked="1">
                    <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12 " bis_skin_checked="1">
                        <div className="max-w-sm space-y-8" bis_skin_checked="1">
                            <div bis_skin_checked="1"><h3
                                className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">🗺
                                ADDRESS</h3><span className="block mt-2 text-neutral-500 dark:text-neutral-400">Marrakech , Dawdiyat </span>
                            </div>
                            <div bis_skin_checked="1"><h3
                                className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">💌
                                EMAIL</h3><span
                                className="block mt-2 text-neutral-500 dark:text-neutral-400">ghollamsimo1@gmail.com</span>
                            </div>
                            <div bis_skin_checked="1"><h3
                                className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">☎
                                PHONE</h3><span
                                className="block mt-2 text-neutral-500 dark:text-neutral-400">+212 7.70.46.22.75</span>
                            </div>
                            <div bis_skin_checked="1"><h3
                                className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">🌏
                                SOCIALS</h3>
                                <nav
                                    className="nc-SocialsList flex space-x-2.5 text-2xl text-neutral-6000 dark:text-neutral-300 mt-2"
                                    data-nc-id="SocialsList"><a className="block" href="#" target="_blank"
                                                                rel="noopener noreferrer" title="Facebook"><i
                                    className="lab la-facebook-square"></i></a><a className="block" href="#"
                                                                                  target="_blank"
                                                                                  rel="noopener noreferrer"
                                                                                  title="Twitter"><i
                                    className="lab la-twitter"></i></a><a className="block" href="#" target="_blank"
                                                                          rel="noopener noreferrer" title="Youtube"><i
                                    className="lab la-youtube"></i></a><a className="block" href="#" target="_blank"
                                                                          rel="noopener noreferrer" title="Instagram"><i
                                    className="lab la-instagram"></i></a></nav>
                            </div>
                        </div>
                        <div bis_skin_checked="1">
                            <form className="grid grid-cols-1 gap-6" action="#" method="post"><label
                                className="block"><label
                                className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                                data-nc-id="Label">Full name</label><input type="text"
                                                                           className="block w-full
                                                                           border border-gray-600 outline-0 text-white  dark:bg-transparent focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                                                           placeholder="Example Doe"/></label><label
                                className="block"><label
                                className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                                data-nc-id="Label">Email address</label><input type="email"
                                                                               className="block w-full
                                                                                border border-gray-600 outline-0 text-white  dark:bg-transparent focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                                                               placeholder="example@example.com"/></label><label
                                className="block"><label
                                className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                                data-nc-id="Label">Message</label><textarea
                                className="block border border-gray-600 outline-0 text-white  dark:bg-transparent w-full text-sm rounded-2xl px-4 py-2  focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 mt-1"
                                rows="6"></textarea></label>
                                <div bis_skin_checked="1">
                                    <button
                                        className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary  disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 bg-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                        type="submit">Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ContactSection/>

            <Footer/>
        </>
    )
}

export default ContactUs