import * as React from "react";

import Select from "react-select";
import { monthMap } from "../constants";

const options = Object.entries(monthMap).map(([value, label]) => ({
  value: Number(value),
  label,
}));

const MonthSelect = ({ handleChange, disabled }) => {
  return (
    <>
      <Select
        options={options}
        onChange={handleChange}
        className="month-select"
        placeholder="Months"
        isMulti
        isDisabled={disabled}
      />
    </>
  );
};

export default MonthSelect;
