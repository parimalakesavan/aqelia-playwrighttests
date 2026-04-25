import { expect, type Locator, type Page } from '@playwright/test';
export class PressRelease {
    readonly page: Page;
    readonly twitterLink:Locator;
    readonly facebookLink:Locator;
    readonly linkedinLink:Locator;
    constructor(page: Page) {
        this.page = page;
        this.twitterLink=page.getByLabel('twitter');
        this.facebookLink=page.getByLabel('facebook');
        this.linkedinLink=page.getByLabel('linkedin');

    }
    async goTo_PressRelease() {
        await this.page.goto("https://test.aqilea.com/blog/spotlight/soltia-rebranding-to-aqilea-press-release");
    }
    async click_Twitter_Link(){
        await this.twitterLink.click();
}
async click_Facebook_Link(){
    await this.facebookLink.click();
}
async click_Linkedin_Link(){
    await this.linkedinLink.click();
}
}
export default PressRelease;