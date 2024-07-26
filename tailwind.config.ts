import flowbitePlugin from 'flowbite/plugin'

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
						'50': '#f2f2f5',  // lightest
						'100': '#e6e6eb',
						'200': '#c0c0c8',
						'300': '#9999a6',
						'400': '#4d4d61',
						'500': '#2d3142',  // base
						'600': '#1e1e2d',
						'700': '#191926',
						'800': '#14141f',
						'900': '#212431'   // darkest
				},
				secondary: {
					'50': '#ffeddb',  // lightest
					'100': '#ffdbb7',
					'200': '#ffb78e',
					'300': '#ff9266',
					'400': '#ff6e3d',
					'500': '#ff8400',  // base
					'600': '#e47600',
					'700': '#c96800',
					'800': '#ad5a00',
					'900': '#924c00'   // darkest
				},
				'active-red': '#f95258',
				'active-red-dark': '#d9080f',
				'cool-grey': '#bfc0c0',
			}
		}
	},
	plugins: [flowbitePlugin]
} as Config;