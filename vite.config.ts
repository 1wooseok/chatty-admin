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
				find: '~/components',
				replacement: path.resolve(__dirname, 'src/components'),
			},
			{
				find: '~/utils',
				replacement: path.resolve(__dirname, 'src/utils'),
			},
			{
				find: '~/styles',
				replacement: path.resolve(__dirname, 'src/styles'),
			},
			{
				find: '~/services',
				replacement: path.resolve(__dirname, 'src/services'),
			},
			{
				find: '~/hooks',
				replacement: path.resolve(__dirname, 'src/hooks'),
			},
			{
				find: '~/types',
				replacement: path.resolve(__dirname, 'src/types'),
			},
			{
				find: '~/constants',
				replacement: path.resolve(__dirname, 'src/constants'),
			},
			{
				find: '~/pages',
				replacement: path.resolve(__dirname, 'src/pages'),
			},
			{
				find: '~/api',
				replacement: path.resolve(__dirname, 'src/api'),
			},
			{
				find: '~/shared',
				replacement: path.resolve(__dirname, 'src/shared'),
			},
			{
				find: '~',
				replacement: path.resolve(__dirname, 'src')
			},
		],
	},
})
