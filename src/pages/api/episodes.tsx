import type {NextApiRequest, NextApiResponse} from 'next'

import type {Episode} from 'lib/repos/episodes/types'
import {episodesRepo} from 'lib/repos/episodes/Api'

const FIVE_MINUTES = 5 * 60

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<Episode[]>
) => {
	const episodes = await episodesRepo.mostPopular()

	res.setHeader(
		'Cache-Control',
		`s-maxage=${FIVE_MINUTES}, stale-while-revalidate`
	)
	res.status(200).json(episodes)
}

export default handler
