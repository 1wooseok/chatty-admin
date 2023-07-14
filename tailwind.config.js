/** @type {import("tailwindcss").Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		spacing: {
			xs: '8px',
			s: '12px',
			m: '16px',
			l: '20px',
			xl: '24px',
			'2xl': '32px',
		},
		extend: {
			h5: 'font-bold text-[1.5rem]'
		},
	},
	plugins: [],
}
