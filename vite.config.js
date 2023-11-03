import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), glsl()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
