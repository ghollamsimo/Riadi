import { useEffect, useState } from "react";
import Api from '../api/Api.jsx';
import Loadingdata from "../components/Loadingdata.jsx";

const TableRiads = () => {
    const { http } = Api();
    const [riads, setRiads] = useState([]);
    const [status, setStatus] = useState('');
    const [loader , setLoader] = useState(true)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchRiads = async () => {
            try {
                const response = await http.get('/riads');
                setRiads(response.data);
                setLoader(false)
            } catch (error) {
                console.error('Error fetching riads:', error);
            }
        };

        fetchRiads();
    }, [http]);

    if (loader){
        return (
            <Loadingdata/>
        )
    }

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
        setLoading(true);
        setStatus(e.target.value);
        handleSubmit(id);
        setLoading(false);
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
            <td className="p-3 gap-10 text-sm whitespace-nowrap">
                <div className='space-x-2'>
                <button value="Approved" onClick={(e) => handleStatusChange(e, item.id)} disabled={loading}>{loading ?
                    <svg aria-hidden="true" role="status"
                         className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"></path>
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"></path>
                    </svg> : 'Approved'}</button>

                <button value='Rejected' onClick={(e) => handleStatusChange(e, item.id)}>Rejected</button>
                </div>
            </td>
        </tr>
    ));

    return (
        <>

    <div className="grid lg:ml-36 w-[82rem] mx-auto grid-cols-1 p-4">
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

export default TableRiads;
