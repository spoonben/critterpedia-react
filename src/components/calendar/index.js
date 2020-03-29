import * as React from "react";

import { monthMap } from "../../lists";

const getCalendarMonths = (availablitly, hemisphere) =>
  availablitly[hemisphere].map((month) => monthMap[month]);

const Month = ({ month }) => {
  return <span className="month">{month}</span>;
};

const Calendar = ({ availablitly, hemisphere }) => {
  return (
    <div className="calendar">
      {getCalendarMonths(availablitly, hemisphere).map((month, index) => (
        <Month month={month} />
      ))}
    </div>
  );
};

export default Calendar;
