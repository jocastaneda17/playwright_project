import { test, expect } from '@playwright/test';
import { LoginPage } from '../pagemodel/emp-login-page';
import { CRMDesktopPage } from '../pagemodel/emp-crm-desktop-page';
import { IndividualPage } from '../pagemodel/emp-individual-page';
// PBI 7309 - LOGIN FEATURES

test('EMPortal New Application Proceed to Checkout ', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const crmDesktopPage = new CRMDesktopPage(page);
  const individualPage = new IndividualPage(page);

  await loginPage.goto();
  await loginPage.loginfields();
  await crmDesktopPage.searchIndividual();
  await individualPage.newApplication();
});
