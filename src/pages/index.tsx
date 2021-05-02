import {GetStaticProps} from 'next'

import Home, {HomeProps} from 'components/Home'
import {videosRepo} from 'lib/repos/videos/YouTubeApi'

const ONE_HOUR = 60 * 60

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const episodes = await videosRepo.videos()

	return {
		props: {episodes},
		revalidate: ONE_HOUR,
	}
}

export default Home
