import React from "react";

import ChartBar from "./ChartBar";
import styled from "styled-components";

const ChartSty = styled.div`
  padding: 1rem;
  border-radius: 6px;
  background-color: var(--primary-050);
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  const totalMaximum = dataPointValues.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );

  return (
    <ChartSty>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </ChartSty>
  );
};

export default Chart;
