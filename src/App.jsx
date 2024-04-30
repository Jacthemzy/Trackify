
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar"
import Home from "../src/navigate/Home";
import Login from "../src/navigate/Login"
import Signup from "../src/navigate/Signup"
import DashboardRouter from "./dashboard/DashboardRouter";
import Tracker from "../src/Tracker"



const App = () => {

  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/DashboardRouter" element={<DashboardRouter />} />
          
        </Routes>
      </BrowserRouter>




    </div>


  )

}

export default App
