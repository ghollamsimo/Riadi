import React, { useState , Fragment } from "react";
import Hero from "../../components/hero/Hero.jsx";
import HeadingPlace from "./HeadingPlace.jsx";


const RiadCard = () =>{
    return (

        <Fragment>
            <Hero/>
            <HeadingPlace/>
            <section className='bg[#D0CFF5]'>
                <div className='border w-fit'>

                </div>
            </section>




        </Fragment>

    )
}

export default RiadCard;