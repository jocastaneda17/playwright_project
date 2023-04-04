import { expect, Locator, Page  } from '@playwright/test';
import ENV from '../../../utils/env';

export class LoginPage {
  readonly page: Page;
  //Login to EMPORTAL website
  readonly loginLink: Locator;
  readonly emportalLoginHeader: Locator;
  readonly emportalUsername: Locator;
  readonly emportalPassword: Locator;
  readonly loginButton: Locator;
  readonly globalSetup: Locator;
  readonly crmSetup: Locator;
  readonly cms: Locator;
  readonly programsAndCOurses: Locator;
  readonly literature: Locator;
  readonly marketing: Locator;
  readonly application: Locator;

  constructor(page: Page) {
    this.page = page;
    //Login to LCB website
    this.loginLink = page.locator('[id="link-user-pass-login"]')
    this.emportalLoginHeader = page.getByRole('heading', { name: 'EmPortal Login' })
    this.emportalUsername = page.locator('input[name="UserName"]')
    this.emportalPassword = page.locator('input[name="Password"]')
    this.loginButton = page.getByText('Login').nth(1)
    this.globalSetup = page.getByRole('link', { name: 'Global Setup' })
    this.crmSetup = page.getByRole('link', { name: 'CRM Setup' })
    this.cms = page.getByRole('link', { name: 'CMS' })
    this.programsAndCOurses = page.getByRole('link', { name: 'Programs & Courses' })
    this.literature = page.getByRole('link', { name: 'Literature' })
    this.marketing = page.getByRole('link', { name: 'Marketing' })
    this.application = page.getByRole('link', { name: 'Application' })

  }

  async goto() {
    await this.page.goto((ENV.BASE_URL_EMPORTAL));
  }
 
  async loginfields() {
    await this.loginLink.click()
    await this.emportalLoginHeader.isVisible()
    await this.emportalUsername.fill(ENV.EMPORTAL_USERNAME)
    await this.emportalPassword.fill(ENV.EMPORTAL_PASSWORD)
    await this.loginButton.click()
    await this.globalSetup.isVisible()
    await expect(this.globalSetup).toHaveText('Global Setup')
    await this.crmSetup.isVisible()
    await expect(this.crmSetup).toHaveText('CRM Setup')
    await this.cms.isVisible()
    await expect(this.cms).toHaveText('CMS')
    await this.programsAndCOurses.isVisible()
    await expect(this.programsAndCOurses).toHaveText('Programs & Courses')
    await this.literature.isVisible()
    await expect(this.literature).toHaveText('Literature')
    await this.marketing.isVisible()
    await expect(this.marketing).toHaveText('Marketing')
    await this.application.isVisible()
    await expect(this.application).toHaveText('Application')
    // await this.page.pause()
  }
}