import ComputerPage from './computer-page';
import HomePage from './home-page';

export default class NewComputerPage extends ComputerPage {
  // Locators
  // =================================================================
  createComputerButton = 'input[value="Create this computer"]';

  // Interaction Functions
  // =================================================================
  createComputer(computerName, computerInfo) {
    this
      .fillComputerInfo(
        computerName,
        computerInfo.introducedDate,
        computerInfo.discontinuedDate,
        computerInfo.company,
      )
      .clickCreateComputerButton();
    return new HomePage();
  }

  clickCreateComputerButton() {
    cy.clickElement(this.createComputerButton);
    return new HomePage();
  }
}
