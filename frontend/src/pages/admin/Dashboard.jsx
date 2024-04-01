import SideBar from "../../components/SideBar.jsx";
import Adminavbar from "../../components/Adminavbar.jsx";
import TableUsers from "../../data/TableUsers.jsx";
import AdminStats from "../../data/AdminStats.jsx";
import Google from '../../assets/img/google.png'
import TableRiads from "../../data/TableRiads.jsx";
import TableCategorie from "../../data/TableCategorie.jsx";
import ChartUser from "../../data/ChartUser.jsx";
import TableRepas from'../../data/TableRepas.jsx'

const Dashboard = () => {
    return (
        <>

            <Adminavbar/>
        <div className="flex h-full w-full">
            <SideBar/>
            <div className="flex-grow  ">
                <AdminStats/>
                <div className="w-full">
                    <TableRiads/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard