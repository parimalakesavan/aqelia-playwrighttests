import {expect, Page, BrowserContext } from '@playwright/test';
import { test } from '../fixtures/pomfixture';
let page: Page;
let context: BrowserContext;
test.describe('Navigate all PopularPage', async () => {
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
    });
    test.afterAll(async () => {
        await context.close();
    });
    test('Driving Global Innovation and Expansion', async ({navigatePopularLink}) => {
        await navigatePopularLink.goTo_PopularPage();
        await navigatePopularLink.click_Popular1();
        await navigatePopularLink.goTo_PopularPage();
        await navigatePopularLink.click_ReadMoreBtn1();
    });
    test('Aqilea formerly Soltia', async ({navigatePopularLink}) => {
        await navigatePopularLink.goTo_PopularPage();
        await navigatePopularLink.click_Popular2();
        await navigatePopularLink.goTo_PopularPage();
        await navigatePopularLink.click_ReadMoreBtn2();  
    });
});