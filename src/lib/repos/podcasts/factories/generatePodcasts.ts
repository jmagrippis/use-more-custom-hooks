import faker from 'faker'

import type {Podcast} from '../types'

export const generatePodcast = ({
	id = faker.datatype.uuid(),
	title = faker.commerce.productName(),
	link = `https://example.com/jmagrippis/podcasts/${id}`,
}: Partial<Podcast> = {}): Podcast => ({
	id,
	title,
	link,
})

export const generatePodcasts = (count: number): Podcast[] =>
	[...Array(count).keys()].map(() => generatePodcast())
