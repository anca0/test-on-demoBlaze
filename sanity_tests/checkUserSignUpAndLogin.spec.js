describe('User Signup and Login Test', () => {
  it('Sign Up as a new user', () => {
    cy.visit('https://www.demoblaze.com/');

    // Click the "Sign Up" button
    cy.contains('Sign up').click();

    // Fill in the sign-up form
    cy.get('#sign-username').type('username_anca');
    cy.get('#sign-password').type('anca');
    cy.get('#sign-up').click();

    // Validate if the modal appears for existing users
    cy.get('#signInModal').should('be.visible');
  });

  it('Log in', () => {
    cy.visit('https://www.demoblaze.com/');

    // Click the "Log in" button
    cy.contains('Log in').click();

    // Fill in the login form
    cy.get('#loginusername').type('username_anca');
    cy.get('#loginpassword').type('anca');
    cy.get('#logInModal').contains('Log in').click();
  });

  it('Log out', () => {
    // Click the "Log out" button
    cy.get('#logout2').click();
  });

  it('Try logging in with invalid user', () => {
    // Click the "Log in" button
    cy.contains('Log in').click();

    // Fill in the login form with an invalid user
    cy.get('#loginusername').type('username_notAnca');
    cy.get('#loginpassword').type('somePass');
    cy.get('#logInModal').contains('Log in').click();

    // Validate that an error message appears
    cy.get('#signInModal').contains('Login failed');
  });
});
