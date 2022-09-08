import HomePage from '../pages/home-page';

const homePage = new HomePage();

describe('Verify search computer feature', () => {
  before(() => {
    cy.openComputersDatabaseApp();
  });

  it('search computers', () => {
    cy.fixture('computer-search').then((computers) => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < computers.length; i++) {
        homePage
          .filterComputer(computers[i].computerName)
          .validateNumberOfComputerFound(computers[i].noOfComputerFound)
          .validateComputerNameShowsInResults(computers[i].computerName);
      }
    });
  });
});
