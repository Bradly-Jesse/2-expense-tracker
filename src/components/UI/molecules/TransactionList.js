import React from 'react'
import Transaction from '../atoms/Transaction';

const TransactionList = () => {
  return (
  <>
    <div className='transaction'><Transaction name='Cash' amount='10' /></div>
    <div className='transaction'><Transaction name='Cash' amount='10' /></div>
    <div className='transaction'><Transaction name='Cash' amount='10' /></div>
  </>
  )
}

export default TransactionList;
