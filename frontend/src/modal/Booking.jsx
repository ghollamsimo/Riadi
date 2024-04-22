
const Booking = ({setOpenModal}) => {
    return(
        <>
            <div className='fixed inset-0 z-50 '>
                <div className="min-h-screen  px-4 text-center">
                    <div className="fixed inset-0  " id="headlessui-dialog-overlay-:ra:"
                         aria-hidden="true" data-headlessui-state="open"></div>
                    <div className="inline-block py-8 h-screen w-full max-w-4xl opacity-100 scale-100">
                        <div
                            className="inline-flex pb-2 flex-col w-full text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-[#0E131F] dark:border dark:border-gray-700 dark:text-neutral-100 shadow-xl h-full">
                            <div
                                className="relative  flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                                <h3 className="text-lg font-medium leading-6 text-white"
                                    id="headlessui-dialog-title-70">Booking</h3><span
                                className="absolute left-3 top-3"><button
                                onClick={() => setOpenModal(false)}
                                className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700  focus:outline-none"><span
                                className="sr-only">Close</span><svg xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 24 24"
                                                                     fill="currentColor" aria-hidden="true"
                                                                     className="w-5 h-5"><path fill-rule="evenodd"
                                                                                               d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                                                                               clip-rule="evenodd"></path></svg></button></span>
                            </div>
                            <div
                                className="overflow-y-auto ">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Booking