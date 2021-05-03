import {Video, VideosInterface} from './types'

const JOHNNY_MAGRIPPIS_CHANNEL_ID = 'UCm1ALyg61uhPoTnZBm7mY2g'

type SearchListResponseItem = {
	id: {
		kind: string
		videoId: string
	}
	snippet: Pick<Video, 'title' | 'description' | 'thumbnails'>
}

const mapItemToVideo = ({id, snippet}: SearchListResponseItem) => ({
	id: id.videoId,
	title: snippet.title,
	description: snippet.description,
	thumbnails: snippet.thumbnails,
})

export class VideosYouTubeApiRepo implements VideosInterface {
	#API_KEY = process.env.YOU_TUBE_API_KEY
	#CHANNEL_ID = JOHNNY_MAGRIPPIS_CHANNEL_ID

	mostPopular = async (): Promise<Video[]> => {
		const response = await fetch(
			`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&channelId=${
				this.#CHANNEL_ID
			}&key=${this.#API_KEY}`,
			{headers: {Accept: 'application/json'}}
		)

		if (!response.ok) {
			throw new Error(
				`Could not interface with YouTube api: ${response.statusText}`
			)
		}

		const {items} = await response.json()

		return items.map(mapItemToVideo)
	}
}

export const videosRepo = new VideosYouTubeApiRepo()
