import HomePage from '../pages/home-page';

const homePage = new HomePage();
let newComputerName;
let editedComputerName;

describe('CRUD computer', () => {
  before(() => {
    cy.openComputersDatabaseApp();
  });

  it('add a new computer', () => {
    cy.fixture('computer-info').then((computer) => {
      newComputerName = `${computer.add.name}-${Math.floor(Math.random() * 1000000000)}`;
      homePage
        .addNewComputer()
        .fillComputerInfo(newComputerName, computer.add.introducedDate,
          computer.add.discontinuedDate, computer.add.company)
        .createComputer()
        .validateAlertMessage(`Done! Computer ${newComputerName} has been created`)
        .filterComputer(newComputerName)
        .validateNumberOfComputerFound(1)
        .validateFilterResult(1, newComputerName, computer.add.introducedDate,
          computer.add.discontinuedDate, computer.add.company);
    });
  });

  it('edit a computer', () => {
    cy.fixture('computer-info').then((computer) => {
      editedComputerName = `${computer.edit.name}-${Math.floor(Math.random() * 1000000000)}`;
      homePage
        .selectComputer(newComputerName)
        .fillComputerInfo(editedComputerName, computer.edit.introducedDate,
          computer.edit.discontinuedDate, computer.edit.company)
        .saveComputer()
        .validateAlertMessage(`Done! Computer ${editedComputerName} has been updated`)
        .filterComputer(newComputerName)
        .validateNoComputerFound()
        .filterComputer(editedComputerName)
        .validateNumberOfComputerFound(1)
        .validateFilterResult(1, editedComputerName, computer.edit.introducedDate,
          computer.edit.discontinuedDate, computer.edit.company);
    });
  });

  it('delete a computer', () => {
    homePage
      .selectComputer(editedComputerName)
      .deleteComputer()
      .validateAlertMessage('Done! Computer has been deleted')
      .filterComputer(editedComputerName)
      .validateNoComputerFound();
  });
});
