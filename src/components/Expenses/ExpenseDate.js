import React from "react";

import styled from "styled-components";

const DateSty = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid var(--neutrals-300);
  background-color: var(--neutrals-700);
  color: var(--neutrals-000);
  border-radius: 6px;
  align-items: center;
  justify-content: center;

  .expense-date__month {
    font-size: 0.75rem;
    font-weight: bold;
  }

  .expense-date__year {
    font-size: 0.75rem;
    font-weight: 500;
  }

  .expense-date__day {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const ExpenseDate = (props) => {
  const month = new Date(props.date).toLocaleString("en-US", { month: "long" });
  const day = new Date(props.date).toLocaleString("en-US", { day: "2-digit" });
  const year = new Date(props.date).getFullYear();

  return (
    <DateSty>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </DateSty>
  );
};

export default ExpenseDate;
