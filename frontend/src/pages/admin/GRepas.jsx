import Adminavbar from "../../components/Adminavbar.jsx";
import SideBar from "../../components/SideBar.jsx";
import TableRepas from "../../data/TableRepas.jsx";

const GRepas = () => {
    return(
        <>
            <Adminavbar/>
            <div>
                <div className="flex h-full w-full">
                    <SideBar/>
                    <div className='gap-14 ml-9 w-full'>

                        <TableRepas/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default GRepas