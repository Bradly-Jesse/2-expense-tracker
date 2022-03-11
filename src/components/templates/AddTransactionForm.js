import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

const AddTransactionForm = () => {
  const [ state, setState ] = useState({text: '', amount: 0})
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      text: state.text,
      amount: +state.amount
    }
    addTransaction(newTransaction)
    setState({text: '', amount: 0})
  }

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="text">Name</label>
            <input id='text' name='text' type='text' value={state.text} onChange={changeHandler} placeholder='Enter a name...' />
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