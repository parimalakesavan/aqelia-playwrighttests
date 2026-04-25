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
test('@LifeatAqilea Verify Learn More Button', async ({navigateLifeAtAqileaLink}) => {
  await navigateLifeAtAqileaLink.goTo_LifeAtAqileaPage();
  await navigateLifeAtAqileaLink.click_learnMore_Btn();
});
test('@LifeatAqilea Lets chat link', async ({navigateHomeLink,navigateLifeAtAqileaLink }) => {
  await navigateLifeAtAqileaLink.goTo_LifeAtAqileaPage();
  await navigateHomeLink.click_Lets_chat();
});
test('@LifeatAqilea Apply Now link', async ({navigateHomeLink,navigateLifeAtAqileaLink } ) => {
  await navigateLifeAtAqileaLink.goTo_LifeAtAqileaPage();
  await navigateHomeLink.click_Apply_Now();
});
test('@LifeatAqilea Join Force link', async ({navigateHomeLink,navigateLifeAtAqileaLink }) => {
  await navigateLifeAtAqileaLink.goTo_LifeAtAqileaPage();
  await navigateHomeLink.click_Join_Forces();
});
test('@LifeatAqilea Industrial News link &Soltia Announces Rebranding to Aqilea ', async ({navigateLifeAtAqileaLink }) => {
  await navigateLifeAtAqileaLink.click_industrialnews_link();
  await navigateLifeAtAqileaLink.click_readMore_Btn1();
});
test('@LifeatAqilea Driving Global Innovation and Expansion', async ({navigateLifeAtAqileaLink }) => {
  await navigateLifeAtAqileaLink.click_popular_Link();
  await navigateLifeAtAqileaLink.click_readMore_Btn1();
});
test('@LifeatAqilea aqilea formerly Soltia', async ({navigateLifeAtAqileaLink }) => {
  await navigateLifeAtAqileaLink.click_popular_Link1();
  await navigateLifeAtAqileaLink.click_readMore_Btn2();
});
test('@LifeatAqilea Ready to roll? Get in touch', async ({navigateLifeAtAqileaLink,navigateServiceLink }) => {
  await navigateLifeAtAqileaLink.goTo_LifeAtAqileaPage();
  await navigateServiceLink.ready_To_Roll();
});
test('@LifeatAqilea Verify Email', async ({careerPage,navigateLifeAtAqileaLink}) => {
  await navigateLifeAtAqileaLink.goTo_LifeAtAqileaPage();
  await careerPage.emailInput();
});

