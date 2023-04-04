import { test, expect } from '@playwright/test';
import { LoginPage } from '../pagemodel/emp-login-page';
// PBI 7309 - LOGIN FEATURES

test('Login Page Should Have Login Fields', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.loginfields();
});

// test('Login Success', async ({ page }) => {
//   const playwrightDev = new LoginPage(page);
//   await playwrightDev.goto();
//   await playwrightDev.login(ENV.USERNAME, ENV.PASSWORD);
//   await expect(page.locator('div').filter({ hasText: 'Hello Lcb Automation School Bag: 0 item(s) Account Portals Logout' }).locator('div')).toBeVisible
// });

// test('Login Failure (Invalid Username)', async ({ page }) => {
//   const playwrightDev = new LoginPage(page);
//   await playwrightDev.goto();
//   await playwrightDev.login("wrong_username@cordonbleu.edu", "pass12345");
//   await expect(page.getByText('Email: Sorry, the username or password you entered is incorrect. Please try agai')).toContainText('Email: Sorry, the username or password you entered is incorrect. Please try again (make sure your caps lock is off).');
// });

// test('Login Failure (Invalid Password)', async ({ page }) => {
//   const playwrightDev = new LoginPage(page);
//   await playwrightDev.goto();
//   await playwrightDev.login("lcb_automation@cordonbleu.edu", "12345pass");
//   await expect(page.getByText('Email: Sorry, the username or password you entered is incorrect. Please try agai')).toContainText('Email: Sorry, the username or password you entered is incorrect. Please try again (make sure your caps lock is off).');
// });

// test('Login Failure (Blank Username/Password)', async ({ page }) => {
//   const playwrightDev = new LoginPage(page);
//   await playwrightDev.goto();
//   await playwrightDev.login("", "");
//   await expect(page.locator('#ulfrmValidateAccountGUID_ErrorReport')).toContainText('Email: This field is required.')
//   await expect(page.locator('#ulfrmValidateAccountGUID_ErrorReport')).toContainText('Password: This field is required.')
// });