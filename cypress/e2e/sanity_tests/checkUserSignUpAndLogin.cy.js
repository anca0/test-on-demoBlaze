describe('User Signup and Login Test', () => {
  it('Sign Up as a new user', () => {
    cy.visit('/');

    // Click the "Sign Up" button
    cy.get('#signin2').click();

    // Fill in the sign-up form
    cy.get('#sign-username').type('anc');
    cy.get('#sign-password').type('1234');

    // Validate if the modal appears for existing users
    cy.get('#signInModal .modal-footer .btn-primary').contains('Sign up').click();
  });

  it('Log in', () => {
    cy.visit('/');

    // Click the "Log in" button
    cy.get('#login2').click();

    // Fill in the login form
    cy.get('#loginusername').focus().type('anc');
    cy.get('#loginpassword').type('1234');
    cy.get('#logInModal .modal-footer .btn-primary').contains('Log in').click();

    cy.url().should('eq ','/index.html')
  });

  it('Log out', () => {
    // Click the "Log out" button
    cy.get('#logout2').click();
  });

  it('Try logging in with invalid user', () => {
    // Click the "Log in" button
    cy.contains('Log in').click();

    // Fill in the login form with an invalid user
    cy.get('#loginusername').type('notAnc');
    cy.get('#loginpassword').type('pass');
    cy.get('#logInModal').contains('Log in').click();

    // Validate that an error message appears
    cy.get('#signInModal').contains('Login failed');
  });
});
