import HomePage from '../pages/home-page';

describe('Test add, edit, delete a computer', () => {
  before(() => {
    cy.openComputersDatabaseApp();
  });

  it('add, edit, delete a computer', () => {
    cy.fixture('computer-info').then((computer) => {
      const uniqueId = Math.floor(Math.random() * 1000000000);
      const newComputerInfo = computer.new;
      const newComputerName = `${newComputerInfo.name}-${uniqueId}`;
      const editedComputerInfo = computer.edit;
      const editedComputerName = `${editedComputerInfo.name}-${uniqueId}`;
      const homePage = new HomePage();
      homePage
        .addNewComputer()
        .createComputer(newComputerName, newComputerInfo)
        .validateComputerCreated(newComputerName, newComputerInfo)
        .filterComputer(newComputerName)
        .selectComputer(newComputerName)
        .editComputer(editedComputerName, editedComputerInfo)
        .validateComputerEdited(newComputerName, editedComputerName, editedComputerInfo)
        .filterComputer(editedComputerName)
        .selectComputer(editedComputerName)
        .deleteComputer()
        .validateComputerDeleted(editedComputerName);
    });
  });
});
