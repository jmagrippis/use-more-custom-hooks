import '@testing-library/jest-dom/extend-expect'
import 'isomorphic-unfetch'

import {queryClient} from 'components/queryClient'
import {mswServer} from 'msw/server'

beforeAll(() => {
	mswServer.listen()
})

afterEach(() => {
	mswServer.resetHandlers()
	queryClient.clear()
})

afterAll(() => {
	mswServer.close()
})
