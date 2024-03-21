import Api from '../api/Api.jsx'
import {useEffect, useState} from "react";
import Google from "../assets/img/google.png";
import {Link} from "react-router-dom";

const TableCategorie = () => {
    const {http} = Api()
    const [categories , setCategories] = useState([])
    const [loading , setLoading] = useState(true)
    useEffect(() => {
        http.get('/categories').then(response =>{
            setCategories(response.data)
            setLoading(false)
        })
    }, [http]);

    if (loading){
        return (
            <div className='text-white ml-14'>Loading</div>
        )
    }

    const deleteCategorie = async (id) => {
        await http.delete(`/deletecategorie/${id}`)
    }

    let category = categories.map((category) => {
        return (
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
                    <div>
                        <button className=''><Link to={`/editecategory/${category.id}`}>Edite</Link></button>
                        <button  className='' onClick={() => deleteCategorie(category.id)}>Delete</button>
                    </div>
                </td>
            </tr>

        )
    })

    return (
        <>
            <div className="grid lg:ml-36 w-[35rem] grid-cols-1 p-4">
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
                                {category}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TableCategorie