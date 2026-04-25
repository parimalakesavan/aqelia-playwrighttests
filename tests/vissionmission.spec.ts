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
test('Verify "Lets talk" link in About-Us page', async ({vissionMissionLink}) => {
  await vissionMissionLink.goTo_vissionmission();
  await vissionMissionLink.click_LetsTalk();
});
test('Verify "Read about it" button in About-Us page', async ({vissionMissionLink}) => {
  await vissionMissionLink.goTo_vissionmission();
  await vissionMissionLink.click_ReadAboutit();
});
test('Verify "learn More" button in About-Us page', async ({vissionMissionLink}) => {
  await vissionMissionLink.goTo_vissionmission();
  await vissionMissionLink.click_LearnMore();  
});
test('Ready to roll? Get in touch', async ({navigateServiceLink,vissionMissionLink}) => 
  {
  await vissionMissionLink.goTo_vissionmission();
  await navigateServiceLink.ready_To_Roll();
});

