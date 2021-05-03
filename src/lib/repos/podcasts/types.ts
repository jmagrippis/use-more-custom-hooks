export type Podcast = {
	id: string
	title: string
}

export interface PodcastsInterface {
	latest: () => Promise<Podcast[]>
}
