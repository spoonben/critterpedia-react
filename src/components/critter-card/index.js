import * as React from "react";

import Calendar from "../calendar";

const CritterCard = ({ critter, hemisphere }) => {
  return (
    <div className="critterCard" key={critter.name + critter.critterNumber}>
      <div className="number">#{critter.critterNumber}</div>
      <div className="name">{critter.name}</div>
      {critter.shadowSize && <div>Shadow Size{critter.shadowSize}</div>}
      <div>Value: {critter.value}</div>
      <div className="availablitly">
        <div>
          {critter.available && (
            <span className="card-title">Seasonability</span>
          )}
          {critter.available && (
            <Calendar availablitly={critter.available[hemisphere]} />
          )}
        </div>
        <div className="availablitly-spacer" />
        <div>
          <span className="card-title">Current Active Hours:</span>{" "}
          <div>{critter.time}</div>
        </div>
      </div>
      <div className="location-wrap">
        <div>
          <span className="card-title">Location:</span> {critter.location}
        </div>
      </div>
    </div>
  );
};

export default CritterCard;
