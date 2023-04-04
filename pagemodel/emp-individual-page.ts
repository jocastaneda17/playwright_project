import { expect, FrameLocator, Locator, Page  } from '@playwright/test';
import ENV from '../../../utils/env';

export class IndividualPage {
  readonly page: Page;
  //CRM Desktop
  readonly programsCourses: Locator;
  readonly newApplicationButton: Locator;
  readonly ProgramsCOurses: Locator;
  readonly selectCategory: Locator;
  readonly searchCourceButton: Locator;
  readonly coursesTab: Locator;
  readonly cuisineSuperieure: Locator;
  readonly selectSessionRadio: Locator;
  readonly saveButton: Locator;
  readonly nextButton: Locator;
  readonly applicationNote: Locator;
  readonly applicationOrigin: Locator;
  readonly activitySourceId: Locator;
 

  constructor(page: Page) {
    this.page = page;
    //Login to LCB website
    this.programsCourses = page.locator('#crm-menu-panel').getByRole('link', { name: 'Programs & Courses' })
    this.newApplicationButton = page.locator('[id="toolbar-newApplication"]')
    this.ProgramsCOurses = page.locator('#crm-menu-panel').getByRole('link', { name: 'Programs & Courses' })
    this.selectCategory = page.locator('[id="iCategoryID"]')
    this.searchCourceButton = page.getByRole('button', { name: 'Search' })
    this.coursesTab = page.locator('[href="#coursesGrid"]')
    this.cuisineSuperieure = page.getByRole('link', { name: 'Cuisine Supérieure' })
    this.selectSessionRadio = page.locator('[id="iSessionID_52775"]')
    this.saveButton = page.locator('[id="toolbar-Save"]')
    this.nextButton = page.locator('[id="toolbar-validate-step-1"]')
    this.applicationNote = page.locator('[id="cShoppingCartNote"]')
    this.applicationOrigin = page.locator('[id="cApplicationOrigin"]')
    this.activitySourceId = page.locator('[id="iActivitySourceID"]')
    
  }
  async newApplication() {
    await this.programsCourses.click()
    await this.newApplicationButton.click()
    await this.selectCategory.selectOption('1004')
    await this.searchCourceButton.click()
    await this.coursesTab.click()
    await this.cuisineSuperieure.click()
    await this.selectSessionRadio.click()
    await this.saveButton.click()
    await this.nextButton.click()
    await this.saveButton.click()
    await this.page.locator('[id="cShoppingCartNote"]').isVisible()
    await this.page.locator('[id="cApplicationOrigin"]').isVisible()
    await this.page.locator('[id="iActivitySourceID"]').isVisible()
    await this.page.waitForTimeout(5000)
    await this.page.getByRole('textbox', { name: 'Note * :' }).fill('Test New Application')
    await this.page.pause()
  }
}