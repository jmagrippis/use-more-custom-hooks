import type {Episode} from 'lib/repos/episodes/types'
import {EpisodeCard} from './EpisodeCard'
import {useEpisodes} from './useEpisodes'

export type Props = {
	initialEpisodes?: Episode[]
}

export const EpisodesList = ({initialEpisodes}: Props) => {
	const {episodes, refetch} = useEpisodes(initialEpisodes)

	return (
		<>
			<h2 className="text-3xl mb-4">Most popular episodes</h2>
			{episodes ? (
				<ul className="space-y-4">
					{episodes.map(({video, podcast}) => (
						<EpisodeCard
							key={video.id}
							title={video.title}
							description={video.description}
							thumbnails={video.thumbnails}
							videoLink={video.link}
							podcastLink={podcast?.link}
						/>
					))}
				</ul>
			) : (
				<div>
					There was an error fetching the episodes!{' '}
					<button onClick={() => refetch()}>Retry?</button>
				</div>
			)}
		</>
	)
}
