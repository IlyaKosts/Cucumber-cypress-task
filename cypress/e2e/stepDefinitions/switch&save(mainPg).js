import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const MainPage = require("../../pages/main.page");
  Given("A user opens a Telnyx page", () => {
    cy.visit("/");
  });
  When("A Click on accept button", () => {
    Cypress.on('fail', (error, runnable) => {
        if (!error.message.includes('Expected to find')) {
            throw error
        }
    });
    cy.get('[class="sc-5d3a275a-0 jdjrgE"] button', {timeout: 3000}).click();
  });
  When("A user scroll to Switch + Save field", () => {
    cy.scrollTo(0, 3900);
  });
  And("User click on the middle of MOC field", () => {
    MainPage.mocSliderMidClick();
  });
  And("User click on the middle of RIC field", () => {
    MainPage.ricSliderMidClick();
  });
  And("User click on the left end of MOC field", () => {
    MainPage.mocSliderMinClick();
  });
  And("User click on the left end of RIC field", () => {
    MainPage.ricSliderMinClick();
  });
  And("User click on the right end of MOC field", () => {
    MainPage.mocSliderMaxClick();
  });
  And("User click on the right end of RIC field", () => {
    MainPage.ricSliderMaxClick();
  });
  And("User click on Make and receive calls 'Toll-free' numbers button", () => {
    MainPage.tollfreeBtnClick();
  });
  And("User click on Make and receive calls 'No' button", () => {
    MainPage.programmeVoiceNClick();
  });
  And("User click on 'Create a free trial account' button", () => {
    MainPage.createFreeTrBtnClick();
  });
  And("User click on 'Speak to our experts' button", () => {
    MainPage.speakToExpBtnClick();
  });
  Then("User check the compare costs fields in minimum variant", () => {
    MainPage.telnixValueCheckMin();
    MainPage.twilloValueCheckMin();
  });
  Then("User check the compare costs fields in middle variant", () => {
    MainPage.telnixValueCheck();
    MainPage.twilloValueCheck();
  });
  Then("User check the compare costs fields in defaild variant", () => {
    MainPage.telnixValueCheckDef();
    MainPage.twilloValueCheckDef();
  });
  Then("User check the compare costs fields in maximum variant", () => {
    MainPage.telnixValueCheckMax();
    MainPage.twilloValueCheckMax();
  });
  Then("User check the compare costs fields in Unproportional variant", () => {
    MainPage.telnixValueCheckUnp();
    MainPage.twilloValueCheckUnp();
  });
  Then("User check the compare costs fields in Toll-free and Yes variant", () => {
    MainPage.telnixValueCheckTY();
    MainPage.twilloValueCheckTY();
  });
  Then("User check the compare costs fields in Local numbers and No variant", () => {
    MainPage.telnixValueCheckLN();
    MainPage.twilloValueCheckLN();
  });
  Then("User check the current url, sign up", () => {
    cy.url().should('include', 'telnyx.com/sign-up');
  });
  Then("User check the current url, speack to experts", () => {
    cy.url().should('include', 'telnyx.com/contact-us');
  });