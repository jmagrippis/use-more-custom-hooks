import {QueryClient} from 'react-query'

const ONE_MINUTE = 60 * 1000

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			suspense: true,
			staleTime: ONE_MINUTE,
		},
	},
})
