import ComputerPage from './computer-page';
import HomePage from './home-page';

export default class NewComputerPage extends ComputerPage {
  // Locators
  createComputerButton = 'input[value="Create this computer"]';

  // Functions
  createComputer() {
    cy.clickElement(this.createComputerButton);
    return new HomePage();
  }
}
