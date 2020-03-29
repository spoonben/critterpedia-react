import React, { useState, useEffect } from "react";

import { bugs, fish } from "./lists.json";

import HemisphereSelect from "./components/hemisphere-select";
import Results from "./components/results";
import Spacer from "./components/spacer";

const allCritters = bugs.concat(fish);

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [resultsList, setResultsList] = useState(allCritters);
  const [hemisphere, setHemisphere] = useState("northern");

  useEffect(() => {
    if (!searchText) {
      setResultsList(allCritters);
      return;
    }
    const newResults = resultsList.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setResultsList(newResults);
  }, [searchText]);

  const handleChange = (event) => setSearchText(event.target.value);

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
        <HemisphereSelect
          selectedOption={hemisphere}
          handleChange={changeHemisphere}
        />
      </div>
      <Results results={resultsList} hemisphere={hemisphere} />
    </div>
  );
};

export default App;
