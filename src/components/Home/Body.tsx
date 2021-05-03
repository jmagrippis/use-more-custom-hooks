import {Episode} from 'lib/repos/episodes/types'
import {EpisodesList} from './EpisodesList/EpisodesList'

export type Props = {
	episodes: Episode[]
}

export const Body = ({episodes}: Props) => (
	<main className="w-full flex-grow flex items-center flex-col container p-4 lg:px-0">
		<EpisodesList initialEpisodes={episodes} />
	</main>
)
