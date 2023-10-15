describe('Main Category Level Test', () => {
  before(() => {
    // Log in before the test
    cy.visit('/');
    cy.contains('Log in').click();
    cy.get('#loginusername').type('username_anca');
    cy.get('#loginpassword').type('anca');
    cy.get('#logInModal').contains('Log in').click();
  });

  it('Navigate to Main Category Level Page and Validate Items', () => {
    // Click on the "category" tab on the left to go to the main categories level
    cy.get('#itemc').click();

    // Get a list of sub-categories
    cy.get('.list-group a').each(($subcategory) => {
      // Visit each sub-category level
      const subCategoryName = $subcategory.text();
      cy.wrap($subcategory).click();

      // Get a list of items in the sub-category
      cy.get('.card-title a').each(($item) => {
        const itemName = $item.text();

        // Validate that the item is present in the main category level page
        cy.get('.card-title a').should('contain', itemName);
      });

      // Go back to the main categories level
      cy.get('#nava').click();
    });
  });
});
