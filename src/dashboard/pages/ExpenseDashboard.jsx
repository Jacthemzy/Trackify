import React from 'react'
import IncomeExpenseExp from '../../component/IncomeExpenseExp'
import Balance from '../../component/Balance'
import TransactionList from '../../component/TransactionList'
import Header from '../../component/Header'
import { GlobalProvider } from '../../context/GlobalState'
import ExpenseTransaction from '../../component/ExpenseTransaction'
const ExpenseDashboard = () => {
    return (
        <div>


            <GlobalProvider>

                
                <div className="container">
                {/* <Header /> */}
                    <Balance />
                    <IncomeExpenseExp />
                    <TransactionList />
                    <ExpenseTransaction/>
                </div>
            </GlobalProvider>





        </div>
    )
}

export default ExpenseDashboard
