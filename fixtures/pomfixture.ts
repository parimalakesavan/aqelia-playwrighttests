import { test as base, expect, Page, BrowserContext } from '@playwright/test';
import Home from '../pages/homepage';
import AboutUs from '../pages/aboutuspage';
import Service from '../pages/servicepage';
import BecomeAPartner from '../pages/becomeapartnerpage';
import Footer from '../pages/footerlink';
import subMenu from '../pages/menulink';
import VissionMission from '../pages/vissionmissionpage';
import BlogPage from '../pages/blogpage';
import CareerPage from '../pages/careerpage';
import ContactUS from '../pages/contactuspage';
import PressRelease from '../pages/aqilea-press-releasepage';
import PopularPage from '../pages/popularpage';
import GazellPrize from '../pages/gazellprize';
import India from '../pages/indiapage';
import IndustryPage from '../pages/industrypage';
import LivingInSweden from '../pages/livinginSweden';
import LifeAtAqilea  from '../pages/lifeAtAqileapage';
import OurHistory from '../pages/ourhistorypage';
import PresenceInIndia from '../pages/presence-in-indiapage';
type MyFixtures = {
  navigateIndiaLink:India;
  navigateHomeLink: Home;
  aboutUsLink: AboutUs;
  navigateServiceLink: Service;
  becomeAPartnerLink: BecomeAPartner;
  navigatefooterLink: Footer;
  navigateMenuLink: subMenu;
  vissionMissionLink: VissionMission;
  navigateBlogLink: BlogPage;
  careerPage:CareerPage;
  navigateContactUsLink:ContactUS;
  navigateGazellPrizeLink:GazellPrize;
  navigatePressReleaseLink:PressRelease;
  navigatePopularLink:PopularPage;
  navigateIndustryLink:IndustryPage;
  navigateLivinginSwedenLink:LivingInSweden;
  navigateLifeAtAqileaLink:LifeAtAqilea;
  ourhistory:OurHistory;
  navigatePresenceInIndiaLink:PresenceInIndia;

};
export const test = base.extend<MyFixtures>({
  navigateHomeLink: async ({ page }, use) => {
    await use(new Home(page));
  },
  aboutUsLink: async ({ page }, use) => {
    await use(new AboutUs(page));
  },
  navigateServiceLink: async ({ page }, use) => {
    await use(new Service(page));
  },
  becomeAPartnerLink: async ({ page }, use) => {
    await use(new BecomeAPartner(page));
  },
  navigatefooterLink: async ({ page }, use) => {
    await use(new Footer(page));
  },
  navigateMenuLink: async ({ page }, use) => {
    await use(new subMenu(page));
  },
  vissionMissionLink: async ({ page }, use) => {
    await use(new VissionMission(page));
  },
  navigateBlogLink: async ({ page }, use) => {
    await use(new BlogPage(page));
  },
  careerPage:async ({ page }, use) => {
    await use(new CareerPage(page));
  },
  navigateContactUsLink:async ({ page }, use) => {
    await use(new ContactUS(page));
  },
  navigateGazellPrizeLink:async ({ page }, use) => {
    await use(new GazellPrize(page));
  },
  navigatePressReleaseLink:async ({ page }, use) => {
    await use(new PressRelease(page));
  },
  navigatePopularLink:async ({ page }, use) => {
    await use(new PopularPage(page));
  },
  navigateIndiaLink:async({ page }, use) => {
    await use(new India(page));
  },
  navigateIndustryLink:async({ page }, use) => {
    await use(new IndustryPage(page));
  },
  navigateLivinginSwedenLink:async({ page }, use) => {
    await use(new LivingInSweden(page));
  },
  navigateLifeAtAqileaLink:async({ page }, use) => {
    await use(new LifeAtAqilea(page));
  }, 
  ourhistory:async({ page }, use) => {
    await use(new OurHistory(page));
  }, 
  navigatePresenceInIndiaLink:async({ page }, use) => {
    await use(new PresenceInIndia(page));
  }, 
});

