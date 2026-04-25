import { expect, type Locator, type Page } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
export class Service {
    readonly page: Page;
    readonly lifeAtAqileaBtn: Locator;
    readonly aqileaPhone: Locator;
    readonly aqileaMail: Locator;
    readonly aqileaAddress: Locator;
    readonly userName: Locator;
    readonly userCompanyDetails: Locator;
    readonly userEmail: Locator;
    readonly userPhone: Locator;
    readonly userMsg: Locator;
    readonly userCheckBoxSelect: Locator;
    readonly submitBtn: Locator;
    constructor(page: Page) {
        this.page = page;
        this.lifeAtAqileaBtn = page.getByRole('button', { name: 'Life at Aqilea' });
        this.aqileaPhone = page.getByRole('link', { name: 'contact icons +46 (0) 8605 82 00' });
        this.aqileaMail = page.getByRole('link', { name: 'contact icons info@aqilea.com' });
        this.aqileaAddress = page.getByRole('link', { name: 'contact icons Fredsborgsgatan' });
        this.userName = page.getByPlaceholder('Name');
        this.userCompanyDetails = page.getByPlaceholder('Company (optional)');
        this.userEmail = page.getByPlaceholder('Email', { exact: true });
        this.userPhone = page.getByPlaceholder('Phone number');
        this.userMsg = page.getByPlaceholder('Your message to us');
        this.userCheckBoxSelect = page.getByText('I accept Aqilea’s terms &');
        this.submitBtn = page.getByText('parimala kesavanI accept');
    }
    async goTo_ServicePage() {
        await this.page.goto("https://test.aqilea.com/services");
    }
    async goTo_industrialPage() {
        await this.page.goto("https://test.aqilea.com/services/industrial-services");
    }
    async goTo_itPage() {
        await this.page.goto("https://test.aqilea.com/services/it-services");
    }
    async click_Life_at_Aqilea() {
        await this.lifeAtAqileaBtn.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/life-at-aqilea");
    }
    async ready_To_Roll() {
        let userData = JSON.parse(fs.readFileSync(path.resolve('/Users/parimalakesavan/aqilea playwright/aqilea-website-test/pages', 'userData.json'), 'utf-8'));
        await this.aqileaPhone.click();
        await this.aqileaMail.click();
        await this.aqileaAddress.click();
        await this.userName.fill(userData.userName);
        await this.userCompanyDetails.fill(userData.userCompanyDetails);
        await this.userEmail.fill(userData.userEmail);
        await this.userPhone.fill(userData.userPhone);
        await this.userMsg.fill(userData.userMsg);
        await this.userCheckBoxSelect.check();
        await this.submitBtn.click();
    }
}

export default Service;