import { expect, type Locator, type Page } from '@playwright/test';
export class LivingInSweden {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async goTo_LivingInSwedenPage() {
        await this.page.goto("https://test.aqilea.com/living-in-sweden");
    }
}
export default LivingInSweden;