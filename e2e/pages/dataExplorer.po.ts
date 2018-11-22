import { browser, by, element } from 'protractor';

/* Navigation */
const navDataExplorerButton = element(by.id('DataExplorer'));

/* Header */
const headerDE = element(by.xpath('(//div[@_ngcontent-c13=""]/div[@class="header-subtitle"])'));
const headerDE_text = "Data Explorer Analysis";

const createAnalysisButton = element(by.xpath('(//div[@class="card-content"]/div[text() = "Create new analysis"])'));

const existingAnalysisCard01 = element(by.xpath('(//kosmos-analysis-card[@_ngcontent-c12=""])[1]')); 
const existingAnalysisName01 = element(by.xpath('(//kosmos-analysis-card[@_ngcontent-c12=""]/div[@class="name"])[1]')); // Analysis name
const existingAnalysisTime01 = element(by.xpath('(//kosmos-analysis-card[@_ngcontent-c12=""]/div[@class="timestamp"])[1]')); // Analysis time

const existingAnalysisCard02 = element(by.xpath('(//kosmos-analysis-card[@_ngcontent-c12=""])[2]')); // if existing


/* Popup Create new analysis */
const createAnalysisHead = element(by.xpath('(//div[@class="dx-item-content dx-toolbar-item-content"]/div[text() = "CREATE NEW ANALYSIS"])'));
const analysisNameTxTbox = element(by.xpath('(//input[@class="dx-texteditor-input"])'));
const analysisName = "Test Analysis 01";
const createDoneButton = element(by.xpath('(//div[@class="dx-button-content"]/span[text() = "Done"])'));

/* Analysis page */
const saveButton = element(by.xpath('(//div[@class="dx-button-content"]/span[text() = "Save"])'));
const headerTitle = headerDE; // To check the analysisName

const tableButton = element(by.xpath('(//div[@_ngcontent-c12=""]/div[text() = "Table"])'));
const chartButton = element(by.xpath('(//div[@_ngcontent-c12=""]/div[text() = "Chart"])'));
const columnsButton = element(by.xpath('(//kosmos-analysis-tab[@title="Columns"])'));
const rowsButton = element(by.xpath('(//kosmos-analysis-tab[@title="Rows"])'));
const globalButton = element(by.xpath('(//kosmos-analysis-tab[@title="Global"])'));

/* Data palette */
const closePaletteButton = element(by.xpath('(//div[@class="kpmg-icon-remove close-button"])'));
const searchArea = element(by.xpath('(//div[@class="dx-texteditor-container"])'));

/* Columns */
const colLegalItem01 = element(by.xpath('(//li[@data-item-id="2"]/div[@class="dx-item dx-treeview-item"]/div[@_ngcontent-c17=""]/span[@draggable="true"])'));
const colLegalItem02 = element(by.xpath('(//li[@data-item-id="3"]/div[@class="dx-item dx-treeview-item"]/div[@_ngcontent-c17=""]/span[@draggable="true"])'));
const colTimeItem01 = element(by.xpath('(//li[@data-item-id="5"]/div[@class="dx-item dx-treeview-item"]/div[@_ngcontent-c17=""]/span[@draggable="true"])'));
const colTimeItem02 = element(by.xpath('(//li[@data-item-id="6"]/div[@class="dx-item dx-treeview-item"]/div[@_ngcontent-c17=""]/span[@draggable="true"])'));
const colLayerItem01 = element(by.xpath('(//li[@data-item-id="8"]/div[@class="dx-item dx-treeview-item"]/div[@_ngcontent-c17=""]/span[@draggable="true"])')); // "Actual"
const colUnitItem01 = element(by.xpath('(//li[@data-item-id="10"]/div[@class="dx-item dx-treeview-item"]/div[@_ngcontent-c17=""]/span[@draggable="true"])')); // EUR
const colUnitItem02 = element(by.xpath('(//li[@data-item-id="11"]/div[@class="dx-item dx-treeview-item"]/div[@_ngcontent-c17=""]/span[@draggable="true"])')); // USD
const colQualityItem01 = element(by.xpath('(//li[@data-item-id="13"]/div[@class="dx-item dx-treeview-item"]/div[@_ngcontent-c17=""]/span[@draggable="true"])')); // Management Figures
const colQualityItem02 = element(by.xpath('(//li[@data-item-id="14"]/div[@class="dx-item dx-treeview-item"]/div[@_ngcontent-c17=""]/span[@draggable="true"])')); // Audited Financials

/* Rows */
const rowAttributesItem01 = element(by.xpath('(//li[@data-item-id="2"]/div[@class="dx-item dx-treeview-item"]/div[@_ngcontent-c17=""]/span[@draggable="true"])')); // Upgraded Homes
const rowAttributesItem02 = element(by.xpath('(//li[@data-item-id="3"]/div[@class="dx-item dx-treeview-item"]/div[@_ngcontent-c17=""]/span[@draggable="true"])')); // Homes Passed
const rowLegalItem01 = element(by.xpath('(//li[@data-item-id="5"]/div[@class="dx-item dx-treeview-item"]/div[@_ngcontent-c17=""]/span[@draggable="true"])'));
const rowLegalItem02 = element(by.xpath('(//li[@data-item-id="6"]/div[@class="dx-item dx-treeview-item"]/div[@_ngcontent-c17=""]/span[@draggable="true"])'));
const rowTimeItem01 = element(by.xpath('(//li[@data-item-id="8"]/div[@class="dx-item dx-treeview-item"]/div[@_ngcontent-c17=""]/span[@draggable="true"])'));
const rowTimeItem02 = element(by.xpath('(//li[@data-item-id="9"]/div[@class="dx-item dx-treeview-item"]/div[@_ngcontent-c17=""]/span[@draggable="true"])'));
const rowLayerItem01 = element(by.xpath('(//li[@data-item-id="11"]/div[@class="dx-item dx-treeview-item"]/div[@_ngcontent-c17=""]/span[@draggable="true"])')); // "Actual"
const rowUnitItem01 = element(by.xpath('(//li[@data-item-id="13"]/div[@class="dx-item dx-treeview-item"]/div[@_ngcontent-c17=""]/span[@draggable="true"])')); // EUR
const rowUnitItem02 = element(by.xpath('(//li[@data-item-id="14"]/div[@class="dx-item dx-treeview-item"]/div[@_ngcontent-c17=""]/span[@draggable="true"])')); // USD
const rowQualityItem01 = element(by.xpath('(//li[@data-item-id="16"]/div[@class="dx-item dx-treeview-item"]/div[@_ngcontent-c17=""]/span[@draggable="true"])')); // Management Figures
const rowQualityItem02 = element(by.xpath('(//li[@data-item-id="17"]/div[@class="dx-item dx-treeview-item"]/div[@_ngcontent-c17=""]/span[@draggable="true"])')); // Audited Financials

/* Global is same as Columns */

const areaToDragTo = element(by.xpath('(//kosmos-sheet-characteristics[@_ngcontent-c12=""]/div[@class="container"])'));


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
//const chartYAxis = element(by.xpath('(//g[@class="dxc-arg-axis"])'));

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


