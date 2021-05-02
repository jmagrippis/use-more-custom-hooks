import {rootUrl} from 'lib/constants'

const defaultSeo = {
	title:
		'useMoreCustomHooks | Make your React life easier, write more custom hooks!',
	description:
		'This project is an example of using more custom hooks to make your React codebase more manageable',
	openGraph: {
		type: 'website',
		locale: 'en_UK',
		url: rootUrl,
		site_name: 'useMoreCustomHooks',
		images: [
			{
				url: `${rootUrl}/images/hero.png`,
				width: 512,
				height: 512,
				alt: 'useMoreCustomHooks',
			},
		],
	},
	twitter: {
		handle: '@jmagrippis',
		cardType: 'summary',
	},
}

export const getSeoProps = ({
	title = defaultSeo.title,
	description = defaultSeo.description,
	openGraph = {},
	twitter = {},
} = {}) => ({
	title,
	description,
	openGraph: {...defaultSeo.openGraph, title, description, ...openGraph},
	twitter: {...defaultSeo.twitter, ...twitter},
})
