import * as React from "react";

import Select from "react-select";

const options = [
  { value: "northern", label: "Northern" },
  { value: "southern", label: "Southern" },
];

const HemisphereSelect = ({ handleChange }) => {
  return (
    <>
      <Select
        options={options}
        onChange={handleChange}
        className="hemisphereSelect"
        defaultValue={{ value: "northern", label: "Northern" }}
        placeholder="Hemisphere"
      />
    </>
  );
};

export default HemisphereSelect;
