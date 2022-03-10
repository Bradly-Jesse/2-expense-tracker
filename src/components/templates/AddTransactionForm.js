import React, { useState } from 'react'

const AddTransactionForm = () => {
  const [ state, setState ] = useState({name: '', amount: ''})

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  return (
    <form>
        <div>
            <label htmlFor="name">Name</label>
            <input id='name' name='name' type='text' value={state.name} onChange={changeHandler} placeholder='Enter a name...' />
        </div>
        <div>
            <label htmlFor="amount">Amount</label>
            <input id='amount' name='amount' type='number' value={state.amount} onChange={changeHandler} placeholder='Enter an amount...' />
        </div>
        <button>Add transaction</button>
    </form>
  )
}

export default AddTransactionForm;