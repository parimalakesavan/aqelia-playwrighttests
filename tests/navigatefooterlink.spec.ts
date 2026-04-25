import {expect, Page, BrowserContext } from '@playwright/test';
import { test } from '../fixtures/pomfixture';
let page: Page;
let context: BrowserContext;
test.describe('Navigate all FooterLink', async () => {
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
  });
  test.afterAll(async () => {
    await context.close();
  });
  test('Navigate FooterHomeLink should contain phone,Email and address', async ({navigatefooterLink}) => {
    await navigatefooterLink.click_footer_Home();
    await navigatefooterLink.click_footer_Phone();
    await navigatefooterLink.click_footer_Email();
    await navigatefooterLink.click_footer_Address();
  });
  test('Navigate FooterCompanyLink ', async ({navigatefooterLink}) => {
    await navigatefooterLink.click_footer_AboutUs();
    await navigatefooterLink.click_footer_LifeAtAqilea();
  });
  test('Navigate FooterServicesLink ', async ({navigatefooterLink}) => {
    await navigatefooterLink.click_IT_Services();
    await navigatefooterLink.click_Industrial_Services();
  });
  test('Navigate FooterJoinUsLink ', async ({navigatefooterLink }) => {
    await navigatefooterLink.click_footer_BecomeAPartner();
    await navigatefooterLink.click_footer_JoinUs();
    await navigatefooterLink.click_footer_HireUs();
  });
  test('Navigate FooterNewsLetterLink ', async ({navigatefooterLink}) => {
    await navigatefooterLink.click_footer_Newsletter();
  });
  test('Navigate FooterSocialMediaLink ', async ({navigatefooterLink}) => {
    await navigatefooterLink.click_footer_SocialMedia();
  });
});