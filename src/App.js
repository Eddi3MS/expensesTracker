import React, { useEffect, useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  useEffect(() => {
    const data = localStorage.getItem("@expenses");

    if (data) {
      setExpenses(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@expenses", JSON.stringify(expenses));
  });

  const handleDeleteExpense = (id) => {
    setExpenses((current) => current.filter((item) => item.id !== id));
  };

  return (
    <>
      <GlobalStyles />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onDelete={handleDeleteExpense} />
    </>
  );
};

export default App;
