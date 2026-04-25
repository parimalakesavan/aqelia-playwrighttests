import { expect, type Locator, type Page } from '@playwright/test';
export class BlogPage {
    readonly page: Page;
    readonly spotlightlink1: Locator;
    readonly readMorebtn1: Locator;
    constructor(page: Page) {
        this.page = page;
        this.spotlightlink1 = page.locator('article').filter({ hasText: '17 June 2024• In the' }).getByRole('link');
        this.readMorebtn1 = page.locator('article').filter({ hasText: '17 June 2024• In the' }).getByRole('button');
    }
    async goTo_BlogPage() {
        await this.page.goto("https://test.aqilea.com/blog/spotlight");
    }
    async click_Spotlight1() {
        await this.spotlightlink1.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/blog/spotlight")
    }
    async click_ReadMoreBtn1() {
        await this.readMorebtn1.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/blog/spotlight/soltia-rebranding-to-aqilea-press-release");
    }
}
export default BlogPage;
    