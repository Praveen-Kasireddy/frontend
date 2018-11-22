import { browser, by, element, ExpectedConditions } from 'protractor';

const NavigationPage = requirePO('navigationBar/navigationBar');

/* toc */

/* Buttons */
const listViewButton = element(by.xpath('(//div[@class="dx-button-content"]/i[@class="dx-icon kpmg-icon kpmg-icon-toolbar-list-view"])'));
const templateButton = element(by.xpath('(//div[@class="dx-button-content"]/i[@class="dx-icon kpmg-icon kpmg-icon-template template"])'));

const saveButton = element(by.xpath('(//div[@class="segmented-button has-items"])[1]'));
const saveSelectionArrow = element(by.xpath('(//i[@class="kpmg-icon kpmg-icon-arrow-down"])'));
const saveItem01 = element(by.xpath('(//kosmos-menu-item/div/button[text() = "Save"])')); // Save
const saveItem02 = element(by.xpath('(//kosmos-menu-item/div/button[text() = "Save as template"])')); // Save as template

const notStartedButton = element(by.xpath('(//button[@title="Not started"])'));
const notStartedArrow = element(by.xpath('(//button[@title="Not started"]/span[@class="kpmg-icon kpmg-icon-arrow-down"])'));
const notStartedItem01 = element(by.xpath('(//kosmos-menu-item/div/span[text() = "Not started"])')); // Not started
const notStartedItem02 = element(by.xpath('(//kosmos-menu-item/div/span[text() = "In progress"])')); // In progress
const notStartedItem03 = element(by.xpath('(//kosmos-menu-item/div/span[text() = "Submitted for review"])')); // Submitted for review
const notStartedItem04 = element(by.xpath('(//kosmos-menu-item/div/span[text() = "Done"])')); // Done

const previewButton = element(by.xpath('(//div[@class="dx-button-content"]/span[text() = "Preview"])'));
const addPageButton = element(by.xpath('(//button[@title="Add new page"]/span)'));
const toolbarTextButton = element(by.xpath('(//div[@class="dx-button-content"]/i[@class="dx-icon kpmg-icon kpmg-icon-toolbar-text"])'));

const addNewAnalysisButton = element(by.xpath('(//button[@title="Add new Analysis"]/span)'));
const newAnalysisItem01 = element(by.xpath('(//kosmos-menu-item[contains(@class, "analysis ")]/div)[1]'));

const labelIntroColumn = element(by.xpath('(//label[text() = "Intro Column"])'));
const switchIntroColumnButton = element(by.xpath('(//div[@class="dx-switch-container"]/div[@class="dx-switch-inner"])'));
const flipForwardButton = element(by.xpath('(//dx-button[@aria-label="chevrondown"])'));
const flipBackButton = element(by.xpath('(//dx-button[@aria-label="chevronup"])'));
const generateReportButton = element(by.xpath('(//dx-button[@aria-label="Generate report"])'));
const deletePageButton = element(by.xpath('(//dx-button[@hint="Remove"])'));


/* Edit Buttons */
const zoomButton = element(by.xpath('(//div[@class="geToolbar"]/a[@title="Zoom (Alt+Mousewheel)"])'));
const zoomInButton = element(by.xpath('(//div[@class="geToolbar"]/a[@title="Zoom In (Ctrl + (Numpad) / Alt+Mousewheel)"])'));
const zoomOutButton = element(by.xpath('(//div[@class="geToolbar"]/a[@title="Zoom Out (Ctrl - (Numpad) / Alt+Mousewheel)"])'));
const undoButton = element(by.xpath('(//div[@class="geToolbar"]/a[@title="Undo (Ctrl+Z)"])'));
const redoButton = element(by.xpath('(//div[@class="geToolbar"]/a[@title="Redo (Ctrl+Y)"])'));
const deleteButton = element(by.xpath('(//div[@class="geToolbar"]/a[@title="Delete (Delete)"])'));
const toFrontButton = element(by.xpath('(//div[@class="geToolbar"]/a[@title="To Front (Ctrl+Shift+F)"])'));
const toBackButton = element(by.xpath('(//div[@class="geToolbar"]/a[@title="To Back (Ctrl+Shift+B)"])'));
const fillColorButton = element(by.xpath('(//div[@class="geToolbar"]/a[@title="Fill Color..."])'));
const lineColorButton = element(by.xpath('(//div[@class="geToolbar"]/a[@title="Line Color..."])'));
const shadowButton = element(by.xpath('(//div[@class="geToolbar"]/a[@title="Shadow"])'));
const connectionButton = element(by.xpath('(//div[@class="geToolbar"]/a[@title="Connection"])'));

/* Pulldown menu Connection button */
const connectionItem01 = element(by.xpath('(//div[@class="geIcon geSprite geSprite-connection"])'));
const connectionItem02 = element(by.xpath('(//div[@class="geIcon geSprite geSprite-linkedge"])'));
const connectionItem03 = element(by.xpath('(//div[@class="geIcon geSprite geSprite-arrow"])'));
const connectionItem04 = element(by.xpath('(//div[@class="geIcon geSprite geSprite-simplearrow"])'));

const waypointsButton = element(by.xpath('(//div[@class="geToolbar"]/a[@title="Waypoints"])'));

/* Pulldown menu Waypoints button */
const waypointsItem01 = element(by.xpath('(//div[@class="geIcon geSprite geSprite-straight"])'));
const waypointsItem02 = element(by.xpath('(//div[@class="geIcon geSprite geSprite-orthogonal"])'));
const waypointsItem03 = element(by.xpath('(//div[@class="geIcon geSprite geSprite-horizontalelbow"])'));
const waypointsItem04 = element(by.xpath('(//div[@class="geIcon geSprite geSprite-verticalelbow"])'));
const waypointsItem05 = element(by.xpath('(//div[@class="geIcon geSprite geSprite-horizontalisometric"])'));
const waypointsItem06 = element(by.xpath('(//div[@class="geIcon geSprite geSprite-verticalisometric"])'));
const waypointsItem07 = element(by.xpath('(//div[@class="geIcon geSprite geSprite-curved"])'));
const waypointsItem08 = element(by.xpath('(//div[@class="geIcon geSprite geSprite-entity"])'));

const insertButton = element(by.xpath('(//div[@class="geToolbar"]/a[@title="Insert (Doubleclick to insert text)"])'));

/* Pulldown menu Insert button */
const insertItem01 = element(by.xpath('(//tr[@class="mxPopupMenuItem"]/td[text() = "Insert Text"])'));
const insertItem02 = element(by.xpath('(//tr[@class="mxPopupMenuItemHover"]/td[text() = "Insert Rectangle"])'));
const insertItem03 = element(by.xpath('(//tr[@class="mxPopupMenuItem"]/td[text() = "Insert Ellipse"])'));
const insertItem04 = element(by.xpath('(//tr[@class="mxPopupMenuItem"]/td[text() = "Insert Rhombus"])'));
const insertItem05 = element(by.xpath('(//tr[@class="mxPopupMenuItem"]/td[text() = "Insert Link..."])'));
const insertItem06 = element(by.xpath('(//tr[@class="mxPopupMenuItem"]/td[text() = "Insert Image..."])'));


const insertedAnalysis = element(by.xpath('(//foreignObject[@style="overflow:visible;"])')); // Does not work

const textBox = element(by.xpath('(//div[text() = "Insert your content...."])')); // ??

/* Popup Editor */
const editorHead = element(by.xpath('(//div[@class="dx-item-content dx-toolbar-item-content"]/div[text() = "EDITOR"])'));
const textSnippet01 = element(by.xpath('(//div[@class="info-sippet ng-star-inserted"]/button[@class="info-text"])[1]'));
const textSnippet02 = element(by.xpath('(//div[@class="info-sippet ng-star-inserted"]/button[@class="info-text"])[2]'));
const textSnippet03 = element(by.xpath('(//div[@class="info-sippet ng-star-inserted"]/button[@class="info-text"])[3]'));
const textSnippet04 = element(by.xpath('(//div[@class="info-sippet ng-star-inserted"]/button[@class="info-text"])[4]'));

const areaToDragTextSnippetTo = element(by.xpath('(//div[@class="fr-element fr-view"])'));
const textDoneButton = element(by.xpath('(//div[@class="dx-button-content"]/span[text() = "Done"])'));

/* Smart workspace */
const smartWorkspaceContainer = element(by.xpath('(//div[@class="sidebar-container"])'));
const smartWorkspaceHeadline = element(by.xpath('(//span[@class="sidebar-title"])'));
const smartWorkspaceDeleteButton = element(by.xpath('(//span[@class="kpmg-icon-remove"])'));
const smartWorkspaceHelpContent = element(by.xpath('(//div[@class="help-content ng-star-inserted"])'));
const smartWorkspaceCLMS = element(by.xpath('(//div[@class="sidebar-content ng-star-inserted"]/p/a[@target="_blank"])'));
const smartWorkspaceCheckGrid = element(by.xpath('(//input[@type="checkbox"])[1]'));
const smartWorkspaceCheckPageView = element(by.xpath('(//input[@type="checkbox"])[2]'));
const smartWorkspaceCheckBackground = element(by.xpath('(//input[@type="checkbox"])[3]'));
const smartWorkspaceImageButton = element(by.xpath('(//button[@class="geColorBtn"])[2]'));
const smartWorkspaceColorButton = element(by.xpath('(//button[@class="geColorBtn"]/div)[2]'));
const smartWorkspaceCheckShadow = element(by.xpath('(//input[@type="checkbox"])[4]'));

const smartWorkspaceCheckConnectionArrows = element(by.xpath('(//input[@type="checkbox"])[5]'));
const smartWorkspaceCheckConnectionPoints = element(by.xpath('(//input[@type="checkbox"])[6]'));
const smartWorkspaceCheckGuides = element(by.xpath('(//input[@type="checkbox"])[7]'));

const smartWorkspaceEditData = element(by.xpath('(//button[@title="Edit Data (Ctrl+M)"])'));
const smartWorkspaceClearDefaultStyle = element(by.xpath('(//button[@title="Clear Default Style (Ctrl+Shift+R)"])'));


const smartWorkspacePage = Object.create(NavigationPage, {

    /* Buttons */
    getlistViewButton: { get: function () { return listViewButton; } },
    gettemplateButton: { get: function () { return templateButton; } },

    getsaveButton: { get: function () { return saveButton; } },
    getsaveSelectionArrow: { get: function () { return saveSelectionArrow; } },
    getsaveItem01: { get: function () { return saveItem01; } },
    getsaveItem02: { get: function () { return saveItem02; } },

    getnotStartedButton: { get: function () { return notStartedButton; } },
    getnotStartedArrow: { get: function () { return notStartedArrow; } },
    getnotStartedItem01: { get: function () { return notStartedItem01; } },
    getnotStartedItem02: { get: function () { return notStartedItem02; } },
    getnotStartedItem03: { get: function () { return notStartedItem03; } },
    getnotStartedItem04: { get: function () { return notStartedItem04; } },

    getpreviewButton: { get: function () { return previewButton; } },
    getaddPageButton: { get: function () { return addPageButton; } },
    gettoolbarTextButton: { get: function () { return toolbarTextButton; } },

    getaddNewAnalysisButton: { get: function () { return addNewAnalysisButton; } },
    getnewAnalysisItem01: { get: function () { return newAnalysisItem01; } },

    getswitchIntroColumnButton: { get: function () { return switchIntroColumnButton; } },
    getlabelIntroColumn: { get: function () { return labelIntroColumn; } },
    getflipForwardButton: { get: function () { return flipForwardButton; } },
    getflipBackButton: { get: function () { return flipBackButton; } },
    getgenerateReportButton: { get: function () { return generateReportButton; } },
    getdeletePageButton: { get: function () { return deletePageButton; } },


    /* Edit Buttons */
    getzoomButton: { get: function () { return zoomButton; } },
    getzoomInButton: { get: function () { return zoomInButton; } },
    getzoomOutButton: { get: function () { return zoomOutButton; } },
    getundoButton: { get: function () { return undoButton; } },
    getredoButton: { get: function () { return redoButton; } },
    getdeleteButton: { get: function () { return deleteButton; } },
    gettoFrontButton: { get: function () { return toFrontButton; } },
    gettoBackButton: { get: function () { return toBackButton; } },
    getfillColorButton: { get: function () { return fillColorButton; } },
    getlineColorButton: { get: function () { return lineColorButton; } },
    getshadowButton: { get: function () { return shadowButton; } },
    getconnectionButton: { get: function () { return connectionButton; } },

    /* Pulldown menu Connection button */
    getconnectionItem01: { get: function () { return connectionItem01; } },
    getconnectionItem02: { get: function () { return connectionItem02; } },
    getconnectionItem03: { get: function () { return connectionItem03; } },
    getconnectionItem04: { get: function () { return connectionItem04; } },

    getwaypointsButton: { get: function () { return waypointsButton; } },

    /* Pulldown menu Waypoints button */
    getwaypointsItem01: { get: function () { return waypointsItem01; } },
    getwaypointsItem02: { get: function () { return waypointsItem02; } },
    getwaypointsItem03: { get: function () { return waypointsItem03; } },
    getwaypointsItem04: { get: function () { return waypointsItem04; } },
    getwaypointsItem05: { get: function () { return waypointsItem05; } },
    getwaypointsItem06: { get: function () { return waypointsItem06; } },
    getwaypointsItem07: { get: function () { return waypointsItem07; } },
    getwaypointsItem08: { get: function () { return waypointsItem08; } },

    getinsertButton: { get: function () { return insertButton; } },

    /* Pulldown menu Insert button */
    getinsertItem01: { get: function () { return insertItem01; } },
    getinsertItem02: { get: function () { return insertItem02; } },
    getinsertItem03: { get: function () { return insertItem03; } },
    getinsertItem04: { get: function () { return insertItem04; } },
    getinsertItem05: { get: function () { return insertItem05; } },
    getinsertItem06: { get: function () { return insertItem06; } },

    getinsertedAnalysis: { get: function () { return insertedAnalysis; } },

    gettextBox: { get: function () { return textBox; } },

    /* Popup Editor */
    geteditorHead: { get: function () { return editorHead; } },
    gettextSnippet01: { get: function () { return textSnippet01; } },
    gettextSnippet02: { get: function () { return textSnippet02; } },
    gettextSnippet03: { get: function () { return textSnippet03; } },
    gettextSnippet04: { get: function () { return textSnippet04; } },

    getareaToDragTextSnippetTo: { get: function () { return areaToDragTextSnippetTo; } },
    gettextDoneButton: { get: function () { return textDoneButton; } },

    /* Smart workspace */
    getsmartWorkspaceContainer: { get: function () { return smartWorkspaceContainer; } },
    getsmartWorkspaceHeadline: { get: function () { return smartWorkspaceHeadline; } },
    getsmartWorkspaceDeleteButton: { get: function () { return smartWorkspaceDeleteButton; } },
    getsmartWorkspaceHelpContent: { get: function () { return smartWorkspaceHelpContent; } },
    getsmartWorkspaceCLMS: { get: function () { return smartWorkspaceCLMS; } },
    getsmartWorkspaceCheckGrid: { get: function () { return smartWorkspaceCheckGrid; } },
    getsmartWorkspaceCheckPageView: { get: function () { return smartWorkspaceCheckPageView; } },
    getsmartWorkspaceCheckBackground: { get: function () { return smartWorkspaceCheckBackground; } },
    getsmartWorkspaceImageButton: { get: function () { return smartWorkspaceImageButton; } },
    getsmartWorkspaceColorButton: { get: function () { return smartWorkspaceColorButton; } },
    getsmartWorkspaceCheckShadow: { get: function () { return smartWorkspaceCheckShadow; } },

    getsmartWorkspaceCheckConnectionArrows: { get: function () { return smartWorkspaceCheckConnectionArrows; } },
    getsmartWorkspaceCheckConnectionPoints: { get: function () { return smartWorkspaceCheckConnectionPoints; } },
    getsmartWorkspaceCheckGuides: { get: function () { return smartWorkspaceCheckGuides; } },

    getsmartWorkspaceEditData: { get: function () { return smartWorkspaceEditData; } },
    getsmartWorkspaceClearDefaultStyle: { get: function () { return smartWorkspaceClearDefaultStyle; } },

    /* Mapping -> from this. to parent page object */
    openWebsite: { value: function () { NavigationPage.openWebsite.call(this, ''); } },
    waitForElement: { value: function (selector, waitFor) { NavigationPage.waitForElement.call(this, selector, waitFor); } },
    getTaskListButton: { value: function () { return NavigationPage.getTaskListButton.call(this); } },

});

module.exports = smartWorkspacePage;
