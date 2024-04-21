import {connect, useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {DeleteRiads, fetchRaids} from "../redux/actions/RiadAction.jsx";

const DeleteRiad = ({ Modal , deleteRiad , riad , item}) => {

    const handleDelete = () => {
        deleteRiad(item);
        Modal(false)
        riad()
    };
    return(
        <>
            <div id="YOUR_ID" className="fixed z-50 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 "></div>
                    </div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                          aria-hidden="true">&#8203;</span>


                    <div
                        className="inline-block text-white align-bottom bg-[#0E131F] rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                        role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                            <button onClick={() => Modal(false)} type="button" data-behavior="cancel"
                                    className=" rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <span className="sr-only">Close</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div className="sm:flex sm:items-start">
                            <div className=" flex items-center justify-center h-11 w-16 rounded-full bg-red-100">
                                <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden={true}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium " id="modal-headline">
                                    Do you want to Delete This Riad ?
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem mollitia inventore quod. Yay!

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                            <button type="submit" onClick={handleDelete} data-behavior="commit"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Delete
                            </button>
                            <button onClick={() => Modal(false)} type="button" data-behavior="cancel"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        loader: () => dispatch(fetchRaids()),
        deleteRiad: (id) => dispatch(DeleteRiads(id)),
        riad : () => dispatch(fetchRaids())
    };
};

export default connect( null , mapDispatchToProps ) (DeleteRiad)