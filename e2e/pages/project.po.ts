import { browser, by, element } from 'protractor';

/* Img */
const logo = element(by.xpath('(//img[@class="logo"])[1]'));
const kpmgHeader = element(by.xpath('//div[@class="kpmg-header"]'));
const headerText = element(by.xpath('(//div[@class="header-info"]/div[@class="header-subtitle"])'));

/* Nav */ /* Language | userManagement | myProjects | projectScope | projectSetup | dataOvervie | dataExplorer | sourceData | taskList */
const navLanguage = element(by.tagName('kosmos-main-nav-item-language'));
const navUserManagement = element(by.id('main-nav-home-icon'));
const navHome = element(by.id('main-nav-home-icon'));
const navScopeButton = element(by.id('main-nav-project-scope-icon'));
const navSetupButton = element(by.id('main-nav-task-project-setup-icon'));

const navDataOverviewButton = element(by.id('main-nav-project-data-overview-icon'));
const navDataExplorerButton = element(by.id('main-nav-project-data-explorer-icon'));
const navSourceDataButton = element(by.id('main-nav-project-data-icon'));
const navTaskListButton = element(by.id('main-nav-task-icon')); //const verticalButtonBar = element(by.xpath('(//span[@class="kpmg-icon-menu-tasks"])'));

const navReportButton = element(by.id('main-nav-report-output-icon'));
//const navLangText = 'kosmos-main-nav-item-language';
const createNewProject = element(by.tagName('kosmos-new-project-card'));
const startProject = element(by.xpath('(//span[text() = "Start Project"])[1]'));
const closeButton = element(by.xpath('//i[@class="dx-icon dx-icon-close"]'));

/* Label */
const miniProjectToolbar = element(by.xpath('(//div[@class="dx-item-content dx-toolbar-item-content"])[1]'));
const projectListHeadline = element(by.xpath('(//div[@class="header-subtitle"])'));
const projectNameLabel = element(by.xpath('(//label[@_ngcontent-c18=""])[1]'));
const clientNameLabel = element(by.xpath('(//label[@_ngcontent-c18=""])[2]'));
const targetNameLabel = element(by.xpath('(//label[@_ngcontent-c18=""])[3]'));
const start_dateLabel = element(by.xpath('(//label[@_ngcontent-c18=""])[4]'));
const end_dateLabel = element(by.xpath('(//label[@_ngcontent-c18=""])[5]'));
const project_feesLabel = element(by.xpath('(//label[@_ngcontent-c18=""])[6]'));
const da_contactsLabel = element(by.xpath('(//label[@_ngcontent-c18=""])[7]'));
const your_briefingLabel = element(by.xpath('(//label[@_ngcontent-c18=""])[8]'));
const sellSide = element(by.xpath('(//div[@class="dx-item-content"])[1]'));
const buySide = element(by.xpath('(//div[@class="dx-item-content"])[2]'));
const otherSide = element(by.xpath('(//div[@class="dx-item-content"])[3]'));

/* Element */
const projectNameTxtbox = element(by.xpath('(//input[@class="dx-texteditor-input"])[1]'));
const projectNameTxtboxPlH = element(by.xpath('(//div[@class="dx-placeholder"])[1]'));
const clientNameTxtbox = element(by.xpath('(//input[@class="dx-texteditor-input"])[2]'));
const clientNameTxtboxPlH = element(by.xpath('(//div[@class="dx-placeholder"])[2]'));
const targetNameTxtbox = element(by.xpath('(//input[@class="dx-texteditor-input"])[3]'));
const targetNameTxtboxPlH = element(by.xpath('(//div[@class="dx-placeholder"])[3]'));
const da_contactsTxtbox = element(by.xpath('(//input[@class="dx-texteditor-input"])[7]'));
const da_contactsTxtboxPlH = element(by.xpath('(//div[@class="dx-placeholder"])[7]'));
const da_contactsListElementMB = element(by.xpath('(//div[text() = "Matthias Budach"])'));
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
const startProjectButton_class = element(by.xpath('(//div[@class="dx-item dx-toolbar-item dx-toolbar-button"])[2]'));
const startProjectButton = element(by.xpath('(//span[text() = "Start Project"])[1]'));
const invalidMessage = element(by.xpath('(//div[@class="dx-overlay-content dx-resizable"])[1]'));
const getProject = element(by.xpath('(//h2[text() = "Test Client"])[1]'));

/* Stakeholder */
const addStakeholder = element(by.tagName('kosmos-new-stakeholder'));
const firstNameTxTbox = element(by.xpath('(//input[@name="stakeholderFirstName"])'));
const lastNameTxTbox = element(by.xpath('(//input[@name="stakeholderLastName"])'));
const jobtitleTxTbox = element(by.xpath('(//input[@name="stakeholderJobTitle"])'));
const companyNameTxTbox = element(by.xpath('(//input[@name="StakeholderCompany"])'));
const emailAddressTxTbox = element(by.xpath('(//input[@name="StakeholderEmail"])'));
const phoneNumberTxTbox = element(by.xpath('(//input[@name="StakeholderPhone"])'));
const addAnotherButton = element(by.xpath('(//span[text() = "Add another"])[1]'));
const doneButton = element(by.xpath('(//span[text() = "Done"])[1]'));
const getStakeholder = element(by.xpath('(//p[text() = " Testing Company GmbH"])[1]'));

/* Language */
const langUK = element(by.xpath('(//a[text() = "English (UK)"])'));
const langDE = element(by.xpath('(//a[text() = "Deutsch"])'));
const headerTextDE = "Meine Projekte";
const headerTextUK = "My Projects";


/* misc */
const fs = require('fs');
const configFile = './testData/shared.params.meta.json';
const outputFile = configFile;


export class ProjectPage {
    /* Nav */
    navigateTo() {
        browser.waitForAngularEnabled(false);   // false when targeting IE
        // console.log("navigateTo: Entering home");
        return browser.get(this.date_switch_url());
    }

    date_switch_url() {

        const jetzt = new Date();
        const myHours = jetzt.getHours();
        let myURL = '';

        if (myHours <= settings.meta.daytimeStart || myHours >= settings.meta.daytimeEnd)
            myURL = settings.meta.urlNightly;
        else if (myHours > settings.meta.daytimeStart && myHours < settings.meta.daytimeEnd)
            myURL = settings.meta.url;
        else {
            myURL = settings.meta.url;
        }
           return myURL;
    }

     /* Label */
    getLogo() { return logo; }
	getVerticalButtonBar() { return verticalButtonBar; }
    getNavSetupButton() { return navSetupButton; }
    getNavScopeButton() { return navScopeButton; }
    getToolbar() { return miniProjectToolbar; }
    getMiniProjectToolbar() { return miniProjectToolbar.getText(); }
    getProjectListHeadline() { return projectListHeadline.getText(); }
    getProjectNameLabel() { return projectNameLabel.getText(); }
    getClientNameLabel() { return clientNameLabel.getText(); }
    getTargetNameLabel() { return targetNameLabel.getText(); }
    getStart_dateLabel() { return start_dateLabel.getText(); }
    getEnd_dateLabel() { return end_dateLabel.getText(); }
    getProject_feesLabel() { return project_feesLabel.getText(); }
    getDA_contactsLabel() { return da_contactsLabel.getText(); }
    getYour_BriefingLabel() { return your_briefingLabel.getText(); }
    getSellSide() { return sellSide.getText(); }
    getBuySide() { return buySide.getText(); }
    getOtherSide() { return otherSide.getText(); }
    getinvalidMessage() { return invalidMessage.getText(); }
    getnavLanguage() { return navLanguage; }

    /* Element */
    getProjectNameTxtbox() { return projectNameTxtbox; }
    getProjectNamePlH() { return projectNameTxtboxPlH; }
    getClientNameTxtbox() { return clientNameTxtbox; }
    getClientNamePlH() { return clientNameTxtboxPlH; }
    getTargetNameTxtbox() { return targetNameTxtbox; }
    getTargetNamePlH() { return targetNameTxtboxPlH; }
    getCreateNewProject() { return createNewProject; }
    getProject() { return getProject; }
    getStakeholder() { return getStakeholder; }
    getStartProjectButton() { return startProjectButton; }
    getKpmgHeader() { return kpmgHeader; }

    /* Actions */
    clickKpmgHeader() { return kpmgHeader.click(); }
    clickStartProject() { startProject.click(); }
    clickProjectSetupButton() { return navSetupButton.click(); }
    clickProjectScopeButton() { return navScopeButton.click(); }
    createNewProject() { createNewProject.click(); }
    clickClose() { closeButton.click(); }

    /* Lang */
    getLangUK() { return langUK; }
    getLangDE() { return langDE; }


    setLanguage() {

        browser.actions().mouseMove(navLanguage).perform();
        navLanguage.click();
        browser.sleep(3000);

        browser.wait(EC.visibilityOf(langDE), 60000).then(function () {
            expect(langDE.getCssValue('font-weight')).toBe('400').then(function () {
                console.log('Dicke 400');
                langDE.click();
            });
        });

        expect(langDE.getCssValue('font-weight')).toBe('700').then(function () {
            console.log('Dicke 700');
        });

        browser.wait(EC.visibilityOf(langDE), 60000).then(function () {
            doneButton.click();
        });

        //this.checkLogo();
        this.checkLanguage();
        browser.sleep(2000).then(function ()  {
            let myData = fs.readFileSync(configFile);
            let myConv = JSON.parse(myData);
            expect("DE").toEqual(myConv.meta.countryCode);
        });

        browser.wait(EC.visibilityOf(headerText));
        headerText.getText().then(function (text) {
            expect(text).toEqual(headerTextDE);
            console.log("Header text=%s", text);
        });

        browser.wait(EC.visibilityOf(navLanguage));
        navLanguage.click();
        browser.sleep(3000);

        browser.wait(EC.visibilityOf(langUK), 6000).then(function () {
            expect(langUK.getCssValue('font-weight')).toBe('400').then(function () {
                console.log('Dicke 400');
                langUK.click();
            });
        });

        expect(langUK.getCssValue('font-weight')).toBe('700').then(function () {
            console.log('Dicke 700');
        });

        browser.wait(EC.visibilityOf(langUK), 6000).then(function () {
            doneButton.click();
        });

        //this.checkLogo();
        this.checkLanguage();
        browser.sleep(2000).then(function () {
            let myData = fs.readFileSync(configFile);
            let myConv = JSON.parse(myData);
            expect("UK").toEqual(myConv.meta.countryCode);
        });

        browser.wait(EC.visibilityOf(headerText));
        headerText.getText().then(function (text) {
            expect(text).toEqual(headerTextUK);
            console.log("Header text=%s", text);
        });
    }

    checkLanguage = function () {
        navLanguage.getText().then(function (text) {
            let myCode = "";
            if (text.includes('English (UK)')) myCode = "UK";
            else if (text.includes('Deutsch')) myCode = "DE";
            let project = new ProjectPage();
            console.log("Lang=%s, code=%s, file=%s", text, myCode, configFile);
            let myData = fs.readFileSync(configFile);
            let myConv = JSON.parse(myData);
            let myActualLang = myConv.meta.countryCode;

            if (myCode != myActualLang) {
                myConv.meta.countryCode = myCode;
                console.log("Written %s to %s", myConv.meta.countryCode, outputFile);
                let myOutput = JSON.stringify(myConv, null, 2);
                fs.writeFile(outputFile, myOutput, (error) => {
                    if (error) throw error;
                    console.log("Lang = %s written to %s", myConv.meta.countryCode, outputFile);
                });
            }

        });
    }

    getBrowser() {
        browser.getCapabilities().then(function (cap) {
            let browserName = cap.get('browserName');
            console.log("br=%s, our=%s", browserName, settings.meta.browser);
            if (browserName != settings.meta.browser) {
                let myData = fs.readFileSync(configFile);
                let myConv = JSON.parse(myData);
                myConv.meta.browser = browserName;
                console.log("Written %s to %s", myConv.meta.browser, outputFile);
                let myOutput = JSON.stringify(myConv, null, 2);
                fs.writeFile(outputFile, myOutput, (error) => {
                    if (error) throw error;
                    console.log("Browser = %s written to %s", myConv.meta.browser, outputFile);
                });
            }
        });
    }

    checkLogo() {
        browser.wait(EC.visibilityOf(logo));
    }

    checkProjectExist() {
        getProject.isPresent().then(present => {

            if (present) {
                // console.log('found project... Test Client');
            } else {
                // console.log('project... Test Client is not present');
                this.setMiniProject();
            }
        });
    }

    checkElement(elm) {

        const elm = elm;

        elm.isDisplayed().then(function (isDisplayed) {
            if (isDisplayed) {

                expect(elm.isDisplayed()).toBe(true);
                // console.log("element is displayed ...");
                elm.isPresent().then(function (isPresent) {
                    if (isPresent) {
                        expect(elm.isPresent()).toBe(true);
                        // console.log("element is present ...");
                    } else {
                        // console.log('not present...');
                    }
                });
            } else {
                // console.log('not displayed...');
            }
        });
    }

    checkMiniProjectStart() {

        const values = [navLanguage,
            createNewProject,
            startProject,
            navHome];

        for (let i = 0; i < values.length; i++) {
            expect(values[i].isDisplayed()).toBe(true);
            expect(values[i].isPresent()).toBe(true);
            expect(values[i].isEnabled()).toBe(true);
        }
    }

    setMiniProject() {

        browser.wait(EC.visibilityOf(createNewProject), 600000).then(function () {
            createNewProject.click();
        });

        projectNameTxtbox.sendKeys(testdata.miniProject.projectNameTxtbox);
        clientNameTxtbox.sendKeys(testdata.miniProject.clientNameTxtbox);
        targetNameTxtbox.sendKeys(testdata.miniProject.targetNameTxtbox);

        browser.wait(EC.visibilityOf(da_contactsTxtbox), 600000).then(function () {
            //da_contactsTxtbox.sendKeys(testdata.miniProject.da_contactsTxtbox);
            da_contactsTxtbox.sendKeys("b");
            da_contactsTxtbox.sendKeys("u");
            da_contactsTxtbox.sendKeys("d");
        });

        browser.wait(EC.visibilityOf(da_contactsListElementMB), 600000).then(function () {
            expect(da_contactsListElementMB.isDisplayed()).toBe(true);
            da_contactsListElementMB.click();;
        });

        sellSideRadio.click();
        startDatePicker.click();
        startDate.click();
        endDatePicker.click();
        endDate.click();
        projectFees.click();
        projectFeesMore.click();
        yourBriefingTxtarea.sendKeys(testdata.miniProject.yourBriefingTxtarea);
        expect(startProjectButton.isDisplayed()).toBe(true);

        startProjectButton.click();

        browser.wait(EC.visibilityOf(getProject), 600000).then(function () {
            browser.refresh();
        });

        browser.wait(EC.visibilityOf(projectListHeadline));
        browser.wait(EC.visibilityOf(getProject));

            /*  visibility toast message
                browser.wait(result => {
                    return element(by.className('project was successfully added')).isPresent();
                    }, 40000);
            */
    }

    setProjectFail() {

        browser.wait(EC.visibilityOf(createNewProject), 600000).then(function () {
            createNewProject.click();
        });

        browser.wait(EC.visibilityOf(projectNameTxtbox));
        projectNameTxtbox.click();
        projectNameTxtbox.clear();

        browser.wait(EC.visibilityOf(clientNameTxtbox));
        clientNameTxtbox.click();
        clientNameTxtbox.clear();

        browser.wait(EC.visibilityOf(projectNameTxtbox));
        projectNameTxtbox.click();
        projectNameTxtbox.clear();

        browser.wait(EC.visibilityOf(clientNameTxtbox));
        clientNameTxtbox.click();
        clientNameTxtbox.clear();

        browser.wait(EC.visibilityOf(projectNameTxtbox));
        projectNameTxtbox.click();
        projectNameTxtbox.clear();

        closeButton;
    }

    setStakeholder() {
        browser.executeScript("arguments[0].scrollIntoView();", addStakeholder.getWebElement());
        addStakeholder.click();
        firstNameTxTbox.sendKeys(testdata.Stakeholder.firstNameTxTbox);
        lastNameTxTbox.sendKeys(testdata.Stakeholder.lastNameTxTbox);
        jobtitleTxTbox.sendKeys(testdata.Stakeholder.jobtitleTxTbox);
        companyNameTxTbox.sendKeys(testdata.Stakeholder.companyName);
        emailAddressTxTbox.sendKeys(testdata.Stakeholder.emailAddressTxTbox);
        phoneNumberTxTbox.sendKeys(testdata.Stakeholder.phoneNumberTxTbox);
        expect(addAnotherButton.isDisplayed()).toBe(true);
        expect(doneButton.isDisplayed()).toBe(true);
        doneButton.click();
    }

    toggle() {
        navSetupButton.click();
        browser.wait(EC.visibilityOf(kpmgHeader));
        navScopeButton.click();
        browser.wait(EC.visibilityOf(kpmgHeader));
    }

    move_down() {
        document.getElementById('divElem').scrollTop -= 10;
    }

}
