import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li>
      {transaction.text} <span>{transaction.amount < 0 ? '-':'+'}${Math.abs(transaction.amount)}</span>
      <button style={{color: 'red'}} onClick={() => deleteTransaction(transaction.id)}> x </button>
    </li>
    
  )
}

export default Transaction;
