import HomePage from '../pages/home-page';

describe('Test search computer feature', () => {
  before(() => {
    cy.openComputersDatabaseApp();
  });

  it('search computers', () => {
    cy.fixture('computer-search').then((computers) => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < computers.length; i++) {
        const homePgae = new HomePage();
        homePgae
          .filterComputer(computers[i].computerName)
          .validateNumberOfComputerFound(computers[i].noOfComputerFound)
          .validateComputerNameShowsInResults(computers[i].computerName);
      }
    });
  });
});
