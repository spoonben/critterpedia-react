import * as React from "react";

import Select from "react-select";

const options = [
  { value: "northern", label: "Northern" },
  { value: "southern", label: "Southern" },
];

const HemisphereSelect = ({ selectedOption, handleChange }) => {
  return (
    <>
      <Select
        options={options}
        onChange={handleChange}
        className="hemisphereSelect"
        defaultValue={selectedOption}
        placeholder="Hemisphere"
      />
    </>
  );
};

export default HemisphereSelect;
