import {rest} from 'msw'

import {generateVideo} from 'lib/repos/videos/factories/generateVideos'
import {generatePodcast} from 'lib/repos/podcasts/factories/generatePodcasts'
import {Episode} from 'lib/repos/episodes/types'

export const hardcodedEpisodes: Episode[] = [
	{
		video: generateVideo({
			id: 'iA5_LdfypTM',
			title: 'Tailwind with SvelteKit',
			description:
				"How to use everyone's favourite utility-first CSS framework, Tailwind CSS, alongside the emerging new isomorphic web app framework, SvelteKit! At the time of ...",
		}),
		podcast: generatePodcast({title: 'Tailwind with SvelteKit'}),
	},
	{
		video: generateVideo({
			id: 'mdFBhNnwRwU',
			title: 'VS Code setup with Svelte',
			description:
				"Every developer should be working with Syntax Highlighting and automatic formatting: here's how to setup VS Code to work with Svetle, the trending ...",
		}),
		podcast: generatePodcast({title: 'VS Code setup with Svelte'}),
	},
	{
		video: generateVideo({
			id: '5Omb-P9qsP4',
			title: 'Slow-motion cooking: Scrambled eggs',
			description:
				'Join me in making some delicious scrambled eggs, for a lovely Saturday morning in London! The song is Vamonos by Timothy Infinite, licensed through ...',
		}),
		podcast: generatePodcast({title: 'Slow-motion cooking: Scrambled eggs'}),
	},
]

export const generateMostPopularEpisodesHandler = (episodes: Episode[]) =>
	rest.get('/api/episodes', (req, res, ctx) =>
		res(ctx.status(200), ctx.json(episodes))
	)
const mostPopularEpisodesHandler = generateMostPopularEpisodesHandler(
	hardcodedEpisodes
)

export const episodesHandlers = [mostPopularEpisodesHandler]
