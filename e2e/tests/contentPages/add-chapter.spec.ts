import { browser } from 'protractor';
import { } from 'jasmine';

/* page objects */
const addChapter = requirePO('contentPages/addChapter');
const deliverablePage = requirePO('contentPages/addDeliverable');
/* helpers */
const helperProjectScope = require('../../helpers/helperProjectScope');


describe('Content Page > testing add Chapter > ', () => {

    it('open Kosmos start page', () => {

        addChapter.openWebsite();
    });

    it('open Project Scope page and select Deliverable', () => {

        helperProjectScope.getProjectScopePage();
        helperProjectScope.setDeliverable();
        helperProjectScope.getDelDeliverable();
    });

    it('open Chapter and check dialog size', () => {

        addChapter.getAddChapter.click();
        expect(addChapter.getDialogAddChapter.isDisplayed()).toBeTruthy();
        expect(addChapter.getDialogAddChapter.getCssValue('width')).toEqual('450px');
        expect(addChapter.getDialogAddChapter.getCssValue('height')).toEqual('250px');
    });

    it('check Chapter elements visibillity', () => {

        expect(addChapter.getHeadlineAddChapter.isDisplayed()).toBeTruthy();
        expect(addChapter.getCloseButton.isPresent()).toBeTruthy();
        expect(addChapter.getTitleLabel.isDisplayed()).toBeTruthy();
        expect(addChapter.getTitleTxTbox.isPresent()).toBeTruthy();
        expect(addChapter.getAnotherButton.isPresent()).toBeTruthy();
        expect(addChapter.getDoneButton.isPresent()).toBeTruthy();
    });

    it('fill Chapter form then send it', () => {

        addChapter.getTitleTxTbox.click();
        addChapter.wait(2000);
        addChapter.getTitleTxTbox.sendKeys('TestChapterA');
        addChapter.wait(2000);
        addChapter.getDoneButton.click();
        addChapter.wait(2000);
    });

    it('Check if Chapter is created', () => {

        expect(addChapter.getCreatedChapterLabel.getText()).toEqual(' TestChapterA ');
        expect(addChapter.getChapterMenuButton.isPresent()).toBeTruthy();
    });

    it('check ChapterMenu and delete created Chapter', () => {

        addChapter.getChapterMenuButton.click();
        expect(addChapter.getDialogChapterMenu.isDisplayed()).toBeTruthy();
        expect(addChapter.getDialogChapterMenu.getCssValue('width')).toEqual('202px');
        expect(addChapter.getDialogChapterMenu.getCssValue('height')).toEqual('129.2px');

        expect(addChapter.getchapterMenuElementI.isPresent()).toBeTruthy();
        expect(addChapter.getchapterMenuElementII.isPresent()).toBeTruthy();
        expect(addChapter.getchapterMenuElementIII.isPresent()).toBeTruthy();
        expect(addChapter.getchapterMenuElementIV.isPresent()).toBeTruthy();

        addChapter.getchapterMenuElementII.click();
        addChapter.wait(3000);
        expect(addChapter.getDelChapterNoButton.isPresent()).toBeTruthy();
        addChapter.wait(3000);
        addChapter.getDelChapterYesButton.click();
        addChapter.wait(3000);
    });

    it('check if Chapter is deleted', () => {

        addChapter.wait(5000);
        expect(addChapter.getCreatedChapterLabel.isPresent()).toBeFalsy();
    });

    it('delete Deliverable', () => {

        addChapter.wait(5000);
        deliverablePage.getProjectSetupButton().click();
        addChapter.wait(3000);
        deliverablePage.getProjectScopeButton().click();
        addChapter.wait(3000);
        deliverablePage.getDelDeliverable.click();
        addChapter.wait(3000);
        deliverablePage.getYesButton.click();
        addChapter.wait(3000);
    });

});
