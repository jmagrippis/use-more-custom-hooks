const colors = require('tailwindcss/colors')

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.tsx', './src/**/*.css'],
	theme: {
		container: {
			center: true,
		},
		colors: {
			white: colors.white,
			gray: colors.blueGray,
			emerald: colors.emerald,
		},
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
		},
		fontWeight: {
			thin: 200,
			light: 300,
			normal: 400,
		},
	},
	plugins: [],
}
