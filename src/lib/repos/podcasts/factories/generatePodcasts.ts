import faker from 'faker'

import type {Podcast} from '../types'

export const generatePodcast = ({
	id = faker.datatype.uuid(),
	title = faker.commerce.productName(),
}: Partial<Podcast> = {}): Podcast => ({
	id,
	title,
})

export const generatePodcasts = (count: number): Podcast[] =>
	[...Array(count).keys()].map(() => generatePodcast())
