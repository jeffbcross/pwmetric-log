const puppeteer = require('puppeteer');

const PUPPET_PORT = 3400;
puppeteer
  .launch({
    args: [`--remote-debugging-port=${PUPPET_PORT}`]
  })
  .then(async browser => {
    const page = await browser.newPage();
    await page.goto('http://localhost:4200/auth/login');
    const emailInput = await page.$('input[type="email"]');
    // The actual credentials should be stored in a .env file or similar in CI environment.
    await emailInput.type('jeff@nrwl.io');
    const passwordInput = await page.$('input[type="password"]');
    await passwordInput.type('password');
    const submitButton = await page.$('button');
    submitButton.click();
    await page.waitForNavigation();
  });
