/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Fira Code', 'monospace']
		},
		extend: {
			colors: {
				light: {
					primary: '#118ab2',
					'primary-contrast': '#073b4c',
					accent: '#ef476f',
					'accent-contrast': '#fafafa',
					background: '#ffffff'
				}
			}
		}
	},
	plugins: []
};
