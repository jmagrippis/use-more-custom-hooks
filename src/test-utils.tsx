import React, {ReactElement, Suspense} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import {QueryClientProvider} from 'react-query'

import {queryClient} from 'components/queryClient'

const AllTheProviders = ({children}) => (
	<QueryClientProvider client={queryClient}>
		<Suspense fallback="loading...">{children}</Suspense>
	</QueryClientProvider>
)

const customRender = (ui: ReactElement, options: RenderOptions = {}) =>
	render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}
