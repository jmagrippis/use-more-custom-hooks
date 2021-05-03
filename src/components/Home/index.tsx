import {Episode} from 'lib/repos/episodes/types'
import {Body} from './Body'

export type HomeProps = {
	episodes: Episode[]
}

const Home = ({episodes}: HomeProps) => <Body episodes={episodes} />

export default Home
