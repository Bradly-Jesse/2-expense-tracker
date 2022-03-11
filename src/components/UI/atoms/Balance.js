import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState';

const Balance = ({ state }) => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const balance = amounts.reduce((currentValue, nextValue) => currentValue += nextValue, 0).toFixed(2);

  return (
      <>
        <h4>Your Balance</h4>
        <h1>${ balance }</h1>
      </>
  )
}

export default Balance;