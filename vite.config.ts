import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {VitePWA, VitePWAOptions} from 'vite-plugin-pwa';

const pwaManifest: Partial<VitePWAOptions> = {
	registerType: 'autoUpdate',
	manifest: {
		name: 'Notifications PWA',
		short_name: 'Notifications',
		description: 'A simple PWA to test notifications',
		display: 'standalone',
		scope: '/',
		start_url: '/',
		orientation: 'portrait',
	},
};

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		// eslint-disable-next-line new-cap
		VitePWA(pwaManifest),
	],
});
