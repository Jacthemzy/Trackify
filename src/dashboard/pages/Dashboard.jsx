import React from "react"
import Header from '/src/component/Header'
import { GlobalProvider } from "../../context/GlobalState"
import Balance from "../../component/Balance"

const Dashboard = () => {

    return (

        <>

        <GlobalProvider>

             <Header />
            <Balance />
        </GlobalProvider>
            
           
            
            

        </>
    )
}

export default Dashboard 