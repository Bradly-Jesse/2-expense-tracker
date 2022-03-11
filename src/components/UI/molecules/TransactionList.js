import React, { useContext } from 'react'
import Transaction from '../atoms/Transaction'
import { GlobalContext } from '../../../context/GlobalState';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
  <>
    <ul className='transaction'>
      {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} /> )}
    </ul>

  </>
  )
}

export default TransactionList;
