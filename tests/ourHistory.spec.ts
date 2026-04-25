import {expect, Page, BrowserContext } from '@playwright/test';
import { test } from '../fixtures/pomfixture';
let page: Page;
let context: BrowserContext;
let allTestPassed: Boolean;
test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
}); 
test.afterAll(async () => {
  await context.close();
});
test('Lets talk in', async ({navigateHomeLink,ourhistory}) => {
    await ourhistory.goTo_OurHistory();
    await navigateHomeLink.click_LetsTalk();
});
test('Verify "Let-me in" link in About-Us page', async ({aboutUsLink,ourhistory}) => {
    await ourhistory.goTo_OurHistory();
    await aboutUsLink.click_Letme_button();
});
test('Verify "learn More" button in About-Us page', async ({aboutUsLink,ourhistory}) => {
    await ourhistory.goTo_OurHistory();
    await aboutUsLink.click_LearnMore();
});
test('Lets chat link', async ({navigateHomeLink,ourhistory}) => {
  await ourhistory.goTo_OurHistory();
  await navigateHomeLink.click_Lets_chat();
});
test('Apply Now link', async ({navigateHomeLink,ourhistory}) => {
  await ourhistory.goTo_OurHistory();
  await navigateHomeLink.click_Apply_Now();
});
test('Join Force link', async ({navigateHomeLink,ourhistory}) => {
  await ourhistory.goTo_OurHistory();
  await navigateHomeLink.click_Join_Forces();
});
