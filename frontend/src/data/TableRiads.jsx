import React, { useEffect } from "react";
import {fetchRaids, UpdateStatusOfRiad} from "../redux/actions/RiadAction.jsx";
import {connect, useDispatch, useSelector} from "react-redux";
import Loadingdata from "../components/Loadingdata.jsx";
import Pagination from "react-js-pagination";

const TableRiads = (props) => {
    const dispatch = useDispatch();
    const riads = useSelector((state) => state.riadsData.datalist);
    console.log('rrrrrrrr',riads)
    useEffect(() => {
        dispatch(fetchRaids());
    }, [dispatch]);

    const handleSubmit = async (id, data) => {
        try {
            await dispatch(UpdateStatusOfRiad(id, data));
            dispatch(fetchRaids())
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };
    const handlePageChange = (pageNum) => {
        dispatch(fetchRaids(pageNum));
    };



    const riadDetails = riads?.data?.map((item) => (
        <tr key={item.id}
            className="bg-white text-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
            <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                {item.name}
            </td>
            <td className="py-5 text-sm  line-clamp-1 ">
                {item.description}
            </td>
            <td className="p-3 text-sm whitespace-nowrap">
                {item.currency} {item.prix}
            </td>
            <td className="p-3 text-sm whitespace-nowrap">
                {item.categorie_id}
            </td>
            <td className="p-3 text-sm whitespace-nowrap">
                {item.drriad_id}
            </td>
            <td className="p-3 text-sm whitespace-nowrap">
                <span
                    className={`text-${item.status === 'Rejected' ? 'red' : 'green'}-500 text-[11px] font-medium px-2.5 py-0.5 rounded h-5`}>
                    {item.status}
                </span>
            </td>
            <td className="p-3 gap-10 text-sm whitespace-nowrap">
                <div className='space-x-2'>
                    <button onClick={() => handleSubmit(item.id, {status: "Approved"})}>Approved</button>
                    <button onClick={() => handleSubmit(item.id, {status: "Rejected"})}>Rejected</button>
                </div>
            </td>
        </tr>
    ));
    return (
        <>

            <div className="grid  w-full overflow-x-hidden mx-auto grid-cols-1 p-4">
                <div className="sm:-mx-6 lg:-mx-8">
                    <div className="relative overflow-x-auto block w-full sm:px-6 lg:px-8">
                        <div className=" ">
                            <table className="w-full">
                                <thead className="bg-gray-50 dark:bg-[#4F46E5]">
                                <tr className="text-white">
                                    <th scope="col"
                                        className="p-3 text-xs font-medium tracking-wider text-left text-white uppercase">
                                        Name
                                    </th>
                                    <th scope="col"
                                        className="p-3 text-xs font-medium tracking-wider text-left text-white uppercase">
                                        Description
                                    </th>
                                    <th scope="col"
                                        className="p-3 text-xs font-medium tracking-wider text-left text-white uppercase">
                                        Prix
                                    </th>
                                    <th scope="col"
                                        className="p-3 text-xs font-medium tracking-wider text-left text-white uppercase">
                                        Categorie
                                    </th>
                                    <th scope="col"
                                        className="p-3 text-xs font-medium tracking-wider text-left uppercase">
                                        Dr Riad
                                    </th>
                                    <th scope="col"
                                        className="p-3 text-xs font-medium tracking-wider text-left uppercase">
                                        Status
                                    </th>
                                    <th scope="col"
                                        className="p-3 text-xs font-medium tracking-wider text-left uppercase">
                                        Action
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {riadDetails}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
            <div className='text-white flex mt-16 justify-center items-center'>
                <Pagination
                    totalItemsCount={riads.total}
                    activePage={riads.current_page}
                    itemsCountPerPage={riads.per_page}
                    onChange={handlePageChange}
                    itemClass='page-item'
                    linkClass='page-link bg-[#4F46E5] px-5 py-3 rounded-full mx-1'
                    itemClassFirst='first:ml-0 mx-1'
                    itemClassLast='last:mr-0 mx-1'
                    itemClassPrev='mx-1'
                    itemClassNext='mx-1'
                    activeClass='font-bold'
                    hideDisabled='true'
                    innerClass='flex'
                    activeLinkClass='bg-[#4F46E5] hover:bg-[#4F46E7] rounded-full mx-1'
                    linkClassFirst='mx-1'
                    linkClassPrev='mx-1'
                    linkClassNext='mx-1'
                    linkClassLast='mx-1'
                />
            </div>

        </>
    );
};


export default TableRiads;
