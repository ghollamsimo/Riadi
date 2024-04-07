import  { useEffect } from "react";
import { connect, useSelector } from "react-redux"; // corrected import
import { fetchService } from "../../redux/actions/ServiceAction";
import {fetchRepas} from '../../redux/actions/RepaAction.jsx'
const StepThree = ({ handlePrev, handleNext, loader , repas}) => {

    useEffect(() => {
        loader();
        repas();
    }, [loader, repas]);

    const service = useSelector((state) => state.serviceData);
    const repaData = useSelector((state) => state.repaData);

    console.log("repas", repaData.datalist);

    return (
        <>
            <div className="listingSection__wrap  text-white px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32">
                <div className='space-y-11 border border-gray-600 p-12 rounded-xl'>

                    <div><h2 className="text-2xl font-semibold">Amenities
                    </h2><span
                        className="block mt-2 text-neutral-500 dark:text-neutral-400">Many customers have searched for accommodation based on amenities criteria</span>
                    </div>
                    <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
                    <div className="space-y-8">
                        <div><label className="text-lg font-semibold" htmlFor="">General Services</label>
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {service?.datalist?.map(item => (
                                    <div key={item.id} className="flex text-sm sm:text-base "><input id={item.name}
                                                                                                     name="Wifi"
                                                                                                     type="checkbox"
                                                                                                     value={item.id}
                                                                                                     className="focus:ring-action-primary h-6 w-6 text-primary-500 border-primary rounded border-neutral-500 bg-[#6366F1] dark:bg-[#6366F1]  dark:checked:bg-primary-500 focus:ring-primary-500"/><label
                                        htmlFor={item.name} className="ml-3.5 flex flex-col flex-1 justify-center"><span
                                        className=" text-neutral-900 dark:text-neutral-100">{item.name}</span></label>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div><label className="text-lg font-semibold" htmlFor="">General Repas</label>
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {repaData?.datalist?.map(item => (
                                    <div key={item.id} className="flex text-sm sm:text-base "><input id={item.name} name="Wifi" type="checkbox" value={item.id} className="focus:ring-action-primary h-6 w-6 text-primary-500 border-primary rounded border-neutral-500 bg-[#6366F1] dark:bg-[#6366F1]  dark:checked:bg-primary-500 focus:ring-primary-500"/><label
                                        htmlFor={item.name} className="ml-3.5 flex flex-col flex-1 justify-center"><span
                                        className=" text-neutral-900 dark:text-neutral-100">{item.name}</span></label>
                                    </div>
                                ))}

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

const serviceStateToProps = (state) => {
    return {
        data: state.data,
    };
};

const mapDispatchToService = (dispatch) => {
    return {
        loader: () => dispatch(fetchService()),
        repas: () => dispatch(fetchRepas()),
    };
};

const ConnectedStepThree = connect(serviceStateToProps, mapDispatchToService)(StepThree);
export default ConnectedStepThree;
