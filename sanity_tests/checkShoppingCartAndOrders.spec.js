describe('Shopping Cart and Order Test', () => {
  before(() => {
    // Log in before the test
    cy.visit('https://www.demoblaze.com/');
    cy.contains('Log in').click();
    cy.get('#loginusername').type('username_anca');
    cy.get('#loginpassword').type('anca');
    cy.get('#logInModal').contains('Log in').click();
  });

  it('Add and Remove Items from Cart and Place Order', () => {
    // Navigate to the "Phones" section
    cy.contains('Phones').click();

    // Click on Any phone to view details
    cy.get('.card-title a').first().click();

    // Add the phone to the cart
    cy.get('.col-sm-12').contains('Add to cart').click();
    // I know it's not a good practice, normally I would add data-cy for all web elements I need

    // Go back to the "Phones" section
    cy.contains('Phones').click();

    // Click on another phone to view details
    cy.get('.card-title a').eq(1).click();

    // Add the second phone to the cart
    cy.get('.col-sm-12').contains('Add to cart').click();

    // Navigate to the cart
    cy.get('#cartur').click();

    // Remove one item from the cart
    cy.get('.col-lg-1 a').eq(0).click();

    // Place the order
    cy.contains('Place Order').click();

    // Populate the order modal
    cy.get('#name').type('Your Name');
    cy.get('#country').type('Your Country');
    cy.get('#city').type('Your City');
    cy.get('#card').type('1234567890');
    cy.get('#month').type('12');
    cy.get('#year').type('25');
    cy.get('#orderModal').contains('Purchase').click();

    // Validate the order confirmation
    cy.get('.sweet-alert').should('be.visible');
  });
});
