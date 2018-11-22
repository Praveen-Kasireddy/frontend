import { browser, by, element, ExpectedConditions } from 'protractor';

const NavigationPage = requirePO('navigationBar/navigationBar');

/* Source Data page */
const sourceDataFile = element(by.xpath('(//div[@class="webix_cell"]/div[@class="webix_fmanager_icon fm-file-excel"])[1]'));
const uningestedElement = element(by.xpath('(//div[@class="webix_column "]/div[normalize-space(text()) = ""])[1]'));
const ingestButton = element(by.xpath('(//div[@class="webix_cell webix_row_select"]/div/span[@class="kpmg-icon-menu-data-structure"])'));

/* Page elements */
const headSourceData = element(by.xpath('(//div[@class="header-subtitle ng-star-inserted"])'));
const headerFile_text = '003_Beispiel_2.xlsx';

/* Buttons */
const previewButton = element(by.xpath('(//div[@class="menu-buttons"]/div/div[text() = "Preview"])'));
const approvalButton = element(by.xpath('(//div[@class="menu-buttons"]/div/div[text() = "Approval"])'));
const downloadButton = element(by.xpath('(//div[@class="menu-buttons"]/div/a[text() = "Download original"])'));
const ingestNowButton = element(by.xpath('(//dx-button[@aria-label="Ingest now"])'));

/* Data */
const number0406 = element(by.xpath('(//div[@column="4"]/div[@aria-rowindex="6"])'));
const data0406 = '67.381';
const number0606 = element(by.xpath('(//div[@column="6"]/div[@aria-rowindex="6"])'));
const data0606 = '443';
const number0408 = element(by.xpath('(//div[@column="4"]/div[@aria-rowindex="8"])'));
const data0408 = '69.683';
const number0608 = element(by.xpath('(//div[@column="6"]/div[@aria-rowindex="8"])'));
const data0608 = '210';
const number0806 = element(by.xpath('(//div[@column="8"]/div[@aria-rowindex="6"])'));
const data0806 = '76.095';

const number0418 = element(by.xpath('(//div[@column="4"]/div[@aria-rowindex="18"])'));
const number0618 = element(by.xpath('(//div[@column="6"]/div[@aria-rowindex="18"])'));
const number0420 = element(by.xpath('(//div[@column="4"]/div[@aria-rowindex="20"])'));
const number0620 = element(by.xpath('(//div[@column="6"]/div[@aria-rowindex="20"])'));
const number0818 = element(by.xpath('(//div[@column="8"]/div[@aria-rowindex="18"])'));

const number1006 = element(by.xpath('(//div[@column="10"]/div[@aria-rowindex="6"])'));
const number1008 = element(by.xpath('(//div[@column="10"]/div[@aria-rowindex="8"])'));
const number1011 = element(by.xpath('(//div[@column="10"]/div[@aria-rowindex="11"])'));
const number1013 = element(by.xpath('(//div[@column="10"]/div[@aria-rowindex="13"])'));
const number1015 = element(by.xpath('(//div[@column="10"]/div[@aria-rowindex="15"])'));


const month0603 = element(by.xpath('(//div[@column="6"]/div[@aria-rowindex="3"])'));
const monthString0603 = 'Jan. - Dez.';
const month0403 = element(by.xpath('(//div[@column="4"]/div[@aria-rowindex="3"])'));
const monthString0403 = 'Jan. - Dez.';

/* Popup */
const radioButtonData = element(by.xpath('(//div[@class="dx-item dx-radiobutton dx-radiobutton-checked"])')); // checked in case of number
const radioButtonText = element(by.xpath('(//div[@class="dx-item dx-radiobutton dx-radiobutton-checked"]/div[text() = "Data Point"])'));

const addUnitButton01 = element(by.xpath('(//div[@id="addButton"])[1]')); // add Button Legal Entity
const addUnitButton02 = element(by.xpath('(//div[@class="material-icons add"])[2]')); // add Button Time Entity
const addUnitButton03 = element(by.xpath('(//div[@class="material-icons add" and @id="addButton"])[3]')); // add Button Unit
const addUnitButton04 = element(by.xpath('(//div[@id="addButton"])[4]')); // add Button Quality

const selectItem01 = element(by.xpath('(//div[@id="characteristicEditor"]/div/ul/li)[1]'));
const selectItem02 = element(by.xpath('(//div[@id="characteristicEditor"]/div/ul/li)[2]'));
const selectItem03 = element(by.xpath('(//div[@id="characteristicEditor"]/div/ul/li)[3]'));
const selectItem04 = element(by.xpath('(//div[@id="characteristicEditor"]/div/ul/li)[4]'));
const selectItem05 = element(by.xpath('(//div[@id="characteristicEditor"]/div/ul/li)[5]'));
const selectItem06 = element(by.xpath('(//div[@id="characteristicEditor"]/div/ul/li)[6]'));
const selectItem07 = element(by.xpath('(//div[@id="characteristicEditor"]/div/ul/li)[7]'));
const selectItem08 = element(by.xpath('(//div[@id="characteristicEditor"]/div/ul/li)[8]'));
const selectItem09 = element(by.xpath('(//div[@id="characteristicEditor"]/div/ul/li)[9]'));
const selectItem10 = element(by.xpath('(//div[@id="characteristicEditor"]/div/ul/li)[10]'));
const selectItem11 = element(by.xpath('(//div[@id="characteristicEditor"]/div/ul/li)[11]'));
const selectItem12 = element(by.xpath('(//div[@id="characteristicEditor"]/div/ul/li)[12]'));

const includeInRange = element(by.xpath('(//div[@class="dx-checkbox-container"]/span[@class="dx-checkbox-icon"])')); // include in range
const includeChecked = element(by.xpath('(//div[@role="checkbox" and @aria-checked="true"])')); // include in range is checked

const applyButton = element(by.xpath('(//div[@class="dx-button-content"]/span[text() = "Apply"])'));


const IngestSourceDataPage = Object.create(NavigationPage, {

    getHeadSourceData: { get: function () { return headSourceData; } },

    /* Source Data page */
    getsourceDataFile: { get: function () { return sourceDataFile; } },
    getUningestedElement: { get: function () { return uningestedElement; } },
    getingestButton: { get: function () { return ingestButton; } },

    /* Buttons */
    getpreviewButton: { get: function () { return previewButton; } },
    getapprovalButton: { get: function () { return approvalButton; } },
    getdownloadButton: { get: function () { return downloadButton; } },
    getingestNowButton: { get: function () { return ingestNowButton; } },

    /* Data */
    getnumber0406: { get: function () { return number0406; } },
    getdata0406: { get: function () { return data0406; } },
    getnumber0408: { get: function () { return number0408; } },
    getdata0408: { get: function () { return data0408; } },
    getnumber0606: { get: function () { return number0606; } },
    getdata0606: { get: function () { return data0606; } },
    getnumber0608: { get: function () { return number0608; } },
    getdata0608: { get: function () { return data0608; } },
    getnumber0806: { get: function () { return number0806; } },
    getdata0806: { get: function () { return data0806; } },

    getnumber0418: { get: function () { return number0418; } },
    getnumber0618: { get: function () { return number0618; } },
    getnumber0420: { get: function () { return number0420; } },
    getnumber0620: { get: function () { return number0620; } },
    getnumber0818: { get: function () { return number0818; } },

    getnumber1006: { get: function () { return number1006; } },
    getnumber1008: { get: function () { return number1008; } },
    getnumber1011: { get: function () { return number1011; } },
    getnumber1013: { get: function () { return number1013; } },
    getnumber1015: { get: function () { return number1015; } },

    getmonth0603: { get: function () { return month0603; } },
    getmonthString0603: { get: function () { return monthString0603; } },
    getmonth0403: { get: function () { return month0403; } },
    getmonthString0403: { get: function () { return monthString0403; } },

    /* Popup */
    getradioButtonData: { get: function () { return radioButtonData; } },
    getradioButtonText: { get: function () { return radioButtonText; } },
    getaddUnitButton01: { get: function () { return addUnitButton01; } },
    getaddUnitButton02: { get: function () { return addUnitButton02; } },
    getaddUnitButton03: { get: function () { return addUnitButton03; } },
    getaddUnitButton04: { get: function () { return addUnitButton04; } },

    getselectItem01: { get: function () { return selectItem01; } },
    getselectItem02: { get: function () { return selectItem02; } },
    getselectItem03: { get: function () { return selectItem03; } },
    getselectItem04: { get: function () { return selectItem04; } },
    getselectItem05: { get: function () { return selectItem05; } },
    getselectItem06: { get: function () { return selectItem06; } },
    getselectItem07: { get: function () { return selectItem07; } },
    getselectItem08: { get: function () { return selectItem08; } },
    getselectItem09: { get: function () { return selectItem09; } },
    getselectItem10: { get: function () { return selectItem10; } },
    getselectItem11: { get: function () { return selectItem11; } },
    getselectItem12: { get: function () { return selectItem12; } },

    getincludeInRange: { get: function () { return includeInRange; } },
    getincludeChecked: { get: function () { return includeChecked; } },
    getapplyButton: { get: function () { return applyButton; } },

    /* Mapping -> from this. to parent page object */
    openWebsite: { value: function () { NavigationPage.openWebsite.call(this, ''); } },
    waitForElement: { value: function (selector, waitFor) { NavigationPage.waitForElement.call(this, selector, waitFor); } },
    getSourceDataButton: { value: function () { return NavigationPage.getSourceDataButton.call(this); } },

});

module.exports = IngestSourceDataPage;
