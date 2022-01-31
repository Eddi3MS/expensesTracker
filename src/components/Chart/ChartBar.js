import React from "react";

import styled from "styled-components";

const BarSty = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .chart-bar__inner {
    height: 100%;
    width: 100%;
    min-width: 1.2rem;
    border: 1px solid var(--primary-600);
    border-radius: 6px;
    background-color: var(--primary-100);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .chart-bar__fill {
    background-color: var(--primary-600);
    width: 100%;
    transition: all 0.3s ease-out;
  }

  .chart-bar__label {
    font-weight: bold;
    font-size: 0.55rem;
    margin-top: 0.3rem;
    text-align: center;
  }
`;

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <BarSty>
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </BarSty>
  );
};

export default ChartBar;
