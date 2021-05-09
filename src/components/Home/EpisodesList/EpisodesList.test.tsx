import {rest} from 'msw'
import userEvent from '@testing-library/user-event'
import {render, screen} from 'test-utils'
import {mswServer} from 'msw/server'
import {episodesHandlers} from 'msw/handlers/internal/episodes'

import {EpisodesList} from './EpisodesList'

it('renders articles for the latest episodes', async () => {
	render(<EpisodesList />)

	const articleElements = await screen.findAllByRole('article')

	expect(articleElements).toHaveLength(3)
})

it('shows a button to retry fetching the episodes', async () => {
	mswServer.use(
		rest.get('/api/episodes', (req, res, ctx) =>
			res(ctx.status(500), ctx.body('the server is on fire'))
		)
	)

	render(<EpisodesList />)

	const retryButton = await screen.findByRole('button', {name: /retry/gi})

	mswServer.use(...episodesHandlers)

	userEvent.click(retryButton)

	expect(await screen.findAllByRole('article')).toBeTruthy()
})
