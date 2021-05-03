export type Podcast = {
	id: string
	title: string
	link: string
}

export interface PodcastsInterface {
	latest: () => Promise<Podcast[]>
}
