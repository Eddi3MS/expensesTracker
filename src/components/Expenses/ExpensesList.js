import React from "react";
import ExpenseItem from "./ExpenseItem";

import styled from "styled-components";

const ListSty = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExpensesList = (props) => {
  if (props.items.length === 0)
    return (
      <h2 style={{ color: "white", textAlign: "center", paddingBlock: "1rem" }}>
        Found no expenses.
      </h2>
    );

  return (
    <ListSty>
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
