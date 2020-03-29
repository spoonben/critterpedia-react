import * as React from "react";

import CritterCard from "../critter-card";

const Results = ({ results, hemisphere }) => (
  <div className="results">
    {results.map((result) => {
      return <CritterCard critter={result} hemisphere={hemisphere} />;
    })}
  </div>
);

export default Results;
