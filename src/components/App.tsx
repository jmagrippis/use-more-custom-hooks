import {QueryClientProvider, useQueryErrorResetBoundary} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {ErrorBoundary} from 'react-error-boundary'
import {AppProps} from 'next/app'
import Head from 'next/head'
import {DefaultSeo} from 'next-seo'

import {Header} from './Header'
import {Footer} from './Footer'
import {getSeoProps} from './getSeoProps'
import {queryClient} from './queryClient'

export const App = ({Component, pageProps}: AppProps) => {
	const {reset} = useQueryErrorResetBoundary()

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
				/>
			</Head>
			<DefaultSeo {...getSeoProps()} />
			<ErrorBoundary
				onReset={reset}
				fallbackRender={({resetErrorBoundary}) => (
					<div>
						There was an error!
						<button onClick={() => resetErrorBoundary()}>Try again</button>
					</div>
				)}
			>
				<QueryClientProvider client={queryClient}>
					<div className="w-full flex flex-grow flex-col items-center justify-between">
						<Header />
						<Component {...pageProps} />
						<Footer />
					</div>
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</ErrorBoundary>
		</>
	)
}
