import { useState } from "react";
import StepOne from './StepOne.jsx';
import StepTwo from "./StepTwo.jsx";
import StepThree from "./StepThree.jsx";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../../components/Footer.jsx";
import StepFour from "./StepFour.jsx";
import StepFive from "./StepFive.jsx";
import StepSix from "./StepSix.jsx";
import { AddRiad, fetchRaids } from "../../redux/actions/RiadAction.jsx";
import getCookie from "../../helpers/cookie.js";
import {useNavigate} from "react-router-dom";
import NavbarDirecteur from "../../components/NavbarDirecteur.jsx";

const MultiStepForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [step, setStep] = useState(1);
    const token = getCookie('ACCESS_TOKEN');
    const [formData, setFormData] = useState({
        name: '',
        localisation: '',
        cover: '',
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
        etat : '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };
    const handleCover = (cover) => {
        console.log(cover);
        setFormData(prevFormData => ({
            ...prevFormData,
            cover: cover
        }));
    };

    const handleImage=({name, value})=>{
      //  console.log(name)
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
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
        console.log(formData)
        if (formData.image.length === 0) {
         //   toast.error("Image field is required");
            return;
        }
        try {
            await dispatch(AddRiad(formData , token));
            dispatch(fetchRaids());
        //    navigate('/directeur')
        } catch (error) {
            toast.error("Failed to add Riad");
            console.log(error);
        }
    };


    return (
        <>
            <NavbarDirecteur/>
            <form onSubmit={handleSubmit} className='mt-16' encType="multipart/form-data">
            {step === 1 && (
                <StepOne
                    formData={formData}
                    handleChange={handleChange}
                    handleNext={handleNext}
                />
            )}
            {step === 2 && (
                <StepTwo
                    formData={formData}
                    handleChange={handleChange}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                />
            )}
            {step === 3 && (
                <StepThree
                    formData={formData}
                    handleChange={handleServices}
                    handleRepas={handleRepas}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                />
            )}
            {step === 4 && (
                <StepFour
                    formData={formData}
                    handleChange={handleChange}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                />
            )}
            {step === 5 && (
                <StepFive
                    formData={formData}
                    handleChange={handleImage}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                    handleCover={handleCover}
                />
            )}
            {step === 6 && (
                <StepSix
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handlePrev={handlePrev}
                />
            )}
            </form>
            <Footer />
            <ToastContainer />
        </>
    );
};

export default MultiStepForm;
