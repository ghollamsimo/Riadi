import {useState} from "react";
import StepOne from './StepOne.jsx'
import StepTwo from "./StepTwo.jsx";
import StepThree from "./StepThree.jsx";
import {useDispatch} from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";
import Footer from "../../components/Footer.jsx";
import StepFour from "./StepFour.jsx";
import StepFive from "./StepFive.jsx";
const MultiStepForm = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        localisation: '',
        categorie_id: '',
        description : '',
        image : '',
        prix : '',
        date : '',
        acreage : '',
        checkout : '',
        guests : '',
        rule : '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleNext = () => {
        setStep(step + 1);
    };
    const handlePrev = () => {
        setStep(step - 1);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.categorie_id || !formData.description) {
            toast.error("Name and Category are required")
        }else {
            toast.success('Success');
            console.log(formData);
        }

    }
    return(
        <>
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
                    handleChange={handleChange}
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
                    handleChange={handleChange}
                    handlePrev={handlePrev}
                />
            )}
            <Footer/>
            <ToastContainer/>
        </>
    )
}

export default MultiStepForm