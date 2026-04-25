import { expect, type Locator, type Page } from '@playwright/test';
export class ContactUS{
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async goTo_contactUs() {
        await this.page.goto("https://test.aqilea.com/contact-us");
    }
}
export default ContactUS;