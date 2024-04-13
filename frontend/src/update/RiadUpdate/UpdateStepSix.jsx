const UpdateStepSix = ({ handleSubmit  , handlePrev , handleChange}) => {
    return (
        <>
            <div className="listingSection__wrap text-white px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32">
                <div className='space-y-11 border border-gray-600 p-12 rounded-xl'>
                    <div><h2 className="text-2xl font-semibold">Price your space</h2><span
                        className="block mt-2 text-neutral-500 dark:text-neutral-400">The host's revenue is directly dependent on the setting of rates and regulations on the number of guests, the number of nights, and the cancellation policy.</span>
                    </div>
                    <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
                    <div className="space-y-8">
                        <div className=""><label
                            className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                            data-nc-id="Label">Currency</label>
                            <div className="mt-1"><select
                                onChange={handleChange}
                                name='currency'
                                className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1">
                                <option className='text-black' value="USD">USD</option>
                                <option className='text-black' value="MAD">MAD</option>
                                <option className='text-black' value="EURRO">EURRO</option>
                            </select></div>
                        </div>
                        <div className=""><label
                            className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                            data-nc-id="Label">Base Price</label>
                            <div className="mt-1">
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-gray-500">$</span></div>
                                    <input type="number"
                                           onChange={handleChange}
                                           name='prix'
                                           className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-6 py-3 mt-1 "
                                           placeholder="0.00"/>
                                    <div
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=""><label
                            className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                            data-nc-id="Label">Rule Of Riad</label>
                            <div className="mt-1">
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-gray-500">ç</span></div>
                                    <input type="text"
                                           onChange={handleChange}
                                           name='rule'
                                           className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-6 py-3 mt-1 "
                                           placeholder="Exemple..."/>
                                    <div
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className=""><label
                            className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                            data-nc-id="Label">Checkout</label>
                            <div className="mt-1">
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-gray-500">%</span></div>
                                    <input type="date"
                                           onChange={handleChange}
                                           name='checkout'
                                           className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-6 py-3 mt-1 "
                                           placeholder="Exemple..."/>
                                    <div
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className=""><label
                            className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                            data-nc-id="Label">Checkin</label>
                            <div className="mt-1">
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-gray-500">%</span></div>
                                    <input type="date"
                                           onChange={handleChange}
                                           name='checkin'
                                           className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-6 py-3 mt-1 "
                                           placeholder="Exemple..."/>
                                    <div
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex justify-end py-6 space-x-5">
                    <button
                        className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 border-gray-600 border hover:bg-primary-700 text-neutral-50  focus:outline-none hover:border-gray-600"
                        onClick={handlePrev}
                    >
                        Go back
                    </button>
                    <button
                        className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-[#4F46E5] hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
                        onClick={handleSubmit}
                    >
                        Continue
                    </button>

                </div>

            </div>
        </>
    )
}

export default UpdateStepSix