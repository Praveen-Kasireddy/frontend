import { browser } from 'protractor';
import { } from 'jasmine';

const dataExplorerPage = requirePO('contentPages/dataExplorerPage');
const newProjectPage = requirePO('contentPages/newProjectPage');


describe('Navigate to Data Explorer Analysis Page', () => {

    it('Open Kosmos start page', () => {
        dataExplorerPage.openWebsite();
    });

    it('open Data Explorer Analysis page', () => {

        dataExplorerPage.waitForElement(newProjectPage.getGetProject);
        expect(newProjectPage.getGetProject.isPresent()).toBeTruthy();
        newProjectPage.getGetProject.click();
        dataExplorerPage.getDataExplorerButton().click().then(function () {
            expect(dataExplorerPage.getheaderDE.isDisplayed()).toBeTruthy();
            dataExplorerPage.getheaderDE.click();
        });
    });

    it('Check Create button', () => {
        dataExplorerPage.waitForElement(dataExplorerPage.getcreateAnalysisButton);
    });
});

describe('Create new analysis or open existing analysis', () => {
    it('Open popup NEW ANALYSIS', () => {
        dataExplorerPage.getcreateAnalysisButton.click().then(function () {
            dataExplorerPage.waitForElement(dataExplorerPage.getcreateAnalysisHead);
            expect(dataExplorerPage.getanalysisNameTxTbox.isDisplayed()).toBeTruthy();
            dataExplorerPage.getanalysisNameTxTbox.click();
            dataExplorerPage.getanalysisNameTxTbox.sendKeys(testdata.DataExplorer.analysisName);
            dataExplorerPage.waitForElement(dataExplorerPage.getcreateDoneButton);
            dataExplorerPage.getcreateDoneButton.click();
        });
    });

    xit('Open existing analysis', () => {
        dataExplorerPage.waitForElement(dataExplorerPage.getexistingAnalysisCard01);
        dataExplorerPage.getexistingAnalysisCard01.click();
    });

    xit('Save analysis', () => {
        dataExplorerPage.getsaveButton.click();
    });

    it('Check analysis page', () => {
        dataExplorerPage.waitForElement(dataExplorerPage.getsaveButton);
        expect(dataExplorerPage.getheaderTitle.isDisplayed()).toBeTruthy();
        expect(dataExplorerPage.gettableButton.isDisplayed()).toBeTruthy();
        expect(dataExplorerPage.getchartButton.isDisplayed()).toBeTruthy();
        expect(dataExplorerPage.getcolumnsButton.isDisplayed()).toBeTruthy();
        expect(dataExplorerPage.getrowsButton.isDisplayed()).toBeTruthy();
        expect(dataExplorerPage.getglobalButton.isDisplayed()).toBeTruthy();
    });

    it('Make data visible', () => {
        dataExplorerPage.waitForElement(dataExplorerPage.getrowsButton);
        dataExplorerPage.getrowsButton.click();
        dataExplorerPage.waitForElement(dataExplorerPage.getheadAttributesEntity);
        dataExplorerPage.waitForElement(dataExplorerPage.getcolumnsButton);
        dataExplorerPage.getcolumnsButton.click();
        /*
        browser.actions().
            mouseDown(draggable_element).
            mouseMove(target_element).
            mouseUp().
            perform();

        */
    });


    it('Move columns', () => {
        // expect(dataExplorerPage.getheadLegalEntity.isPresent()).toBeTruthy();
        expect(dataExplorerPage.getcolLegalItem01.isPresent()).toBeTruthy();
        expect(dataExplorerPage.getareaToDragTo.isPresent()).toBeTruthy();

        /*
        browser.actions().dragAndDrop(dataExplorerPage.getcolLegalItem01, dataExplorerPage.getareaToDragTo).perform();
            */

        browser.actions().mouseMove(dataExplorerPage.getcolLegalItem01).mouseDown().
            mouseMove(dataExplorerPage.getareaToDragTo).mouseUp().perform();
        /*
        browser.actions().mouseDown(dataExplorerPage.getcolLegalItem01).
            mouseMove(dataExplorerPage.getareaToDragTo).mouseUp().perform();
            */
        dataExplorerPage.wait(2000);
        dataExplorerPage.getsaveButton.click();

        // dataExplorerPage.waitForElement(dataExplorerPage.getdraggedElement01);
        // dataExplorerPage.getsaveButton.click();
    });

    it('Move rows', () => {
        dataExplorerPage.getrowsButton.click().then(function () {
            dataExplorerPage.waitForElement(dataExplorerPage.getheadAttributesEntity);

            browser.actions().mouseDown(dataExplorerPage.getrowTimeItem01).
                mouseMove(dataExplorerPage.getareaToDragTo).mouseUp().perform();
            dataExplorerPage.wait(1000);
            dataExplorerPage.getsaveButton.click();

        });

        /*
        browser.actions().mouseDown(dataExplorerPage.getrowTimeItem01).
            mouseMove(dataExplorerPage.getareaToDragTo).mouseUp().perform();
        dataExplorerPage.getsaveButton.click();
        */
        // dataExplorerPage.waitForElement(dataExplorerPage.getdraggedElement01);

    });

    it('Move Global', () => {
        dataExplorerPage.getglobalButton.click().then(function () {
            dataExplorerPage.waitForElement(dataExplorerPage.getheadLegalEntity);
            dataExplorerPage.waitForElement(dataExplorerPage.getcolQualityItem01);
            dataExplorerPage.waitForElement(dataExplorerPage.getareaToDragTo);
        });
        /*
        browser.actions().mouseDown(dataExplorerPage.getcolQualityItem01).
            mouseMove(dataExplorerPage.getareaToDragTo).mouseUp().perform();
        dataExplorerPage.waitForElement(dataExplorerPage.getdraggedElement01);
        */
        // dataExplorerPage.getsaveButton.click();
    });

    it('Save analysis', () => {
        dataExplorerPage.getsaveButton.click();
    });

    it('Back to My Projects', () => {
        dataExplorerPage.waitForElement(dataExplorerPage.getHomeButton());
        dataExplorerPage.getHomeButton().click().then(function () {
            dataExplorerPage.waitForElement(newProjectPage.getGetProject);
        });
    });

});
