import * as React from "react";

const monthNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const monthMap = {
  1: "Jan.",
  2: "Feb.",
  3: "Mar.",
  4: "Apr.",
  5: "May.",
  6: "Jun.",
  7: "Jul.",
  8: "Aug.",
  9: "Sep.",
  10: "Oct.",
  11: "Nov.",
  12: "Dec.",
};

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
