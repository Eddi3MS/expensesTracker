import React from "react";

import styled from "styled-components";

const FilterSty = styled.div`
  color: var(--neutrals-200);

  .expenses-filter__control {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    margin: 1rem 0;

    label {
      font-weight: 900;
      letter-spacing: 0.02rem;
    }

    select {
      font: inherit;
      padding: 0.5rem 2rem;
      font-weight: bold;
      border-radius: 6px;
      border: 1px solid var(--neutrals-300);
    }
  }
`;

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <FilterSty>
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </FilterSty>
  );
};

export default ExpensesFilter;
