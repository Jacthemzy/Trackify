import React from 'react'
import Header from '../../component/Header'
import Balance from '../../component/Balance'
import IncomeExpenses from '../../component/IncomeExpenseExp'
import TransactionList from '../../component/TransactionList'
import { GlobalProvider } from '../../context/GlobalState'
import IncomeTransaction from '../../component/IncomeTransaction'

const IncomeDashboard = () => {
    return (
        <div>

            <GlobalProvider>
             
                <div className="container">
                {/* <Header /> */}
                    <Balance />
                    <IncomeExpenses />
                    <TransactionList />
                    <IncomeTransaction />
                </div>

            </GlobalProvider>


        </div>
    )
}

export default IncomeDashboard
