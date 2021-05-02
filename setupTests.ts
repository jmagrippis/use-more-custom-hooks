import '@testing-library/jest-dom/extend-expect'
import 'isomorphic-unfetch'

import {mswServer} from 'msw/server'

beforeAll(() => mswServer.listen())

afterEach(() => mswServer.resetHandlers())

afterAll(() => mswServer.close())
