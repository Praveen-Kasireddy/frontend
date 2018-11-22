import { by, element } from 'protractor';

const NavigationPage = requirePO('navigationBar/navigationBar');

/* Labels */
const miniProjectToolbar = element(by.xpath('(//div[@class="dx-item-content dx-toolbar-item-content"])[1]'));
const projectListHeadline = element(by.xpath('(//div[@class="header-subtitle ng-star-inserted"])'));
const projectNameLabel = element(by.xpath('(//label[@_ngcontent-c18=""])[1]'));
const clientNameLabel = element(by.xpath('(//label[@_ngcontent-c18=""])[2]'));
const targetNameLabel = element(by.xpath('(//label[@_ngcontent-c18=""])[3]'));
const startDateLabel = element(by.xpath('(//label[@_ngcontent-c18=""])[4]'));
const endDateLabel = element(by.xpath('(//label[@_ngcontent-c18=""])[5]'));
const projectFeesLabel = element(by.xpath('(//label[@_ngcontent-c18=""])[6]'));
const daContactsLabel = element(by.xpath('(//label[@_ngcontent-c18=""])[7]'));
const yourBriefingLabel = element(by.xpath('(//label[@_ngcontent-c18=""])[8]'));
const sellSide = element(by.xpath('(//div[@class="dx-item-content"])[1]'));
const buySide = element(by.xpath('(//div[@class="dx-item-content"])[2]'));
const otherSide = element(by.xpath('(//div[@class="dx-item-content"])[3]'));

/* Elements */
const createNewProject = element(by.id('createNewProject'));
const projectNameTxtbox = element(by.xpath('(//input[@class="dx-texteditor-input"])[1]'));
const projectNameTxtboxPlH = element(by.xpath('(//div[@class="dx-placeholder"])[1]'));
const clientNameTxtbox = element(by.xpath('(//input[@class="dx-texteditor-input"])[2]'));
const clientNameTxtboxPlH = element(by.xpath('(//div[@class="dx-placeholder"])[2]'));
const targetNameTxtbox = element(by.xpath('(//input[@class="dx-texteditor-input"])[3]'));
const targetNameTxtboxPlH = element(by.xpath('(//div[@class="dx-placeholder"])[3]'));
const dacontactsTxtbox = element(by.xpath('(//input[@class="dx-texteditor-input"])[7]'));
const dacontactsTxtboxPlH = element(by.xpath('(//div[@class="dx-placeholder"])[7]'));
const dacontactsListElementMB = element(by.xpath('(//div[text() = "DE-TA-TFSAutoKosmos1 DE-TA-TFSAutoKosmos1"])'));
const sellSideRadio = element(by.xpath('(//div[@class="dx-item-content" and text() = "Buy Side"])'));
const startDatePicker = element(by.xpath('(//div[@class="dx-button-content"])[2]'));
const startDate = element(by.xpath('(//span[text() = "11"])[1]'));
const endDatePicker = element(by.xpath('(//div[@class="dx-button-content"])[3]'));
const endDate = element(by.xpath('(//span[text() = "21"])[1]'));
const projectFees = element(by.xpath('(//div[@class="dx-dropdowneditor-icon"])[3]'));
const projectFeesMore = element(by.xpath('(//div[text() = "> 250,000"])'));
const projectFeesbetween = element(by.xpath('(//div[text() = "100,000 < x < 250,000"])'));
const projectFeesLees = element(by.xpath('(//div[text() = "< 100,000"])'));
const yourBriefingTxtarea = element(by.xpath('(//textarea[@class="dx-texteditor-input"])[1]'));
const startProjectButtonClass = element(by.xpath('(//div[@class="dx-item dx-toolbar-item dx-toolbar-button"])[2]'));
const startProjectButton = element(by.id('startProject'));
const invalidMessage = element(by.xpath('(//div[@class="dx-overlay-content dx-resizable"])[1]'));
const getProject = element(by.xpath('(//div[@class="inner"])[2]'));

/* Elements */
const NewProjectPage = Object.create(NavigationPage, {

    getMiniProjectToolbar: { get: function () { return miniProjectToolbar; } },
    getProjectListHeadline: { get: function () { return projectListHeadline; } },
    getProjectNameLabel: { get: function () { return projectNameLabel; } },
    getClientNameLabel: { get: function () { return clientNameLabel; } },
    getTargetNameLabel: { get: function () { return targetNameLabel; } },
    getStartDateLabel: { get: function () { return startDateLabel; } },
    getEndDateLabel: { get: function () { return endDateLabel; } },
    getProjectFeesLabel: { get: function () { return projectFeesLabel; } },
    getDaContactsLabel: { get: function () { return getProject; } },
    getYourBriefingLabel: { get: function () { return yourBriefingLabel; } },
    getSellSide: { get: function () { return sellSide; } },
    getBuySide: { get: function () { return buySide; } },
    getOtherSide: { get: function () { return otherSide; } },

    getCreateNewProject: { get: function () { return createNewProject; } },
    getProjectNameTxtbox: { get: function () { return projectNameTxtbox; } },
    getProjectNameTxtboxPlH: { get: function () { return projectNameTxtboxPlH; } },
    getClientNameTxtbox: { get: function () { return clientNameTxtbox; } },
    getClientNameTxtboxPlH: { get: function () { return clientNameTxtboxPlH; } },
    getTargetNameTxtbox: { get: function () { return targetNameTxtbox; } },
    getTargetNameTxtboxPlH: { get: function () { return targetNameTxtboxPlH; } },
    getDacontactsTxtbox: { get: function () { return dacontactsTxtbox; } },
    getDacontactsTxtboxPlH: { get: function () { return dacontactsTxtboxPlH; } },
    getDacontactsListElementMB: { get: function () { return dacontactsListElementMB; } },
    getSellSideRadio: { get: function () { return sellSideRadio; } },
    getStartDatePicker: { get: function () { return startDatePicker; } },
    getStartDate: { get: function () { return startDate; } },
    getEndDatePicker: { get: function () { return endDatePicker; } },
    getEndDate: { get: function () { return endDate; } },
    getProjectFees: { get: function () { return projectFees; } },
    getProjectFeesMore: { get: function () { return projectFeesMore; } },
    getProjectFeesbetween: { get: function () { return projectFeesbetween; } },
    getProjectFeesLees: { get: function () { return projectFeesLees; } },
    getYourBriefingTxtarea: { get: function () { return yourBriefingTxtarea; } },
    getStartProjectButtonClass: { get: function () { return startProjectButtonClass; } },
    getStartProjectButton: { get: function () { return startProjectButton; } },
    getInvalidMessage: { get: function () { return invalidMessage; } },
    getGetProject: { get: function () { return getProject; } },

    /* Mapping -> from this. to parent page object */
    openWebsite: { value: function() { NavigationPage.openWebsite.call(this, ''); }},
    waitForElement: { value: function(selector, waitFor) {  NavigationPage.waitForElement.call(this, selector, waitFor); }},
    getLanguageMenuButton: { value: function() { return NavigationPage.getProjectSetupButton.call(this); }},

});

module.exports = NewProjectPage;
