import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// INITIAL STATE
const initialState = {
    transactions: [
        {id: 1, text: 'Flower', amount: -20 },
        {id: 2, text: 'Salary', amount: 300 },
        {id: 3, text: 'Book', amount: -10 },
        {id: 4, text: 'Camera', amount: 150 }
    ]
}

// CREATE CONTEXT
export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AppReducer, initialState);

    // ACTIONS
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
        console.log(state.transactions)
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction 
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
