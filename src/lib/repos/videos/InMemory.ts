import {generateVideo} from './factories/generateVideos'
import type {Video, VideosInterface} from './types'

const hardcodedVideos: Video[] = [
	generateVideo({
		title: 'Tailwind with SvelteKit',
		description: 'I love both of those things',
	}),
	generateVideo({
		title: 'VS Code setup with Svelte',
		description: 'Get the amazing combo working',
	}),
	generateVideo({
		title: 'Slow-motion cooking: Scrambled eggs',
		description: 'Hackers can cook too!',
	}),
]

export class VideosInMemoryRepo implements VideosInterface {
	#videos: Video[]

	constructor(Videos: Video[]) {
		this.#videos = Videos
	}

	mostPopular = async (): Promise<Video[]> => this.#videos
}

export const VideosRepo = new VideosInMemoryRepo(hardcodedVideos)
