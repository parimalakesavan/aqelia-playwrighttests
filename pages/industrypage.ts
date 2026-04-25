import { expect, type Locator, type Page } from '@playwright/test';
export class IndustryPage {
    readonly page: Page;
    readonly industryNewsLink:Locator;
    readonly readMoreBtn:Locator;
    constructor(page: Page) {
        this.page = page;
        this.industryNewsLink=page.getByRole('link', { name: '• Industry news' });
       this.readMoreBtn=page.getByRole('button', { name: 'Read More' });
    }
    async goTo_IndustryPage() {
        await this.page.goto("https://test.aqilea.com/blog/industry");
    }
    async click_industryNews() {
        await this.industryNewsLink.click();
       await expect(this.page).toHaveURL("https://test.aqilea.com/blog/industry")
    }
    async click_readMoreBtn()
    {
        await this.readMoreBtn.click();
       await expect(this.page).toHaveURL("https://test.aqilea.com/blog/industry/soltia-rebranding-to-aqilea-press-release");
    }
}
export default IndustryPage ;