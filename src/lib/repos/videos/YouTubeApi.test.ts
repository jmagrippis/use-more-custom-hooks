import {videosRepo} from './YouTubeApi'

describe('videos', () => {
	it('returns an array of videos', async () => {
		const videos = await videosRepo.mostPopular()

		expect(videos).toEqual([
			{
				id: 'iA5_LdfypTM',

				title: 'Tailwind with SvelteKit',
				description:
					"How to use everyone's favourite utility-first CSS framework, Tailwind CSS, alongside the emerging new isomorphic web app framework, SvelteKit! At the time of ...",
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/iA5_LdfypTM/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/iA5_LdfypTM/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/iA5_LdfypTM/hqdefault.jpg',
						width: 480,
						height: 360,
					},
				},
			},
			{
				id: 'mdFBhNnwRwU',
				title: 'VS Code setup with Svelte',
				description:
					"Every developer should be working with Syntax Highlighting and automatic formatting: here's how to setup VS Code to work with Svetle, the trending ...",
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/mdFBhNnwRwU/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/mdFBhNnwRwU/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/mdFBhNnwRwU/hqdefault.jpg',
						width: 480,
						height: 360,
					},
				},
			},
			{
				id: '5Omb-P9qsP4',
				title: 'Slow-motion cooking: Scrambled eggs',
				description:
					'Join me in making some delicious scrambled eggs, for a lovely Saturday morning in London! The song is Vamonos by Timothy Infinite, licensed through ...',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/5Omb-P9qsP4/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/5Omb-P9qsP4/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/5Omb-P9qsP4/hqdefault.jpg',
						width: 480,
						height: 360,
					},
				},
			},
		])
	})
})
