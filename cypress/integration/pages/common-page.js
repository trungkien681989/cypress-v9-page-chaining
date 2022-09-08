export default class CommonPage {
  // Locators
  alertMessage = 'div.alert-message.warning';

  // Functions
  validateAlertMessage(message) {
    cy.validateTextContains(this.alertMessage, message);
    return this;
  }
}
