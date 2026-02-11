/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					bg: '#1a162e',
					secondary: '#252036',
					card: '#2d2842',
					accent: '#ff6b6b',
					'accent-secondary': '#ffd93d',
					'accent-tertiary': '#6bcf7f'
				},
				text: {
					primary: '#f8f9fa',
					secondary: '#b4b4c6',
					muted: '#7d7a91'
				}
			},
			fontFamily: {
				crimson: ['Crimson Pro', 'serif'],
				'dm-sans': ['DM Sans', 'sans-serif']
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.6s ease',
				'slide-in': 'slideIn 0.4s ease',
				pulse: 'pulse 2s infinite',
				float: 'float 8s ease-in-out infinite'
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				slideIn: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		function ({ addUtilities }) {
			addUtilities({
				'.scrollbar-hide': {
					'-ms-overflow-style': 'none',
					'scrollbar-width': 'none',
					'&::-webkit-scrollbar': {
						display: 'none'
					}
				}
			});
		}
	]
};
