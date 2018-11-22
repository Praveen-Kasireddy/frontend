import { browser, by, element } from 'protractor';

/* Header */
const headerFile = element(by.xpath('(//div[@_ngcontent-c13=""]/div[@class="header-subtitle"])'));
const headerFile_text = "003_Beispiel_2.xlsx";

/* Buttons */
const previewButton = element(by.xpath('(//div[@_ngcontent-c26=""]/div[text() = "Preview"])'));
const approvalButton = element(by.xpath('(//div[@_ngcontent-c26=""]/div[text() = "Approval"])'));
const downloadButton = element(by.xpath('(//div[@_ngcontent-c26=""]/a[text() = "Download Original"])'));

/* Data */
const number0308 = element(by.xpath('(//div[@column="3"]/div[@aria-rowindex="8"])'));
const data0308 = "817,8";
const number0408 = element(by.xpath('(//div[@column="4"]/div[@aria-rowindex="8"])'));
const data0408 = "819,2";
const number0309 = element(by.xpath('(//div[@column="3"]/div[@aria-rowindex="9"])'));
const data0309 = "522,5";
const number0409 = element(by.xpath('(//div[@column="4"]/div[@aria-rowindex="9"])'));
const data0409 = "524,5";
const number0708 = element(by.xpath('(//div[@column="7"]/div[@aria-rowindex="8"])'));
const data0708 = "827,2";

const month0303 = element(by.xpath('(//div[@column="3"]/div[@aria-rowindex="3"])'));
const monthString0303 = "Oktober";
const month0403 = element(by.xpath('(//div[@column="4"]/div[@aria-rowindex="3"])'));
const monthString0403 = "November";

/* Popup */
const radioButtonData = element(by.xpath('(//div[@class="dx-item dx-radiobutton dx-radiobutton-checked"])')); // checked in case of number
const radioButtonText = element(by.xpath('(//div[@class="dx-item dx-radiobutton dx-radiobutton-checked"]/div[text() = "Data Point"])'));

const addLegalButton    = element(by.xpath('(//div[@class="firstRow"]/div[@id="addButton"])[1]')); // add Button Legal Entity
const addTimeButton     = element(by.xpath('(//div[@class="firstRow"]/div[@class="material-icons add"])[2]')); // add Button Time Entity
const addUnitButton     = element(by.xpath('(//div[@class="firstRow"]/div[@class="material-icons add"])[3]')); // add Button Unit
const addQualityButton  = element(by.xpath('(//div[@class="firstRow"]/div[@class="material-icons add"])[4]')); // add Button Quality

const legalItem01 = element(by.xpath('(//ul[@_ngcontent-c19=""]/li[@_ngcontent-c19=""])[1]')); // first Legal Entity
const legalItem02 = element(by.xpath('(//ul[@_ngcontent-c19=""]/li[@_ngcontent-c19=""])[2]')); // 2nd Legal Entity

const timeItem02 = element(by.xpath('(//ul[@_ngcontent-c19=""]/li[@_ngcontent-c19=""])[2]'));  // 2nd Time item
const timeItem10 = element(by.xpath('(//ul[@_ngcontent-c19=""]/li[@_ngcontent-c19=""])[10]')); // 10th Time item

const unitItem01 = element(by.xpath('(//ul[@_ngcontent-c19=""]/li[@_ngcontent-c19=""])[1]'));  // 1st Unit item == EUR
const unitItem02 = element(by.xpath('(//ul[@_ngcontent-c19=""]/li[@_ngcontent-c19=""])[2]'));  // 2nd Unit item == USD

const qualityItem01 = element(by.xpath('(//ul[@_ngcontent-c19=""]/li[@_ngcontent-c19=""])[1]'));  // 1st Quality item == Audited Financials
const qualityItem02 = element(by.xpath('(//ul[@_ngcontent-c19=""]/li[@_ngcontent-c19=""])[2]'));  // 2nd Quality item == Management Figures

const includeInRange = element(by.xpath('(//div[@class="dx-checkbox-container"]/span[@class="dx-checkbox-icon"])')); // include in range
const includeChecked = element(by.xpath('(//dx-check-box[@class="dx-checkbox dx-checkbox-has-text dx-widget dx-checkbox-checked"])')); // include in range is checked

const applyButton = element(by.xpath('(//div[@class="dx-button-content"]/span[text() = "Apply"])'));


const IngestSourceDataPage = Object.create(NavigationPage, {

    getHeadSourceData: { get: function () { return headSourceData; } },

/* Buttons */
const previewButton = element(by.xpath('(//div[@_ngcontent-c26=""]/div[text() = "Preview"])'));
const approvalButton = element(by.xpath('(//div[@_ngcontent-c26=""]/div[text() = "Approval"])'));
const downloadButton = element(by.xpath('(//div[@_ngcontent-c26=""]/a[text() = "Download Original"])'));

/* Data */
const number0308 = element(by.xpath('(//div[@column="3"]/div[@aria-rowindex="8"])'));
const data0308 = "817,8";
const number0408 = element(by.xpath('(//div[@column="4"]/div[@aria-rowindex="8"])'));
const data0408 = "819,2";
const number0309 = element(by.xpath('(//div[@column="3"]/div[@aria-rowindex="9"])'));
const data0309 = "522,5";
const number0409 = element(by.xpath('(//div[@column="4"]/div[@aria-rowindex="9"])'));
const data0409 = "524,5";
const number0708 = element(by.xpath('(//div[@column="7"]/div[@aria-rowindex="8"])'));
const data0708 = "827,2";

const month0303 = element(by.xpath('(//div[@column="3"]/div[@aria-rowindex="3"])'));
const monthString0303 = "Oktober";
const month0403 = element(by.xpath('(//div[@column="4"]/div[@aria-rowindex="3"])'));
const monthString0403 = "November";

/* Popup */
const radioButtonData = element(by.xpath('(//div[@class="dx-item dx-radiobutton dx-radiobutton-checked"])')); // checked in case of number
const radioButtonText = element(by.xpath('(//div[@class="dx-item dx-radiobutton dx-radiobutton-checked"]/div[text() = "Data Point"])'));

const addLegalButton    = element(by.xpath('(//div[@class="firstRow"]/div[@class="material-icons add"])[1]')); // add Button Legal Entity
const addTimeButton     = element(by.xpath('(//div[@class="firstRow"]/div[@class="material-icons add"])[2]')); // add Button Time Entity
const addUnitButton     = element(by.xpath('(//div[@class="firstRow"]/div[@class="material-icons add"])[3]')); // add Button Unit
const addQualityButton  = element(by.xpath('(//div[@class="firstRow"]/div[@class="material-icons add"])[4]')); // add Button Quality

const legalItem01 = element(by.xpath('(//ul[@_ngcontent-c19=""]/li[@_ngcontent-c19=""])[1]')); // first Legal Entity
const legalItem02 = element(by.xpath('(//ul[@_ngcontent-c19=""]/li[@_ngcontent-c19=""])[2]')); // 2nd Legal Entity

const timeItem02 = element(by.xpath('(//ul[@_ngcontent-c19=""]/li[@_ngcontent-c19=""])[2]'));  // 2nd Time item
const timeItem10 = element(by.xpath('(//ul[@_ngcontent-c19=""]/li[@_ngcontent-c19=""])[10]')); // 10th Time item

const unitItem01 = element(by.xpath('(//ul[@_ngcontent-c19=""]/li[@_ngcontent-c19=""])[1]'));  // 1st Unit item == EUR
const unitItem02 = element(by.xpath('(//ul[@_ngcontent-c19=""]/li[@_ngcontent-c19=""])[2]'));  // 2nd Unit item == USD

const qualityItem01 = element(by.xpath('(//ul[@_ngcontent-c19=""]/li[@_ngcontent-c19=""])[1]'));  // 1st Quality item == Audited Financials
const qualityItem02 = element(by.xpath('(//ul[@_ngcontent-c19=""]/li[@_ngcontent-c19=""])[2]'));  // 2nd Quality item == Management Figures

const includeInRange = element(by.xpath('(//div[@class="dx-checkbox-container"]/span[@class="dx-checkbox-icon"])')); // include in range
const includeChecked = element(by.xpath('(//dx-check-box[@class="dx-checkbox dx-checkbox-has-text dx-widget dx-checkbox-checked"])')); // include in range is checked

const applyButton = element(by.xpath('(//div[@class="dx-button-content"]/span[text() = "Apply"])'));

    /* Mapping -> from this. to parent page object */
    openWebsite: { value: function () { NavigationPage.openWebsite.call(this, ''); } },
    waitForElement: { value: function (selector, waitFor) { NavigationPage.waitForElement.call(this, selector, waitFor); } },
    getSourceDataButton: { value: function () { return NavigationPage.getSourceDataButton.call(this); } },

});

module.exports = IngestSourceDataPage;
