import {useEffect} from "react";
import {connect, useSelector} from "react-redux";
import {fetchCategories} from "../../redux/actions/CategorieAction.jsx";

const UpdateStepOne = ({ handleNext  , handleChange  , loader} ) => {
    useEffect(() => {
        loader();
    }, []);

    const categorie = useSelector(state => state.categorieData);
    return(
        <>
            <div className="nc-PageAddListing1  text-white px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32"
                 >
                <div className="space-y-11 border border-gray-600 p-12 rounded-xl">
                    <div><span className="text-4xl font-semibold">01</span> <span
                        className="text-lg text-neutral-500 dark:text-neutral-400">/ 3</span></div>
                    <div className="listingSection__wrap "><h2 className="text-2xl font-semibold">Choosing listing
                        categories</h2>
                        <div className="w-14 mb-4 mt-4 border-b border-neutral-200 dark:border-neutral-700"></div>
                        <div className="space-y-8">
                            <div className=""><label
                                className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                                data-nc-id="Label">Choose a property type</label>
                                <div className="mt-1"><select
                                    name="categorie_id"
                                    onChange={handleChange}
                                    className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1">
                                    {categorie?.datalist?.map(item => (
                                        <option key={item.id} className='text-black'
                                                value={item.id}>{item.name}</option>

                                    ))}

                                </select></div>
                                <span className="block mt-3 text-xs text-neutral-500 dark:text-neutral-400 ">Hotel: Professional hospitality businesses that usually have a unique style or theme defining their brand and decor</span>
                            </div>

                            <div className=""><label
                                className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                                data-nc-id="Label">Choose a type Of Reservation</label>
                                <div className="mt-1">
                                    <select
                                        name="etat"
                                        onChange={handleChange}
                                        className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1">
                                        <option value='Automatic' className='text-black'>Automatic</option>
                                        <option value='Manual' className='text-black'>Manual</option>
                                    </select></div>

                                <span className="block mt-3 text-xs text-neutral-500 dark:text-neutral-400 ">Hotel: Professional hospitality businesses that usually have a unique style or theme defining their brand and decor</span>
                            </div>

                            <div className=""><label
                                className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                                data-nc-id="Label">Place name</label>
                                <div className="mt-1"><input type="text"
                                                             name='name'
                                                             onChange={handleChange}
                                                             className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                                             placeholder="Places name"/></div>
                                <span className="block mt-3 text-xs text-neutral-500 dark:text-neutral-400 ">A catchy name usually includes: House name + Room name + Featured property + Tourist destination</span>
                            </div>
                            <div className=""><label
                                className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                                data-nc-id="Label">Localisation</label>
                                <div className="mt-1"><input type="text"
                                                             name='localisation'
                                                             onChange={handleChange}
                                                             className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                                             placeholder="localisation"/></div>
                                <span className="block mt-3 text-xs text-neutral-500 dark:text-neutral-400 ">A catchy name usually includes: House name + Room name + Featured property + Tourist destination</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end py-6 space-x-5">
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

const mapStateToProps = (state) => {
    return {
        data: state.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loader: () => dispatch(fetchCategories())
    };
};

const ConnectedStepOne = connect(mapStateToProps, mapDispatchToProps)(UpdateStepOne);
export default ConnectedStepOne;
