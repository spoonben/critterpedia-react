import React, { useState, useMemo } from "react";
import styled from "styled-components";
import ReactSelect from "react-select";

import search from "./search";
import Github from "./components/github";
import Results from "./components/results";
import Spacer from "./components/spacer";
import { monthMap, mq } from "./components/constants";

const Main = styled.main`
  padding: 20px;
  @media (${mq.small}) {
    padding: 0;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  @media (${mq.small}) {
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

  @media (${mq.small}) {
    min-width: 100%;
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
  @media (${mq.small}) {
    width: 100%;
  }
`;

const Select = styled(ReactSelect)`
  font-size: 18px;
  min-width: 150px;

  @media (${mq.small}) {
    font-size: 18px;
    min-width: 104%;
    margin-top: 10px;
  }
`;
const SingleSelect = (props) => (
  <Select {...props} defaultValue={props.options[0]} isSearchable={false} />
);

const monthOptions = [
  { value: "", label: "Any month" },
  ...Object.entries(monthMap).map(([value, label]) => ({
    value: Number(value),
    label,
  })),
];

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [hemisphere, setHemisphere] = useState("northern");
  const [leavingNow, setLeavingNow] = useState(false);
  const [critterType, setCritterType] = useState("both");
  const [monthToFilter, setMonthToFilter] = useState(undefined);
  const [sort, setSort] = useState("name");

  const resultsList = useMemo(
    () =>
      search({
        searchText,
        leavingNow,
        hemisphere,
        critterType,
        sort,
        monthToFilter,
      }),
    [searchText, leavingNow, hemisphere, critterType, sort, monthToFilter]
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
        <SingleSelect
          options={[
            { value: "northern", label: "Northern" },
            { value: "southern", label: "Southern" },
          ]}
          handleChange={changeHemisphere}
          type="hemisphere"
        />
      </SearchWrapper>
      <Filters>
        <LabelText htmlFor="critterType">Filter by:</LabelText>
        <Spacer width="10px" hideMobile />
        <SingleSelect
          inputId="critterType"
          css="width: 230px"
          options={[
            { value: "both", label: "Both fish and bugs" },
            { value: "bugs", label: "Just bugs" },
            { value: "fish", label: "Just fish" },
          ]}
          onChange={({ value }) => setCritterType(value)}
        />
        <Spacer width="10px" />
        <SingleSelect
          css="width: 220px"
          options={[
            { value: false, label: "Leaving whenever" },
            { value: true, label: "Leaving this month" },
          ]}
          onChange={({ value }) => setLeavingNow(value)}
        />
        <Spacer width="10px" />
        <SingleSelect
          css="width: 160px"
          options={monthOptions}
          onChange={({ value }) => {
            setMonthToFilter(value);
          }}
          isDisabled={leavingNow}
        />
      </Filters>
      <SortBy>
        <LabelText htmlFor="sortBy">Sort by:</LabelText>
        <Spacer width="10px" hideMobile />
        <SingleSelect
          inputId="sortBy"
          options={[
            { value: "name", label: "Name" },
            { value: "value", label: "Value" },
            { value: "location", label: "Location" },
          ]}
          onChange={({ value }) => setSort(value)}
        />
      </SortBy>
      <Results results={resultsList} hemisphere={hemisphere} />
      <Github />
    </Main>
  );
};

export default App;
