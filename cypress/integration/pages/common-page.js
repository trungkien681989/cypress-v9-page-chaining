export default class CommonPage {
  // Locators
  // =================================================================
  alertMessage = 'div.alert-message.warning';

  // Validation Functions
  // =================================================================
  validateAlertMessage(message) {
    cy.validateTextContains(this.alertMessage, message);
    return this;
  }
}
