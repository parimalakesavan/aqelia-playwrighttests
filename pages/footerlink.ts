import { expect, type Locator, type Page } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
export class Footer {
    readonly page: Page;
    readonly footerHomeLink: Locator;
    readonly footerITLink: Locator;
    readonly footerAboutUsLink: Locator;
    readonly footerNewsLink: Locator;
    readonly footerLifeAtAqileaLink: Locator;
    readonly footerBecomeAPartnerLink: Locator;
    readonly footerJoinUsLink: Locator;
    readonly footerHireUsLink: Locator;
    readonly footerPhoneLink: Locator;
    readonly footerEmailLink:Locator;
    readonly footerAddressLink:Locator;
    readonly footerITServicesLink:Locator;
    readonly footerIndustrialServicesLink:Locator;
    readonly footerYourEmailLink:Locator;
    readonly footerSubmitButton:Locator;
    readonly footerLinkedin:Locator;
    readonly footerFacebook:Locator;
    readonly footerTwitter:Locator;
    readonly footercookiePolicy:Locator;
    readonly footerprivacyPolicy:Locator;
    constructor(page: Page) {
        this.page = page;
        this.footerHomeLink = page.getByRole('img', { name: 'aqilea logo' });
        this.footerPhoneLink =page.getByRole('link', { name: 'info logo +46 (0) 8605 82' });
        this.footerEmailLink =page.getByRole('link', { name: 'info logo Loading...' });
        this.footerAddressLink =page.getByRole('link', { name: 'info logo Fredsborgsgatan 24' });
        this.footerAboutUsLink = page.locator('footer').getByRole('link', { name: 'About us', exact: true });
        this.footerNewsLink = page.locator('footer').getByRole('link', { name: 'News' });
        this.footerLifeAtAqileaLink = page.locator('div').filter({ hasText: /^Life at Aqilea$/ });
        this.footerBecomeAPartnerLink = page.getByRole('link', { name: 'Become a partner', exact: true });
        this.footerJoinUsLink = page.getByRole('link', { name: 'Join Us',exact: true } );
        this.footerHireUsLink = page.getByRole('link', { name: 'Hire Us' });
        this.footerITServicesLink =page.getByRole('link', { name: 'IT', exact: true });
        this.footerIndustrialServicesLink=page.getByRole('link', { name: 'Industrial Services' });
        this.footerYourEmailLink=page.getByPlaceholder('Your Email', { exact: true });
        this.footerSubmitButton=page.locator('div').filter({ hasText: /^NewsletterSubmit$/ }).getByRole('button');
        this.footerLinkedin=page.getByRole('link', { name: 'vector social icons' }).nth(1);
        this.footerTwitter=page.getByRole('link', { name: 'vector social icons' }).first();
        this.footercookiePolicy=page.getByRole('link', { name: 'Cookie policy', exact: true });
        this.footerprivacyPolicy=page.getByRole('link', { name: 'Privacy policy', exact: true });

    }
    async goTo() {
        await this.page.goto("https://test.aqilea.com/home");
    }
    async click_footer_Home() {
        await this.goTo();
        await this.footerHomeLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/home");
    }
    async click_footer_Phone() {
        await this.goTo();
        await this.footerPhoneLink.click();
    }
    async click_footer_Email() {
        await this.goTo();
        await this.footerEmailLink.click();
    }
    async click_footer_Address() {
        await this.goTo();
        await this.footerAddressLink.click();
    }

    async click_IT_Services() {
        await this.goTo();
        await this.footerITServicesLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/services/it-services");

    }
    async click_Industrial_Services() {
        await this.goTo();
        await this.footerIndustrialServicesLink.click();
    }

    async click_footer_AboutUs() {
        await this.goTo();
        await this.footerAboutUsLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/about-us");
    }
    async click_footer_News() {
        await this.goTo();
        await this.footerNewsLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/news");
    }
    async click_footer_LifeAtAqilea() {
        await this.goTo();
        await this.footerLifeAtAqileaLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/life-at-aqilea");
    }
    async click_footer_BecomeAPartner() {
        await this.goTo();
        await this.footerBecomeAPartnerLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/become-partner");
    }
    async click_footer_JoinUs() {
        await this.goTo();
        await this.footerJoinUsLink.click();
        await expect(this.page).toHaveURL("https://test.aqilea.com/career");
    }
    async click_footer_HireUs() {
        await this.goTo();
        await this.footerHireUsLink.click();
    }
    async click_footer_Newsletter() {
        let userData = JSON.parse(fs.readFileSync(path.resolve('/Users/parimalakesavan/aqilea playwright/aqilea-website-test/pages', 'userData.json'), 'utf-8'));
        await this.goTo();
        await this.footerYourEmailLink.fill(userData.userEmail);
        await this.footerSubmitButton.click();
    }
    async click_footer_SocialMedia() {
        await this.goTo();
        await this.footerLinkedin.click();
        await this.goTo();
        await this.footerTwitter.click();
    }
    async click_footer_Policy() {
        await this.goTo();
        await this.footercookiePolicy.click();
        await this.footerprivacyPolicy.click();
    }
}
export default Footer;