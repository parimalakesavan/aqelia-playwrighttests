import { test } from '../fixtures/pomfixture';
import { Page, BrowserContext } from '@playwright/test';
let page: Page;
let context: BrowserContext;
test.describe('Navigate all HomeLink', async () => {
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
    });
    test.afterAll(async () => {
        await context.close();
    });
    test('@Home Get in touch button link', async ({ navigateHomeLink }) => {
        await navigateHomeLink.click_GetInTouch_Button();
    });
    test('@Home In the spotlight link &Soltia Announces Rebranding to Aqilea ', async ({ navigateHomeLink }) => {
        await navigateHomeLink.goTo_Home();
        await navigateHomeLink.click_Spotlight1();
        await navigateHomeLink.goTo_Home();
        await navigateHomeLink.click_ReadMoreBtn1();
    });
    test('@Home Driving Global Innovation and Expansion', async ({ navigateHomeLink }) => {
        await navigateHomeLink.goTo_Home();
        await navigateHomeLink.click_Spotlight2();
        await navigateHomeLink.goTo_Home();
        await navigateHomeLink.click_ReadMoreBtn2();
    });
    test('@Home aqilea formerly Soltia', async ({ navigateHomeLink }) => {
        await navigateHomeLink.goTo_Home();
        await navigateHomeLink.click_Spotlight3();
        await navigateHomeLink.goTo_Home();
        await navigateHomeLink.click_ReadMoreBtn3();
    });
    test('@Home Lets talk in', async ({ navigateHomeLink }) => {
        await navigateHomeLink.goTo_Home();
        await navigateHomeLink.click_LetsTalk();
    });
    test('@Home Verify Our Services', async ({ navigateHomeLink }) => {
        await navigateHomeLink.goTo_Home();
        await navigateHomeLink.click_Our_Services();
    });
    test('@Home Lets chat link', async ({ navigateHomeLink }) => {
        await navigateHomeLink.goTo_Home();
        await navigateHomeLink.click_Lets_chat();
    });
    test('@Home Apply Now link', async ({ navigateHomeLink }) => {
        await navigateHomeLink.goTo_Home();
        await navigateHomeLink.click_Apply_Now();
    });
    test('@Home Join Force link', async ({ navigateHomeLink }) => {
        await navigateHomeLink.goTo_Home();
        await navigateHomeLink.click_Join_Forces();
    });
});


