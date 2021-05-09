import React, {ReactElement, Suspense} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import {QueryClientProvider, useQueryErrorResetBoundary} from 'react-query'
import {ErrorBoundary} from 'react-error-boundary'

import {queryClient} from 'components/queryClient'

export const AllTheProviders = ({children}) => {
	const {reset} = useQueryErrorResetBoundary()

	return (
		<QueryClientProvider client={queryClient}>
			<ErrorBoundary
				onReset={reset}
				fallbackRender={({resetErrorBoundary, error}) => (
					<div>
						<p>There was an error:</p>
						<pre>{error}</pre>
						<button onClick={() => resetErrorBoundary()}>Try again</button>
					</div>
				)}
			>
				<Suspense fallback="loading...">{children}</Suspense>
			</ErrorBoundary>
		</QueryClientProvider>
	)
}

const customRender = (ui: ReactElement, options: RenderOptions = {}) =>
	render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}
