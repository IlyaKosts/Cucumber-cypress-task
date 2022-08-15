class MainPage {
   //Get elements:
   programmeVoiceN() {
    return cy.get('[name="Programmable-Voice"][id="no"]');
   }
   tollfreeBtn() {
    return cy.get('[id="toll-free-numbers"]');
   }
   mocSlider() {
       //return cy.get('[class*="sc-1a5981e5-6"] > div[c] div[class="telnyx-slider"] [class="ant-slider-step"]'); 
    return cy.get('.sc-1a5981e5-6 > div:nth-of-type(4) .ant-slider-step');
   }
   ricSlider() {
       //return cy.get('[class*="sc-1a5981e5-6"] > div[class="sc-1a5981e5-0 jVpuFC"] div[class="telnyx-slider"] [class="ant-slider-step"]');
    return cy.get('.sc-1a5981e5-6 > div:nth-of-type(5) .ant-slider-step');
   }
   telnixValue() {
    return cy.get('[class="sc-1a5981e5-12 gVMLpl"]');
   }
   twilloValue() {
    return cy.get('[class="sc-1a5981e5-13 geBsjY"]');
   }
   createFreeTrBtn() {
    return cy.get('[class="sc-5d3a275a-0 eKznVb"] a[href="https://telnyx.com/sign-up"]');
   }
   speakToExpBtn() {
    return cy.get('[class="mchNoDecorate"][href="https://telnyx.com/contact-us"]');
   }
   //Methods:
    mocSliderMidClick() {
        this.mocSlider().click("center", { multiple: true });
    }
    mocSliderMinClick() {
        this.mocSlider().click("left", { multiple: true });
    }
    mocSliderMaxClick() {
        this.mocSlider().click("right", { multiple: true });
    }
    ricSliderMidClick() {
        this.ricSlider().click("center", { multiple: true });
    }
    ricSliderMinClick() {
        this.ricSlider().click("left", { multiple: true });
    }
    ricSliderMaxClick() {
        this.ricSlider().click("right", { multiple: true });
    }
    programmeVoiceNClick() {
        this.programmeVoiceN().click({ multiple: true });
    }
    tollfreeBtnClick() {
        this.tollfreeBtn().click({ multiple: true });
    }
    telnixValueCheck() {
        this.telnixValue().should("have.text", "$6,699");
    }
    telnixValueCheckDef() {
        this.telnixValue().should("have.text", "$2,578");
    }
    telnixValueCheckMin() {
        this.telnixValue().should("have.text", "$73");
    }
    telnixValueCheckMax() {
        this.telnixValue().should("have.text", "$13,094");
    }
    telnixValueCheckUnp() {
        this.telnixValue().should("have.text", "$9,717");
    }
    telnixValueCheckTY() {
        this.telnixValue().should("have.text", "$2,490");
    }
    telnixValueCheckLN() {
        this.telnixValue().should("have.text", "$1,908");
    }
    twilloValueCheck() {
        this.twilloValue().should("have.text", "$11,514");
    }
    twilloValueCheckDef() {
        this.twilloValue().should("have.text", "$4,502");
    }
    twilloValueCheckMin() {
        this.twilloValue().should("have.text", "$118");
    }
    twilloValueCheckMax() {
        this.twilloValue().should("have.text", "$22,337");
    }
    twilloValueCheckUnp() {
        this.twilloValue().should("have.text", "$15,982");
    }
    twilloValueCheckTY() {
        this.twilloValue().should("have.text", "$5,747");
    }
    twilloValueCheckLN() {
        this.twilloValue().should("have.text", "$2,175");
    }
    createFreeTrBtnClick() {
        this.createFreeTrBtn().click();
    }
    speakToExpBtnClick() {
        this.speakToExpBtn().click();
    }
  }
  module.exports = new MainPage();