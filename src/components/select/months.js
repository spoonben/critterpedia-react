import * as React from "react";
import * as R from "ramda";

import Select from "react-select";
import { monthMap } from "../constants";

const getValue = (month) =>
  Number(R.head(R.values(R.pick([month], R.invertObj(monthMap)))));

const options = R.map(
  (month) => ({
    value: getValue(month),
    label: month,
  }),
  R.values(monthMap)
);

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
