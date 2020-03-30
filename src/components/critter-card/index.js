import * as React from "react";

import Calendar from "../calendar";
import Spacer from "../spacer";

import bellsImage from "../../img/bell-bag.png";

const Name = ({ critterName }) => {
  return (
    <div className="name-block">
      <div className="name-content">
        <span className="name">{critterName}</span>
      </div>
    </div>
  );
};

const CritterCard = ({ critter, hemisphere }) => {
  return (
    <div className="critterCard" key={critter.name + critter.critterNumber}>
      <div>
        <Name critterName={critter.name} />
        <Spacer height="20px" />
        <div className="value">
          <img src={bellsImage} className="bells" /> <Spacer width="5px" />{" "}
          <span className="amount">{critter.value || "unknown"}</span>
        </div>
      </div>
      <Spacer height="10px" />
      {critter.shadowSize && <div>Shadow Size{critter.shadowSize}</div>}
      <div className="availablitly">
        <div>
          {critter.available && (
            <Calendar availablitly={critter.available[hemisphere]} />
          )}
        </div>
        <Spacer height="10px" />
        <div>
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
