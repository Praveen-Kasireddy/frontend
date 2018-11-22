import { by, element } from 'protractor';

const NavigationPage = requirePO('navigationBar/navigationBar');

/* Labels */
const stakeholderToolbar = element(by.xpath('(//div[@class="dx-item-content dx-toolbar-item-content"])[1]'));

/* Elements */
const addStakeholder = element(by.tagName('kosmos-new-stakeholder'));
const firstNameTxTbox = element(by.xpath('(//input[@name="stakeholderFirstName"])'));
const lastNameTxTbox = element(by.xpath('(//input[@name="stakeholderLastName"])'));
const jobtitleTxTbox = element(by.xpath('(//input[@name="stakeholderJobTitle"])'));
const companyNameTxTbox = element(by.xpath('(//input[@name="StakeholderCompany"])'));
const emailAddressTxTbox = element(by.xpath('(//input[@name="StakeholderEmail"])'));
const phoneNumberTxTbox = element(by.xpath('(//input[@name="StakeholderPhone"])'));
const addAnotherButton = element(by.xpath('(//span[text() = "Add another"])[1]'));
const doneButton = element(by.xpath('(//span[text() = "Done"])[1]'));
const getStakeholder = element(by.xpath('(//p[text() = " Testing Company GmbH"])[1]'));

/* Elements */
const StakeholderPage = Object.create(NavigationPage, {

    getAddStakeholder: { get: function () { return addStakeholder; } },
    getStakeholderToolbar: { get: function () { return stakeholderToolbar; } },
    getFirstNameTxTbox: { get: function () { return firstNameTxTbox; } },
    getLastNameTxTbox: { get: function () { return lastNameTxTbox; } },
    getJobtitleTxTbox: { get: function () { return jobtitleTxTbox; } },
    getCompanyNameTxTbox: { get: function () { return companyNameTxTbox; } },
    getEmailAddressTxTbox: { get: function () { return emailAddressTxTbox; } },
    getPhoneNumberTxTbox: { get: function () { return phoneNumberTxTbox; } },
    getAddAnotherButton: { get: function () { return addAnotherButton; } },
    getDoneButton: { get: function () { return doneButton; } },
    getGetStakeholder: { get: function () { return getStakeholder; } },

    /* Mapping -> from this. to parent page object */
    openWebsite: { value: function() { NavigationPage.openWebsite.call(this, ''); }},
    waitForElement: { value: function(selector, waitFor) {  NavigationPage.waitForElement.call(this, selector, waitFor); }},
    getLanguageMenuButton: { value: function() { return NavigationPage.getProjectSetupButton.call(this); }},

});

module.exports = StakeholderPage;
