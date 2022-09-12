import ComputerPage from './computer-page';
import HomePage from './home-page';

export default class EditComputerPage extends ComputerPage {
  // Locators
  // =================================================================
  saveComputerButton = 'input[value="Save this computer"]';
  deleteComputerButton = 'input[value="Delete this computer"]';

  // High level functions
  // =================================================================
  editComputer(computerName, computerInfo) {
    this
      .fillComputerInfo(
        computerName,
        computerInfo.introducedDate,
        computerInfo.discontinuedDate,
        computerInfo.company,
      )
      .clickSaveComputerButton();
    return new HomePage();
  }

  validateComputerInfo(computerName, computerInfo) {
    cy.validateValue(this.computerNameText, computerName);
    cy.validateValue(this.introducedDateText, computerInfo.introducedDate);
    cy.validateValue(this.discontinuedDateText, computerInfo.discontinuedDate);
    cy.get(this.companySelect).find('option:selected').should('have.text', computerInfo.company);
    return this;
  }

  // Interaction Functions
  // =================================================================
  deleteComputer() {
    cy.clickElement(this.deleteComputerButton);
    return new HomePage();
  }

  clickSaveComputerButton() {
    cy.clickElement(this.saveComputerButton);
    return new HomePage();
  }
}
