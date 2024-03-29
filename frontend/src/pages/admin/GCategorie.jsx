import Adminavbar from "../../components/Adminavbar.jsx";
import SideBar from "../../components/SideBar.jsx";
import TableCategorie from "../../data/TableCategorie.jsx";


const GCategorie = () => {
    return (
        <>
            <Adminavbar/>
            <div>
                <div className="flex h-full w-full">
                    <SideBar/>
                    <div className='gap-14 ml-9 w-full'>

                        <TableCategorie/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default GCategorie