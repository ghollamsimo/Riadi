import { fetchService, UpdateServices } from "../redux/Action.js"; // Corrected import statement
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import Aos from "aos";
import { toast, ToastContainer } from "react-toastify";
import { IoClose } from "react-icons/io5";

const UpdateService = ({ setOpenModal, item, updateService, services }) => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    const [name, setName] = useState(item.name);

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
            try {
                await updateService(item, { name });
                toast.success("Service updated successfully");
                setOpenModal(false);
                services();
            } catch (error) {
                toast.error("Failed to update Service");
            }
        }
    };

    return (
        <>
            <div className="fixed z-50 inset-0 overflow-y-auto flex justify-center items-center" >
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
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateService: (id, data) => dispatch(UpdateServices(id, data)),
        services: () => dispatch(fetchService()),
        loader: () => dispatch(fetchService())
    };
};

export default connect(null, mapDispatchToProps)(UpdateService);
