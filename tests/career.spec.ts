import {expect, Page, BrowserContext } from '@playwright/test';
import { test } from '../fixtures/pomfixture';
let page:Page;
let context: BrowserContext;
test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
});
test.afterAll(async () => {
    await context.close();
});
test('Verify Email', async ({careerPage}) => {
    await careerPage.goTo_careerPage();
    await careerPage.emailInput();
});
test('Verify Learn More Button', async ({careerPage}) => {
    await careerPage.goTo_careerPage();
    await careerPage.learnMore();
});
