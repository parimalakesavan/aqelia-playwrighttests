import {expect, Page, BrowserContext } from '@playwright/test';
import { test } from '../fixtures/pomfixture';
let page: Page;
let context: BrowserContext;
test.describe('Navigate all IndiaLink', async () => {
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
    });
    test.afterAll(async () => {
        await context.close();
    });
    test('Lets talk in', async ({navigateHomeLink,navigateIndiaLink}) => {
        await navigateIndiaLink.goTo_India();
        await navigateHomeLink.click_LetsTalk();
    });
    test('Ready to roll? Get in touch', async ({navigateServiceLink,navigateIndiaLink}) => {
        await navigateIndiaLink.goTo_India();
        await navigateServiceLink.ready_To_Roll();
    });   
});