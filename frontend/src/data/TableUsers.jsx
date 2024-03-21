import Api from '../api/Api.jsx';
import { useEffect, useState } from "react";
import Google from "../assets/img/google.png";

const TableUsers = () => {
    const { http } = Api();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        http.get('/users').then(response => {
            setUsers(response.data);
        }).catch(error => {
            console.error('Error fetching users:', error);
        });
    }, []);

    const userDetails = users.map((item, index) => {
        if (item.role === 'Client') {
            return (
                <tr key={index} className="bg-white text-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
                    <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                        <img src={Google} alt="" className="mr-2 h-8 rounded-full inline-block" />{item.name}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                        {item.email}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                        <span className="bg-green-600/10 text-green-300 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">{item.role}</span>
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                        <button className=''>View</button>
                    </td>
                </tr>
            );
        } else if (item.role === 'DrRaid') {
            return (
                <tr key={index} className="bg-white text-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
                    <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                        <img src={Google} alt="" className="mr-2 h-8 rounded-full inline-block" />{item.name}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                        {item.email}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                        <span className="bg-indigo-600/10 text-indigo-200 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">{item.role}</span>
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                        <button className=''>View</button>
                    </td>
                </tr>
            );
        }
        return null;
    });

    return (
        <div className="grid lg:ml-36 w-[35rem] grid-cols-1 p-4">
            <div className="sm:-mx-6 lg:-mx-8">
                <div className="relative overflow-x-auto block w-full sm:px-6 lg:px-8">
                    <div className=" ">
                        <table className="w-full">
                            <thead className="bg-gray-50 dark:bg-[#4F46E5]">
                            <tr className=" text-white">
                                <th scope="col" className="p-3 text-xs font-medium tracking-wider text-left text-white uppercase">
                                    Lead
                                </th>
                                <th scope="col" className="p-3 text-xs font-medium tracking-wider text-left uppercase">
                                    Email
                                </th>
                                <th scope="col" className="p-3 text-xs font-medium tracking-wider text-left uppercase">
                                    Role
                                </th>
                                <th scope="col" className="p-3 text-xs font-medium tracking-wider text-left uppercase">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {userDetails}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableUsers;
