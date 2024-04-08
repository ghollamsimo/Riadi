
const StepFive = ({ handleChange, handleNext, handlePrev }) => {


    const handleFileChange = (event) => {
        const fileList = event.target.files;
        const fileArray = Array.from(fileList);
        handleChange({ name: 'image' , value: fileArray });
    };



    return (
        <div className="listingSection__wrap text-white px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32">
            <div className='space-y-11 border border-gray-600 p-12 rounded-xl'>
                <div>
                    <h2 className="text-2xl font-semibold">Pictures of the place</h2>
                    <span className="block mt-2 text-neutral-500 dark:text-neutral-400">A few beautiful photos will help customers have more sympathy for your property.</span>
                </div>
                <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
                <div className="space-y-8">
                    <div>
                        <span className="text-lg font-semibold">Pictures of the place</span>
                        <div className="mt-5">
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <label htmlFor="file-upload-2" className="relative cursor-pointer rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                                        <span>Upload a file</span>
                                        <input multiple onChange={handleFileChange} id="file-upload-2" name="image[]" type="file" className="sr-only" />
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
    );
};

export default StepFive;
