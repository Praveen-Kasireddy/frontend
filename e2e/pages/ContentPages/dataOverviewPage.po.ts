import { browser, by, element, ExpectedConditions } from 'protractor';

const NavigationPage = requirePO('navigationBar/navigationBar');

/* Nav */
const navDataOverviewButton = element(by.id('DataOverview'));

/* Head */
const dataOverviewHeader = element(by.xpath('(//div[text() = " Data Overview"])'));

/* Toolbar */
const columnChooserButton = element(by.xpath('(//div[@aria-label="Column Chooser"])'));

/* Column header */
const column01 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="1"])'));
// const column02 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="2"])'));
const column02 = element(by.xpath('(//div[text() = "Original  Value"])'));

const column03 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="3"])'));
const column04 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="4"])'));
// const column05 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="5"])'));
const column05 = element(by.xpath('(//div[text() = "Legal  Entity"])'));

const column06 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="6"])'));
const column07 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="7"])'));
const column08 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="8"])'));
const column09 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="9"])'));
const column10 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="10"])'));

const column01_text = 'Value'; // to check
const column02_text = 'Original Value';
const column03_text = 'Attributes';
const column04_text = 'Layer';
const column05_text = 'Legal Entity';
const column06_text = 'Quality';
const column07_text = 'Scale';
const column08_text = 'Time';
const column09_text = 'Unit';
const column10_text = 'Source';

/* Data */
const data0101 = element(by.xpath('(//tr[@aria-rowindex="1"]/td[@aria-colindex="1"])'));
const data0101_text = '76.095,0000';
const data0102 = element(by.xpath('(//tr[@aria-rowindex="1"]/td[@aria-colindex="2"])'));
const data0102_text = '76.095';
const layer01 = element(by.xpath('(//tr[@aria-rowindex="1"]/td[@aria-colindex="4"])'));
const layer01_text = 'Actual';
const data0202 = element(by.xpath('(//tr[@aria-rowindex="2"]/td[@aria-colindex="2"])'));
const data0202_text = '210';
const quality01 = element(by.xpath('(//tr[@aria-rowindex="1"]/td[@aria-colindex="6"])'));
const quality01_text = 'Audited Financials';
const unit01 = element(by.xpath('(//tr[@aria-rowindex="1"]/td[@aria-colindex="9"])'));
const unit01_text = 'EUR';

const DataOverviewPage = Object.create(NavigationPage, {

    getdataOverviewHeader: { get: function () { return dataOverviewHeader; } },
    getcolumnChooserButton: { get: function () { return columnChooserButton; } },

    getcolumn01: { get: function () { return column01; } },
    getcolumn02: { get: function () { return column02; } },
    getcolumn03: { get: function () { return column03; } },
    getcolumn04: { get: function () { return column04; } },
    getcolumn05: { get: function () { return column05; } },
    getcolumn06: { get: function () { return column06; } },
    getcolumn07: { get: function () { return column07; } },
    getcolumn08: { get: function () { return column08; } },
    getcolumn09: { get: function () { return column09; } },
    getcolumn10: { get: function () { return column10; } },
    getcolumn01_text: { get: function () { return column01_text; } },
    getcolumn02_text: { get: function () { return column02_text; } },
    getcolumn03_text: { get: function () { return column03_text; } },
    getcolumn04_text: { get: function () { return column04_text; } },
    getcolumn05_text: { get: function () { return column05_text; } },
    getcolumn06_text: { get: function () { return column06_text; } },
    getcolumn07_text: { get: function () { return column07_text; } },
    getcolumn08_text: { get: function () { return column08_text; } },
    getcolumn09_text: { get: function () { return column09_text; } },
    getcolumn10_text: { get: function () { return column10_text; } },

    /* Data */
    getdata0101: { get: function () { return data0101; } },
    getdata0102: { get: function () { return data0102; } },
    getdata0202: { get: function () { return data0202; } },
    getlayer01: { get: function () { return layer01; } },
    getunit01: { get: function () { return unit01; } },
    getquality01: { get: function () { return quality01; } },

    getdata0101_text: { get: function () { return data0101_text; } },
    getdata0102_text: { get: function () { return data0102_text; } },
    getdata0202_text: { get: function () { return data0202_text; } },
    getlayer01_text: { get: function () { return layer01_text; } },
    getunit01_text: { get: function () { return unit01_text; } },
    getquality01_text: { get: function () { return quality01_text; } },

    /* Mapping -> from this. to parent page object */
    openWebsite: { value: function () { NavigationPage.openWebsite.call(this, ''); } },
    waitForElement: { value: function (selector, waitFor) { NavigationPage.waitForElement.call(this, selector, waitFor); } },
    getDataOverviewButton: { value: function () { return NavigationPage.getDataOverviewButton.call(this); } },

});

module.exports = DataOverviewPage;

