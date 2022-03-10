import React, { useContext } from 'react';
import MainHeader from './components/UI/atoms/MainHeader';
import Balance from './components/UI/atoms/Balance';
import IncomeExpense from './components/UI/molecules/IncomeExpense';
import TransactionList from './components/UI/molecules/TransactionList';
import AddTransactionForm from './components/templates/AddTransactionForm';

import { GlobalProvider } from './context/GlobalState';
import { GlobalContext } from './context/GlobalState';

import './App.css';

function App() {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount);
  const balance = amounts.reduce((currentValue, nextValue) => currentValue += nextValue, 0).toFixed(2)

  return (
    <GlobalProvider className="App">
      <MainHeader string='Expense Tracker' />
      <div className="balance-container">
        <Balance state={balance} />
        <IncomeExpense />
      </div>
      <h3>History</h3>
      <TransactionList transactions={transactions}/>
      <h3>Add a new transaction</h3>
      <AddTransactionForm />
    </GlobalProvider>
  );
}

export default App;
