import React from 'react'

const Balance = ({ state }) => {
  return (
      <>
        <h4>Your Balance</h4>
        <h1>${ state }</h1>
      </>
  )
}

export default Balance;