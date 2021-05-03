import type {Podcast} from '../podcasts/types'
import type {Video} from '../videos/types'

export type Episode = {
	video: Video
	podcast: Podcast
}

export interface EpisodesInterface {
	latest: () => Promise<Episode[]>
}
