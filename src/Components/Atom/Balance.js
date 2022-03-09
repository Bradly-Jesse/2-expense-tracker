import React from 'react'

export default function Balance({balance,expenses}) {
  return (
    <div>
      <h1 style={{color: "green"}} >{balance}</h1>
      <h1 style={{color: "red"}} >{expenses}</h1>
    </div>
  )
}
