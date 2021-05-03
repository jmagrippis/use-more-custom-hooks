import {GetStaticProps} from 'next'

import Home, {HomeProps} from 'components/Home'
import {episodesRepo} from 'lib/repos/episodes/Api'

const ONE_HOUR = 60 * 60

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const episodes = await episodesRepo.mostPopular()

	return {
		props: {episodes},
		revalidate: ONE_HOUR,
	}
}

export default Home
