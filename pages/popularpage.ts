import { expect, type Locator, type Page } from '@playwright/test';
export class PopularPage {
    readonly page: Page;
    readonly popularlink1: Locator;
    readonly readMorebtn1: Locator;
    readonly popularlink2: Locator;
    readonly readMorebtn2: Locator;
    constructor(page: Page) {
        this.page = page;
        this.popularlink1 = page.locator('article').filter({ hasText: '16 June 2023• PopularDriving' }).getByRole('link');
        this.readMorebtn1 = page.locator('article').filter({ hasText: '16 June 2023• PopularDriving' }).getByRole('button');
        this.popularlink2 =page.locator('article').filter({ hasText: '05 December 2022•' }).getByRole('link');
        this.readMorebtn2 = page.locator('article').filter({ hasText: '05 December 2022•' }).getByRole('button');
    }
    async goTo_PopularPage() {
        await this.page.goto("https://test.aqilea.com/blog/popular");
    }
    async click_Popular1() {
        await this.popularlink1.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/blog/popular")
    }
    async click_ReadMoreBtn1() {
        await this.readMorebtn1.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/blog/popular/aqilea-ab-expands-presence-in-india");
    }
    async click_Popular2() {
        await this.popularlink2.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/blog/popular")
    }
    async click_ReadMoreBtn2() {
        await this.readMorebtn2.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/blog/popular/gasell-prize-2022");
    }
}
export default PopularPage;
    