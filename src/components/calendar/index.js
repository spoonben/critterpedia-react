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

const Month = ({ month, available }) => {
  return <span className={`month ${available && "available"}`}>{month}</span>;
};

const Calendar = ({ availablitly }) => {
  return (
    <div className="calendar">
      {monthNumbers.map((num) => {
        return (
          <Month month={monthMap[num]} available={availablitly.includes(num)} />
        );
      })}
    </div>
  );
};

export default Calendar;
