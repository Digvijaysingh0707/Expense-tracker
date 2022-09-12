import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";

function App() {
  const expenses=[
    {id: 'e1',title: 'car insurance', amount: 200, date: new Date(2021,2,29)},
    {id: 'e2',title: 'Bike insurance', amount: 3400, date: new Date(2022,2,29)},
    {id: 'e3',title: 'health insurance', amount: 4000, date: new Date(2020,2,29)},
  ]

  const addExpenseHandler = expense => {
    console.log('In App.js')
  }
  return (
  <div>
    <NewExpense onAddExpense= {addExpenseHandler}/>
   <Expenses expenses={expenses}/>
  </div>
  );
}

export default App;
