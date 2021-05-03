import faker from 'faker'

import {generatePodcast} from 'lib/repos/podcasts/factories/generatePodcasts'
import {generateVideo} from 'lib/repos/videos/factories/generateVideos'

import type {Episode} from '../types'

export const generateEpisode = (
	title = faker.commerce.productName()
): Episode => ({
	video: generateVideo({title}),
	podcast: generatePodcast({title}),
})

export const generateEpisodes = (count: number): Episode[] =>
	[...Array(count).keys()].map(() => generateEpisode())
