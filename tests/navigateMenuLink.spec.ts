import {expect, Page, BrowserContext } from '@playwright/test';
import { test } from '../fixtures/pomfixture';
let page: Page;
let context: BrowserContext;
test.describe('Navigate all MenuLink & submenuLink', async () => {
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
  });
  test.afterAll(async () => {
    await context.close();
  });
  test('Navigate MenuLink', async ({navigateMenuLink}) => {
    await navigateMenuLink.click_Menu_Home();
    await navigateMenuLink.click_Menu_Services();
    await navigateMenuLink.click_Menu_AboutUs();
    await navigateMenuLink.click_Menu_LifeAtAqilea();
    await navigateMenuLink.click_Menu_BecomeAPartner();
    await navigateMenuLink.click_Menu_JoinUs();
    await navigateMenuLink.click_Menu_ContactUs();
  });
  test('Navigate SubMenuLink', async ({navigateMenuLink}) => {
    await navigateMenuLink.click_AboutUs_SubMenu();
    await navigateMenuLink.click_Lifeataqilea_SubMenu();
    await navigateMenuLink.click_Services_SubMenu();
    
  });
}); 
 
