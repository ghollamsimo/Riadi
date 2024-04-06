const CreateRiad = () =>{
    return(
        <>
            <div className="nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32"
                 data-nc-id="PageAddListing1">
                <div className="space-y-11">
                    <div><span className="text-4xl font-semibold">01</span> <span
                        className="text-lg text-neutral-500 dark:text-neutral-400">/ 10</span></div>
                    <div className="listingSection__wrap "><h2 className="text-2xl font-semibold">Choosing listing
                        categories</h2>
                        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
                        <div className="space-y-8">
                            <div className=""><label
                                className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                                data-nc-id="Label">Choose a property type</label>
                                <div className="mt-1"><select
                                    className="nc-Select h-11  block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900">
                                    <option value="Hotel">Hotel</option>
                                    <option value="Cottage">Cottage</option>
                                    <option value="Villa">Villa</option>
                                    <option value="Cabin">Cabin</option>
                                    <option value="Farm stay">Farm stay</option>
                                    <option value="Houseboat">Houseboat</option>
                                    <option value="Lighthouse">Lighthouse</option>
                                </select></div>
                                <span className="block mt-3 text-xs text-neutral-500 dark:text-neutral-400 ">Hotel: Professional hospitality businesses that usually have a unique style or theme defining their brand and decor</span>
                            </div>
                            <div className=""><label
                                className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                                data-nc-id="Label">Place name</label>
                                <div className="mt-1"><input type="text"
                                                             className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                                                             placeholder="Places name"/></div>
                                <span className="block mt-3 text-xs text-neutral-500 dark:text-neutral-400 ">A catchy name usually includes: House name + Room name + Featured property + Tourist destination</span>
                            </div>
                            <div className=""><label
                                className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                                data-nc-id="Label">Rental form</label>
                                <div className="mt-1"><select
                                    className="nc-Select h-11  block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900">
                                    <option value="Hotel">Entire place</option>
                                    <option value="Private room">Private room</option>
                                    <option value="Share room">Share room</option>
                                </select></div>
                                <span className="block mt-3 text-xs text-neutral-500 dark:text-neutral-400 ">Entire place: Guests have the whole place to themselves—there's a private entrance and no shared spaces. A bedroom, bathroom, and kitchen are usually included.</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end space-x-5"><a
                        className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
                        rel="noopener noreferrer" href="/add-listing-1">Go back</a><a
                        className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
                        rel="noopener noreferrer" href="/add-listing-2">Continue</a></div>
                </div>
            </div>
        </>
    )
}

export default CreateRiad