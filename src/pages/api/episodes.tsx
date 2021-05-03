import type {NextApiRequest, NextApiResponse} from 'next'

import type {Episode} from 'lib/repos/episodes/types'
import {episodesRepo} from 'lib/repos/episodes/Api'

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<Episode[]>
) => {
	const episodes = await episodesRepo.latest()

	res.status(200).json(episodes)
}

export default handler
