import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "New Laptop",
    amount: 45000,
    date: new Date(2021, 7, 5),
  },
  { id: "e2", title: "New TV", amount: 5000, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 5000,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e4",
    title: "New Phone",
    amount: 16000,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expense, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler} />
      <Expenses items={expense} />;
    </div>
  );
};

export default App;
