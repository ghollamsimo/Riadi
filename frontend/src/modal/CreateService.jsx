import {IoClose} from "react-icons/io5";
import {toast, ToastContainer} from "react-toastify";
import {useEffect, useState} from "react";
import Aos from "aos";
import {useDispatch} from "react-redux";
import {AddService,  fetchService} from '../redux/Action.js'
const CreateService = ({ setOpenModal }) => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const validate = () => {
        if (!name) {
            toast.error('Please provide a name');
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch(AddService({ name }));
            setOpenModal(false);
            dispatch(fetchService())
        }
    }

    return (
        <>
            <div className="fixed z-50 inset-0 overflow-y-auto flex justify-center items-center" data-aos="fade-up">
                <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
                    <div className='flex justify-end'>
                        <button onClick={() => setOpenModal(false)} className="text-xl">
                            <IoClose/>
                        </button>
                    </div>
                    <h2 className="text-lg font-semibold mb-4">Create Service</h2>
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
    )
}

export default CreateService