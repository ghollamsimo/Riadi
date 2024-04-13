const UpdateStepFour = ({ handleNext  , handlePrev , handleChange}) => {
    return (
        <>
            <div className="listingSection__wrap  text-white px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32 ">
                <div className='pb-2'><span className="text-4xl font-semibold">02</span> <span
                    className="text-lg text-neutral-500 dark:text-neutral-400">/ 3</span></div>
                <div className='space-y-11 border border-gray-600 p-12 rounded-xl'>
                    <div><h2 className="text-2xl font-semibold">Your place description for client</h2><span
                        className="block mt-2 text-neutral-500 dark:text-neutral-400">Mention the best features of your accommodation, any special amenities like fast Wi-Fi or parking, as well as things you like about the neighborhood.</span>
                    </div>
                    <textarea
                        name='description'
                        onChange={handleChange}
                        className="block w-full text-sm rounded-2xl  bg-white border-gray-600 dark:bg-transparent dark:focus:ring-primary-6000 outline-0 p-1 border  "
                        rows="14" placeholder="..."></textarea></div>
                <div className="flex justify-end py-6 space-x-5">
                    <button
                        className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 border-gray-600 border hover:bg-primary-700 text-neutral-50  focus:outline-none hover:border-gray-600"
                        onClick={handlePrev}
                    >
                        Go back
                    </button>
                    <button
                        className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-[#4F46E5] hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
                        onClick={handleNext}
                    >
                        Continue
                    </button>

                </div>

            </div>
        </>
    )
}

export default UpdateStepFour