/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'bg-porfolio': '#090E16',
				'bg-content': 'rgba(123, 74, 226, 0.1)',
				'color-text': 'rgba(255, 255, 255, 0.70)',
				'color-text-relevant':'rgba(123, 74, 226, 0.70)',
				'bg-svg': 'rgba(123, 74, 226, 0.20)',
				'text-color-Download': 'rgba(123, 74, 226, 0.50)',
			},
			fontFamily: {
				sans: ['Inter', 'Roboto', 'sans-serif'], // Añade tus fuentes aquí
			},
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
}
