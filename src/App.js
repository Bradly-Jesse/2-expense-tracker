import Header from "./Components/Atom/Header";
import Balance from "./Components/Atom/Balance";
import IncomeExpenses from "./Components/Atom/IncomeExpenses";
import TransactionList from "./Components/Molecule/TransactionList";
import AddTransaction from "./Components/Organisms/AddTransaction";

import {GlobalProvider} from "./context/GlobalState";
function App() {

  return (
    <GlobalProvider>
      <Header title={"Expense Tracker"} />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
