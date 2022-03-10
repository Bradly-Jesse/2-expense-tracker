import React from 'react'
import Transaction from '../atoms/Transaction';

const TransactionList = ({ transactions }) => {

  return (
  <>
    <ul className='transaction'>
      {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} /> )}
    </ul>

  </>
  )
}

export default TransactionList;
