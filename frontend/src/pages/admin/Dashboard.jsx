import SideBar from "../../components/SideBar.jsx";
import Adminavbar from "../../components/Adminavbar.jsx";
import TableUsers from "../../data/TableUsers.jsx";
import AdminStats from "../../data/AdminStats.jsx";
import Google from '../../assets/img/google.png'
import TableRiads from "../../data/TableRiads.jsx";
import TableCategorie from "../../data/TableCategorie.jsx";
const Dashboard = () => {
    return (
        <>

            <Adminavbar/>
        <div className="flex h-full w-full">
            <SideBar/>
            <div className="flex-grow  ">
                <AdminStats/>
                <div className="gap-14 ml-9 grid grid-cols-2">
                    <TableRiads/>
                    <TableUsers/>
                </div>
                <div className={`ml-9 gap-14 grid grid-cols-2`}>
                    <TableCategorie/>

                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard