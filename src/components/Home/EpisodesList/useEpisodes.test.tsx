import {renderHook} from '@testing-library/react-hooks'
import {generateEpisode} from 'lib/repos/episodes/factories/generateEpisodes'
import {Episode} from 'lib/repos/episodes/types'
import {rest} from 'msw'
import {generateMostPopularEpisodesHandler} from 'msw/handlers/internal/episodes'
import {mswServer} from 'msw/server'
import {AllTheProviders, act} from 'test-utils'

import {useEpisodes} from './useEpisodes'

it('returns all available episodes', async () => {
	const episode = generateEpisode()
	const episodes: Episode[] = [episode]
	mswServer.use(generateMostPopularEpisodesHandler(episodes))

	const {result, waitForNextUpdate} = renderHook(() => useEpisodes([]), {
		wrapper: AllTheProviders,
	})

	act(() => {
		result.current.refetch()
	})

	await waitForNextUpdate()
	await waitForNextUpdate()

	expect(result.current.episodes).toEqual(episodes)
})

it('returns null on a bad response', async () => {
	mswServer.use(
		rest.get('/api/episodes', (req, res, ctx) =>
			res(ctx.status(500), ctx.body('the server is on fire'))
		)
	)

	const {result, waitForNextUpdate} = renderHook(() => useEpisodes([]), {
		wrapper: AllTheProviders,
	})

	act(() => {
		result.current.refetch()
	})

	await waitForNextUpdate()
	await waitForNextUpdate()

	expect(result.current.episodes).toBe(null)
})

it('starts with the given episodes', () => {
	const episode = generateEpisode()
	const episodes: Episode[] = [episode]

	const {result} = renderHook(() => useEpisodes(episodes), {
		wrapper: AllTheProviders,
	})

	expect(result.current.episodes).toEqual(episodes)
})
