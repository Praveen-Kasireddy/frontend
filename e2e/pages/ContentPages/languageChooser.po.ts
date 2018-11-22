import { browser, by, element, ExpectedConditions } from 'protractor';

const NavigationPage = requirePO('navigationBar/navigationBar');


const closeButton = element(by.css('i.dx-icon.dx-icon-close'));
const dialog = element(by.xpath('/html/body/div[2]/div')); // Popup

const langDE = element(by.xpath('(//a[text() = "Deutsch"])'));
const langUK = element(by.xpath('(//a[text() = "English (UK)"])'));
const langUS = element(by.xpath('(//a[text() = "English (US)"])'));
const langFR = element(by.xpath('(//a[text() = "Français (France)"])'));
const langES = element(by.xpath('(//a[text() = "Español (España)"])'));
const langIT = element(by.xpath('(//a[text() = "Italiano"])'));
const langCH = element(by.xpath('(//a[text() = "中文(简体)"])'));
const submitButton = element(by.xpath('(//span[text() = "Done"])[1]'));


const LanguagePage = Object.create(NavigationPage, {

    getLangDE: { get: function () { return langDE; } },
    getLangUK: { get: function () { return langUK; } },
    getLangUS: { get: function () { return langUS; } },
    getLangFR: { get: function () { return langFR; } },
    getLangES: { get: function () { return langES; } },
    getLangIT: { get: function () { return langIT; } },
    getLangCH: { get: function () { return langCH; } },


    getDialog: { get: function () { return this.waitForElement(dialog); }},
    getCloseButton: { get: function () { return this.waitForElement(closeButton); }},
    getSubmitButton: { get: function () { return this.waitForElement(submitButton); }},

    /* Mapping -> from this. to parent page object */
    openWebsite: { value: function() { NavigationPage.openWebsite.call(this, ''); }},
    wait: { value: function(wait) { return NavigationPage.wait.call(this, wait); }},
    waitForElement: { value: function(selector, waitFor) { return NavigationPage.waitForElement.call(this, selector, waitFor); }},
    getLanguageMenuButton: { value: function() { return NavigationPage.getLanguageMenuButton.call(this); }},

});

module.exports = LanguagePage;
