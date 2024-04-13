import {useEffect} from "react";
import {fetchRiad} from "../../redux/actions/RiadAction.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";

const SingleRiadPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const riad = useSelector((state) => state.riadsData.datalist.riad);
    const images = riad.images[0]

    console.log('riad:', riad);
    console.log('images:', images);

    useEffect(() => {
        dispatch(fetchRiad(id));
    }, [dispatch, id]);

    return (
        <>
            <div className='mx-auto mt-96'>
                {images && images.length > 0 ? (
                    <img className="absolute inset-0 object-cover rounded-md sm:rounded-xl w-full h-full"
                         src={`http://localhost:8000/storage/images/${images[0].image}`}
                         alt="" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
                ) : (
                    <div>Chargement des images...</div>
                )}
            </div>

            {riad && riad.name ? (
                <p>{riad.name}</p>
            ) : (
                <div>Chargement des détails du riad...</div>
            )}
        </>
    );
};

export default SingleRiadPage