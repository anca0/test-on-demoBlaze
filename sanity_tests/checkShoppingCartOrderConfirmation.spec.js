describe('Shopping Cart and Order Confirmation Test', () => {
  before(() => {
    // Log in before the test
    cy.visit('https://www.demoblaze.com/');
    cy.contains('Log in').click();
    cy.get('#loginusername').type('ancaUser');
    cy.get('#loginpassword').type('secret1');
    cy.get('#logInModal').contains('Log in').click();
  });

  it('Add and Remove Items from Cart, Place Order, and Validate Order Confirmation', () => {
    // Navigate to the "Phones" section
    cy.contains('Phones').click();

    // Click on Any phone to view details
    cy.get('.card-title a').first().click();

    // Add the phone to the cart
    cy.get('.col-sm-12').contains('Add to cart').click();

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

    // Validate charged information and other details in the order confirmation popup
    cy.get('.sweet-alert').should('be.visible');
    cy.get('.sweet-alert h2').should('contain', 'Thank you for your purchase!');
    cy.get('.confirm h4').should('contain', 'Name: Your Name');
    cy.get('.confirm p').eq(0).should('contain', 'Amount: ');
    cy.get('.confirm p').eq(1).should('contain', 'Card Number: **** **** **** 7890');
    cy.get('.confirm p').eq(2).should('contain', 'Expiration Date: 12/25');
  });
});
