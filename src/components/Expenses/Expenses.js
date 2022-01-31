import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import styled from "styled-components";

const ExpensesSty = styled.div`
  padding: 1rem;
  background-color: var(--neutrals-700);
  margin: 2rem auto;
  width: 50rem;
  max-width: 94%;
  border-radius: 6px;
`;

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  return (
    <ExpensesSty>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} onDelete={props.onDelete} />
      </Card>
    </ExpensesSty>
  );
};

export default Expenses;
