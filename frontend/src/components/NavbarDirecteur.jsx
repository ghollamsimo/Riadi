import {Link} from "react-router-dom";
import {TbPoint} from "react-icons/tb";
import {CiSearch} from "react-icons/ci";

const NavbarDirecteur = ({logOut, user}) => {
    return(
        <>
            <nav
                className="m-5  border-b border-gray-600 bg-[#111827] header__content__nav text-white  py-3 px-4 flex items-center justify-between">
                <Link to="/directeur" className="header__content__logo md:flex hidden font-extrabold font-serif">
                    Riadi <span><TbPoint/></span>
                </Link>
                <div className="flex items-center">
                    <ul className={`${`z-50 flex items-center`}`}>
                        <li>
                            <Link to="/createriad" className={`${`bg-gray-800`}`}>Add Riad</Link>
                        </li>

                        {!user && (
                            <li>
                                <button onClick={logOut} className="btn btn__login">Logout</button>
                            </li>
                        )}
                        {user && (
                            <li>
                                <Link to="/login">
                                    <button className="btn btn__login">Login</button>
                                </Link>
                            </li>
                        )}


                    </ul>

                </div>
            </nav>

        </>
    )
}

export default NavbarDirecteur