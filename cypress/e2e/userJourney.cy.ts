describe('Main User Journey', () => {

  it('visitor browses photos and sends a contact message', () => {

    // Open homepage
    cy.visit('/')

    // Verify homepage loaded
    cy.contains('Portfolio')

    // Go to portfolio
    cy.contains('Portfolio').click()

    // Check URL
    cy.url().should('include', '/portfolio')

    // Verify gallery exists
    cy.get('#gal_LV7QSi90Qs9M1uzf')
      .should('have.length.greaterThan', 0)

    // Open first image
    cy.get('#gal_LV7QSi90Qs9M1uzf')
      .first()

    // Go to library
    cy.contains('Library').click()

    // Go to contact page
    cy.contains('Contact').click()

    // Fill contact form
    cy.get('input[formControlName="name"]')
      .type('John Doe')

    cy.get('input[formControlName="email"]')
      .type('john@test.com')

    cy.get('input[formControlName="subject"]')
      .type('Inquiry about photos')

    cy.get('textarea[formControlName="message"]')
      .type('Amazing rally photos!')

    // Submit form
    cy.get('button[type="submit"]')
      .click()

    // Verify success message
    cy.contains('Send message')
  })
})