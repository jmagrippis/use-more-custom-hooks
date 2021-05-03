import {
	generatePodcast,
	generatePodcasts,
} from '../podcasts/factories/generatePodcasts'
import {PodcastsInMemoryRepo} from '../podcasts/InMemory'
import {generateVideo, generateVideos} from '../videos/factories/generateVideos'
import {VideosInMemoryRepo} from '../videos/InMemory'
import {EpisodesApiRepo} from './Api'

describe('mostPopular', () => {
	it('only returns episodes with Videos', async () => {
		const videosRepo = new VideosInMemoryRepo([])
		const podcastsRepo = new PodcastsInMemoryRepo(generatePodcasts(5))
		const episodesRepo = new EpisodesApiRepo({videosRepo, podcastsRepo})

		const episodes = await episodesRepo.mostPopular()

		expect(episodes).toHaveLength(0)
	})

	it('returns an episode for every Video, even if they do not have a Podcast', async () => {
		const videos = generateVideos(3)
		const videosRepo = new VideosInMemoryRepo(videos)
		const podcastsRepo = new PodcastsInMemoryRepo([])
		const episodesRepo = new EpisodesApiRepo({videosRepo, podcastsRepo})

		const episodes = await episodesRepo.mostPopular()

		expect(episodes).toHaveLength(3)

		expect(episodes).toEqual(
			expect.arrayContaining(
				videos.map((video) => ({
					video: expect.objectContaining({title: video.title}),
					podcast: null,
				}))
			)
		)
	})

	it('returns a Podcast for every Video with a title matching a Podcast title', async () => {
		const videoAndPodcastTitle =
			'How to use Typescript & InMemory Interfaces for testing'
		const videos = [
			generateVideo({
				title: videoAndPodcastTitle,
			}),
			generateVideo({title: 'How to use jest mocks for testing'}),
		]
		const videosRepo = new VideosInMemoryRepo(videos)
		const podcasts = [
			generatePodcast({
				title: videoAndPodcastTitle,
			}),
		]
		const podcastsRepo = new PodcastsInMemoryRepo(podcasts)
		const episodesRepo = new EpisodesApiRepo({videosRepo, podcastsRepo})

		const episodes = await episodesRepo.mostPopular()

		expect(episodes).toEqual(
			expect.arrayContaining([
				{
					video: expect.objectContaining({title: videoAndPodcastTitle}),
					podcast: expect.objectContaining({title: videoAndPodcastTitle}),
				},
			])
		)
	})
})
