import { RouterProvider } from "react-router-dom"
import DashboardRouter from "../src/dashboard/DashboardRouter"


const  DashboardDisplay = () => {

  return(

    <>
  
       <RouterProvider router={DashboardRouter} />
     
    </>
  )
}
export default DashboardDisplay