import React from 'react'

const Transaction = ({ transaction }) => {
  return (
    <li>{transaction.text} <span>{transaction.amount < 0 ? '-':'+'}${Math.abs(transaction.amount)}</span></li>
    
  )
}

export default Transaction;
