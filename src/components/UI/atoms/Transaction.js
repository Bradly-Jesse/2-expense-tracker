import React from 'react'

const Transaction = ({ name, amount }) => {
  return (
      <div>
        <p>{name}<span>{amount}</span></p>
      </div>
    
  )
}

export default Transaction;
