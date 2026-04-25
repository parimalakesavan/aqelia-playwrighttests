import { expect, type Locator, type Page } from '@playwright/test';
export class India{
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async goTo_India() {
        await this.page.goto("https://test.aqilea.com/india");
    }
}
export default India;