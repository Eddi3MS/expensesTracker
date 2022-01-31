import React, { useState } from "react";

import styled from "styled-components";

const FormSty = styled.form`
  .new-expense__controls {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    text-align: left;
  }

  .new-expense__control label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
    color: var(--neutrals-200);
  }

  .new-expense__control input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid var(--primary-900);
    width: 20rem;
    max-width: 100%;

    &:focus {
      outline: 0;
      border: 1px solid var(--primary-500);
    }
  }

  .new-expense__actions {
    text-align: right;

    .cancel {
      background-color: #cb3837;
      border: 1px solid #cb3837;
      color: #f7e7e6;

      &:hover {
        background-color: #e43837;
      }
    }
  }
`;

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <FormSty onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) => setEnteredTitle(event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={(event) => setEnteredAmount(event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={(event) => setEnteredDate(event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" className="cancel" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </FormSty>
  );
};

export default ExpenseForm;
