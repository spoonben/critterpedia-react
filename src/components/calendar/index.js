import * as React from "react";
import styled, { css } from "styled-components";
import { monthMap } from "../constants";
import monthBgImg from "../../month-bg.png";

const monthNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Month = styled.span`
  background: none;
  border-radius: 3px;
  color: #d2cb97;
  padding: 2px 10px;
  margin: 5px 5px;
  ${(p) =>
    p.available &&
    css`
      background: url(${monthBgImg});
      color: #4b4c4e;
    `}
  border: ${(p) => p.isCurrentMonth && "2px solid rgba(233, 85, 47, 0.8)"}
`;

const Calendar = ({ availablitly }) => {
  // javascript thinks 0 is jan
  const currentMonth = new Date().getMonth() + 1;
  return (
    <div
      css={`
        display: flex;
        flex-wrap: wrap;
      `}
    >
      {monthNumbers.map((num) => (
        <Month
          key={num}
          isCurrentMonth={num === currentMonth}
          available={availablitly.includes(num)}
        >
          {monthMap[num]}
        </Month>
      ))}
    </div>
  );
};

export default Calendar;
