import {expect, Page, BrowserContext } from '@playwright/test';
import { test } from '../fixtures/pomfixture';
let page: Page;
let context: BrowserContext;
test.describe('Navigate all BlogPage', async () => {
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
    });
    test.afterAll(async () => {
        await context.close();
    });
    test('In the spotlight link &Soltia Announces Rebranding to Aqilea ', async ({navigateHomeLink,navigateBlogLink}) => {
        await navigateBlogLink.goTo_BlogPage();
        await navigateHomeLink.click_Spotlight2();
        await navigateBlogLink.goTo_BlogPage();
        await navigateHomeLink.click_ReadMoreBtn2();
    });
    test('Driving Global Innovation and Expansion', async ({navigateBlogLink}) => {
        await navigateBlogLink.goTo_BlogPage();
        await navigateBlogLink.click_Spotlight1();
        await navigateBlogLink.goTo_BlogPage();
        await navigateBlogLink.click_ReadMoreBtn1();
    });
    test('aqilea formerly Soltia', async ({navigateHomeLink,navigateBlogLink}) => {
        await navigateBlogLink.goTo_BlogPage();
        await navigateHomeLink.click_Spotlight3();
        await navigateBlogLink.goTo_BlogPage();
        await navigateHomeLink.click_ReadMoreBtn3();
    });
});