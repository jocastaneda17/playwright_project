import { expect, Locator, Page  } from '@playwright/test';
import ENV from '../../../utils/env';

export class CRMDesktopPage {
  readonly page: Page;
  //CRM Desktop
  readonly crmSetup: Locator;
  readonly crmDesktop: Locator;
  readonly crmDesktopHeader: Locator;
  readonly crmSearchIndividual: Locator;
  readonly searchIndividualEmail: Locator;
  readonly searchIndividualButton: Locator; 
  readonly searchFindResult: Locator;
  readonly searchFindIdResult: Locator;
  readonly individualHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    //Login to LCB website
    this.crmSetup = page.getByRole('link', { name: 'CRM Setup' })
    this.crmDesktop = page.getByRole('link', { name: 'CRM Desktop' })
    this.crmDesktopHeader = page.locator('[class="header icon-48-crm-desktop"]')
    this.crmSearchIndividual = page.locator('[class="icon-32-search"]').first()
    this.searchIndividualEmail = page.getByRole('textbox', { name: 'Email' })
    this.searchIndividualButton = page.getByRole('button', { name: 'Search' })
    this.searchFindResult = page.getByRole('paragraph').first()
    this.searchFindIdResult = page.locator('[class="show-white-space"]').first()
    this.individualHeader = page.locator('[class="header-text"]')
  }


  async searchIndividual() {
    await this.crmSetup.click()
    await this.crmDesktop.click()
    await this.crmDesktopHeader.isVisible()
    await expect(this.crmDesktopHeader).toHaveText('CRM Desktop')
    await this.crmSearchIndividual.isVisible()
    await this.crmSearchIndividual.click()
    await this.searchIndividualEmail.fill(ENV.USERNAME)
    await this.searchIndividualButton.click()
    await this.searchFindResult.isVisible()
    await expect(this.searchFindResult).toHaveText('Search Result: 1 records.')
    await this.searchFindIdResult.click()
    await this.individualHeader.isVisible()
    await expect(this.individualHeader).toContainText(ENV.INDIVIDUAL)
  }
}