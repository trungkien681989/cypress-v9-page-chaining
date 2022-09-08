import ComputerPage from './computer-page';
import HomePage from './home-page';

export default class EditComputerPage extends ComputerPage {
  // Locators
  saveComputerButton = 'input[value="Save this computer"]';
  deleteComputerButton = 'input[value="Delete this computer"]';

  // Functions
  saveComputer() {
    cy.clickElement(this.saveComputerButton);
    return new HomePage();
  }

  deleteComputer() {
    cy.clickElement(this.deleteComputerButton);
    return new HomePage();
  }
}
