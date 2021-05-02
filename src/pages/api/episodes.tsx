import type {NextApiRequest, NextApiResponse} from 'next'

import {videosRepo} from 'lib/repos/videos/YouTubeApi'
import type {Video} from 'lib/repos/videos/types'

const handler = async (req: NextApiRequest, res: NextApiResponse<Video[]>) => {
	const videos = await videosRepo.videos()
	res.status(200).json(videos)
}

export default handler
