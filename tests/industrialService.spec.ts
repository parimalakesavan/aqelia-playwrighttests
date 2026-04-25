import { expect, Page, BrowserContext } from '@playwright/test';
import { test } from '../fixtures/pomfixture';
let page: Page;
let context: BrowserContext;
test.describe('Navigate all SLink', async () => {
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
    });
    test.afterAll(async () => {
        await context.close();
    });
    test('Ready to roll? Get in touch', async ({navigateServiceLink}) => {
        await navigateServiceLink.goTo_industrialPage();
        await navigateServiceLink.ready_To_Roll();
    });
});