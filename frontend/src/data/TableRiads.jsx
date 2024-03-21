import { useEffect, useState } from "react";
import Api from '../api/Api.jsx';

const TableRiads = () => {
    const { http } = Api();
    const [riads, setRiads] = useState([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        const fetchRiads = async () => {
            try {
                const response = await http.get('/riads');
                setRiads(response.data);
            } catch (error) {
                console.error('Error fetching riads:', error);
            }
        };

        fetchRiads();
    }, [http]);

    const updateStatus = async (id) => {
        try {
            const statu = new FormData();
            statu.append('status', status);
            await http.post(`/approvedriad/${id}`, statu);
        } catch (error) {
            console.error('Error updating status:');
        }
    };

    const handleSubmit = async (id) => {
        try {
            await updateStatus(id);
        } catch (error) {
            console.error('Error handling submit:' );
        }
    };

    const handleStatusChange = (e, id) => {
        e.preventDefault()
        setStatus(e.target.value);
        handleSubmit(id);
    };

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
                {item.drriad_id}
            </td>
            <td className="p-3 text-sm whitespace-nowrap">
                <span
                    className={`text-${item.status === 'Rejected' ? 'red' : 'green'}-500 text-[11px] font-medium px-2.5 py-0.5 rounded h-5`}>
                    {item.status}
                </span>
            </td>
            <td className="p-3 text-sm whitespace-nowrap">
                <div className='gap-10'>
                <button value="Approved" onClick={(e) => handleStatusChange(e, item.id)}>Approved</button>

                <button value='Rejected' onClick={(e) => handleStatusChange(e, item.id)}>Rejected</button>
                </div>
            </td>
        </tr>
    ));

    return (
        <div className="grid lg:ml-36 w-[50rem] grid-cols-1 p-4">
            <div className="sm:-mx-6 lg:-mx-8">
                <div className="relative overflow-x-auto block w-full sm:px-6 lg:px-8">
                    <div className=" ">
                        <table className="w-full">
                            <thead className="bg-gray-50 dark:bg-[#4F46E5]">
                            <tr className="text-white">
                                <th scope="col" className="p-3 text-xs font-medium tracking-wider text-left text-white uppercase">
                                    Name
                                </th>
                                <th scope="col" className="p-3 text-xs font-medium tracking-wider text-left text-white uppercase">
                                    Description
                                </th>
                                <th scope="col" className="p-3 text-xs font-medium tracking-wider text-left text-white uppercase">
                                    Prix
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
    );
};

export default TableRiads;
