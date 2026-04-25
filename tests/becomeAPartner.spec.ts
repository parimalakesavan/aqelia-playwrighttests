import {expect, Page, BrowserContext } from '@playwright/test';
import { test } from '../fixtures/pomfixture';
let page: Page;
let context: BrowserContext;
test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
});
test.afterAll(async () => {
    await context.close();
});
test('Verify Ready to roll?Get in touch', async ({becomeAPartnerLink,navigateServiceLink }) => {
await becomeAPartnerLink.goTo_BecomeAPartnerPage();
await navigateServiceLink.ready_To_Roll();
});