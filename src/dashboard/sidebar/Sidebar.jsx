// import './Sidebar.css'
// import { MdDashboard } from "react-icons/md";
// import { FaMoneyBillTrendUp } from "react-icons/fa6";
// import { GiExpense } from "react-icons/gi";
// import { NavLink } from 'react-router-dom';

// const links = [
//     { to: "/", icon: <MdDashboard />, label: "Dashboard", Id: 1 },
//     { to: "/incomes", icon: <FaMoneyBillTrendUp />, label: "Incomes", Id: 1 },
//     { to: "/expenses", icon: <GiExpense />, label: "expenses", Id: 1 },

// ]

// const Sidebar = () => {

//     return (

//         <>

//             <div id='side-wrapper'>

//                 <div id='links'>

//                     {
//                         links.map(({ to, icon, label, id }) => (

//                             <NavLink key={id} to={to}> {icon} {label} </NavLink>
//                         ))
//                     }


//                 </div>

//             </div>

//         </>
//     )
// }

// export default Sidebar
// import { useNavigate } from 'react-router-dom';



// import React from 'react'

// const navigate=useNavigate

// const Sidebar = () => {
//   return (
//     <div>
//       <a href="">Dashboard</a> <br />
//       <a onClick={()=>navigate('./ExpenseDashboard')}  href="ExpenseDashboard">Income</a> <br />
//       <a onClick={()=>navigate('./IncomeDashboard')} href="IncomeDashboard">Expenses</a>
//     </div>
//   )
// }

// export default Sidebar
