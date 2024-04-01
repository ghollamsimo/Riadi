import React, { useEffect } from "react";
import {fetchRaids, UpdateStatusOfRiad} from "../redux/Action.js";
import {connect, useDispatch} from "react-redux";
import Loadingdata from "../components/Loadingdata.jsx";

const TableRiads = (props) => {
    const riads = props.data.datalist || [];
    console.log(riads);
    const dispatch = useDispatch()
    useEffect(() => {
        props.loader();
    }, []);
    const handleSubmit = async (id, data) => {
        try {
            await dispatch(UpdateStatusOfRiad(id, data));
            props.loader();
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };


    if (!Array.isArray(riads) || riads.length === 0) {
        return (<Loadingdata />);
    }

    const riadDetails = riads.map((item) => (
        <tr key={item.id}
            className="bg-white text-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
            <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                {item.name}
            </td>
            <td className="p-3 text-sm whitespace-nowrap truncate">
                {item.description}
            </td>
            <td className="p-3 text-sm whitespace-nowrap">
                MAD {item.prix}
            </td>
            <td className="p-3 text-sm whitespace-nowrap">
                {item.categorie_name}
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
    console.log(riads);

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
                            <th scope="col" className="p-3 text-xs font-medium tracking-wider text-left uppercase">
                                Dr Riad
                            </th>
                            <th scope="col" className="p-3 text-xs font-medium tracking-wider text-left uppercase">
                                Status
                            </th>
                            <th scope="col" className="p-3 text-xs font-medium tracking-wider text-left uppercase">
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

        </>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loader: () => dispatch(fetchRaids()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (TableRiads);
