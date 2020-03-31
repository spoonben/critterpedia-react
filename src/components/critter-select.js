import * as React from "react";

import Select from "react-select";

const options = [
  { value: "bugs", label: "Bugs" },
  { value: "fish", label: "Fish" },
  { value: "both", label: "Both" },
];

const CritterSelect = ({ handleChange }) => {
  return (
    <>
      <Select
        options={options}
        onChange={handleChange}
        className="critter-select"
        defaultValue={{ value: "both", label: "Both" }}
        placeholder="Hemisphere"
      />
    </>
  );
};

export default CritterSelect;
