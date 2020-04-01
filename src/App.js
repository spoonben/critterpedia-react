import React, { useState, useMemo } from "react";
import * as R from "ramda";

import search from "./search";

import Github from "./components/github";

import Select from "./components/select";
import MonthsSelect from "./components/select/months";
import Results from "./components/results";

import Spacer from "./components/spacer";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [hemisphere, setHemisphere] = useState("northern");
  const [leavingNow, setLeavingNow] = useState(false);
  const [critterType, setCritterType] = useState("both");
  const [monthsToFilter, setMonthToFilter] = useState([]);
  const [sort, setSort] = useState("name");

  const resultsList = useMemo(
    () =>
      search({
        searchText,
        leavingNow,
        hemisphere,
        critterType,
        sort,
        monthsToFilter
      }),
    [searchText, leavingNow, critterType, sort, monthsToFilter]
  );

  const handleChange = event => setSearchText(event.target.value);

  const changeHemisphere = ({ value }) => {
    setHemisphere(value);
  };

  return (
    <div className="main">
      <h1>Animal Crossing Critter Search</h1>
      <div className="search-wrapper">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search By Name"
            value={searchText}
            onChange={handleChange}
          ></input>
        </div>
        <Spacer width="40px" />
        <Select
          handleChange={changeHemisphere}
          type="hemisphere"
          className="hemisphereSelect"
        />
      </div>
      <div className="filters">
        <div className="filter-sort-label">Filter by:</div>
        <Spacer width="10px" hideMobile />
        <Select
          handleChange={({ value }) => setCritterType(value)}
          type="critter"
          className="critter-select"
        />
        <Spacer width="10px" />
        <Select
          handleChange={({ value }) => setLeavingNow(value)}
          type="leaving"
          className="leaving-now"
        />
        <Spacer width="10px" />
        <MonthsSelect
          handleChange={selection => {
            setMonthToFilter(selection ? selection.map(t => t.value) : []);
          }}
          disabled={leavingNow}
        />
      </div>
      <div className="sort-by">
        <div className="filter-sort-label">Sort by:</div>
        <Spacer width="10px" hideMobile />
        <Select
          handleChange={({ value }) => setSort(value)}
          type="filter"
          className="filter-select"
        />
      </div>
      <Results results={resultsList} hemisphere={hemisphere} />
      <Github />
    </div>
  );
};

export default App;
