import React, { useState, useMemo } from "react";
import styled from "styled-components";

import search from "./search";

import Github from "./components/github";

import Select from "./components/select";
import MonthsSelect from "./components/select/months";
import Results from "./components/results";

import Spacer from "./components/spacer";
const mqSmall = "max-width: 600px";

const Main = styled.main`
  padding: 20px;
  @media (${mqSmall}) {
    padding: 0;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  @media (${mqSmall}) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const SearchBar = styled.div`
  flex-grow: 1;

  input[type="text"] {
    padding: 4px 5px;
    font-size: 24px;
    border: 2px solid #4b4c4e;
    width: 100%;
    background: #ebe2c7;
    border-radius: 4px;
    outline: none;
  }

  @media (${mqSmall}) {
    min-width: 100%;
  }
`;

const HemisphereSelect = styled(Select)`
  font-size: 18px;
  min-width: 150px;

  @media (${mqSmall}) {
    font-size: 18px;
    min-width: 104%;
    margin-top: 10px;
  }
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px;
`;

const SortBy = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  flex-wrap: wrap;
`;

const LabelText = styled.label`
  font-weight: 700;
  width: 100px;
  @media (${mqSmall}) {
    width: 100%;
  }
`;

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
        monthsToFilter,
      }),
    [searchText, leavingNow, hemisphere, critterType, sort, monthsToFilter]
  );

  const handleChange = (event) => setSearchText(event.target.value);

  const changeHemisphere = ({ value }) => {
    setHemisphere(value);
  };

  return (
    <Main>
      <h1>Animal Crossing Critter Search</h1>
      <SearchWrapper>
        <SearchBar>
          <input
            type="text"
            placeholder="Search By Name"
            value={searchText}
            onChange={handleChange}
          />
        </SearchBar>
        <Spacer width="40px" />
        <HemisphereSelect handleChange={changeHemisphere} type="hemisphere" />
      </SearchWrapper>
      <Filters>
        <LabelText for="critterType">Filter by:</LabelText>
        <Spacer width="10px" hideMobile />
        <Select
          id="critterType"
          handleChange={({ value }) => setCritterType(value)}
          type="critter"
          css="width: 230px"
        />
        <Spacer width="10px" />
        <Select
          handleChange={({ value }) => setLeavingNow(value)}
          type="leaving"
          css="width: 220px"
        />
        <Spacer width="10px" />
        <MonthsSelect
          handleChange={(selection) => {
            setMonthToFilter(selection ? selection.map((t) => t.value) : []);
          }}
          disabled={leavingNow}
        />
      </Filters>
      <SortBy>
        <LabelText>Sort by:</LabelText>
        <Spacer width="10px" hideMobile />
        <Select
          id="sortBy"
          handleChange={({ value }) => setSort(value)}
          type="filter"
        />
      </SortBy>
      <Results results={resultsList} hemisphere={hemisphere} />
      <Github />
    </Main>
  );
};

export default App;
