import { federation } from '@module-federation/vite';
import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import { withZephyr } from 'vite-plugin-zephyr';

// https://vitejs.dev/config/
export default defineConfig(() => ({
	plugins: [
		angular(),
		withZephyr(),
		federation({
			filename: 'remoteEntry.js',
			name: 'remote',
			exposes: {
				'./remote-app': './src/app.component.ts'
			},
			remotes: {},
			shared: ['@angular/core']
		})
	],
	build: { target: 'chrome89' }
}));
