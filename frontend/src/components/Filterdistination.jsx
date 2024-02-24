import React from 'react'
import { FaChevronRight } from "react-icons/fa6";

const Filterdistination = () => {
    return(
      <>
          <div className={`${`flex items-center justify-between`}`}>
              <div className={`${`relative gap-5 flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar`}`}>
                  <ul className="flex  sm:space-x-2">
                      <li className="nc-NavItem relative transition-all" data-nc-id="NavItem">
                          <button
                              className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full bg-[#115E59] text-secondary-50  focus:outline-none">
                              Marrakech
                          </button>
                      </li>
                      <li className="nc-NavItem relative" data-nc-id="NavItem">
                          <button
                              className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-gray-800 focus:outline-none">
                              Safi
                          </button>
                      </li>
                      <li className="nc-NavItem relative" data-nc-id="NavItem">
                          <button
                              className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-gray-800 focus:outline-none">
                              Casablanca
                          </button>
                      </li>
                      <li className="nc-NavItem relative" data-nc-id="NavItem">
                          <button
                              className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-gray-800 focus:outline-none">
                              Tanger
                          </button>
                      </li>
                  </ul>
              </div>
              <span className="hidden sm:block flex-shrink-0">
                  <button
                  className="nc-Button relative gap-5 h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base  px-4 py-3 sm:px-6  ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-[#1F2937] dark:text-neutral-300 dark:border-neutral-700 hover:bg-transparent dark:hover:bg-gray-800 !leading-none focus:outline-none "><span>View all</span>
                      <FaChevronRight/>
              </button>

              </span>
          </div>
      </>
    );
}

export default Filterdistination;