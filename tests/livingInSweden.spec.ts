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
test('Lets chat link', async ({navigateHomeLink,navigateLivinginSwedenLink}) => {
    await navigateLivinginSwedenLink.goTo_LivingInSwedenPage();
    await navigateHomeLink.click_Lets_chat();
});
test('Apply Now link', async ({navigateHomeLink,navigateLivinginSwedenLink}) => {
    await navigateLivinginSwedenLink.goTo_LivingInSwedenPage();
    await navigateHomeLink.click_Apply_Now();
});
test('Join Force link', async ({navigateHomeLink,navigateLivinginSwedenLink}) => {
    await navigateLivinginSwedenLink.goTo_LivingInSwedenPage();
    await navigateHomeLink.click_Join_Forces();
});
test('Ready to roll? Get in touch', async ({navigateServiceLink,navigateLivinginSwedenLink}) => {
    await navigateLivinginSwedenLink.goTo_LivingInSwedenPage();
    await navigateServiceLink.ready_To_Roll();
});
