import { browser } from 'protractor';
import { } from 'jasmine';

const ingestSourceData = requirePO('contentPages/ingestSourceData');
const newProjectPage = requirePO('contentPages/newProjectPage');
const DataSourcePage = requirePO('contentPages/addDataSource');


describe('Navigate to Source Data Page', () => {

    it('open Kosmos start page', () => {
        ingestSourceData.openWebsite();
    });

    it('open Source Data page', () => {

        ingestSourceData.waitForElement(newProjectPage.getGetProject);
        expect(newProjectPage.getGetProject.isPresent()).toBeTruthy();
        newProjectPage.getGetProject.click();
        DataSourcePage.getSourceDataButton().click().then(function () {
            expect(DataSourcePage.getFileManagerHeadline.isDisplayed()).toBeTruthy();
            DataSourcePage.getFileManagerHeadline.click();
        });
    });

    it('check source data file', () => {
        ingestSourceData.waitForElement(ingestSourceData.getsourceDataFile);
        // expect(ingestSourceData.getingestButton.isPresent()).toBeTruthy();
        ingestSourceData.getUningestedElement.click();
        ingestSourceData.wait(3000);
    });

    it('enter ingest data page', () => {

        ingestSourceData.getingestButton.click().then(function () {
            ingestSourceData.waitForElement(ingestSourceData.getpreviewButton);
            expect(ingestSourceData.getapprovalButton.isDisplayed()).toBeTruthy();
            expect(ingestSourceData.getdownloadButton.isDisplayed()).toBeTruthy();
            expect(ingestSourceData.getingestNowButton.isDisplayed()).toBeTruthy(); // Only at first Ingest visible
        });
    });

    it('ingest now', () => {
        ingestSourceData.getingestNowButton.click().then(function () {
            ingestSourceData.waitForElement(ingestSourceData.getpreviewButton);
        });
    });

    it('get data', () => {
        const myData = [
            ingestSourceData.getnumber0406,
            ingestSourceData.getnumber0408,
            ingestSourceData.getnumber0606, // we can enter more numbers here if necessary, e.g. number0418, 1006
            ingestSourceData.getnumber0608,
            ingestSourceData.getnumber0806
        ];
        const mySelectedItems = [
            ingestSourceData.getselectItem01,
            ingestSourceData.getselectItem02,
            ingestSourceData.getselectItem03,
            ingestSourceData.getselectItem04,
            ingestSourceData.getselectItem05,
            ingestSourceData.getselectItem06,
            ingestSourceData.getselectItem07,
            ingestSourceData.getselectItem08,
            ingestSourceData.getselectItem09,
            ingestSourceData.getselectItem10,
            ingestSourceData.getselectItem11,
            ingestSourceData.getselectItem12
        ];
        let countDimension = 0;

        myData.forEach(function (el) {
            ingestSourceData.waitForElement(el);
            expect(el.isDisplayed()).toBeTruthy();
            el.click().then(function () { // Popup opens
                ingestSourceData.waitForElement(ingestSourceData.getradioButtonData);
                ingestSourceData.waitForElement(ingestSourceData.getaddUnitButton01);
                for (let i = 1; i <= 4; i++) { // four dimensions to set
                    ingestSourceData.getaddUnitButton01.click().then(function () {
                        // if we select same entries for all dimensions, the figure is not selected. Thats why we change the Unit every time
                        if (i == 3) {
                            // dimension Unit has a lot of items to select
                            mySelectedItems[countDimension++].click();
                        } else {
                            ingestSourceData.getselectItem01.click();
                        }
                    });
                }
                if (countDimension > mySelectedItems.length) {
                    countDimension = 0;
                } // avoid to exceed range of mySelectedItems
                // Include in range
                ingestSourceData.getincludeInRange.click();
                ingestSourceData.waitForElement(ingestSourceData.getincludeChecked);
                // Apply
                expect(ingestSourceData.getapplyButton.isDisplayed()).toBeTruthy();
                ingestSourceData.getapplyButton.click();
            });
        });
    });

    it('back to My Projects', () => {
        ingestSourceData.waitForElement(ingestSourceData.getHomeButton());
        ingestSourceData.getHomeButton().click().then(function () {
            ingestSourceData.waitForElement(newProjectPage.getGetProject);
        });
    });

});
