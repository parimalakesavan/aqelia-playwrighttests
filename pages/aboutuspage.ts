import { expect, type Locator, type Page } from '@playwright/test';
export class AboutUs {
    readonly page: Page;
    readonly letMeInBtn:Locator;
    readonly readAboutitBtn:Locator;
    readonly learnMoreBtn:Locator;
    constructor(page: Page) {
        this.page = page;
        this.letMeInBtn=page.getByRole('button', { name: 'Let me in' });
        this.readAboutitBtn=page.getByRole('button', { name: 'Read about it' });
        this.learnMoreBtn=page.getByRole('button', { name: 'Learn more' });

    }
    async goTo_AboutUs() {
        await this.page.goto("https://test.aqilea.com/about-us");
    }
    async click_Letme_button(){
        await this.letMeInBtn.click();
        await expect(this.page).toHaveURL('https://test.aqilea.com/vision-mission');
}
async click_ReadAboutit(){
    await this.readAboutitBtn.click();
    await expect(this.page).toHaveURL('https://test.aqilea.com/our-history');
}
async click_LearnMore(){
    await this.learnMoreBtn.click();
    await expect(this.page).toHaveURL('https://test.aqilea.com/india');
}
}
export default AboutUs;

