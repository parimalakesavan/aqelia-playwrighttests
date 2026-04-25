import { expect, type Locator, type Page } from '@playwright/test';
export class Home {
    public url="https://test.aqilea.com/home";
    readonly page: Page;
    readonly getInTouchbtn: Locator;
    readonly spotlightlink1: Locator;
    readonly readMorebtn1: Locator;
    readonly readMorebtn2: Locator;
    readonly spotlightlink2: Locator;
    readonly spotlightlink3: Locator;
    readonly readMorebtn3: Locator;
    readonly letsTalkbtn: Locator;
    readonly itServices: Locator;
    readonly industrialServices: Locator;
    readonly frontEndDevelopmentTxt: Locator;
    readonly AutomationTxt: Locator;
    readonly letsChatBtn: Locator;
    readonly applyNowBtn: Locator;
    readonly joinForceBtn: Locator;
    constructor(page: Page) {
        this.page = page;
        this.getInTouchbtn = page.getByRole('button', { name: 'Get in touch' });
        this.spotlightlink1 = page.locator('article').filter({ hasText: 'Featured17 June 2024• In the' }).getByRole('link');
        this.readMorebtn1 = page.locator('article').filter({ hasText: 'Featured17 June 2024• In the' }).getByRole('button');
        this.spotlightlink2 = page.locator('article').filter({ hasText: '16 June 2023• In the' }).getByRole('link');
        this.readMorebtn2 = page.locator('article').filter({ hasText: '16 June 2023• In the' }).getByRole('button');
        this.spotlightlink3 = page.locator('article').filter({ hasText: '05 December 2022• In the' }).getByRole('link');
        this.readMorebtn3 = page.locator('article').filter({ hasText: '05 December 2022• In the' }).getByRole('button');
        this.letsTalkbtn = page.getByRole('button', { name: 'Let’s talk' });
        this.itServices = page.getByRole('tab', { name: 'IT services' });
        this.industrialServices = page.getByRole('tab', { name: 'Industrial Services' });
        this.frontEndDevelopmentTxt = page.getByText('Front-end development').first();
        this.AutomationTxt = page.getByText('Automation').first();
        this.letsChatBtn = page.getByRole('button', { name: 'Let’s chat' });
        this.applyNowBtn = page.getByRole('button', { name: 'Apply now' });
        this.joinForceBtn = page.getByRole('button', { name: 'Join forces' });
    }
    public async goTo_Home() {
        await this.page.goto(this.url);
    }
    public async goTo_Service() {
        await this.page.goto("https://test.aqilea.com/services");
    }
    public async click_GetInTouch_Button() {
        await this.goTo_Home();
        await this.getInTouchbtn.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/contact-us");
        await expect(this.page.getByRole('heading', { name: 'Hey, don’t be a stranger' })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'Hey, don’t be a stranger' })).toHaveText('Hey, don’t be a stranger');
        await expect(this.page.getByRole('heading', { name: 'Hey, don’t be a stranger' })).toHaveCSS('font-weight', '700');
        await expect(this.page.getByRole('heading', { name: 'Hey, don’t be a stranger' })).toHaveClass('relative self-stretch font-bold text-[#282828] lg:text-[54px] md:text-[34px] text-[28px] md:leading-[44px] leading-[33px] lg:leading-[64.8px]');
    }
    public async click_Spotlight1() {
        await this.spotlightlink1.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/blog/spotlight")
    }
    public async click_Spotlight2() {
        await this.spotlightlink2.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/blog/spotlight")
    }
    public async click_Spotlight3() {
        await this.spotlightlink3.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/blog/spotlight")
    }
    public async click_ReadMoreBtn1() {
        await this.readMorebtn1.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/blog/spotlight/soltia-rebranding-to-aqilea-press-release");
    }
    public async click_ReadMoreBtn2() {
        await this.readMorebtn2.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/blog/spotlight/aqilea-ab-expands-presence-in-india");
    }
    public async click_ReadMoreBtn3() {
        await this.readMorebtn3.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/blog/spotlight/gasell-prize-2022");
    }
    public async click_LetsTalk() {
        await this.letsTalkbtn.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/contact-us");
    }
    public async click_Our_Services() {
        await this.itServices.click();
        await this.industrialServices.isDisabled();
        await this.frontEndDevelopmentTxt.isVisible();
        await this.industrialServices.click();
        await this.itServices.isDisabled();
        await this.AutomationTxt.isVisible();
    }
    public async click_Lets_chat() {
        await this.letsChatBtn.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/contact-us");
    }
    public async click_Apply_Now() {
        await this.applyNowBtn.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/career");
    }
    public async click_Join_Forces() {
        await this.joinForceBtn.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/become-partner");
    }
}

export default Home;
