import {expect, Page, BrowserContext } from '@playwright/test';
import { test } from '../fixtures/pomfixture';
let page: Page;
let context: BrowserContext;
test.describe('Navigate all PressReleasePage', async () => {
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
    });
    test.afterAll(async () => {
        await context.close();
    });
    test('Verify Twitter link', async ({navigatePressReleaseLink,navigateGazellPrizeLink}) => {
        await navigateGazellPrizeLink.goTo_GazellPrize();
        await navigatePressReleaseLink.click_Twitter_Link();
    });
    test('Verify Facebook link', async ({navigatePressReleaseLink,navigateGazellPrizeLink}) => {
        await navigateGazellPrizeLink.goTo_GazellPrize();
        await navigatePressReleaseLink.click_Facebook_Link();
    });
    test('Verify Linkedin link', async ({navigatePressReleaseLink,navigateGazellPrizeLink}) => {
        await navigateGazellPrizeLink.goTo_GazellPrize();
        await navigatePressReleaseLink.click_Linkedin_Link();
    });
    test('Driving Global Innovation and Expansion', async ({navigatePressReleaseLink,navigateGazellPrizeLink,navigatePopularLink}) => {
        await navigateGazellPrizeLink.goTo_GazellPrize();
        await navigatePopularLink.click_Popular1();
        await navigatePressReleaseLink.goTo_PressRelease();
        await navigatePopularLink.click_ReadMoreBtn1();
    });
    test('Aqilea formerly Soltia', async ({navigatePressReleaseLink,navigateGazellPrizeLink,navigatePopularLink}) => {
        await navigateGazellPrizeLink.goTo_GazellPrize();
        await navigatePopularLink.click_Popular2();
        await navigatePressReleaseLink.goTo_PressRelease();
        await navigatePopularLink.click_ReadMoreBtn2();  
    });
    test('Verify Email', async ({navigatePressReleaseLink,navigateGazellPrizeLink,careerPage}) => {
        await navigateGazellPrizeLink.goTo_GazellPrize();
        await careerPage.emailInput();
    });
});