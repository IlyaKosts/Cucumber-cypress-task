import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const ContactPage = require("../../pages/contact.page");
  Given("A user opens a Telnyx contact us page", () => {
    Cypress.on('uncaught:exception', () => false)
    cy.visit("/");
  });
  When("Click on accept button", () => {
    Cypress.on('fail', (error, runnable) => {
        if (!error.message.includes('Expected to find')) {
            throw error
        }
    });
    cy.get('[class="sc-5d3a275a-0 jdjrgE"] button', {timeout: 3000}).click();
  });
  When("A user click on Talk to expert button", () => {
    ContactPage.talkToBtnClick();
  });
  And("A user click on Submit button", () => {
    ContactPage.submitBtnClick();
  });
  And("User enter first name", () => {
    ContactPage.enterFN();
  });
  And("User enter last name", () => {
    ContactPage.enterLN();
  });
  And("User enter business email", () => {
    ContactPage.enterBE();
  });
  And("User enter company website", () => {
    ContactPage.enterCW();
  });
  And("User click on login button", () => {
    ContactPage.loginBtnClick();
  });
  And("User click on support button", () => {
    ContactPage.supportBtnClick();
  });
  And("User scroll to bottom", () => {
    cy.scrollTo("bottom");
  });
  Then("User check the red banners under input fields", () => {
    ContactPage.resultFNCheck();
    ContactPage.resultLNCheck();
    ContactPage.resultBECheck();
    ContactPage.resultCWCheck();
    ContactPage.resultReasonCheck();
  });
  Then("User check the red banner under choose reason for contact", () => {
    ContactPage.resultCWCheck();
    ContactPage.resultReasonCheck();
  });
  Then("User check the actual url for login page", () => {
    cy.url().should('include', 'telnyx.com/sign-up')
  });
  Then("User check the actual url for support page", () => {
    cy.url().should('include', 'telnyx.com/en')
  });
  Then("User check the topics", () => {
    ContactPage.topicsAndTextPrCheck();
  });
  Then("User check the copyright", () => {
    ContactPage.copyrightTextCheck();
  });