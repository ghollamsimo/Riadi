import Api from '../api/Api.jsx'
import {useEffect, useState} from "react";
import Loadingdata from "../components/Loadingdata.jsx";

const AdminStats = () => {
    const {http} = Api();
    const [loading , setLoading] = useState(true)
    const [stats , setStats] = useState([])
    useEffect(() => {
        http.get('/stats').then(response => {
            setStats(response.data)
            setLoading(false)
        });
    } , [http])

    if (loading){
        return(
       <Loadingdata/>
        )
    }

    return(
        <>
            <div className="bg-indigo-600 px-8 pt-10 lg:pt-14 pb-16 flex justify-between items-center mb-3">
                <h1 className="text-xl px-36 text-white">Welcome </h1>
            </div>

            <div className="grid -mt-12 mx-6 mb-6 lg:ml-44 px-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative ">
                    <div className="flex-auto p-4 text-center">
                        <h4 className="my-1 font-semibold text-2xl dark:text-slate-200">{stats['clientcount']}</h4>
                        <h6 className="text-gray-400 mb-0 font-medium uppercase">Total Clients</h6>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative ">
                    <div className="flex-auto p-4 text-center">
                        <h4 className="my-1 font-semibold text-2xl dark:text-slate-200">{stats['drriadcount']}</h4>
                        <h6 className="text-gray-400 mb-0 font-medium uppercase">Total Dr Riad</h6>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative ">
                    <div className="flex-auto p-4 text-center">
                        <h4 className="my-1 font-semibold text-2xl dark:text-slate-200">{stats['riadcount']}</h4>
                        <h6 className="text-gray-400 mb-0 font-medium uppercase">Total Riads</h6>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative ">
                    <div className="flex-auto p-4 text-center">
                        <h4 className="my-1 font-semibold text-2xl dark:text-slate-200">{stats['categoriecount']}</h4>
                        <h6 className="text-gray-400 mb-0 font-medium uppercase">Total Categories</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminStats