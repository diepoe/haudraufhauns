import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';


export default defineConfig({
	plugins: [
		svelte({
			extensions: ['.svelte', '.svx', '.md'],
			preprocess: [
				mdsvex({
					extension: '.svx',
					layout: {
						imprint: "./src/layouts/Imprint.svelte",
						post: "./src/layouts/Post.svelte"
					}
				})
			]
		})
	],
	server: { port: 5000 },
	resolve: {
		alias: {
			'#components': process.cwd() + '/src/components',
			'#layouts': process.cwd() + '/src/layouts'
		}
	}
});
