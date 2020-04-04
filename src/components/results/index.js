import * as React from "react";

import CritterCard from "../critter-card";

const Results = ({ results, hemisphere }) => (
  <div>
    {results.map((result) => (
      <CritterCard critter={result} hemisphere={hemisphere} />
    ))}
  </div>
);

export default Results;
