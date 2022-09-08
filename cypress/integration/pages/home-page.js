import dayjs from 'dayjs';
import CommonPage from './common-page';
import NewComputerPage from './new-computer-page';
import EditComputerPage from './edit-computer-page';

export default class HomePage extends CommonPage {
  // Locators
  numberOfComputerFoundText = '#main h1';
  addNewComputerButton = '#add';
  filterByNameText = '#searchbox';
  filterByNameButton = '#searchsubmit';
  computersTable = 'table.computers.zebra-striped';

  // Functions
  addNewComputer() {
    cy.clickElement(this.addNewComputerButton);
    return new NewComputerPage();
  }

  selectComputer(computerName) {
    cy.get(this.computersTable).contains(computerName).should('be.visible').click();
    return new EditComputerPage();
  }

  filterComputer(computerName) {
    cy.clearAndType(this.filterByNameText, computerName);
    cy.clickElement(this.filterByNameButton);
    return this;
  }

  validateNumberOfComputerFound(number) {
    if (number === 1) {
      cy.validateText(this.numberOfComputerFoundText, 'One computer found');
    } else {
      cy.validateText(this.numberOfComputerFoundText, `${number} computers found`);
    }
    return this;
  }

  validateNoComputerFound() {
    cy.validateText(this.numberOfComputerFoundText, 'No computers found');
    cy.contains('Nothing to display').should('be.visible');
    return this;
  }

  validateComputerNameShowsInResults(computerName) {
    cy.get(this.computersTable).find('tbody tr').each(($row) => {
      cy.wrap($row).find('td').eq(0)
        .invoke('text')
        .should('include', computerName);
    });
    return this;
  }

  validateFilterResult(row, computerName, introducedDate, discontinuedDate, company) {
    cy.get(this.computersTable).find('tr').eq(row).find('td')
      .eq(0)
      .invoke('text')
      .should('include', computerName);
    cy.get(this.computersTable).find('tr').eq(row).find('td')
      .eq(1)
      .invoke('text')
      .should('include', dayjs(introducedDate).format('DD MMM YYYY'));
    cy.get(this.computersTable).find('tr').eq(row).find('td')
      .eq(2)
      .invoke('text')
      .should('include', dayjs(discontinuedDate).format('DD MMM YYYY'));
    cy.get(this.computersTable).find('tr').eq(row).find('td')
      .eq(3)
      .invoke('text')
      .should('include', company);
    return this;
  }
}
