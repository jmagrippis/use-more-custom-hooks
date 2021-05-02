import Link from 'next/link'

import GitHubIcon from './github-mark.svg'

export const Header = () => (
	<header className="w-full bg-gray-800 text-emerald-100">
		<nav className="m-auto container flex flex-row items-center p-4">
			<div className="flex-grow">
				<Link href="/">
					<a className="transition duration-300 hover:text-emerald-300 font-thin">
						useMoreCustomHooks
					</a>
				</Link>
			</div>
			<ul className="flex flex-row">
				<li className="ml-4">
					<a
						className="transition duration-300 hover:text-emerald-300"
						href="https://github.com/jmagrippis/build-first"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
					>
						<GitHubIcon title="The open-source repo at github" width="1.5rem" />
					</a>
				</li>
			</ul>
		</nav>
	</header>
)
