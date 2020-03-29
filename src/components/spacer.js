import * as React from "react";

const Spacer = ({ height, width, isInline }) => (
	<div
		className={`spacer ${isInline ? "inline" : ""}`}
		style={{
			height,
			width,
		}}
	/>
);

export default Spacer;
