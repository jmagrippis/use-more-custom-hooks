import {testedViewports} from '../testedViewports'

describe('navigation', () => {
	testedViewports.forEach((layout) => {
		describe(`on ${layout}`, () => {
			before(() => {
				cy.viewport(layout)
			})

			it('can navigate to all the various sections of the site', () => {
				cy.visit('/')

				cy.findByRole('heading', {name: 'Build First'}).should('exist')

				// navigates to the contact page
				cy.findByRole('navigation').should('exist')
				cy.findByRole('link', {name: 'contact'}).click()
				cy.findByRole('heading', {name: 'Contact'}).should('exist')

				// navigates back to the home page
				cy.findByRole('link', {name: 'Build First'}).click()
				cy.url().should('match', /\/$/)

				// outbound links also exist
				cy.findByRole('link', {name: /youtube/i})
				cy.findByRole('link', {name: /github/i})
			})
		})
	})
})
