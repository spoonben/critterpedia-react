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
        value={selectedOption}
        onChange={handleChange}
        placeHolder={selectedOption}
        className="hemisphereSelect"
      />
    </>
  );
};

export default HemisphereSelect;
