import { browser, by, element, ExpectedConditions } from 'protractor';

const NavigationPage = requirePO('navigationBar/navigationBar');

/* Navigation */
const navDataExplorerButton = element(by.id('DataExplorer'));

/* Header */
const headerDE = element(by.xpath('(//kosmos-header[@subtitle="Data Explorer Analysis"])'));
const headerDE_text = ' Data Explorer Analysis';

const createAnalysisButton = element(by.xpath('(//kosmos-new-analysis-button/div)'));

const existingAnalysisCard01 = element(by.xpath('(//kosmos-analysis-card)[1]'));
const existingAnalysisName01 = element(by.xpath('(//kosmos-analysis-card[@_ngcontent-c12=""]/div[@class="name"])[1]')); // Analysis name
const existingAnalysisTime01 =
  element(by.xpath('(//kosmos-analysis-card[@_ngcontent-c12=""]/div[@class="timestamp"])[1]')); // Analysis time

const existingAnalysisCard02 = element(by.xpath('(//kosmos-analysis-card[@_ngcontent-c12=""])[2]')); // if existing


/* Popup Create new analysis */
const createAnalysisHead =
  element(by.xpath('(//div[@class="dx-item-content dx-toolbar-item-content"]/div[text() = "CREATE NEW ANALYSIS"])'));
const analysisNameTxTbox = element(by.xpath('(//input[@class="dx-texteditor-input"])'));
const analysisName = 'Test Analysis 01';
const createDoneButton = element(by.xpath('(//div[@class="dx-button-content"]/span[text() = "Done"])'));

/* Analysis page */
const saveButton = element(by.xpath('(//div[@class="dx-button-content"]/span[text() = "Save"])'));
const headerTitle = element(by.xpath('(//kosmos-header/div/div/div[contains(@class, "header-subtitle")])'));

const tableButton = element(by.xpath('(//div/div[text() = "Table"])'));
const chartButton = element(by.xpath('(//div/div[text() = "Chart"])'));
const columnsButton = element(by.xpath('(//kosmos-analysis-tab[@title="Columns"]/div)'));
const rowsButton = element(by.xpath('(//kosmos-analysis-tab[@title="Rows"]/div)'));
const globalButton = element(by.xpath('(//kosmos-analysis-tab[@title="Global"]/div)'));

/* Data palette */
const closePaletteButton = element(by.xpath('(//div[@class="kpmg-icon-remove close-button"])'));
const searchArea = element(by.xpath('(//div[@class="dx-texteditor-container"])'));

/* Columns */
const headLegalEntity = element(by.xpath('(//span[contains(@class, "group") and text() = " LEGAL ENTITY "])'));
const colLegalItem01 = element(by.xpath('(//li[@aria-level="1"][1]/ul/li[@aria-level="2"][1]/div/div/span[@draggable="true"])'));
const colLegalItem02 = element(by.xpath('(//li[@aria-level="1"][1]/ul/li[@aria-level="2"][2]/div/div/span[@draggable="true"])'));
const colTimeItem01 = element(by.xpath('(//li[@aria-level="1"][2]/ul/li[@aria-level="2"][1]/div/div/span[@draggable="true"])'));
const colTimeItem02 = element(by.xpath('(//li[@aria-level="1"][2]/ul/li[@aria-level="2"][2]/div/div/span[@draggable="true"])'));
const colLayerItem01 = element(by.xpath('(//li[@aria-level="1"][3]/ul/li[@aria-level="2"]/div/div/span[@draggable="true"])')); // "Actual"
const colUnitItem01 = element(by.xpath('(//li[@aria-level="1"][4]/ul/li[@aria-level="2"]/div/div/span[@draggable="true"])')); // EUR
const colUnitItem02 = element(by.xpath('(//li[@aria-level="1"][4]/ul/li[@aria-level="2"][2]/div/div/span[@draggable="true"])')); // USD
const colQualityItem01 =
  element(by.xpath('(//li[@aria-level="1"][5]/ul/li[@aria-level="2"][1]/div/div/span[@draggable="true"])')); // Management Figures
const colQualityItem02 =
  element(by.xpath('(//li[@aria-level="1"][5]/ul/li[@aria-level="2"][2]/div/div/span[@draggable="true"])')); // Audited Financials
const colKPIItem01 =
  element(by.xpath('(//li[@aria-level="1"][6]/ul/li[@aria-level="2"][1]/div/div/span[@draggable="true"])')); // Custom Formula
const colMISCItem01 = element(by.xpath('(//li[@aria-level="1"][7]/ul/li[@aria-level="2"][1]/div/div/span[@draggable="true"])')); // Blanc

/* Rows */
const headAttributesEntity = element(by.xpath('(//span[contains(@class, "group") and text() = " ATTRIBUTES "])'));
const rowAttributesItem01 = element(by.xpath('(//li[@aria-level="1"][1]/ul/li[@aria-level="2"][1]/div/div/span[@draggable="true"])'));
const rowAttributesItem02 = element(by.xpath('(//li[@aria-level="1"][1]/ul/li[@aria-level="2"][2]/div/div/span[@draggable="true"])'));
const rowLegalItem01 = element(by.xpath('(//li[@aria-level="1"][2]/ul/li[@aria-level="2"][1]/div/div/span[@draggable="true"])'));
const rowLegalItem02 = element(by.xpath('(//li[@aria-level="1"][2]/ul/li[@aria-level="2"][2]/div/div/span[@draggable="true"])'));
const rowTimeItem01 = element(by.xpath('(//li[@aria-level="1"][3]/ul/li[@aria-level="2"][1]/div/div/span[@draggable="true"])'));
const rowTimeItem02 = element(by.xpath('(//li[@aria-level="1"][3]/ul/li[@aria-level="2"][2]/div/div/span[@draggable="true"])'));
const rowLayerItem01 =
  element(by.xpath('(//li[@aria-level="1"][4]/ul/li[@aria-level="2"][1]/div/div/span[@draggable="true"])')); // "Actual"
const rowUnitItem01 = element(by.xpath('(//li[@aria-level="1"][5]/ul/li[@aria-level="2"][1]/div/div/span[@draggable="true"])')); // EUR
const rowUnitItem02 = element(by.xpath('(//li[@aria-level="1"][5]/ul/li[@aria-level="2"][2]/div/div/span[@draggable="true"])')); // USD
const rowQualityItem01 =
  element(by.xpath('(//li[@aria-level="1"][6]/ul/li[@aria-level="2"][1]/div/div/span[@draggable="true"])')); // Management Figures
const rowQualityItem02 =
  element(by.xpath('(//li[@aria-level="1"][6]/ul/li[@aria-level="2"][2]/div/div/span[@draggable="true"])')); // Audited Financials
const rowKPIItem01 =
  element(by.xpath('(//li[@aria-level="1"][7]/ul/li[@aria-level="2"][1]/div/div/span[@draggable="true"])')); // Custom Formula
const rowMISCItem01 = element(by.xpath('(//li[@aria-level="1"][8]/ul/li[@aria-level="2"][1]/div/div/span[@draggable="true"])')); // Blanc

/* Global is same as Columns */

// const areaToDragTo = element(by.xpath('(//kosmos-sheet-characteristics/div[@class="container"])'));
const areaToDragTo = element(by.xpath('(//kosmos-sheet-characteristics/div)'));
const draggedElement01 =
  element(by.xpath('(//kosmos-sheet-characteristic/div[@class="container" and @draggable="true"]/div[@class="content"])'));
const draggedElement02 = element(by.xpath('(//kosmos-sheet-characteristic[2]/div[@class="container" and @draggable="true"])'));
const draggedElement03 = element(by.xpath('(//kosmos-sheet-characteristic[3]/div[@class="container" and @draggable="true"])'));


/* Analysis */
/* Table */
const existingTable = element(by.xpath('(//table[@class="daex-table"])'));
/* Header */
const globalEntry = element(by.xpath('(//th[@class="daex-first-column-header daex-first-column-cell"])')); // Audited Financials
const headerEntry01 = element(by.xpath('(//th[@class="daex-column-header"])[1]'));
const headerEntry02 = element(by.xpath('(//th[@class="daex-column-header"])[2]'));
const headerEntry03 = element(by.xpath('(//th[@class="daex-column-header"])[3]'));
const headerEntry04 = element(by.xpath('(//th[@class="daex-column-header"])[4]'));
const lastHeaderEntry = element(by.xpath('(//th[@class="daex-column-header daex-last-column-cell"])'));

/* First row */
const contents0101 = element(by.xpath('(//td[text() = "2"]/following-sibling::td[@class="daex-row-header daex-first-column-cell"])'));
const contents0102 = element(by.xpath('(//td[text() = "2"]/following-sibling::td[@class="daex-cell"])[1]'));
const contents0103 = element(by.xpath('(//td[text() = "2"]/following-sibling::td[@class="daex-cell"])[2]'));
const contents0104 = element(by.xpath('(//td[text() = "2"]/following-sibling::td[@class="daex-cell"])[3]'));
const contents0105 = element(by.xpath('(//td[text() = "2"]/following-sibling::td[@class="daex-cell"])[4]'));
const contents0106 = element(by.xpath('(//td[text() = "2"]/following-sibling::td[@class="daex-cell"])[5]'));
const lastOfRow01 = element(by.xpath('(//td[text() = "2"]/following-sibling::td[@class="daex-cell daex-last-column-cell"])'));

/* 2nd row */
const contents0201 = element(by.xpath('(//td[text() = "3"]/following-sibling::td[@class="daex-row-header daex-first-column-cell"])'));
const contents0202 = element(by.xpath('(//td[text() = "3"]/following-sibling::td[@class="daex-cell"])[1]'));
const contents0203 = element(by.xpath('(//td[text() = "3"]/following-sibling::td[@class="daex-cell"])[2]'));
const contents0204 = element(by.xpath('(//td[text() = "3"]/following-sibling::td[@class="daex-cell"])[3]'));
const lastOfRow02 = element(by.xpath('(//td[text() = "3"]/following-sibling::td[@class="daex-cell daex-last-column-cell"])'));

/* 3rd row */
const contents0301 = element(by.xpath('(//td[text() = "4"]/following-sibling::td[@class="daex-row-header daex-first-column-cell"])'));
const contents0302 = element(by.xpath('(//td[text() = "4"]/following-sibling::td[@class="daex-cell"])[1]'));
const contents0303 = element(by.xpath('(//td[text() = "4"]/following-sibling::td[@class="daex-cell"])[2]'));
const contents0304 = element(by.xpath('(//td[text() = "4"]/following-sibling::td[@class="daex-cell"])[3]'));
const lastOfRow03 = element(by.xpath('(//td[text() = "4"]/following-sibling::td[@class="daex-cell daex-last-column-cell"])'));

/* 4th row */
const contents0401 = element(by.xpath('(//td[text() = "5"]/following-sibling::td[@class="daex-row-header daex-first-column-cell"])'));
const contents0402 = element(by.xpath('(//td[text() = "5"]/following-sibling::td[@class="daex-cell"])[1]'));
const contents0403 = element(by.xpath('(//td[text() = "5"]/following-sibling::td[@class="daex-cell"])[2]'));
const contents0404 = element(by.xpath('(//td[text() = "5"]/following-sibling::td[@class="daex-cell"])[3]'));
const lastOfRow04 = element(by.xpath('(//td[text() = "5"]/following-sibling::td[@class="daex-cell daex-last-column-cell"])'));


/* Chart */
const chartExists = element(by.id('chart'));

/* Buttons */
const normalButton = element(by.xpath('(//kosmos-tab-button[@caption = "Normal"])'));
const stackedButton = element(by.xpath('(//kosmos-tab-button[@caption = "Stacked"])'));
const percentageButton = element(by.xpath('(//kosmos-tab-button[@caption = "Percentage"])'));
const barButton = element(by.xpath('(//kosmos-tab-button[@caption = "Bar"])'));
const colButton = element(by.xpath('(//kosmos-tab-button[@caption = "Col."])'));
const lineButton = element(by.xpath('(//kosmos-tab-button[@caption = "Line"])'));
const areaButton = element(by.xpath('(//kosmos-tab-button[@caption = "Area"])'));
const pieButton = element(by.xpath('(//kosmos-tab-button[@caption = "Pie"])'));

/* Scale */
const chartScale = element(by.xpath('(//div[@class="dx-texteditor-container"]/input[@class="dx-texteditor-input"])'));
const scaleSelectArrow = element(by.xpath('(//div[@class="dx-dropdowneditor-icon"])'));
const scaleItem01 = element(by.xpath('(//div[@role="option"]/div[@_ngcontent-c66=""])[1]')); // Scale option 1
const scaleItem02 = element(by.xpath('(//div[@role="option"]/div[@_ngcontent-c66=""])[2]')); // Scale option 1000
const scaleItem03 = element(by.xpath('(//div[@role="option"]/div[@_ngcontent-c66=""])[3]')); // Scale option 1 Mio

const chartYAxis = element(by.xpath('(//dx-chart[@id="chart"])')); // child: svg/g not to catch
const chartYAxis1 = element(by.xpath('(//svg:g[@class="dxc-arg-elements"]/text[@text-anchor="middle"])[1]'));
// const chartYAxis = element(by.xpath('(//g[@class="dxc-arg-axis"])'));

/* Data Explorer Sidebar */
const sidebarDEHead = element(by.xpath('(//span[@class="sidebar-title"])')); // 'Data Explorer Analysis'
const sidebarDEDeleteButton = element(by.xpath('(//span[@class="kpmg-icon-remove"])'));

const sidebarDEUpperText = element(by.xpath('(//div[@class="sidebar-content"]/p[@_ngcontent-c33=""])'));
const sidebarDEText01 = element(by.xpath('(//div[@class="sidebar-content"]/ul[@_ngcontent-c12=""]/li[@_ngcontent-c12=""])[1]'));
const sidebarDEText02 = element(by.xpath('(//div[@class="sidebar-content"]/ul[@_ngcontent-c12=""]/li[@_ngcontent-c12=""])[2]'));
const sidebarDEText03 = element(by.xpath('(//div[@class="sidebar-content"]/ul[@_ngcontent-c12=""]/li[@_ngcontent-c12=""])[3]'));
const sidebarDEText04 = element(by.xpath('(//div[@class="sidebar-content"]/ul[@_ngcontent-c12=""]/li[@_ngcontent-c12=""])[4]'));
const sidebarDEText05 = element(by.xpath('(//div[@class="sidebar-content"]/ul[@_ngcontent-c12=""]/li[@_ngcontent-c12=""])[5]'));
const sidebarDEText06 = element(by.xpath('(//div[@class="sidebar-content"]/ul[@_ngcontent-c12=""]/li[@_ngcontent-c12=""])[6]'));
const sidebarDEText07 = element(by.xpath('(//div[@class="sidebar-content"]/ul[@_ngcontent-c12=""]/li[@_ngcontent-c12=""])[7]'));


const DataExplorerPage = Object.create(NavigationPage, {

    getheaderDE: { get: function () { return headerDE; } },
    getcreateAnalysisButton: { get: function () { return createAnalysisButton; } },


    getexistingAnalysisCard01: { get: function () { return existingAnalysisCard01; } },
    getexistingAnalysisName01: { get: function () { return existingAnalysisName01; } },
    getexistingAnalysisTime01: { get: function () { return existingAnalysisTime01; } },

    getexistingAnalysisCard02: { get: function () { return existingAnalysisCard02; } },


    /* Popup Create new analysis */
    getcreateAnalysisHead: { get: function () { return createAnalysisHead; } },
    getanalysisNameTxTbox: { get: function () { return analysisNameTxTbox; } },
    getanalysisName: { get: function () { return analysisName; } },
    getcreateDoneButton: { get: function () { return createDoneButton; } },

    /* Analysis page */
    getsaveButton: { get: function () { return saveButton; } },
    getheaderTitle: { get: function () { return headerTitle; } },

    gettableButton: { get: function () { return tableButton; } },
    getchartButton: { get: function () { return chartButton; } },
    getcolumnsButton: { get: function () { return columnsButton; } },
    getrowsButton: { get: function () { return rowsButton; } },
    getglobalButton: { get: function () { return globalButton; } },

    /* Data palette */
    getclosePaletteButton: { get: function () { return closePaletteButton; } },
    getsearchArea: { get: function () { return searchArea; } },

    getheadAttributesEntity: { get: function () { return headAttributesEntity; } },
    /* Columns */
    getheadLegalEntity: { get: function () { return headLegalEntity; } },
    getcolLegalItem01: { get: function () { return colLegalItem01; } },
    getcolLegalItem02: { get: function () { return colLegalItem02; } },
    getcolTimeItem01: { get: function () { return colTimeItem01; } },
    getcolTimeItem02: { get: function () { return colTimeItem02; } },
    getcolLayerItem01: { get: function () { return colLayerItem01; } },
    getcolUnitItem01: { get: function () { return colUnitItem01; } },
    getcolUnitItem02: { get: function () { return colUnitItem02; } },
    getcolQualityItem01: { get: function () { return colQualityItem01; } },
    getcolQualityItem02: { get: function () { return colQualityItem02; } },
    getcolKPIItem01: { get: function () { return colKPIItem01; } },
    getcolMISCItem01: { get: function () { return colMISCItem01; } },

    /* Rows */
    getrowAttributesItem01: { get: function () { return rowAttributesItem01; } },
    getrowAttributesItem02: { get: function () { return rowAttributesItem02; } },
    getrowLegalItem01: { get: function () { return rowLegalItem01; } },
    getrowLegalItem02: { get: function () { return rowLegalItem02; } },
    getrowTimeItem01: { get: function () { return rowTimeItem01; } },
    getrowTimeItem02: { get: function () { return rowTimeItem02; } },
    getrowLayerItem01: { get: function () { return rowLayerItem01; } },
    getrowUnitItem01: { get: function () { return rowUnitItem01; } },
    getrowUnitItem02: { get: function () { return rowUnitItem02; } },
    getrowQualityItem01: { get: function () { return rowQualityItem01; } },
    getrowQualityItem: { get: function () { return rowQualityItem; } },
    getrowKPIItem01: { get: function () { return rowKPIItem01; } },
    getrowMISCItem01: { get: function () { return rowMISCItem01; } },

    /* Global is same as Columns */

    getareaToDragTo: { get: function () { return areaToDragTo; } },
    getdraggedElement01: { get: function () { return draggedElement01; } },
    getdraggedElement02: { get: function () { return draggedElement02; } },
    getdraggedElement03: { get: function () { return draggedElement03; } },


    /* Analysis */
    /* Table */
    getexistingTable: { get: function () { return existingTable; } },
    /* Header */
    getglobalEntry: { get: function () { return globalEntry; } },
    getheaderEntry01: { get: function () { return headerEntry01; } },
    getheaderEntry02: { get: function () { return headerEntry02; } },
    getheaderEntry03: { get: function () { return headerEntry03; } },
    getheaderEntry04: { get: function () { return headerEntry04; } },
    getlastHeaderEntry: { get: function () { return lastHeaderEntry; } },

    /* First row */
    getcontents0101: { get: function () { return contents0101; } },
    getcontents0102: { get: function () { return contents0102; } },
    getcontents0103: { get: function () { return contents0103; } },
    getcontents0104: { get: function () { return contents0104; } },
    getcontents0105: { get: function () { return contents0105; } },
    getcontents0106: { get: function () { return contents0106; } },
    getlastOfRow01: { get: function () { return lastOfRow01; } },

    /* 2nd row */
    getcontents0201: { get: function () { return contents0201; } },
    getcontents0202: { get: function () { return contents0202; } },
    getcontents0203: { get: function () { return contents0203; } },
    getcontents0204: { get: function () { return contents0204; } },
    getlastOfRow02: { get: function () { return lastOfRow02; } },

    /* 3rd row */
    getcontents0301: { get: function () { return contents0301; } },
    getcontents0302: { get: function () { return contents0302; } },
    getcontents0303: { get: function () { return contents0303; } },
    getcontents0304: { get: function () { return contents0304; } },
    getlastOfRow03: { get: function () { return lastOfRow03; } },

    /* 4th row */
    getcontents0401: { get: function () { return contents0401; } },
    getcontents0402: { get: function () { return contents0402; } },
    getcontents0403: { get: function () { return contents0403; } },
    getcontents0404: { get: function () { return contents0404; } },
    getlastOfRow04: { get: function () { return lastOfRow04; } },


    /* Chart */
    getchartExists: { get: function () { return chartExists; } },

    /* Buttons */
    getnormalButton: { get: function () { return normalButton; } },
    getstackedButton: { get: function () { return stackedButton; } },
    getpercentageButton: { get: function () { return percentageButton; } },
    getbarButton: { get: function () { return barButton; } },
    getcolButton: { get: function () { return colButton; } },
    getlineButton: { get: function () { return lineButton; } },
    getareaButton: { get: function () { return areaButton; } },
    getpieButton: { get: function () { return pieButton; } },

    /* Scale */
    getchartScale: { get: function () { return chartScale; } },
    getscaleSelectArrow: { get: function () { return scaleSelectArrow; } },
    getscaleItem01: { get: function () { return scaleItem01; } },
    getscaleItem02: { get: function () { return scaleItem02; } },
    getscaleItem03: { get: function () { return scaleItem03; } },

    getchartYAxis: { get: function () { return chartYAxis; } },
    getchartYAxis1: { get: function () { return chartYAxis1; } },
    // getchartYAxis: { get: function () { return chartYAxis; } },

    /* Data Explorer Sidebar */
    getsidebarDEHead: { get: function () { return sidebarDEHead; } },
    getsidebarDEDeleteButton: { get: function () { return sidebarDEDeleteButton; } },

    getsidebarDEUpperText: { get: function () { return sidebarDEUpperText; } },
    getsidebarDEText01: { get: function () { return sidebarDEText01; } },
    getsidebarDEText02: { get: function () { return sidebarDEText02; } },
    getsidebarDEText03: { get: function () { return sidebarDEText03; } },
    getsidebarDEText04: { get: function () { return sidebarDEText04; } },
    getsidebarDEText05: { get: function () { return sidebarDEText05; } },
    getsidebarDEText06: { get: function () { return sidebarDEText06; } },
    getsidebarDEText07: { get: function () { return sidebarDEText07; } },


    /* Mapping -> from this. to parent page object */
    openWebsite: { value: function () { NavigationPage.openWebsite.call(this, ''); } },
    waitForElement: { value: function (selector, waitFor) { NavigationPage.waitForElement.call(this, selector, waitFor); } },
    getDataExplorerButton: { value: function () { return NavigationPage.getDataExplorerButton.call(this); } },

});

module.exports = DataExplorerPage;

