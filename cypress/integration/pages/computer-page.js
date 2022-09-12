import HomePage from './home-page';

export default class ComputerPage {
  // Locators
  // =================================================================
  computerNameText = '#name';
  introducedDateText = '#introduced';
  discontinuedDateText = '#discontinued';
  companySelect = '#company';
  cancelButton = 'a.btn';

  // Interaction Functions
  // =================================================================
  fillComputerInfo(computerName, introducedDate, discontinueDate, company) {
    cy.clearAndType(this.computerNameText, computerName);
    cy.clearAndType(this.introducedDateText, introducedDate);
    cy.clearAndType(this.discontinuedDateText, discontinueDate);
    cy.selectElement(this.companySelect, company);
    return this;
  }

  clickCancelButton() {
    cy.clickElement(this.cancelButton);
    return new HomePage();
  }
}
