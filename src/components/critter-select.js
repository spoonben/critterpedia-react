import * as React from "react";

import Select from "react-select";

const options = [
  { value: "bugs", label: "Just bugs" },
  { value: "fish", label: "Just fish" },
  { value: "both", label: "Both fish and bugs" },
];

const CritterSelect = ({ handleChange }) => {
  return (
    <>
      <Select
        options={options}
        onChange={handleChange}
        className="critter-select"
        defaultValue={{ value: "both", label: "Both fish and bugs" }}
      />
    </>
  );
};

export default CritterSelect;
