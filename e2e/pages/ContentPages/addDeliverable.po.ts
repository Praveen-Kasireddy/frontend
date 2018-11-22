import { by, element } from 'protractor';

const NavigationPage = requirePO('navigationBar/navigationBar');


/* Elements */
const dialog = element(by.xpath('/html/body/div[2]/div')); // Popup
const headlineDeliverable = element(by.xpath('(//div[text() = "CHOOSE DELIVERABLES"])'));
const searchInput = element(by.xpath('(//input[@class="dx-texteditor-input"])'));

const parentI = element(by.xpath('(//span[text() = "Mergers & Acquisitions"])'));
const narrowI = element(by.xpath('(//div[@class="dx-treeview-toggle-item-visibility dx-treeview-toggle-item-visibility-opened"])[1]'));
const narrowClosedI = element(by.xpath('(//div[@class="dx-treeview-toggle-item-visibility"])[1]'));

const debtAdvisory = element(by.xpath('(//span[text() = "Debt Advisory"])'));

const parentII = element(by.xpath('(//span[text() = "Restructuring"])'));
const narrowII = element(by.xpath('(//div[@class="dx-treeview-toggle-item-visibility dx-treeview-toggle-item-visibility-opened"])[1]'));
const parentIII = element(by.xpath('(//span[text() = "Strategy"])'));
const narrowIII = element(by.xpath('(//div[@class="dx-treeview-toggle-item-visibility dx-treeview-toggle-item-visibility-opened"])[1]'));
const parentIV = element(by.xpath('(//span[text() = "Transaction Services"])'));
const narrowIV = element(by.xpath('(//div[@class="dx-treeview-toggle-item-visibility dx-treeview-toggle-item-visibility-opened"])[1]'));
const parentV = element(by.xpath('(//span[text() = "Valuation"])'));
const narrowV = element(by.xpath('(//div[@class="dx-treeview-toggle-item-visibility dx-treeview-toggle-item-visibility-opened"])[1]'));

const hookElementIsSelected = element(by.xpath('(//span[@class="kpmg-icon-check selected"])'));
const doneButton = element(by.id('doneDeliv'));

const delDeliverable = element(by.xpath('(//div[@class="kpmg-icon-remove xButton"])[1]'));
const yesButton = element(by.xpath('(//span[text() = "Yes"])'));
const noButton = element(by.xpath('(//span[text() = "No"])'));

const headProjectScope = element(by.xpath('(//div[text() = " Project Scope"])'));
const addDeliverable = element(by.id('addDeliv'));

/* Elements */
const DeliverablePage = Object.create(NavigationPage, {

    // getDialog: { get: function () { return this.waitForElement(dialog); } },
    getDialogDeliverable: { get: function () { return dialog; } },
    getHeadlineDeliverable: { get: function () { return headlineDeliverable; } },
    getSearchInput: { get: function () { return searchInput; } },

    getParentI: { get: function () { return parentI; } },
    getNarrowI: { get: function () { return narrowI; } },
    getNarrowClosedI: { get: function () { return narrowClosedI; } },
    getDebtAdvisory: { get: function () { return debtAdvisory; } },
    getParentII: { get: function () { return parentII; } },
    getNarrowII: { get: function () { return narrowII; } },
    getParentIII: { get: function () { return parentIII; } },
    getNarrowIII: { get: function () { return narrowIII; } },
    getParentIV: { get: function () { return parentIV; } },
    getNarrowIV: { get: function () { return narrowIV; } },
    getParentV: { get: function () { return parentV; } },
    getNarrowV: { get: function () { return narrowV; } },

    getHookElementIsSelected: { get: function () { return hookElementIsSelected; } },
    getDoneButton: { get: function () { return doneButton; } },

    getDelDeliverable: { get: function () { return delDeliverable; } },
    getYesButton: { get: function () { return yesButton; } },
    getNoButton: { get: function () { return noButton; } },

    getHeadProjectScope: { get: function () { return headProjectScope; } },
    getAddDeliverable: { get: function () { return addDeliverable; } },

    /* Mapping -> from this. to parent page object */
    openWebsite: { value: function() { NavigationPage.openWebsite.call(this, ''); }},
    waitForElement: { value: function(selector, waitFor) {  NavigationPage.waitForElement.call(this, selector, waitFor); }},
    getLanguageMenuButton: { value: function() { return NavigationPage.getProjectSetupButton.call(this); }},

});

module.exports = DeliverablePage;
