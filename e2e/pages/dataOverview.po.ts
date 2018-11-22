import { browser, by, element } from 'protractor';
import { ProjectPage } from './project.po';


/* Nav */
const navDataOverviewButton = element(by.id('DataOverview'));

/* Head */
const dataOverviewHeader = element(by.xpath('(//div[text() = " Data Overview"])'));

/* Toolbar */
const columnChooserButton = element(by.xpath('(//div[@aria-label="Column Chooser"])'));

/* Columns */
const column01 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="1"])'));
const column02 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="2"])'));
const column03 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="3"])'));
const column04 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="4"])'));
const column05 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="5"])'));
const column06 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="6"])'));
const column07 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="7"])'));
const column08 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="8"])'));
const column09 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="9"])'));
const column10 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="10"])'));

const column01_text = "Value"; // to check

/* Data */
const data0101 = element(by.xpath('(//tr[@aria-rowindex="1"]/td[@aria-colindex="1"])'));
const quality01 = element(by.xpath('(//tr[@aria-rowindex="1"]/td[@aria-colindex="6"])'));

const quality01_text = "Audited Financials";

export class DataOverviewPage {
    /* Nav */

 } // class