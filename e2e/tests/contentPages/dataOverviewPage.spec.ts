import { browser } from 'protractor';
import { } from 'jasmine';

const dataOverviewPage = requirePO('contentPages/dataOverviewPage');
const newProjectPage = requirePO('contentPages/newProjectPage');
const dragAndDropFn = require('../../helpers/native_js_drag_and_drop_helper.js');


describe('Navigate to Data Overview Page and check entries', () => {

    it('open Kosmos start page', () => {
        dataOverviewPage.openWebsite();
    });

    it('open Data Overview page', () => {

        dataOverviewPage.waitForElement(newProjectPage.getGetProject);
        expect(newProjectPage.getGetProject.isPresent()).toBeTruthy();
        newProjectPage.getGetProject.click();
        dataOverviewPage.getDataOverviewButton().click().then(function () {
            expect(dataOverviewPage.getdataOverviewHeader.isDisplayed()).toBeTruthy();
            dataOverviewPage.getdataOverviewHeader.click();
            dataOverviewPage.wait(2000);
        });
    });

    xit('check elements', () => {
        expect(dataOverviewPage.getcolumnChooserButton.isPresent()).toBeTruthy();
    });

    xit('check headline', () => {
        expect(dataOverviewPage.getcolumn01.getText()).toEqual(dataOverviewPage.getcolumn01_text);
        // console.log("Col. 1 text = " + dataOverviewPage.getcolumn01_text);
        expect(dataOverviewPage.getcolumn02.getText()).toEqual(dataOverviewPage.getcolumn02_text);
        expect(dataOverviewPage.getcolumn03.getText()).toEqual(dataOverviewPage.getcolumn03_text);
        expect(dataOverviewPage.getcolumn04.getText()).toEqual(dataOverviewPage.getcolumn04_text);
        expect(dataOverviewPage.getcolumn05.getText()).toEqual(dataOverviewPage.getcolumn05_text);
        expect(dataOverviewPage.getcolumn06.getText()).toEqual(dataOverviewPage.getcolumn06_text);
        expect(dataOverviewPage.getcolumn07.getText()).toEqual(dataOverviewPage.getcolumn07_text);
        expect(dataOverviewPage.getcolumn08.getText()).toEqual(dataOverviewPage.getcolumn08_text);
        expect(dataOverviewPage.getcolumn09.getText()).toEqual(dataOverviewPage.getcolumn09_text);
        expect(dataOverviewPage.getcolumn10.getText()).toEqual(dataOverviewPage.getcolumn10_text);
    });

    xit('check contents', () => {
        // expect(dataOverviewPage.getdata0101.getText()).toEqual(dataOverviewPage.getdata0101_text);
        // expect(dataOverviewPage.getdata0102.getText()).toEqual(dataOverviewPage.getdata0102_text);
        expect(dataOverviewPage.getdata0202.getText()).toEqual(dataOverviewPage.getdata0202_text);
        expect(dataOverviewPage.getquality01.getText()).toEqual(dataOverviewPage.getquality01_text);
        expect(dataOverviewPage.getlayer01.getText()).toEqual(dataOverviewPage.getlayer01_text);
        expect(dataOverviewPage.getunit01.getText()).toEqual(dataOverviewPage.getunit01_text);
    });

    xit('sorting elemnts by column 2', () => {
        expect(dataOverviewPage.getcolumn02.isPresent()).toEqual(true);
        expect(dataOverviewPage.getcolumn05.isPresent()).toEqual(true);

        dataOverviewPage.getcolumn02.click();
        dataOverviewPage.wait(1000);
        dataOverviewPage.getcolumn02.click();
    });

    it('move column (HTML5 >>> Edge)', () => {

        // for Edge
        browser.actions().dragAndDrop(dataOverviewPage.getcolumn02, dataOverviewPage.getcolumn05).mouseUp().perform();

        // for IE11 (native_js_drag_and_drop_helper.js dont work)
        // browser.executeScript('alert("HelloWorld");');
        // const field = element(by.xpath('(//div[text() = "Original  Value"])'));
        // const src = element(by.xpath('(//div[text() = "Legal  Entity"])'));
        // browser.executeScript(dragAndDropFn, field.getWebElement(), src.getWebElement());
        // browser.executeScript(dragAndDropFn, dataOverviewPage.getcolumn02, dataOverviewPage.getcolumn05);

        // browser.actions()
        //    .mouseUp(dataOverviewPage.getcolumn02)
        //    .mouseDown()
        //    //.mouseMove(card, { x: 0, y: 0 })
        //    .mouseMove({ x: 700, y: 150 })
        //    //.mouseDown()
        //    //.mouseMove({ x: 0, y: -400 })
        //    .perform().then(() => browser.actions()
        //    .click()
        //    .perform());

        dataOverviewPage.wait(3000);
        expect(dataOverviewPage.getdataOverviewHeader.isDisplayed()).toBeTruthy();
    });

    xit('back to My Projects', () => {
        dataOverviewPage.waitForElement(dataOverviewPage.getHomeButton());
        dataOverviewPage.getHomeButton().click().then(function () {
            dataOverviewPage.waitForElement(newProjectPage.getGetProject);
        });
    });

});
