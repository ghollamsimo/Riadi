import {useState} from "react";
import {IoClose} from "react-icons/io5";
import {toast, ToastContainer} from "react-toastify";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {AddRepa} from "../redux/Action.js";

const CreateRepa = ({ setOpenModal }) => {
    const [name, setName] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const validateForm = () => {
        if (!name) {
            toast.error('Please fill The Input');
            return false;
        }
        return true;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const repa = {name}
            await dispatch(AddRepa(repa));
            setOpenModal(false);
            navigate('/repas')
        }
    };
    return(
        <>
            <div className="fixed inset-0 overflow-y-auto flex justify-center items-center" >
                <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
                    <div className='flex justify-end'>
                        <button onClick={() => setOpenModal(false)} className="text-xl">
                            <IoClose/>
                        </button>
                    </div>
                    <h2 className="text-lg font-semibold mb-4">Create New Repa</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border outline-0 p-2 rounded"
                                placeholder="Repa name"
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
    )
}

export default CreateRepa