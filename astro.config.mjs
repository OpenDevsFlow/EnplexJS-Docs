// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'EnplexJS',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'NextChat', slug: 'guides/nextchat' },
						{ label: 'Discord Webhook', slug: 'guides/discord-webhook' },
						{ label: 'Search', slug: 'guides/search' },
						{ label: 'Random', slug: 'guides/random' },
						{ label: 'Rectify', slug: 'guides/rectify' },
						{ label: 'Executor', slug: 'guides/executor' },
						{ label: 'Import', slug: 'guides/import' },
						{ label: 'Xio', slug: 'guides/xio' },
					],
				},
				{
					label: 'API Reference',
					autogenerate: { directory: 'api' },
				},
			],
		}),
	],
});
