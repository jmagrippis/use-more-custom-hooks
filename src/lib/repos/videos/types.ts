export type Thumbnail = {
	url: string
	width: number
	height: number
}

export type Video = {
	id: string
	title: string
	description: string
	link: string
	thumbnails: {
		default: Thumbnail
		medium: Thumbnail
		high: Thumbnail
	}
}

export interface VideosInterface {
	mostPopular: () => Promise<Video[]>
}
