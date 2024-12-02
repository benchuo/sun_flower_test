const credentials  = {
    Email: "watchdogstest02+11@sunfltd.com",
    PWD: 123456
}

const baseUrl  = {
    url: "https://dev.crowncoinscasino.com/"
}
const selectors = {
    loginButton: '[data-testid="lobby-login-btn"]',
    emailInput: '[data-testid="email-input"]',
    passwordInput: '[data-testid="password-input"]',
    submitButton: '[data-testid="login-submit-btn"]',
    nicknameInput: '[data-testid="nicknameInput"]',
    avatarImages: '[data-testid^="avatar-image-"] > img',
    lobbyBalanceBar: '[data-testid="lobby-balance-bar"]',
    profileNickname: '[data-testid="my-profile-nickname"]',
    profileInfoDialogCloseButton: '[data-testid="profileInfoDialog"] > .dialog__header > [data-testid="closeButton"] > .close-btn',
    menuBtn: '[data-testid="menuButton"]'
  };
  


module.exports = {
    credentials,
    baseUrl,
    selectors
};