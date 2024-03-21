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
                        <h4 className="my-1 font-semibold text-2xl dark:text-slate-200">64k</h4>
                        <h6 className="text-gray-400 mb-0 font-medium uppercase">Happy Customers</h6>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative ">
                    <div className="flex-auto p-4 text-center">
                        <h4 className="my-1 font-semibold text-2xl dark:text-slate-200">10k</h4>
                        <h6 className="text-gray-400 mb-0 font-medium uppercase">New Customers</h6>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative ">
                    <div className="flex-auto p-4 text-center">
                        <h4 className="my-1 font-semibold text-2xl dark:text-slate-200">720</h4>
                        <h6 className="text-gray-400 mb-0 font-medium uppercase">New Deals</h6>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative ">
                    <div className="flex-auto p-4 text-center">
                        <h4 className="my-1 font-semibold text-2xl dark:text-slate-200">964</h4>
                        <h6 className="text-gray-400 mb-0 font-medium uppercase">New Register</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminStats