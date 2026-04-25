import {expect, Page, BrowserContext } from '@playwright/test';
import { test } from '../fixtures/pomfixture';
let page: Page;
let context: BrowserContext;
test.describe('Navigate all IndustryPage', async () => {
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
    });
    test.afterAll(async () => {
        await context.close();
    });
    test('Verify Industry News Link', async ({navigateIndustryLink}) => {
        await navigateIndustryLink.goTo_IndustryPage();
        await navigateIndustryLink.click_industryNews();
    });
    test('Verify Read More Button', async ({navigateIndustryLink}) => {
        await navigateIndustryLink.goTo_IndustryPage();
        await navigateIndustryLink.click_readMoreBtn();
    });
});