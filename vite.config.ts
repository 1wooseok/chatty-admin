import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import path from 'path'

const __dirname = path.resolve()

export default defineConfig({
	plugins: [
		react(),
		// tailwindcss(),
		tsconfigPaths(),
	],
	base: './',
	build: {
		sourcemap: true,
	},
	server: {
		host: true,
	},
	resolve: {
		alias: [
			{
				find: '~',
				replacement: path.resolve(__dirname, 'src')
			},
		],
	},
})
