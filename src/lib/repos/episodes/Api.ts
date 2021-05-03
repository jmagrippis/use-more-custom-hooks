import {podcastsRepo} from '../podcasts/InMemory'
import {videosRepo} from '../videos/YouTubeApi'
import type {Podcast, PodcastsInterface} from '../podcasts/types'
import type {Video, VideosInterface} from '../videos/types'
import type {Episode, EpisodesInterface} from './types'

const combineToEpisodes = ({
	videos,
	podcasts,
}: {
	videos: Video[]
	podcasts: Podcast[]
}): Episode[] => {
	const titlesToPodcasts = podcasts.reduce<Record<string, Podcast>>(
		(acc, podcast) => {
			acc[podcast.title] = podcast
			return acc
		},
		{}
	)

	return videos.map((video) => ({
		video,
		podcast: titlesToPodcasts[video.title] ?? null,
	}))
}

export class EpisodesApiRepo implements EpisodesInterface {
	#videosRepo: VideosInterface
	#podcastsRepo: PodcastsInterface

	constructor({
		videosRepo,
		podcastsRepo,
	}: {
		videosRepo: VideosInterface
		podcastsRepo: PodcastsInterface
	}) {
		this.#videosRepo = videosRepo
		this.#podcastsRepo = podcastsRepo
	}

	mostPopular = async () => {
		const [videos, podcasts] = await Promise.all([
			this.#videosRepo.mostPopular(),
			this.#podcastsRepo.latest(),
		])

		return combineToEpisodes({videos, podcasts})
	}
}

export const episodesRepo = new EpisodesApiRepo({
	videosRepo,
	podcastsRepo,
})
