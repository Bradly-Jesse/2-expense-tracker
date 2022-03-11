import React from 'react'

const IncomeExpense = ({ income, expense }) => {
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