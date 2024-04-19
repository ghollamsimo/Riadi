import React, {useState, Fragment, useEffect} from "react";
import Hero from "../../components/hero/Hero.jsx";
import HeadingPlace from "./HeadingPlace.jsx";
import Riadimage from '../../assets/img/image-header.jpg'
import {CiLocationOn} from "react-icons/ci";
import Filterdistination from "../../components/Filterdistination.jsx";
import HowitworksSection from "../../components/HowitworksSection.jsx";
import Loadingdata from "../../components/Loadingdata.jsx";
import {connect, useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {fetchApprovedRaids} from "../../redux/actions/ApprovedRiadAction.jsx";
import {fetchRaids} from "../../redux/actions/RiadAction.jsx";
import Pagination from "react-js-pagination";
import Navbar from "../../components/nav/Navbar.jsx";
import {Link} from "react-router-dom";
import {AddFavori} from "../../redux/Action.js";
import {GrUpdate} from "react-icons/gr";
import {FiTrash2} from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import ContactSection from "../../components/ContactSection.jsx";
import Footer from "../../components/Footer.jsx";

const Home = ({id}) => {
    const dispatch = useDispatch();
    const [favori , setFavori] = useState(false)

    const handlePageChange = (pageNum) => {
        dispatch(fetchRaids(pageNum));
    };

 //   console.log("ddd", id)
    const riads = useSelector((state) => state.approvedRiads.datalist);
    useEffect(() => {
        dispatch(fetchApprovedRaids());
    }, [dispatch]);
    const toggleFavori = () => {
        setFavori(!favori);
        if (!favori) {
            handleFavorites();
        }
    };
    const handleFavorites = () => {
        dispatch(AddFavori(riads.data[0].id , {favori}))
    }
    return (

        <Fragment>
            <Navbar id={id}/>
            <Hero/>
            <HeadingPlace/>
            <section className="py-3 bg-[#0E131F] rounded-t-3xl text-white sm:py-16 lg:py-2">
                <div className='px-4 sm:pt-14 pt-5 '>
                    <h1 className={`${`text-3xl sm:px-24 text-white md:text-4xl font-semibold`}`}>Featured places
                        to stay
                    </h1>
                    <p className={`${`text-gray-300 lg:text-xl text-lg sm:px-24 sm:text-2xl pt-3 pb-7`}`}>Popular places
                        to stay that Chisfis recommends for you
                    </p>
                    <div className={`${`px-0 sm:px-24 sm:pb-2`}`}>


                    </div>
                </div>


                    <div className="px-4 mx-auto sm:px-6  max-w-7xl" >
                        <div className="grid grid-cols-2 gap-6 mt-10 lg:gap-14 lg:grid-cols-3">
                            {riads?.data?.map(item =>
                                <div className="relative group" key={item.id}>
                                    <div className="overflow-hidden rounded aspect-w-1 aspect-h-1">
                                        <img
                                            className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125 aspect-video 	"
                                            src={`http://localhost:8000/storage/images/${item.cover}`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute left-3 top-3">
                                        <p className="sm:px-3 sm:py-1 px-1.5 py-1 text-[8px] sm:text-xs font-bold flex tracking-wide text-white  bg-[#111827] rounded-full gap-2">
                                            <span><CiLocationOn className='mt-0.5'/></span> {item.localisation}</p>
                                    </div>

                                    <div className="absolute gap-2 flex justify-between right-3 top-3">

                                        <button
                                            onClick={toggleFavori}
                                            className="sm:py-1 px-1 py-1 text-[8px] sm:text-lg font-bold flex tracking-wide text-white bg-[#111827] rounded-full gap-2"
                                        >
      <span style={{color: favori ? 'red' : 'inherit'}}>
        <GrFavorite/>
      </span>
                                        </button>
                                    </div>
                                    <div className="flex items-start justify-between mt-4 space-x-4">
                                        <div>
                                            <h3 className="text-xs font-bold text-white sm:text-sm md:text-base">
                                            <Link to={`/riad/${item.id}`} title="">
                                                <span className='border-b border-gray-600'> {item.name}</span>
                                                    <span className=" inset-0" aria-hidden="true"></span>
                                                </Link>
                                            </h3>
                                            <div className="text-xs  text-white sm:text-sm md:text-base line-clamp-1">
                                                <p>{item.description}</p>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <p className="text-xs text-white sm:text-sm md:text-base">${item.prix}<span
                                                className='text-gray-400'>/night</span></p>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                <div className='text-white flex mb-10 mt-16 justify-center items-center'>
                    <Pagination
                        totalItemsCount={riads.total}
                        activePage={riads.current_page}
                        itemsCountPerPage={riads.per_page}
                        onChange={handlePageChange}
                        itemClass='page-item'
                        linkClass='page-link bg-[#4F46E5] px-5 py-3 rounded-full mx-1'
                        itemClassFirst='first:ml-0 mx-1'
                        itemClassLast='last:mr-0 mx-1'
                        itemClassPrev='mx-1'
                        itemClassNext='mx-1'
                        activeClass='font-bold'
                        hideDisabled='true'
                        innerClass='flex'
                        activeLinkClass='bg-[#4F46E5] hover:bg-[#4F46E7] rounded-full mx-1'
                        linkClassFirst='mx-1'
                        linkClassPrev='mx-1'
                        linkClassNext='mx-1'
                        linkClassLast='mx-1'
                    />
                </div>

            </section>
            <HowitworksSection/>

            <ContactSection/>

            <Footer/>
        </Fragment>

    )

}


export default Home;