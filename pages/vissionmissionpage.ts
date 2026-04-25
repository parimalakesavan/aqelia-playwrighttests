import { expect, type Locator, type Page } from '@playwright/test';
export class VissionMission{
    readonly page: Page;
    readonly letsTalkBtn:Locator;
    readonly readAboutItBtn:Locator;
    readonly learnMoreBtn:Locator;
    constructor(page: Page) {
        this.page = page;
        this.letsTalkBtn=page.getByRole('button', { name: 'Let’s talk' });
        this.readAboutItBtn=page.getByRole('button', { name: 'Read about it' });
        this.learnMoreBtn=page.getByRole('button', { name: 'Learn more' });
    }
    async goTo_vissionmission() {
        await this.page.goto("https://test.aqilea.com/vision-mission");
    }
    async click_LetsTalk(){
        await this.letsTalkBtn.click();
        await expect(this.page).toHaveURL('https://test.aqilea.com/contact-us');
}
async click_ReadAboutit(){
    await this.readAboutItBtn.click();
    await expect(this.page).toHaveURL('https://test.aqilea.com/our-history');
}
async click_LearnMore(){
    await this.learnMoreBtn.click();
    await expect(this.page).toHaveURL('https://test.aqilea.com/india');
}
}
export default VissionMission;
