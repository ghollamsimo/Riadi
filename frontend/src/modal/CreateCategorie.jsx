import Api from '../api/Api.jsx';
import { useState } from 'react';
import {toast, ToastContainer} from 'react-toastify';

const CreateCategorie = ({ setOpenModal }) => {
    const { http } = Api();
    const [name, setName] = useState('');
    const validateForm = () => {
        if (!name) {
            toast.error('Please fill the name of the category');
            return false;
        }
        return true;
    };
    const createCategory = async () => {
        const form = new FormData();
        form.append('name', name);

        try {
            const response = await http.post('/categorie', form);
            return response.data
        } catch (error) {
            console.error(error);
            toast.error('Failed to create category');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            await createCategory();
            setOpenModal(false);
        }
    };

    return (
        <>
            <div className="fixed inset-0 overflow-y-auto flex justify-center items-center">
                <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
                    <button onClick={() => setOpenModal(false)} className="absolute top-0 right-0 m-4">
                        Close
                    </button>
                    <h2 className="text-lg font-semibold mb-4">Create Category</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border p-2 rounded"
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
