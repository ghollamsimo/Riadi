import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { UpdateCategorie } from "../redux/Action.js";

const UpdateCategory = ({ setOpenModal, category }) => {
    const [name, setName] = useState(category.name);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validate = () => {
        if (!name) {
            toast.error("Please fill in the fields");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setLoading(true);
            try {
                await dispatch(UpdateCategorie(category.code, { name }));
                toast.success("Category updated successfully");
                setOpenModal(false);
                navigate("/categories");
            } catch (error) {
                toast.error("Failed to update category");
                console.error("Error updating category:", error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <>
            <div className="fixed inset-0 overflow-y-auto flex justify-center items-center" data-aos="fade-up">
                <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
                    <div className="flex justify-end">
                        <button onClick={() => setOpenModal(false)} className="text-xl">
                            <IoClose />
                        </button>
                    </div>
                    <h2 className="text-lg font-semibold mb-4">Update Category</h2>
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
                            disabled={loading}
                        >
                            {loading ? "Updating..." : "Update"}
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default UpdateCategory;
