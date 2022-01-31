import React from "react";
import ExpenseItem from "./ExpenseItem";

import styled from "styled-components";

const ListSty = styled.ul`
  list-style: none;
  padding: 0;

  .expenses-list__fallback {
    color: white;
    text-align: center;
    padding-top: 1rem;
  }
`;

const ExpensesList = (props) => {
  return (
    <ListSty>
      {props.items.length === 0 && (
        <h2 className="expenses-list__fallback">Found no expenses.</h2>
      )}
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDelete={props.onDelete}
        />
      ))}
    </ListSty>
  );
};

export default ExpensesList;
