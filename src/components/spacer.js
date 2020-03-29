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

const styles = {
	spacer: {
		flex: "0 0 auto",
	},
	inline: {
		display: "inline-flex",
	},
};

export default Spacer;
