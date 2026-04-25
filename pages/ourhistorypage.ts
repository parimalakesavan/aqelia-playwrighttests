import { expect, type Locator, type Page } from '@playwright/test';
export class OurHistory{
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async goTo_OurHistory() {
        await this.page.goto("https://test.aqilea.com/our-history");
    }
    
}
export default OurHistory;