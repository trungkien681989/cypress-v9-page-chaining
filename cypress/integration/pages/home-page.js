import dayjs from 'dayjs';
import CommonPage from './common-page';
import NewComputerPage from './new-computer-page';
import EditComputerPage from './edit-computer-page';

export default class HomePage extends CommonPage {
  // Locators
  // =================================================================
  numberOfComputerFoundText = '#main h1';
  addNewComputerButton = '#add';
  filterByNameText = '#searchbox';
  filterByNameButton = '#searchsubmit';
  computersTable = 'table.computers.zebra-striped';

  // High level functions
  // =================================================================
  validateComputerCreated(computerName, computerInfo) {
    this
      .validateAlertMessage(`Done! Computer ${computerName} has been created`)
      .filterComputer(computerName)
      .validateNumberOfComputerFound(1)
      .validateFilterResult(
        1,
        computerName,
        computerInfo.introducedDate,
        computerInfo.discontinuedDate,
        computerInfo.company,
      );
    return this;
  }

  validateComputerEdited(originalComputerName, editedComputerName, computerInfo) {
    this
      .validateAlertMessage(`Done! Computer ${editedComputerName} has been updated`)
      .filterComputer(originalComputerName)
      .validateNumberOfComputerFound(0)
      .filterComputer(editedComputerName)
      .validateNumberOfComputerFound(1)
      .validateFilterResult(
        1,
        editedComputerName,
        computerInfo.introducedDate,
        computerInfo.discontinuedDate,
        computerInfo.company,
      );
    return this;
  }

  validateComputerDeleted(computerName) {
    this
      .validateAlertMessage('Done! Computer has been deleted')
      .filterComputer(computerName)
      .validateNumberOfComputerFound(0);
    return this;
  }

  // Interaction functions
  // =================================================================
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

  // Validation functions
  // =================================================================
  validateNumberOfComputerFound(number) {
    if (number === 0) {
      cy.validateText(this.numberOfComputerFoundText, 'No computers found');
      cy.contains('Nothing to display').should('be.visible');
    } else if (number === 1) {
      cy.validateText(this.numberOfComputerFoundText, 'One computer found');
    } else {
      cy.validateText(this.numberOfComputerFoundText, `${number} computers found`);
    }
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
