import { expect, type Locator, type Page } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
export class CareerPage {
    readonly page: Page;
    readonly emailInputTxt:Locator;
    readonly submitBtn:Locator;
    readonly acceptTermsCheckBox:Locator;
    readonly learnMoreBtn:Locator;
    constructor(page: Page) {
        this.page = page;
        this.emailInputTxt=this.page.getByPlaceholder('Your email').first();
        this.submitBtn=this.page.locator('div').filter({ hasText: /^Submit$/ }).first();
        this.acceptTermsCheckBox=this.page.getByText('I accept Aqilea’s terms and').first();
        this.learnMoreBtn=this.page.getByRole('button', { name: 'Learn more' });
    }
    async goTo_careerPage() {
      await this.page.goto("https://test.aqilea.com/career");
  }
    async emailInput(){
      let userData = JSON.parse(fs.readFileSync(path.resolve('/Users/parimalakesavan/aqilea playwright/aqilea-website-test/pages', 'userData.json'), 'utf-8'));
      await this.emailInputTxt.fill(userData.userEmail);
      await this.acceptTermsCheckBox.check();
      await this.submitBtn.click();
  }
  async learnMore(){
    await this.learnMoreBtn.click();
    await expect(this.page).toHaveURL("https://test.aqilea.com/life-at-aqilea");
}
}
export default CareerPage;
