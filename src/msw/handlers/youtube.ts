import {rest} from 'msw'

import {generateThumbnails} from 'lib/repos/videos/factories/generateVideos'

const searchResultsResponse = {
	kind: 'youtube#searchListResponse',
	etag: 'IEVx_BY1R5eQT5oVv5fKHsaWy8M',
	nextPageToken: null,
	regionCode: 'GB',
	pageInfo: {
		totalResults: 3,
		resultsPerPage: 3,
	},
	items: [
		{
			kind: 'youtube#searchResult',
			etag: 'SaP1lknP4wj1K_bbqr8zJCY0C-A',
			id: {
				kind: 'youtube#video',
				videoId: 'iA5_LdfypTM',
			},
			snippet: {
				title: 'Tailwind with SvelteKit',
				description:
					"How to use everyone's favourite utility-first CSS framework, Tailwind CSS, alongside the emerging new isomorphic web app framework, SvelteKit! At the time of ...",
				thumbnails: generateThumbnails('iA5_LdfypTM'),
				publishedAt: '2020-12-22T19:06:12Z',
				channelId: 'UCm1ALyg61uhPoTnZBm7mY2g',
				channelTitle: 'Johnny Magrippis',
				liveBroadcastContent: 'none',
				publishTime: '2020-12-22T19:06:12Z',
			},
		},
		{
			kind: 'youtube#searchResult',
			etag: 'EGrn_Kc8k-wuhBtCB-fn3krQ4z4',
			id: {
				kind: 'youtube#video',
				videoId: 'mdFBhNnwRwU',
			},
			snippet: {
				title: 'VS Code setup with Svelte',
				description:
					"Every developer should be working with Syntax Highlighting and automatic formatting: here's how to setup VS Code to work with Svetle, the trending ...",
				thumbnails: generateThumbnails('mdFBhNnwRwU'),
				publishedAt: '2020-12-14T18:17:49Z',
				channelId: 'UCm1ALyg61uhPoTnZBm7mY2g',
				channelTitle: 'Johnny Magrippis',
				liveBroadcastContent: 'none',
				publishTime: '2020-12-14T18:17:49Z',
			},
		},
		{
			kind: 'youtube#searchResult',
			etag: 'J-flOd-_YK9XwnoJ6PkIUXVwM4s',
			id: {
				kind: 'youtube#video',
				videoId: '5Omb-P9qsP4',
			},
			snippet: {
				title: 'Slow-motion cooking: Scrambled eggs',
				description:
					'Join me in making some delicious scrambled eggs, for a lovely Saturday morning in London! The song is Vamonos by Timothy Infinite, licensed through ...',
				thumbnails: generateThumbnails('5Omb-P9qsP4'),
				publishedAt: '2019-01-19T11:34:22Z',
				channelId: 'UCm1ALyg61uhPoTnZBm7mY2g',
				channelTitle: 'Johnny Magrippis',
				liveBroadcastContent: 'none',
				publishTime: '2019-01-19T11:34:22Z',
			},
		},
	],
}

const searchHandler = rest.get(
	'https://youtube.googleapis.com/youtube/v3/search',
	(req, res, ctx) => {
		const apiKey = req.url.searchParams.get('key')

		if (!apiKey) {
			return res(ctx.status(500, 'msw: no api key received'))
		}

		if (apiKey !== process.env.YOU_TUBE_API_KEY) {
			return res(ctx.status(403, 'msw: api key does not match'))
		}

		return res(ctx.status(200), ctx.json(searchResultsResponse))
	}
)

export const youtubeHandlers = [searchHandler]
