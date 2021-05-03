import type {Video} from 'lib/repos/videos/types'
import {SeeMore} from './SeeMore'
import YouTubeIcon from './youtube.svg'
import PodcastIcon from './podcast.svg'

type Props = {
	videoLink: string
	podcastLink?: string
} & Pick<Video, 'title' | 'description' | 'thumbnails'>

export const EpisodeCard = ({
	title,
	description,
	thumbnails,
	videoLink,
	podcastLink,
}: Props) => (
	<li className="shadow rounded">
		<article className="flex">
			<div className="max-w-prose p-4">
				<h3 className="text-2xl">{title}</h3>
				<p className="text-lg">{description}</p>
				<ul className="flex items-center space-x-2">
					<li>
						<a
							className="text-xl bg-emerald-400 text-white font-thin p-2 rounded shadow-sm transition-colors hover:bg-emerald-500"
							href={videoLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							See more!
						</a>
					</li>
					<li>
						<a
							href={videoLink}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="go to the video episode"
						>
							<YouTubeIcon className="w-12 text-emerald-400 transition-colors hover:text-emerald-500" />
						</a>
					</li>
					{podcastLink ? (
						<li>
							<a
								href={podcastLink}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="go to the podcast episode"
							>
								<PodcastIcon className="w-12 text-emerald-400 transition-colors hover:text-emerald-500" />
							</a>
						</li>
					) : null}
				</ul>
			</div>
			<a href={videoLink} target="_blank" rel="noopener noreferrer">
				<img
					className="rounded-r"
					src={thumbnails.high.url}
					width={thumbnails.high.width}
					height={thumbnails.high.height}
					alt={`YouTube cover of ${title}`}
				/>
			</a>
		</article>
	</li>
)
