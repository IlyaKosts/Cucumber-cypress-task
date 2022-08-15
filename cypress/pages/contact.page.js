class ContactPage {
    //Get elements:
    //[class="sc-9d98fd33-7 sc-9d98fd33-9 kpJVrZ ilKAnW"] a[class="sc-f97529d6-0 bjUuRN sc-b74bae4-0 fVDMEa mchNoDecorate"]
    talkToBtn() {
        return cy.get('[class="sc-9d98fd33-7 sc-9d98fd33-9 kpJVrZ ilKAnW"] a[class="sc-f97529d6-0 bjUuRN sc-b74bae4-0 fVDMEa mchNoDecorate"]');
    }
    submitBtn() {
        return cy.get('[class="mktoButton"]');
    }
    resultFN() {
        return cy.get('[id="FirstName"]');
    }
    resultLN() {
        return cy.get('[id="LastName"]');
    }
    resultBE() {
         return cy.get('[id="Email"]');
    }
    resultCW() {
        return cy.get('[id="Website"]');
   }
   resultReason() {
        return cy.get('[id="ValidMsgReason_for_Contact__c"]');
   }
   loginBtn() {
        return cy.get('[class="Text-sc-5o8owa-0 sc-3efef034-7 frufKM eOQFmv"] a[href="https://telnyx.com/sign-up"]');
   }
   supportBtn() {
        return cy.get('[class="Text-sc-5o8owa-0 sc-3efef034-7 frufKM eOQFmv"] a[href="https://support.telnyx.com/en/"]');
   }
   topicsAndTextPr() {
        return cy.get('[class="Text-sc-5o8owa-0 sc-3efef034-7 frufKM eOQFmv"]');
   }
   copyrightText() {
        return cy.get('[class="sc-7b6c9f9b-12 cHxUkN"]')
   }
    //Methods:
    talkToBtnClick() {
        this.talkToBtn().click();
    }
    submitBtnClick() {
        this.submitBtn().click();
    }
    resultFNCheck() {
        this.resultFN().should('have.css', 'border-color', 'rgb(255, 0, 0) rgb(226, 63, 63)');
    }
    resultLNCheck() {
        this.resultLN().should('have.css', 'border-color', 'rgb(255, 0, 0) rgb(226, 63, 63)');
    }
    resultBECheck() {
        this.resultBE().should('have.css', 'border-color', 'rgb(255, 0, 0) rgb(226, 63, 63)');
    }
    resultCWCheck() {
        this.resultCW().should('have.css', 'border-color', 'rgb(255, 0, 0) rgb(226, 63, 63)');
    }
    resultReasonCheck() {
        this.resultReason().should('be.visible');
    }
    enterFN() {
        this.resultFN().type("Fake");
    }
    enterLN() {
        this.resultLN().type("Name");
    }
    enterBE() {
        this.resultBE().type("notrealmailjstfortest@gmail.com");
    }
    enterCW() {
        this.resultCW().type("fakeWebsite.com");
    }
    loginBtnClick() {
        this.loginBtn().click();
    }
    supportBtnClick() {
        this.supportBtn().click();
    }
    topicsAndTextPrCheck() {
        this.topicsAndTextPr().should("be.visible",  { multiple: true })
    }
    copyrightTextCheck() {
        this.copyrightText().should("be.visible").and("have.text", "© Telnyx LLC 2022")
    }
   }
   module.exports = new ContactPage();