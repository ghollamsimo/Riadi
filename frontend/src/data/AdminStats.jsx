import Api from '../api/Api.jsx'
import {useEffect, useState} from "react";
const AdminStats = () =>{
    const {http} = Api();
    const [stats , setStats] = useState([])
    useEffect(() => {
        http.get('/stats').then(response => {
            setStats(response.data)
        });
    } , [])


    return(
        <>

            <div className="grid lg:ml-44 px-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative ">
                    <div className="flex-auto p-4 text-center">
                        <h4 className="my-1 font-semibold text-2xl dark:text-slate-200">6</h4>
                        <h6 className="text-gray-400 mb-0 font-medium uppercase">Total Clients</h6>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative ">
                    <div className="flex-auto p-4 text-center">
                        <h4 className="my-1 font-semibold text-2xl dark:text-slate-200">10</h4>
                        <h6 className="text-gray-400 mb-0 font-medium uppercase">Total Dr Riad</h6>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative ">
                    <div className="flex-auto p-4 text-center">
                        <h4 className="my-1 font-semibold text-2xl dark:text-slate-200">72</h4>
                        <h6 className="text-gray-400 mb-0 font-medium uppercase">Total Riads</h6>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative ">
                    <div className="flex-auto p-4 text-center">
                        <h4 className="my-1 font-semibold text-2xl dark:text-slate-200">24</h4>
                        <h6 className="text-gray-400 mb-0 font-medium uppercase">Total Categories</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminStats