import faker from 'faker'

import {Video} from '../types'

export const generateThumbnails = (id: string) => ({
	default: {
		url: `https://i.ytimg.com/vi/${id}/default.jpg`,
		width: 120,
		height: 90,
	},
	medium: {
		url: `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
		width: 320,
		height: 180,
	},
	high: {
		url: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
		width: 480,
		height: 360,
	},
})

export const generateVideo = ({
	id = faker.datatype.uuid(),
	title = faker.commerce.productName(),
	description = faker.commerce.productDescription(),
	thumbnails = generateThumbnails(id),
}: Partial<Video> = {}): Video => ({
	id,
	title,
	description,
	thumbnails,
})

export const generateVideos = (count: number): Video[] =>
	[...Array(count).keys()].map(() => generateVideo())
