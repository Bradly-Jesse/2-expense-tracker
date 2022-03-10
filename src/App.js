import Header from './Components/Atom/Header';
import Balance from './Components/Atom/Balance'
function App() {
  return (
    <div>
      <Header title={"Expense Tracker"}/>
      <div className="container">
        <Balance/>
        </div>
    </div>
  );
}

export default App;
