import {GetStaticProps} from 'next'

import Home, {HomeProps} from 'components/Home'

const ONE_HOUR = 60 * 60

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const episodes = []

	return {
		props: {episodes},
		revalidate: ONE_HOUR,
	}
}

export default Home
