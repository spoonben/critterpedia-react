import * as React from "react";

import Calendar from "../calendar";

const Results = ({ results, hemisphere }) => (
  <div>
    {results.map((result) => {
      return (
        <div className="critterCard" key={result.name + result.critterNumber}>
          <div className="number">#{result.critterNumber}</div>
          <div className="name">{result.name}</div>
          {result.shadowSize && <div>Shadow Size{result.shadowSize}</div>}
          <div>Value: {result.value}</div>
          <div className="availablitly">
            <div>
              {result.available && (
                <span className="card-title">Seasonability</span>
              )}
              {result.available && (
                <Calendar availablitly={result.available[hemisphere]} />
              )}
            </div>
            <div className="availablitly-spacer" />
            <div>
              <span className="card-title">Current Active Hours:</span>{" "}
              <div>{result.time}</div>
            </div>
          </div>
          <div className="location-wrap">
            <div>
              <span className="card-title">Location:</span> {result.location}
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

export default Results;
