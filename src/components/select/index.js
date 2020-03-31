import * as React from "react";

import Select from "react-select";

const options = {
  hemisphere: [
    { value: "northern", label: "Northern" },
    { value: "southern", label: "Southern" },
  ],
  critter: [
    { value: "both", label: "Both fish and bugs" },
    { value: "bugs", label: "Just bugs" },
    { value: "fish", label: "Just fish" },
  ],
  filter: [
    { value: "name", label: "Name" },
    { value: "value", label: "Value" },
    { value: "location", label: "Location" },
  ],
};

const HemisphereSelect = ({ handleChange, type, className }) => {
  return (
    <>
      <Select
        options={options[type]}
        onChange={handleChange}
        className={`${className} select`}
        defaultValue={options[type][0]}
      />
    </>
  );
};

export default HemisphereSelect;
