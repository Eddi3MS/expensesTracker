import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { BiTrash } from "react-icons/bi";

import styled from "styled-components";

const ItemSty = styled.ul`
  .expense-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    margin: 1rem 0;
    background-color: var(--neutrals-600);
  }

  .expense-item__description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-end;
    flex-flow: column-reverse;
    justify-content: flex-start;
    flex: 1;

    h2 {
      color: var(--neutrals-100);
      font-size: 1rem;
      flex: 1;
      margin-inline: 0.5rem;
    }
    .expense-item__price {
      font-size: 1rem;
      font-weight: bold;
      color: var(--primary-900);
      background-color: var(--primary-400);
      border: 1px solid var(--primary-800);
      padding: 0.5rem;
      border-radius: 6px;
      margin-inline: 0.5rem;
    }

    button {
      font-size: 1.2rem;
      padding: 0.5rem;
      border: 1px solid var(--primary-800);
      margin-right: 0.5rem;
      border-radius: 6px;
      cursor: pointer;

      background-color: #cb3837;
      border: 1px solid #cb3837;
      color: #f7e7e6;

      &:hover {
        background-color: #e43837;
      }
    }
  }

  @media (min-width: 580px) {
    .expense-item__description {
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      flex: 1;
      h2 {
        font-size: 1.25rem;
      }
    }

    .expense-item__price {
      font-size: 1.25rem;
      padding: 0.5rem 1.5rem;
    }
  }
`;

const ExpenseItem = (props) => {
  return (
    <ItemSty>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">$ {props.amount}</div>
          <button
            aria-label="delete entry"
            onClick={() => props.onDelete(props.id)}
          >
            <BiTrash />
          </button>
        </div>
      </Card>
    </ItemSty>
  );
};

export default ExpenseItem;
