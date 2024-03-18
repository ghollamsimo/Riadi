import React, { useState } from 'react';
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

    const validateForm = () => {
        if (!name || !email || !password || !role) {
            toast.error("Please fill in all fields");
            return false;
        }
        toast.success('Account Created Success Fully');
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
            console.log(response)
            setTimeout(() => {
                if (role === 'Client'){
                    navigate('/')
                }else if (role === 'DrRaid'){
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
            await createUser();
        }
    };

    return (
        <>
            <div className="container my-20 lg:mb-32">
                <h2 className="flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">Sign Up</h2>
                <div className="max-w-md mx-auto space-y-6">
                    <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>

                        <label className="block"><span className="text-neutral-800 dark:text-neutral-200">Name</span>
                            <input type="text"
                                   onChange={(e) => setName(e.target.value)}
                                   className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                   placeholder="John" />
                        </label>

                        <label className="block"><span className="text-neutral-800 dark:text-neutral-200">Email address</span>
                            <input type="email"
                                   onChange={(e) => setEmail(e.target.value)}
                                   className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                   placeholder="example@example.com" />
                        </label>
                        <label className="block">
                            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">Password</span>
                            <input type="password"
                                   onChange={(e) => setPassword(e.target.value)}
                                   className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1" />
                        </label>

                        <label htmlFor="roles" className="block text-sm font-medium text-gray-900 dark:text-white">
                            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">Select Role</span>
                            <select id="roles"
                                    onChange={(e) => setRole(e.target.value)}
                                    className="block w-full border border-gray-600 outline-0 text-white  bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1 dark:bg-[#1F2937] dark:text-white">
                                <option value="Client">Client</option>
                                <option value="DrRaid">DrRaid</option>
                            </select>
                        </label>

                        <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-[#4F46E5] hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0" type="submit">Continue</button>
                    </form>

                    <span className="block text-center text-neutral-700 dark:text-neutral-300">Already have an account? <Link to='/login'>Login</Link></span>
                </div>
            </div>
            <Routes>
                <Route path='/dashboard' element={< Dashboard />} />
            </Routes>
            <ToastContainer />
        </>
    );
}

export default Register;
