import { expect, type Locator, type Page } from '@playwright/test';
export class GazellPrize {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async goTo_GazellPrize() {
        await this.page.goto("https://test.aqilea.com/blog/spotlight/gasell-prize-2022");
    }
}
export default GazellPrize;