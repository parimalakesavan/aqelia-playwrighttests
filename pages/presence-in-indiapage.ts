import { expect, type Locator, type Page } from '@playwright/test';
export class PresenceInIndia {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async goTo_Presence_In_India() {
        await this.page.goto("https://test.aqilea.com/blog/spotlight/aqilea-ab-expands-presence-in-india");
    }
}
export default PresenceInIndia;