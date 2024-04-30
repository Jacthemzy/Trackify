import React from 'react'
import ExpenseDashboard from './pages/ExpenseDashboard'
import IncomeDashboard from './pages/IncomeDashboard'
import Dashboard from './pages/Dashboard'
import '../dashboard/DashboardRouter.css'

const DashboardRouter = () => {
  return (


    <>
      <div className='dbr'>

        <div className='dbr-sidenav'>
        <Dashboard />
        </div>

        <div className='dbr-main'>
            <ExpenseDashboard />
            <IncomeDashboard />
        </div>
      </div>



    </>


  )
}

export default DashboardRouter
