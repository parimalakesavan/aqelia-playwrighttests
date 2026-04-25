import { expect, type Locator, type Page } from '@playwright/test';
export class Menu {
    readonly page: Page;
    readonly menuHomeLink: Locator;
    readonly menuServiceLink: Locator;
    readonly menuAboutUsLink: Locator;
    readonly menuNewsLink: Locator;
    readonly menuLifeAtAqileaLink: Locator;
    readonly menuBecomeAPartnerLink: Locator;
    readonly menuJoinUsLink: Locator;
    readonly menuContactUsLink: Locator;
    constructor(page: Page) {
        this.page = page;
        this.menuHomeLink = page.getByRole('link', { name: 'logo', exact: true });
        this.menuServiceLink = page.locator("a[class*='text-base']").first();
        this.menuAboutUsLink = page.getByRole('link', { name: 'About Us', exact: true });
        this.menuNewsLink = page.getByLabel('Global').getByRole('link', { name: 'News' });
        this.menuLifeAtAqileaLink = page.getByRole('link', { name: 'Life at aqilea', exact: true });
        this.menuBecomeAPartnerLink = page.getByRole('link', { name: 'Become a Partner', exact: true });
        this.menuJoinUsLink = page.getByRole('button', { name: 'Join Us' });
        this.menuContactUsLink = page.getByRole('button', { name: 'Contact Us' });
    }
    async goTo() {
        await this.page.goto("https://test.aqilea.com/");
    }
    async click_Menu_Home() {
        await this.goTo();
        await this.menuHomeLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/");
    }
    async click_Menu_Services() {
        await this.goTo();
        await this.menuServiceLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/services");
    }
    async click_Menu_AboutUs() {
        await this.goTo();
        await this.menuAboutUsLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/about-us");
    }
    async click_Menu_News() {
        await this.goTo();
        await this.menuNewsLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/news");
    }
    async click_Menu_LifeAtAqilea() {
        await this.goTo();
        await this.menuLifeAtAqileaLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/life-at-aqilea");
    }
    async click_Menu_BecomeAPartner() {
        await this.goTo();
        await this.menuBecomeAPartnerLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/become-partner");
    }
    async click_Menu_JoinUs() {
        await this.goTo();
        await this.menuJoinUsLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/career");
    }
    async click_Menu_ContactUs() {
        await this.goTo();
        await this.menuContactUsLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/contact-us");
    }
}
export class subMenu extends Menu {
    readonly page: Page;
    readonly submenuVisionMissionLink: Locator;
    readonly submenuHistoryLink: Locator;
    readonly submenuIndiaLink: Locator;
    readonly submenuOurCultureLink: Locator;
    readonly submenuLivingInSweden: Locator;
    readonly submenuITServices: Locator;
    readonly submenuIndustrialServices: Locator;
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.submenuVisionMissionLink = page.getByRole('link', { name: 'Vision & mission' });
        this.submenuHistoryLink = page.getByRole('link', { name: 'Our history' });
        this.submenuIndiaLink = page.getByRole('link', { name: 'India' });
        this.submenuOurCultureLink = page.getByRole('link', { name: 'Our Culture' });
        this.submenuLivingInSweden = page.getByRole('link', { name: 'Living in Sweden' });
        this.submenuITServices=page.getByRole('link', { name: 'It Services' });
        this.submenuIndustrialServices=page.getByLabel('Global').getByRole('link', { name: 'Industrial Services' });
    }
    async click_AboutUs_SubMenu() {
        await this.goTo();
        await this.menuAboutUsLink.hover();
        await this.submenuVisionMissionLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/vision-mission");
        await this.menuAboutUsLink.hover();
        await this.submenuHistoryLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/our-history");
        await this.menuAboutUsLink.hover();
        await this.submenuIndiaLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/india");
    }
    async click_News_SubMenu() {
        await this.goTo();
        await this.menuNewsLink.hover();
        await this.submenuVisionMissionLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/vision-mission");
        await this.menuNewsLink.hover();
        await this.submenuHistoryLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/our-history");
        await this.menuNewsLink.hover();
        await this.submenuIndiaLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/india");
    }
    async click_Lifeataqilea_SubMenu() {
        await this.goTo();
        await this.menuLifeAtAqileaLink.hover();
        await this.submenuLivingInSweden.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/living-in-sweden");
        //await this.menuLifeAtAqileaLink.hover();
        //await this.submenuOurCultureLink.click();
       // await expect(this.page).toHaveURL("https://test.aqilea.com/our-culture");
    }
    async click_Services_SubMenu() {
        await this.goTo();
        await this.menuServiceLink.hover();
        await this.submenuITServices.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/services/it-services");
        await this.menuServiceLink.hover();
        await this.submenuIndustrialServices.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/services/industrial-services");
    }
}
export default subMenu;

