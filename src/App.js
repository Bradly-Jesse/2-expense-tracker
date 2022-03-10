import './App.css';

import MainHeader from './components/UI/atoms/MainHeader';
import Balance from './components/UI/atoms/Balance'
import IncomeExpense from './components/UI/molecules/IncomeExpense';
import TransactionList from './components/UI/molecules/TransactionList';
import AddTransactionForm from './components/templates/AddTransactionForm';

function App() {
  return (
    <div className="App">
      <MainHeader string='Expense Tracker' />
      <div className="balance-container">
        <Balance state='0.00' />
        <IncomeExpense />
      </div>
      <h3>History</h3>
      <TransactionList />
      <h3>Add a new transaction</h3>
      <AddTransactionForm />
    </div>
  );
}

export default App;
