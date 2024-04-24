const UpdateStepFive = ({ handleChange, handleNext, handlePrev , handleCover}) => {
    const handleFileChange = (event) => {
        const fileList = event.target.files;
        const fileArray = Array.from(fileList);
        handleChange({ image: 'image' , value: fileArray });
    };

    const handleCoverChange = (e) => {
        const file = Array.from(e.target.files[0]);

        console.log(file)
        handleCover(file);
    };

    return(
        <>
            <div className="listingSection__wrap text-white px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32">
                <div className='space-y-11 border border-gray-600 p-12 rounded-xl'>
                    <div>
                        <h2 className="text-2xl font-semibold">Pictures of the place</h2>
                        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">A few beautiful photos will help customers have more sympathy for your property.</span>
                    </div>
                    <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
                    <div><span className="text-lg font-semibold">Cover image</span>
                        <div className="mt-5 ">
                            <div
                                className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-neutral-400" stroke="currentColor"
                                         fill="none"
                                         viewBox="0 0 48 48" aria-hidden="true">
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    <div className="flex text-sm text-neutral-6000 dark:text-neutral-300"><label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"><span>Upload a file</span><input
                                        id="file-upload"
                                        name='cover'
                                        type="file"
                                        onChange={handleCoverChange}
                                        className="sr-only"
                                    /></label><p
                                        className="pl-1">or drag and drop</p></div>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400">PNG, JPG, GIF up to
                                        10MB</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <span className="text-lg font-semibold">Pictures of the place</span>
                            <div className="mt-5">
                                <div
                                    className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <label htmlFor="file-upload-2"
                                               className="relative cursor-pointer rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                                            <span>Upload a file</span>
                                            <input multiple onChange={handleFileChange} id="file-upload-2"
                                                   name="image[]"
                                                   type="file" className="sr-only"/>
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
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
                        onClick={handleNext}
                    >
                        Continue
                    </button>
                </div>
            </div>

        </>
    )
}

export default UpdateStepFive