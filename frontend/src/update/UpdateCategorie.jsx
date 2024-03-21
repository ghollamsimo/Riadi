import Api from '../api/Api.jsx'
import {useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import {useParams} from "react-router";
import {Link, useNavigate} from "react-router-dom";
import Adminavbar from "../components/Adminavbar.jsx";
import SideBar from "../components/SideBar.jsx";

const UpdateCategorie = () => {
    const {http} = Api();
    const {id} = useParams();
    const [name , setName] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const categorie = async (id) => {
        const form = new FormData()
        form.append('name', name)
        const response = await http.post(`/updatecategorie/${id}` , form)
        navigate('/dashboard');
        return response;
    }
    const validate = () => {
        if (!name){
            toast.error('Please fill in fields');
            return false;
        }
        return true;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()){
            try {
                setLoading(true);
                await categorie(id);
                toast.success('Category Updated Successfully');
                setLoading(false);
            }catch (error){
                toast.error('Error updating category')
            }
        }
    }
    return(
        <>
            <Adminavbar/>
            <div className="flex h-full w-full">
                <SideBar/>
                <div className="flex-auto text-white lg:ml-36 px-12 p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="relative z-0 mb-2 w-full group">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-slate-300/60 appearance-none dark:text-slate-300 dark:border-slate-700 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-500 peer"
                                   placeholder=" " required=""/>
                            <label htmlFor="floating_email"
                                   className="absolute text-sm text-gray-400 dark:text-slate-400/70 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name Categorie</label>
                        </div>
                        <button type="submit"
                                className="inline-block focus:outline-none text-primary-500 hover:bg-primary-500 hover:text-white bg-transparent border border-gray-200 dark:bg-transparent dark:text-primary-500 dark:hover:text-white dark:border-gray-700 dark:hover:bg-primary-500  text-sm font-medium py-1 px-3 rounded mb-1 lg:mb-0" disabled={loading}>{loading ?
                            <svg aria-hidden="true" role="status"
                                 className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB"></path>
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor"></path>
                            </svg> : 'Update Category'}</button>
                        <button type="submit"
                                className="inline-block focus:outline-none text-red-500 hover:bg-red-500 hover:text-white bg-transparent border border-gray-200 dark:bg-transparent dark:text-red-500 dark:hover:text-white dark:border-gray-700 dark:hover:bg-red-500  text-sm font-medium py-1 px-3 rounded mb-1 lg:mb-0">
                            <Link to={'/dashboard'}>Cancel</Link>
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />

        </>
    )
}

export default UpdateCategorie;
