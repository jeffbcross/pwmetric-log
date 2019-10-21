const puppeteer = require('puppeteer');
const PWMetrics = require('pwmetrics');
const defaultOpts = require('../pwmetrics-config');
const PUPPET_PORT = 3400;
const options = {
  ...defaultOpts,
  sheets: {
    ...defaultOpts.sheets,
    options: {
      ...defaultOpts.sheets.options,
      tableName: 'secure-page-data'
    }
  },
  flags: {
    ...defaultOpts.flags,
    port: PUPPET_PORT,
    disableStorageReset: true
  }
};

puppeteer
  .launch({
    args: [`--remote-debugging-port=${PUPPET_PORT}`]
  })
  .then(async browser => {
    const page = await browser.newPage();
    await page.goto('http://localhost:4200/auth/login');
    const email = await page.$('input[type="email"]');
    // The actual credentials should be stored in a .env file or similar in CI environment.
    await email.type('jeff@nrwl.io');
    const password = await page.$('input[type="password"]');
    await password.type('password');
    const submitButton = await page.$('button');
    submitButton.click();
    await page.waitForNavigation();
    await page.close();
    const pwMetrics = new PWMetrics('http://localhost:4200/secure', options);
    await pwMetrics.start();
  })
  .then(
    () => process.exit(0),
    e => {
      console.error(e);
      process.exit(1);
    }
  );
