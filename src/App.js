import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses=[
    {id: 'e1',title: 'car insurance', amount: 200, date: new Date(2021,2,29)},
    {id: 'e2',title: 'Bike insurance', amount: 3400, date: new Date(2022,2,29)},
    {id: 'e3',title: 'health insurance', amount: 4000, date: new Date(2020,2,29)},
  ]
  return (
  <div>
   <Expenses expenses={expenses}/>
  </div>
  );
}

export default App;
