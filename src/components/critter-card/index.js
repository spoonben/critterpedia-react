import * as React from "react";

import Calendar from "../calendar";
import Spacer from "../spacer";

import bellsImage from "../../img/bell-bag.png";
import bgImg from "../../bg.png";

const Name = ({ critterName }) => {
  return (
    <div css="text-align: center">
      <div
        css={`
          margin-top: 10px;
          transform: rotate(-4deg);
          display: inline-block;
          background-color: #fefff5;
          border-radius: 5px;
          padding: 2px;
          box-shadow: 5px 3px 4px 1px;
        `}
      >
        <span
          css={`
            padding: 5px 30px;
            color: #5e584a;
            font-size: 25px;
            line-height: 1.2;
            display: inline-block;
            border: 1px solid #000;
          `}
        >
          {critterName}
        </span>
      </div>
    </div>
  );
};

const CritterCard = ({ critter, hemisphere }) => {
  return (
    <div
      css={`
        background-image: url("${bgImg}");
        border-radius: 3px;
        box-shadow: 1px 1px 5px 2px #5e584a;
        margin: 20px;
        padding: 20px;
        position: relative;
      `}
      key={critter.name + critter.critterNumber}
    >
      <div>
        <Name critterName={critter.name} />
        <Spacer height="20px" />
        <div
          css={`
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <img src={bellsImage} css="width: 35px" /> <Spacer width="5px" />{" "}
          <span css="margin-top: 15px">
            {critter.value ? critter.value.toLocaleString() : "unknown"}
          </span>
        </div>
      </div>
      <Spacer height="10px" />
      {critter.shadowSize && <div>Shadow Size: {critter.shadowSize}</div>}
      <div>
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
      <div
        css={`
          border-top: 1px solid #a59b66;
          padding: 5px 0;
        `}
      >
        <div>
          <span
            css={`
              background: #d3d291;
              color: #3f4b03;
              padding: 0 3px;
              flex: 0;
              margin: 5px 10px 0 0;
            `}
          >
            Location:
          </span>{" "}
          {critter.location}
        </div>
      </div>
    </div>
  );
};

export default CritterCard;
