import React,{useState} from 'react';
import Title from "./Components/Atom/Title";
import Add from "./Components/Atom/Add";
import Value from "./Components/Atom/Balance";

const dummyData = [{id: 1, currency: 100 , balance: true}, {id: 2 , currency: 300 , completed: true}, {id: 3, currency: 499 , completed: false}]
function App() {
  const [ data, setData] = useState(dummyData);
  const [ balance, setBalance ] = useState(2)
  const [ expenses, setExpenses ] = useState(5)

console.log(data)
  return (
    <div className="App">
      <div className="tracker">
      <Title title={"Expense tracker!"}/>
      <Value  balance={balance} expenses={expenses}/>
      <Add balance={balance} setBalance={setBalance} exexpensesepenses={expenses} setExpenses={setExpenses}/>
      </div>
    </div>
  );
}

export default App;
