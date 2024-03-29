import Api from "../../api/Api.jsx";
import TableRiads from "../../data/TableRiads.jsx";
import Adminavbar from "../../components/Adminavbar.jsx";
import SideBar from "../../components/SideBar.jsx";

const Griads = () => {
    return(
        <>
            <Adminavbar/>
            <div>
                <div className="flex h-full w-full">
                    <SideBar/>
                    <div className='gap-14 ml-9 w-full'>
                        <TableRiads/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Griads