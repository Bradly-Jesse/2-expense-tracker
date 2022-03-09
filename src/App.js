import './App.css';

import MainHeader from './components/common/MainHeader';
import Balance from './components/common/Balance'

function App() {
  return (
    <div className="App">
      <MainHeader string='Expense Tracker' />
      <div className="balance-container">
        <Balance state='0.00' />
      </div>
    </div>
  );
}

export default App;
