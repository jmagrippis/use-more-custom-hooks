import {useQuery} from 'react-query'
import axios from 'axios'

import type {Episode} from 'lib/repos/episodes/types'

const getEpisodes = () =>
	axios.get<Episode[]>('/api/episodes').then(({data}) => data)

export const useEpisodes = (initialData: Episode[] | undefined) => {
	const {data} = useQuery<Episode[]>('episodes', getEpisodes, {
		initialData,
	})

	return data
}
