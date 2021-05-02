import {Body} from './Body'

export type HomeProps = {
	episodes: any[]
}

const Home = ({episodes}: HomeProps) => <Body episodes={episodes} />

export default Home
