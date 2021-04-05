module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"dracula-dark": "#282A36",
				"dracula-light": "#3d3f4c",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
