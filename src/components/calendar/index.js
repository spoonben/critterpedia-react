import * as React from "react";
import { monthMap } from "../constants";

const monthNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Month = ({ month, available, isCurrentMonth }) => {
  return (
    <span
      className={`month ${available && "available"} ${
        isCurrentMonth && "current"
      }`}
    >
      {month}
    </span>
  );
};

const Calendar = ({ availablitly }) => {
  // javascript thinks 0 is jan
  const currentMonth = new Date().getMonth() + 1;
  return (
    <div className="calendar">
      {monthNumbers.map((num) => {
        return (
          <Month
            key={num}
            isCurrentMonth={num === currentMonth}
            month={monthMap[num]}
            available={availablitly.includes(num)}
          />
        );
      })}
    </div>
  );
};

export default Calendar;
