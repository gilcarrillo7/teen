/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
			},
		},
		fontFamily: {
			sans: ["Walsheim", "sans-serif"],
			walsheimpro: ["WalsheimBold", "sans-serif"],
		},
		extend: {
			colors: {
				yellow: "#FFDA55",
				blue1: "#0097FE",
				blue2: "#191565",
				gray1: "#636C85",
				gray2: "#FBFBFB",
				gray3: "#EFF2F1",
				gray4: "#1D2434",
			},
		},
	},
	plugins: [],
};
