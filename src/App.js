import React, { useState, useMemo } from "react";

import search from "./search";

import HemisphereSelect from "./components/hemisphere-select";
import Results from "./components/results";
import Spacer from "./components/spacer";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [hemisphere, setHemisphere] = useState("northern");
  const [leavingNow, setLeavingNow] = useState(false);

  const resultsList = useMemo(
    () => search({ searchText, leavingNow, hemisphere }),
    [searchText, leavingNow]
  );

  const handleChange = (event) => setSearchText(event.target.value);

  const changeHemisphere = ({ value }) => {
    setHemisphere(value);
  };

  const LeavingNow = () => (
    <label>
      Leaving this month
      <input
        type="checkbox"
        onChange={() => {
          setLeavingNow(!leavingNow);
        }}
        checked={leavingNow}
      />
    </label>
  );

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
        <HemisphereSelect handleChange={changeHemisphere} />
      </div>
      <div className="filters">
        <LeavingNow />
      </div>
      <Results results={resultsList} hemisphere={hemisphere} />
    </div>
  );
};

export default App;
