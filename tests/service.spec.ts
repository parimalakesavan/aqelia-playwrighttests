import { expect, Page, BrowserContext } from '@playwright/test';
import { test } from '../fixtures/pomfixture';
let page: Page;
let context: BrowserContext;
test.describe('Navigate all ServiceLink', async () => {
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
    });
    test.afterAll(async () => {
        await context.close();
    });
    test('@Service Verify Our Services', async ({ navigateHomeLink }) => {
        await navigateHomeLink.goTo_Service();
        await navigateHomeLink.click_Our_Services();
    });
    test('@Service Life at Aqilea', async ({ navigateServiceLink }) => {
        await navigateServiceLink.goTo_ServicePage();
        await navigateServiceLink.click_Life_at_Aqilea();
    });
    test('@Service Ready to roll? Get in touch', async ({ navigateServiceLink }) => {
        await navigateServiceLink.goTo_ServicePage();
        await navigateServiceLink.ready_To_Roll();
    });

});