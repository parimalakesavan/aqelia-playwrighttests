import { expect, type Locator, type Page } from '@playwright/test';

export class LifeAtAqilea {
    readonly page: Page;
    readonly learnMoreBtn: Locator;
    readonly industrialNewsLink:Locator;
    readonly popularLink:Locator;
    readonly readMorebtn1:Locator;
    readonly readMorebtn2:Locator;
    readonly latestArticle:Locator;
    readonly popularLink1:Locator;
    readonly readMorebtn3:Locator;
    constructor(page: Page) {
        this.page = page;
        this.learnMoreBtn=page.getByRole('button', { name: 'Learn more' });
        this.industrialNewsLink=page.getByRole('link', { name: '• Industry news' });
        this.popularLink=page.locator('article').filter({ hasText: '16 June 2023• PopularDriving' }).getByRole('link')
        this.readMorebtn1 =page.locator('article').filter({ hasText: 'Featured17 June 2024•' }).getByRole('button');
        this.readMorebtn2=page.locator('article').filter({ hasText: '16 June 2023• PopularDriving' }).getByRole('button');
        this.latestArticle=page.locator('div').filter({ hasText: /^Latest Articles$/ }).getByRole('button').nth(1);
        this.popularLink1=page.locator('article').filter({ hasText: '05 December 2022•' }).getByRole('link');
        this.readMorebtn3=page.locator('article').filter({ hasText: '05 December 2022•' }).getByRole('button');
    }
    async goTo_LifeAtAqileaPage() {
        await this.page.goto("https://test.aqilea.com/life-at-aqilea");
    }
async click_learnMore_Btn(){
   // await this.goTo_LifeAtAqileaPage();
    await this.learnMoreBtn.click();
    await expect(this.page).toHaveURL("https://test.aqilea.com/living-in-sweden");
}
async click_industrialnews_link(){
    await this.goTo_LifeAtAqileaPage();
    await this.industrialNewsLink.click(); 
     await expect(this.page).toHaveURL("https://test.aqilea.com/blog/industry");
}
async click_readMore_Btn1(){
    await this.goTo_LifeAtAqileaPage();
    await this.readMorebtn1.click();
    await expect(this.page).toHaveURL("https://test.aqilea.com/blog/industry/soltia-rebranding-to-aqilea-press-release");
}
async click_popular_Link(){
    await this.goTo_LifeAtAqileaPage();
    await this.popularLink.click();
    await expect(this.page).toHaveURL("https://test.aqilea.com/blog/popular");
}
async click_readMore_Btn2(){
    await this.goTo_LifeAtAqileaPage();
    await this.readMorebtn2.click();
    await expect(this.page).toHaveURL("https://test.aqilea.com/blog/popular/aqilea-ab-expands-presence-in-india");
}
async click_popular_Link1(){
    await this.goTo_LifeAtAqileaPage();
    await this.latestArticle.click();
    await this.popularLink1.click();
    await expect(this.page).toHaveURL("https://test.aqilea.com/blog/popular");
}
async click_readMore_Btn3(){
    await this.goTo_LifeAtAqileaPage();
    await this.readMorebtn3.click();
    await expect(this.page).toHaveURL("https://test.aqilea.com/blog/popular/gasell-prize-2022");
}
}
export default LifeAtAqilea;


       