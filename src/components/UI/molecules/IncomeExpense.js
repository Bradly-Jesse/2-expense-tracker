import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState'

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter(item => item >= 0).reduce((firstValue, secondValue) => firstValue + secondValue, 0);
  const expense = amounts.filter(item => item < 0).reduce((firstValue, secondValue) => firstValue + secondValue, 0) * -1;

  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p>+{income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p>-{expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpense