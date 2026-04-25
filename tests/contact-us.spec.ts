import { test, expect, Page, BrowserContext } from '@playwright/test';
let page: Page;
let context: BrowserContext;

test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
});

test.afterAll(async () => {
    await context.close();
});

test('Verify Ready to roll? Get in touch', async () => {
    await page.goto("https://test.aqilea.com/contact-us");
    await page.getByRole('link', { name: 'contact icons +46 (0) 8605 82 00' }).click();
    await page.getByRole('link', { name: 'contact icons info@aqilea.com' }).click();
    await page.getByRole('link', { name: 'contact icons Fredsborgsgatan' }).click();
    await page.getByPlaceholder('Name').fill('parimala');
    await page.getByPlaceholder('Company (optional)').fill('Soltia');
    await page.getByPlaceholder('Email', { exact: true }).fill('parimala.kesavan@gmail.com');
    await page.getByPlaceholder('Phone number').fill('0767537226');
    await page.getByPlaceholder('Your message to us').fill('parimala kesavan');
    await page.getByText('I accept Aqilea’s terms &').check();
    await page.getByText('parimala kesavanI accept').click();
});
test('Verify Aqilea Team-Mir',async () => {
    await page.goto("https://test.aqilea.com/contact-us");
    await expect(page.locator('.absolute > a').first()).toBeVisible();
    await page.locator('.absolute > a').first().click();
    await page.goto("https://test.aqilea.com/contact-us");
    await page.locator('.leading-\\[18px\\] > a').first().click();
  }); 
  test('Verify Aqilea Team-Fedrik',async () => {
    await page.goto("https://test.aqilea.com/contact-us");
    await expect(page.locator('div:nth-child(2) > div > .absolute > a').first()).toBeVisible();
    await page.locator('div:nth-child(2) > div > .absolute > a').first().click();
    await page.goto("https://test.aqilea.com/contact-us");
    await page.locator('div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > .leading-\\[18px\\] > a').first().click();
  }); 
  test('Verify Aqilea Team-Jan',async () => {
    await page.goto("https://test.aqilea.com/contact-us");
    await expect(page.locator('div:nth-child(3) > div > .absolute > a').first()).toBeVisible();
    await page.locator('div:nth-child(3) > div > .absolute > a').first().click();
    await page.goto("https://test.aqilea.com/contact-us");
    await page.locator('div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div > .leading-\\[18px\\] > a').first().click();
  }); 
  test('Verify Aqilea Team-Johanna',async () => {
    await page.goto("https://test.aqilea.com/contact-us");
    await expect(page.locator('div:nth-child(4) > div > .absolute > a').first()).toBeVisible();
    await page.locator('div:nth-child(4) > div > .absolute > a').first().click();
    await page.goto("https://test.aqilea.com/contact-us");
    await page.locator('div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div > .leading-\\[18px\\] > a').first().click();
  }); 
  test('Verify Aqilea Team-Musty',async () => {
    await page.goto("https://test.aqilea.com/contact-us");
    await expect(page.locator('div:nth-child(5) > div > .absolute > a').first()).toBeVisible();
    await page.locator('div:nth-child(5) > div > .absolute > a').first().click();
    await page.goto("https://test.aqilea.com/contact-us");
    await page.locator('div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div > .leading-\\[18px\\] > a').first().click();
  }); 
  test('Verify Aqilea Team-Pernilla',async () => {
    await page.goto("https://test.aqilea.com/contact-us");
    await expect(page.locator('div:nth-child(6) > div > .absolute > a').first()).toBeVisible();
    await page.locator('div:nth-child(6) > div > .absolute > a').first().click();
    await page.goto("https://test.aqilea.com/contact-us");
    await page.locator('div:nth-child(6) > div:nth-child(2) > div:nth-child(2) > .flex > .leading-\\[18px\\] > a').first().click();
  }); 
  test('Verify Aqilea Team-Dhruv',async () => {
    await page.goto("https://test.aqilea.com/contact-us");
    await expect(page.locator('div:nth-child(7) > div > .absolute > a').first()).toBeVisible();
    await page.locator('div:nth-child(7) > div > .absolute > a').first().click();
    await page.goto("https://test.aqilea.com/contact-us");
    await page.locator('div:nth-child(7) > div:nth-child(2) > div:nth-child(2) > .flex > .leading-\\[18px\\] > a').first().click();
  }); 
