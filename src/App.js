import './App.css';

import MainHeader from './components/UI/atoms/MainHeader';
import Balance from './components/UI/atoms/Balance'
import IncomeExpense from './components/UI/molecules/IncomeExpense';

function App() {
  return (
    <div className="App">
      <MainHeader string='Expense Tracker' />
      <div className="balance-container">
        <Balance state='0.00' />
        <IncomeExpense />
      </div>
    </div>
  );
}

export default App;
