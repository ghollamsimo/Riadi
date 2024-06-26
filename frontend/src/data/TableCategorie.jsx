import {useEffect, useState} from "react";
import { GrUpdate } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import DeleteCategorie from "../modal/DeleteCategorie.jsx";
import CreateCategorie from "../modal/CreateCategorie.jsx";
import {fetchCategories} from  '../redux/actions/CategorieAction.jsx'
import {connect, useDispatch, useSelector} from "react-redux";
import {FiPlus} from "react-icons/fi";
import UpdateCategorie from "../update/UpdateCategorie.jsx";

const TableCategorie = () => {
    const [showModal, setShowModal] = useState(false);
    const [Edit, setUpdateModal] = useState(false);
    const [Modal, setCreateModal] = useState(false);
    const [id , setId] = useState(null)
    const dispatch = useDispatch()
    const categorie = useSelector((state) => state.categorieData.datalist)
    useEffect(() =>{
        dispatch(fetchCategories())
    }, [dispatch])
    return (
        <>
            <div className='flex  justify-between'>
                <div className='text-white'>
                    Add New Categorie
                </div>

                <div>
                    <button className='text-white text-xl px-7' onClick={() => {
                        setCreateModal(true);
                    }} ><FiPlus />
                    </button>
                </div>
            </div>
            <div className="grid overflow-x-hidden  w-full grid-cols-1 p-4">
                <div className="sm:-mx-6 lg:-mx-8">
                    <div className="relative overflow-x-auto block w-full sm:px-6 lg:px-8">
                        <div className=" ">
                            <table className="w-full">
                                <thead className="bg-gray-50 dark:bg-[#4F46E5]">
                                <tr className=" text-white">
                                    <th scope="col"
                                        className="p-3 text-xs font-medium tracking-wider text-left text-white uppercase">
                                        Id
                                    </th>
                                    <th scope="col"
                                        className="p-3 text-xs font-medium tracking-wider text-left uppercase">
                                        Name
                                    </th>
                                    <th scope="col"
                                        className="p-3 text-xs font-medium tracking-wider text-left uppercase">
                                        Created_At
                                    </th>
                                    <th scope="col"
                                        className="p-3 text-xs font-medium tracking-wider text-left uppercase">
                                        Action
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {categorie?.map(category =>(
                                    <tr key={category.id}
                                className="bg-white text-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
                                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                    {category.id}
                                </td>
                                <td className="p-3 text-sm whitespace-nowrap">
                                    {category.name}
                                </td>
                                <td className="p-3 text-sm whitespace-nowrap">
                    <span
                        className="bg-green-600/10 text-green-300 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">{category.created_at}</span>
                                </td>
                                <td className="p-3 text-sm whitespace-nowrap">
                                    <div className='space-x-5'>
                                        <button className='' onClick={() => {
                                            setUpdateModal(true)
                                            setId(category.id)
                                        }}><GrUpdate/></button>
                                        <button className='' onClick={() => {
                                            setShowModal(true);
                                            setId(category.id);

                                        }} ><AiOutlineDelete/></button>
                                    </div>
                                </td>
                                </tr>

                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <DeleteCategorie setOpenModal={setShowModal} category={id}/>}
            {Modal && <CreateCategorie setOpenModal={setCreateModal}/>}
            {Edit && <UpdateCategorie setOpenModal={setUpdateModal} category={id}/>}
        </>
    )
}

export default TableCategorie