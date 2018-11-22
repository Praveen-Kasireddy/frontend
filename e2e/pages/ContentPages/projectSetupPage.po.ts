import { browser, by, element, ExpectedConditions } from 'protractor';

const NavigationPage = requirePO('navigationBar/navigationBar');

/* Page elements */
const headProjectSetup = element(by.xpath('(//div[text() = " Project Setup"])'));
const updateProjectButton = element(by.xpath('(//dx-button[@aria-label="Update project"])'));
const engagementBox = element(by.xpath('(//dx-text-box[contains(@class, "engagement ")]/div/input)'));

/* Legal Entities */
const legalCompanyName = element(by.xpath('(//input[@name="companyName"])'));
const legalCompanyAbbrev = element(by.xpath('(//input[@name="abbreviation"])'));
const legalAddButton = element(by.xpath('(//div[@class="fl-right add-button"])'));

const ProjectSetupPage = Object.create(NavigationPage, {

    getHeadProjectSetup: { get: function () { return headProjectSetup; } },
    getUpdateProjectButton: { get: function () { return updateProjectButton; } },
    getEngagementBox: { get: function () { return engagementBox; } },
    getLegalCompanyName: { get: function () { return legalCompanyName; } },
    getLegalCompanyAbbrev: { get: function () { return legalCompanyAbbrev; } },
    getLegalAddButton: { get: function () { return legalAddButton; } },

    /* Mapping -> from this. to parent page object */
    openWebsite: { value: function () { NavigationPage.openWebsite.call(this, ''); } },
    waitForElement: { value: function (selector, waitFor) { NavigationPage.waitForElement.call(this, selector, waitFor); } },
    getProjectSetupButton: { value: function () { return NavigationPage.getProjectSetupButton.call(this); } },

});

module.exports = ProjectSetupPage;
