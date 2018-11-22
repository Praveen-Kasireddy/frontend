import { by, element } from 'protractor';

const NavigationPage = requirePO('navigationBar/navigationBar');

/* Elements */
const fileUpload = element(by.xpath('(//a[@class="webix_list_item"])[3]'));
const fileManagerButton = element(by.xpath('(//div[@class="webix_fmanager_bar_icon "])[1]'));
const fileManagerHeadline = element(by.xpath('(//div[text() = " Source Data"])'));
const uploadedFile = element(by.xpath('(//div[text() = "002_Beispiel_1.xlsx"])[1]'));

/* Elements */
const DataSourcePage = Object.create(NavigationPage, {

    getFileUpload: { get: function () { return fileUpload; } },
    getFileManagerButton: { get: function () { return fileManagerButton; } },
    getFileManagerHeadline: { get: function () { return fileManagerHeadline; } },
    getUploadedFile: { get: function () { return uploadedFile; } },

    /* Mapping -> from this. to parent page object */
    openWebsite: { value: function() { NavigationPage.openWebsite.call(this, ''); }},
    waitForElement: { value: function(selector, waitFor) {  NavigationPage.waitForElement.call(this, selector, waitFor); }},
    getLanguageMenuButton: { value: function() { return NavigationPage.getProjectSetupButton.call(this); }},

});

module.exports = DataSourcePage;
