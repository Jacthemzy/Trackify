import "./DashboardLayout.css"
import Sidebar from "../sidebar/Sidebar"
import { Outlet } from "react-router-dom"



const DashboardLayout = () => {

    return (

        <>
            <div id="layout">
                <Sidebar />

                <Outlet />
            </div>
        </>
    )
}

export default DashboardLayout

