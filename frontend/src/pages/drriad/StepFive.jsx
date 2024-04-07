import {useState} from "react";

const StepFive = ({ handleNext  , handlePrev , handleChange}) => {
    const [images, setImages] = useState([]);
    const [deleteIndex, setDeleteIndex] = useState(-1);
    const [showModal, setShowModal] = useState(false);
    const handleImageChange = (event) => {
        const selectedFiles = event.target.files;
        setImages([...images, ...selectedFiles]);
    };

    const handleDelete = (index) => {
        setDeleteIndex(index);
        setShowModal(true);

    };

    const handleDeleteConfirm = () => {
        const updatedImages = images.filter((_, index) => index !== deleteIndex);
        setImages(updatedImages);
        setDeleteIndex(-1);
        setShowModal(false);

    };
    return(
        <>
            <div className="listingSection__wrap text-white px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32">
                <div className='space-y-11 border border-gray-600 p-12 rounded-xl'>
                    <div><h2 className="text-2xl font-semibold">Pictures of the place</h2><span
                        className="block mt-2 text-neutral-500 dark:text-neutral-400">A few beautiful photos will help customers have more sympathy for your property.</span>
                    </div>
                    <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
                    <div className="space-y-8">
                        <div><span className="text-lg font-semibold">Pictures of the place</span>
                            <div className="mt-5 ">
                                <div
                                    className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg className="mx-auto h-12 w-12 text-neutral-400" stroke="currentColor"
                                             fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth="2" strokeLinejoin="round"></path>
                                        </svg>
                                        <div className="flex text-sm text-neutral-6000 dark:text-neutral-300"><label
                                            htmlFor="file-upload-2"
                                            className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"><span>Upload a file</span><input
                                            accept="image/*"
                                            multiple
                                            onChange={handleImageChange}
                                            id="file-upload-2" name="file-upload-2" type="file"
                                            className="sr-only"/></label><p className="pl-1">or drag and drop</p></div>
                                        <p className="text-xs text-neutral-500 dark:text-neutral-400">PNG, JPG, GIF up
                                            to
                                            10MB</p></div>
                                </div>
                                {images.length > 0 && (
                                    <div>
                                        <h2>Selected Images:</h2>
                                        {images.map((image, index) => (
                                            <div key={index}>
                                                <img
                                                    src={URL.createObjectURL(image)}
                                                    alt={`Image ${index}`}
                                                    style={{width: '100px', height: 'auto', margin: '5px'}}
                                                />
                                                <button onClick={() => handleDelete(index)}>Delete</button>

                                            </div>
                                        ))}
                                    </div>
                                )}
                                {showModal && (
                                    <div className="modal">
                                        <div className="modal-content">
                                            <p>Are you sure you want to delete this image?</p>
                                            <button onClick={handleDeleteConfirm}>Yes</button>
                                            <button onClick={() => setShowModal(false)}>No</button>
                                        </div>
                                    </div>
                                )}
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

export default StepFive