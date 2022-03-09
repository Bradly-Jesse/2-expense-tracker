import React from 'react'

export default function Add({setBalance,setExpenses}) {
    const onClick = () => {
        setBalance(value => value + 1)
        setExpenses(value => value + 1)
    }

  return (
    <div><button style={{border:"solid black 1px"}} onClick={onClick}>BUTTON HERE</button></div>
    
  )
}
