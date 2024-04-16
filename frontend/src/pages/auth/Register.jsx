import { useState } from 'react';
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import Api from "../../api/Api.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "../drriad/Dashboard.jsx";

const Register = () => {
    const {http} = Api()
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
//    const [image , setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const validateForm = () => {
        if (!name || !email || !password || !role ) {
            toast.error("Please fill in all fields");
            setLoading(false);
            return false;
        }
        toast.success('Account Created Success Fully');
        setLoading(true);
        return true;
    };

    const createUser = async () => {
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('role', role);

            const response = await http.post('/register', formData);

            setTimeout(() => {
                if (response.data.role === 'Client'){
                    navigate('/')
                }else if (response.data.role === 'DrRaid'){
                    navigate('../drriad/dashboard')
                }
            }, 3000);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setLoading(true);
            await createUser();
            navigate('/')
        }
    };



    return (
        <>
            <div className="container my-20 lg:mb-32">
                <h2 className="flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">Sign Up</h2>
                <div className="max-w-md mx-auto space-y-6">
                    <form className="grid mt-5 grid-cols-1 gap-6" onSubmit={handleSubmit}>

                        <label className="block"><span className="text-neutral-800 dark:text-neutral-200">Name</span>
                            <input type="text"
                                   onChange={(e) => setName(e.target.value)}
                                   className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                   placeholder="John"/>
                        </label>

                        <label className="block"><span
                            className="text-neutral-800 dark:text-neutral-200">Email address</span>
                            <input type="email"
                                   onChange={(e) => setEmail(e.target.value)}
                                   className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                   placeholder="example@example.com"/>
                        </label>
                        <label className="block">
                            <span
                                className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">Password</span>
                            <input type="password"
                                   onChange={(e) => setPassword(e.target.value)}
                                   className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"/>
                        </label>

                        <label htmlFor="roles" className="block text-sm font-medium text-gray-900 dark:text-white">
                            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">Select Role</span>
                            <select id="roles"
                                    onChange={(e) => setRole(e.target.value)}
                                    className="block w-full border border-gray-600 outline-0 text-white  bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1 dark:bg-[#1F2937] dark:text-white">
                                <option value="Client">Client</option>
                                <option value="DrRaid">Directeur De Riad</option>
                            </select>
                        </label>

                        <button
                            className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-[#4F46E5] hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                            type="submit" disabled={loading}> {loading ?
                            <svg aria-hidden="true" role="status"
                                 className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB"></path>
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor"></path>
                            </svg> : 'Continue'} </button>
                    </form>

                    <span
                        className="block text-center text-neutral-700 dark:text-neutral-300">Already have an account? <Link
                        to='/login'>Login</Link></span>
                </div>
            </div>
            <Routes>
                <Route path='/dashboard' element={< Dashboard/>}/>
            </Routes>
            <ToastContainer/>
        </>
    );
}

export default Register;
