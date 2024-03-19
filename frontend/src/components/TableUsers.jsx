import Api from '../api/Api.jsx'
import {useEffect, useState} from "react";

const TableUsers = () => {
    const {http} = Api()
    const [users , setUsers] = useState([])

    useEffect(() => {
        http.get('/users' ).then(response => {
            setUsers(response.data)
        })
    }, []);

    let userdtails = ""
    userdtails = users.map((item , index) => {
        return (
            <table key={index} className="items-center bg-transparent w-full border-collapse ">
                <thead>
                <tr>
                    <th className="px-6 bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-left">
                        User Name
                    </th>
                    <th className="px-6 bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-left">
                        Email
                    </th>
                    <th className="px-6 bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-left">
                        Role
                    </th>
                    <th className="px-6 bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-left">
                        Action
                    </th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {item.name}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        {item.email}
                    </td>
                    <td className=" px-6 gap-5 text-xs whitespace-nowrap ">
                        {item.role}
                    </td>
                    <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button className={`bg-gray-700 px-3 rounded-full text-white`}>Update</button>

                        <button className={`bg-gray-700 px-3 rounded-full text-white`}>delete</button>
                    </td>
                </tr>

                </tbody>

            </table>
        )
    })

    return (
        <>
            <section className="py-1">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 className="  text-blueGray-700">Page Visits</h3>
                                </div>

                            </div>
                        </div>

                        <div className="block w-full overflow-x-auto">
                            {userdtails}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TableUsers