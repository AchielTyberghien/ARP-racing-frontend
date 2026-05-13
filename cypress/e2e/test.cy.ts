describe('Home Page', () => {
  it('loads the home page', () => {
    cy.visit('/')

    cy.contains('Portfolio')
    cy.contains('Library')
    cy.contains('Contact')
  })
})