import {credentials, baseUrl, selectors} from "../fixtures/testData";
const user = "Ben boN"

describe('Sunflower', () => {
  it('QA Mission', () => {
    cy.visit(baseUrl.url);
    
    cy.get(selectors.loginButton).click();

    cy.get(selectors.emailInput).type(credentials.Email);
    cy.get(selectors.passwordInput).type(credentials.PWD);

    cy.get(selectors.submitButton).click();

    // click 'later' pop-up window 
    cy.get('#onesignal-slidedown-cancel-button', { timeout: 10000 }).click();

    cy.get(selectors.menuBtn).click();

    // click My Account
    cy.get(':nth-child(1) > .side-menu__action').click();

    // click edit btn
    cy.get('._pen_a31cg_31')
      .click({ force: true });
    
    cy.get(selectors.nicknameInput).clear().type(user)

    // choose random avatar
    cy.get(selectors.avatarImages).then($avatar => {
      const randomIndex = Math.floor(Math.random() * $avatar.length);
      cy.wrap($avatar[randomIndex]).click();
    });
    // click apply btn
    cy.get('._btnContainer_nil5y_111 > .animation-popup > .button').click();

    // open my profile
    cy.get('.account__content > :nth-child(2) > .button').click();

    cy.get(selectors.profileNickname).should('include.text', user);

    cy.get(selectors.profileInfoDialogCloseButton).click({force: true});

    cy.get('.close-btn').click({force: true});

    // print the cc coin amount
    const ccList = [];
    cy.get(selectors.lobbyBalanceBar).invoke('text').then((textValue) => {
      ccList.push(textValue);
      cy.log(`CcList Value is: ${ccList}`);
    });

    // switch coin type
    cy.get('.game-type-switcher__coin > img').click();

    // print the sc coin amount
    const scList = [];
    cy.get(selectors.lobbyBalanceBar).invoke('text').then((textValue) => {
      scList.push(textValue);
      cy.log(`ScList Value is: ${scList}`);
    });

    cy.get(selectors.menuBtn).click()
    // click logout btn
    cy.get(':nth-child(9) > .side-menu__action').click();
  });
});