import { test } from '../fixtures/pomfixture';
import { Page, BrowserContext } from '@playwright/test';
let page: Page;
let context: BrowserContext;
test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
});
test.afterAll(async () => {
  await context.close();
});
test('Verify "Let-me in" link in About-Us page', async ({ aboutUsLink }) => {
  await aboutUsLink.goTo_AboutUs();
  await aboutUsLink.click_Letme_button();
});
test('Verify "Read about it" button in About-Us page', async ({ aboutUsLink }) => {
  await aboutUsLink.goTo_AboutUs();
  await aboutUsLink.click_ReadAboutit();
});
test('Verify "Learn More" button in About-Us page', async ({ aboutUsLink }) => {
  await aboutUsLink.goTo_AboutUs();
  await aboutUsLink.click_LearnMore();
});

test('Lets chat link', async ({ navigateHomeLink, aboutUsLink }) => {
  await aboutUsLink.goTo_AboutUs();
  await navigateHomeLink.click_Lets_chat();
});
test('Apply Now link', async ({ navigateHomeLink, aboutUsLink }) => {
  await aboutUsLink.goTo_AboutUs();
  await navigateHomeLink.click_Apply_Now();
});
test('Join Force link', async ({ navigateHomeLink, aboutUsLink }) => {
  await aboutUsLink.goTo_AboutUs();
  await navigateHomeLink.click_Join_Forces();
});