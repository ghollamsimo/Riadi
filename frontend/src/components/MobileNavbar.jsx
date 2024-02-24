import {Fragment} from 'react'
import styled from 'styled-components'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiUserCircleThin } from "react-icons/pi";
import {Link } from 'react-router-dom'


const Div  = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Raleway&family=Roboto+Mono&family=Roboto:wght@300&family=Rubik:wght@300&display=swap');
    font-family: 'Rubik', sans-serif;
    display: none;
    align-items: center;
    justify-content: center;

    position: sticky;
    bottom: 0%;
    border-top: 1px solid rgba(255, 255, 255, 0.16);
    width: 100%;
    padding: 1.1rem;
    background: #111827;
    box-shadow: rgb(8, 8, 37) 0px 8px 24px;
    @media only screen and (max-width: 768px) {
        display: flex;
        margin: auto;

    }
`

const MobileNavbar = () =>{
    return(
        <Fragment>
            <Div className='text-white mx-auto'>
                <ul className='flex gap-20 lg:gap-48 mx-5 items-center text-center justify-between'>
                    <li className='font-medium text-sm'>
                        <Link to='/'>
                        <CiSearch className='mx-auto font-extrabold text-2xl'/>
                        Explore
                    </Link>
                    </li>
                    <li className=' font-medium text-sm'>
                        <Link to='/login'>
                        <CiHeart className='mx-auto font-extrabold text-2xl'/>
                        Wishlists
                        </Link>
                    </li>
                    <li className='font-medium text-sm'>
                        <Link to='/login'>
                        <PiUserCircleThin   className='mx-auto font-extrabold text-2xl'/>
                        Login
                            </Link>
                    </li>
                </ul>
            </Div>
        </Fragment>
    )
}

export default MobileNavbar