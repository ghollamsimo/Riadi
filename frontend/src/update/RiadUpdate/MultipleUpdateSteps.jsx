import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";
import getCookie from "../../helpers/cookie.js";
import { fetchRaids, UpdateRiad} from "../../redux/actions/RiadAction.jsx";
import {toast, ToastContainer} from "react-toastify";
import {useParams} from "react-router";
import NavbarDirecteur from "../../components/NavbarDirecteur.jsx";
import UpdateStepOne from "./UpdateStepOne.jsx";
import StepTwo from "../../pages/drriad/StepTwo.jsx";
import UpdateStepTwo from "./UpdateStepTwo.jsx";
import StepThree from "../../pages/drriad/StepThree.jsx";
import UpdateStepThree from "./UpdateStepThree.jsx";
import StepFour from "../../pages/drriad/StepFour.jsx";
import UpdateStepFour from "./UpdateStepFour.jsx";
import StepFive from "../../pages/drriad/StepFive.jsx";
import UpdateStepFive from "./UpdateStepFive.jsx";
import StepSix from "../../pages/drriad/StepSix.jsx";
import UpdateStepSix from "./UpdateStepSix.jsx";

const MultipleUpdateSteps = () => {
    const navigate = useNavigate()
    let {id} = useParams()
    const dispatch = useDispatch();
    const [step, setStep] = useState(1);
    const token = getCookie('ACCESS_TOKEN');
    const [formData, setFormData] = useState({
        name: '',
        localisation: '',
        cover: null,
        categorie_id: null,
        description: '',
        image: [],
        prix: null,
        acreage: '',
        checkout: '',
        guests: 1,
        rule: '',
        rooms: 1,
        minnight :1 ,
        maxnight :1,
        checkin: '',
        currency: '',
        service_id: [],
        repa_id: [],
        etat: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));

    };
    const handleCover = (file) => {

        console.log(file);

        setFormData(prevFormData => ({
            ...prevFormData,
            cover: file
        }));
    };
    const handleImage=( value)=>{
        setFormData(prevFormData => ({
            ...prevFormData,
            image: value
        }));
    }

    const handleServices = ({ name, value }) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            service_id: prevFormData.service_id.includes(value)
                ? prevFormData.service_id.filter(id => id !== value)
                : [...prevFormData.service_id, value]
        }));
    };
    const handleRepas = ({ name, value }) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            repa_id: prevFormData.repa_id.includes(value)
                ? prevFormData.repa_id.filter(id => id !== value)
                : [...prevFormData.repa_id, value]
        }));
    };


    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrev = () => {
        setStep(step - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        console.log(formData)
        // Append each key-value pair from formData to formDataToSend
        Object.entries(formData).forEach(([key, value]) => {
            // If the value is an array (like image or service_id), append each item separately
            if (key !== "cover" && Array.isArray(value) ) {
                console.log(key)
                value.forEach((item) => {
                    formDataToSend.append(key, item);
                });
            } else {
                formDataToSend.append(key, value);
            }
        });

        console.log(formDataToSend);

        try {
            await dispatch(UpdateRiad({ id, data: formDataToSend }));
            dispatch(fetchRaids());
            // navigate('/directeur');
        } catch (error) {
            toast.error("Failed to Update Riad");
            console.log(error);
        }
    };

    return(
        <>
            <NavbarDirecteur/>
            <form onSubmit={handleSubmit} className='mt-16' encType="multipart/form-data">
                {step === 1 && (
                    <UpdateStepOne
                        formData={formData}
                        handleChange={handleChange}
                        handleNext={handleNext}
                    />
                )}
                {step === 2 && (
                    <UpdateStepTwo
                        formData={formData}
                        handleChange={handleChange}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                )}
                {step === 3 && (
                    <UpdateStepThree
                        formData={formData}
                        handleChange={handleServices}
                        handleRepas={handleRepas}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                    />
                )}
                {step === 4 && (
                    <UpdateStepFour
                        formData={formData}
                        handleChange={handleChange}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                    />
                )}
                {step === 5 && (
                    <UpdateStepFive
                        formData={formData}
                        handleChange={handleImage}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                        handleCover={handleCover}
                    />
                )}
                {step === 6 && (
                    <UpdateStepSix
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        handlePrev={handlePrev}
                    />
                )}
            </form>
            <ToastContainer/>
        </>
    )
}

export default MultipleUpdateSteps