import { fetchRepas } from "../redux/actions/RepaAction.jsx";
import {connect, useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { GrUpdate } from "react-icons/gr";
import {AiOutlineDelete} from "react-icons/ai";
import DeleteRepa from "../modal/DeleteRepa.jsx";
import {FiPlus} from "react-icons/fi";
import CreateRepa from "../modal/CreateRepa.jsx";
import UpdateRepa from "../update/UpdateRepa.jsx";

const TableRepas = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const [id , setId] = useState(null)
    const [Modal, setCreateModal] = useState(false);
    const [Edit, setUpdateModal] = useState(false);
    const repas = useSelector((state) => state.repaData.datalist)
    useEffect(() => {
        dispatch(fetchRepas())
    }, [dispatch]);


    const repasList = repas.map(item => (
        <tr key={item.id}
            className="bg-white text-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
            <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                {item.id}
            </td>
            <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                {item.name}
            </td>
            <td className="p-3 text-sm whitespace-nowrap truncate">
 <span
     className="bg-green-600/10 text-green-300 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">{item.created_at}</span>
            </td>
            <td className="p-3 gap-10 text-sm whitespace-nowrap">
                <div className='space-x-5'>
                    <button onClick={() => {
                        setUpdateModal(true);
                        setId(item.id);
                    }} className='text-white'><GrUpdate /></button>
                    <button onClick={() => {
                        setShowModal(true);
                        setId(item.id);
                    }} className='text-white'><AiOutlineDelete/></button>
                </div>
            </td>
        </tr>
    ));

    return (
        <>
            <div className='flex  justify-between'>
                <div className='text-white'>
                    Add New Repas
                </div>

                <div>
                    <button className='text-white text-xl px-7' onClick={() => {
                        setCreateModal(true);
                    }}><FiPlus/>
                    </button>
                </div>
            </div>


            <div className="grid  w-full mx-auto overflow-x-hidden  grid-cols-1 p-4">
                <div className="sm:-mx-6 lg:-mx-8">
                    <div className="relative overflow-x-auto block w-full sm:px-6 lg:px-8">
                        <div className=" ">
                            <table className="w-full">
                                <thead className="bg-gray-50 dark:bg-[#4F46E5]">
                                <tr className="text-white">
                                    <th scope="col"
                                        className="p-3 text-xs font-medium tracking-wider text-left text-white uppercase">
                                        Id
                                    </th>
                                    <th scope="col"
                                        className="p-3 text-xs font-medium tracking-wider text-left text-white uppercase">
                                        Name
                                    </th>
                                    <th scope="col"
                                        className="p-3 text-xs font-medium tracking-wider text-left text-white uppercase">
                                        created_at
                                    </th>
                                    <th scope="col"
                                        className="p-3 text-xs font-medium tracking-wider text-left uppercase">
                                        Action
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {repasList}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <DeleteRepa setOpenModal={setShowModal} item={{id}}/>}
            {Modal && <CreateRepa setOpenModal={setCreateModal}/>}
            {Edit && <UpdateRepa setOpenModal={setUpdateModal} item={id}/>}

        </>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loader: () => dispatch(fetchRepas())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableRepas);
