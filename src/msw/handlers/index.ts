import {episodesHandlers} from './internal/episodes'
import {youtubeHandlers} from './external/youtube'

export const handlers = [...episodesHandlers, ...youtubeHandlers]
