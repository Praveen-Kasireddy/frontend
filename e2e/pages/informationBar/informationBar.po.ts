import { by, element } from 'protractor';

const NavigationPage = requirePO('navigationBar/navigationBar');

const textBox1HeadLine = element(by.xpath('//kosmos-project-list/kosmos-sidebar/div/div/div/div/div[2]/div'));
const textBox1 = element(by.xpath('(//kosmos-project-list/kosmos-sidebar/div/div/div/div/div[2]/div/h2[1]'));
const textBox2HeadLine = element(by.xpath(''));
const textBox2 = element(by.xpath(''));
const textBox3HeadLine = element(by.xpath(''));
const textBox3 = element(by.xpath(''));
const textBox4HeadLine = element(by.xpath(''));
const textBox4 = element(by.xpath(''));
// const updateProjectButton = element(by.xpath('(//span[text() = "Update project"])'));
const updateProjectButton =
    element(by.xpath('(//dx-button[contains(@class, "sidebar-bottom button dx-button dx-button-normal dx-widget")])[1]'));

const InfoPage = Object.create(NavigationPage, {

    getUpdateProjectButton: { get: function () { return updateProjectButton; } },
    getDialog: { get: function () { return dialog; } },
    getLangDE: { get: function () { return langDE; } },
    getLangUK: { get: function () { return langUK; } },
    getLangUS: { get: function () { return langUS; } },
    getLangFR: { get: function () { return langFR; } },
    getLangES: { get: function () { return langES; } },
    getLangIT: { get: function () { return langIT; } },
    getLangCH: { get: function () { return langCH; } },

    getSubmitButton: { get: function () { return submitButton; } },
    getCloseButton: { get: function () { return closeButton; } },

    waitForElement: { value: function() {
        NavigationPage.openWebsite.call(this, '');
    }},

    openWebsite: { value: function() {
        NavigationPage.openWebsite.call(this, '');
    }},

    getLanguageMenuButton: { value: function() {
        return NavigationPage.getLanguageMenuButton.call(this);
    }},

});

module.exports = InfoPage;
