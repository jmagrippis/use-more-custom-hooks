import {render, screen} from 'test-utils'

import {EpisodesList} from './EpisodesList'

it('renders articles for the latest episodes', async () => {
	render(<EpisodesList />)
	const articleElements = await screen.findAllByRole('article')

	expect(articleElements).toHaveLength(3)
})
