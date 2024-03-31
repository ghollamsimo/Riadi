import {useEffect, useState} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import {useDispatch} from "react-redux";
import {AddCategorie} from "../redux/Action.js";
import {useNavigate} from "react-router-dom";
import Aos from "aos";
import { IoClose } from "react-icons/io5";

const CreateCategorie = ({ setOpenModal }) => {
    useEffect(() =>{
        Aos.init({duration:500});
    }, [])
    const [name, setName] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const validateForm = () => {
        if (!name) {
            toast.error('Please fill the name of the category');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const user = {name}
          await dispatch(AddCategorie(user));
            setOpenModal(false);
            navigate('/categories')
        }
    };

    return (
        <>
            <div className="fixed inset-0 overflow-y-auto flex justify-center items-center"  data-aos="fade-up">
                <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
                    <div className='flex justify-end'>
                    <button onClick={() => setOpenModal(false)} className="text-xl">
                        <IoClose />
                    </button>
                    </div>
                    <h2 className="text-lg font-semibold mb-4">Create Category</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border outline-0 p-2 rounded"
                                placeholder="Category name"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
                        >
                            Create
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </>
    );
};

export default CreateCategorie;
