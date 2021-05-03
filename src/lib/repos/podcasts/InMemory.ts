import {generatePodcast} from './factories/generatePodcasts'
import type {Podcast, PodcastsInterface} from './types'

const hardcodedPodcasts: Podcast[] = [
	generatePodcast({title: 'Tailwind with SvelteKit'}),
	generatePodcast({title: 'VS Code setup with Svelte'}),
	generatePodcast({title: 'Slow-motion cooking: Scrambled eggs'}),
]

export class PodcastsInMemoryRepo implements PodcastsInterface {
	#podcasts: Podcast[]

	constructor(podcasts: Podcast[]) {
		this.#podcasts = podcasts
	}

	latest = async (): Promise<Podcast[]> => this.#podcasts
}

export const podcastsRepo = new PodcastsInMemoryRepo(hardcodedPodcasts)
