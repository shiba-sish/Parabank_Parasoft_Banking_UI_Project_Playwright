/**
 * Home Page Locators
 * Locators for the Home/Dashboard page of Parabank application
 */
export const homeLocators = {
  // Header elements
  parabankLogo: 'img[alt="ParaBank"]',
  welcomeMessage: '.heading1',
  
  // Navigation menu
  mainNav: '#leftPanel',
  accountsOverviewLink: 'a[href="/parabank/overview.htm"]',
  transferFundsLink: 'a[href="/parabank/transfer.htm"]',
  billPayLink: 'a[href="/parabank/billpay.htm"]',
  findTransactionsLink: 'a[href="/parabank/findtransaction.htm"]',
  updateContactInfoLink: 'a[href="/parabank/updateprofile.htm"]',
  changePasswordLink: 'a[href="/parabank/changepassword.htm"]',
  logoutLink: 'a[href="/parabank/logout.htm"]',

  // Account information
  accountsPanel: '#accounts',
  accountItem: 'tr',
  accountLink: 'a[href*="/parabank/activity"]',
  accountBalance: 'td',

  // User info
  userWelcomeText: '.heading1',
};
