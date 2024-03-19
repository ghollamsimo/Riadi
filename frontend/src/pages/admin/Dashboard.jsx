import SideBar from "../../components/SideBar.jsx";
import Adminavbar from "../../components/Adminavbar.jsx";
import TableUsers from "../../components/TableUsers.jsx";
import AdminStats from "../../components/statistique/AdminStats.jsx";

const Dashboard = () => {
    return (
        <div className="flex h-full w-full">
            <SideBar/>
            <div className="flex-grow ml-14 ">
                <AdminStats/>
                <div className="p-8">
                    <TableUsers/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard