import React from 'react'

export default function Newbalance({setBalance,setExpenses}) {
    const onClick = (e) => {
        setBalance(value => value + 1)
        setExpenses(value => value + 1)
    }

  return (
    <button onClick={onClick}>BUTTON HERE</button>
  )
}
