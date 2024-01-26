import react, {Fragment} from "react";
import Hero from "../../components/hero/Hero.jsx";

const RiadCard = () =>{
    return (

        <Fragment>
            <Hero/>
            <div className='text-white text-4xl'>
                <h1>
                    Featured places to stay
                </h1>
            </div>
        </Fragment>

    )
}

export default RiadCard;