import {useQuery} from 'react-query'
import axios from 'axios'

import type {Episode} from 'lib/repos/episodes/types'

const getEpisodes = () =>
	axios
		.get<Episode[]>('/api/episodes')
		.then(({data}) => data)
		.catch(() => null)

export const useEpisodes = (initialData: Episode[]) => {
	const {data: episodes, refetch, isLoading} = useQuery<Episode[] | null>(
		'episodes',
		getEpisodes,
		{initialData}
	)

	return {episodes, isLoading, refetch}
}
