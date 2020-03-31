import * as React from "react";

const Spacer = ({ height, width, isInline, hideMobile }) => (
  <div
    className={`spacer ${isInline ? "inline" : ""} ${
      hideMobile ? "hide-mobile" : ""
    }`}
    style={{
      height,
      width,
    }}
  />
);

export default Spacer;
