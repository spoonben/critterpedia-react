import * as React from "react";
import * as R from "ramda";

import Select from "react-select";
import { monthMap } from "../constants";

const options = R.map(
  (month) => ({ value: month, label: month }),
  R.values(monthMap)
);

const MonthSelect = ({ handleChange }) => {
  return (
    <>
      <Select
        options={options}
        onChange={handleChange}
        className="month-select"
        placeholder="Months"
        isMulti
      />
    </>
  );
};

export default MonthSelect;
