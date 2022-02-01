import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import ExpenseForm from "./ExpenseForm";
import styled from "styled-components";

const NewExpSty = styled.div`
  background-color: var(--neutrals-700);
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 94%;
  border-radius: 6px;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    font: inherit;
    font-weight: 500;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid var(--primary-700);
    background-color: var(--primary-600);
    color: var(--neutrals-000);
    border-radius: 6px;
  }
  button + button {
    margin-left: 1rem;
  }

  button:hover,
  button:active {
    background-color: var(--primary-500);
    border-color: var(--primary-600);
  }
`;

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  return (
    <NewExpSty>
      {!isEditing && (
        <button
          aria-label="add a new expense"
          onClick={() => setIsEditing(true)}
        >
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </NewExpSty>
  );
};

export default NewExpense;
