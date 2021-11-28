import React, { useState, useContext } from "react";

export const Colorflip = () => {
	const [color, setColor] = useState("#000");

	const getRgb = () => Math.floor(Math.random() * 256);

	const rgbToHex = (r, g, b) =>
		"#" +
		[r, g, b]
			.map(x => {
				const hex = x.toString(16);

				return hex.length === 1 ? "0" + hex : hex;
			})
			.join("");

	const handleGenerate = () => {
		const color = {
			r: getRgb(),
			g: getRgb(),
			b: getRgb()
		};
		setColor(rgbToHex(color.r, color.g, color.b));
	};

	return (
		<div className="container" style={{ backgroundColor: color }}>
			<h1 onClick={() => navigator.clipboard.writeText(color)}>
				{color}
			</h1>
			<h5>Press the button below to generate new colors</h5>
			<button className="btn1" onClick={handleGenerate}>
				GENERATE NEW COLOR
			</button>
		</div>
	);
};
