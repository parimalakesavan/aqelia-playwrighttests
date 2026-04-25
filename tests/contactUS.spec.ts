import {expect, Page, BrowserContext } from '@playwright/test';
import { test } from '../fixtures/pomfixture';
let page: Page;
let context: BrowserContext;
test.describe('Navigate all ContactUSLink', async () => {
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
    });
    test.afterAll(async () => {
        await context.close();
    });
    test('Ready to roll? Get in touch', async ({navigateContactUsLink,navigateServiceLink}) => { 
        await navigateContactUsLink.goTo_contactUs();
        await navigateServiceLink.ready_To_Roll();
    });   
});