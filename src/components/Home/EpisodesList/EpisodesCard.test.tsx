import {generateEpisode} from 'lib/repos/episodes/factories/generateEpisodes'
import {render, screen} from 'test-utils'

import {EpisodeCard} from './EpisodeCard'

it('has a semantic header', async () => {
	const episode = generateEpisode()
	const props = {
		title: episode.video.title,
		description: episode.video.description,
		thumbnails: episode.video.thumbnails,
		videoLink: episode.video.link,
		podcastLink: episode.podcast.link,
	}

	render(<EpisodeCard {...props} />)

	expect(screen.getByRole('heading', {name: props.title})).toBeInTheDocument()
})

it('links to the video', async () => {
	const episode = generateEpisode()
	const props = {
		title: episode.video.title,
		description: episode.video.description,
		thumbnails: episode.video.thumbnails,
		videoLink: episode.video.link,
		podcastLink: episode.podcast.link,
	}

	render(<EpisodeCard {...props} />)

	expect(
		screen.getByRole('link', {name: 'go to the video episode'})
	).toBeInTheDocument()
})

it('links to the podcast', async () => {
	const episode = generateEpisode()
	const props = {
		title: episode.video.title,
		description: episode.video.description,
		thumbnails: episode.video.thumbnails,
		videoLink: episode.video.link,
		podcastLink: episode.podcast.link,
	}

	render(<EpisodeCard {...props} />)

	expect(
		screen.getByRole('link', {name: 'go to the podcast episode'})
	).toBeInTheDocument()
})
