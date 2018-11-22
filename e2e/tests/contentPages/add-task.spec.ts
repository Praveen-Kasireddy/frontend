import { browser } from 'protractor';
import { } from 'jasmine';

/* page objects */
const addTask = requirePO('contentPages/addTask');
const addChapter = requirePO('contentPages/addChapter');
const deliverablePage = requirePO('contentPages/addDeliverable');
/* helpers */
const helperProjectScope = require('../../helpers/helperProjectScope');


describe('Content Page > testing add Task > ', () => {

    it('open Kosmos start page', () => {

        addTask.openWebsite();
    });

    it('open Project Scope page and select a Deliverable', () => {

        helperProjectScope.getProjectScopePage();
        helperProjectScope.setDeliverable();
        helperProjectScope.getDelDeliverable();
    });

    it('create a New Chapter', () => {

        addChapter.getAddChapter.click();
        addChapter.wait(2000);
        addChapter.getTitleTxTbox.click();
        addChapter.wait(2000);
        addChapter.getTitleTxTbox.sendKeys('TestChapterA');
        addChapter.wait(2000);
        addChapter.getDoneButton.click();
        addChapter.wait(2000);
    });

    it('open Task and check dialog size', () => {

        addTask.getAddNewTaskButton.click();
        expect(addTask.getDialogAddTask.isDisplayed()).toBeTruthy();
        expect(addTask.getDialogAddTask.getCssValue('width')).toEqual('450px');
        expect(addTask.getDialogAddTask.getCssValue('height')).toEqual('250px');
    });

    it('check Task elements visibillity', () => {

        expect(addTask.getHeadlineAddTask.isDisplayed()).toBeTruthy();
        expect(addTask.getCloseButton.isPresent()).toBeTruthy();
        expect(addTask.getTitleLabel.isDisplayed()).toBeTruthy();
        expect(addTask.getTitleTxTbox.isPresent()).toBeTruthy();
        expect(addTask.getAnotherButton.isPresent()).toBeTruthy();
        expect(addTask.getDoneButton.isPresent()).toBeTruthy();
    });

    it('fill Task form then send it', () => {

        addTask.getTitleTxTbox.click();
        addTask.wait(2000);
        addTask.getTitleTxTbox.sendKeys('TestTaskA');
        addTask.wait(2000);
        addTask.getDoneButton.click();
        addTask.wait(2000);
    });

    it('Check if Task is created', () => {

        expect(addTask.getCreatedTaskLabel.getText()).toEqual('TestTaskA');
    });

    it('Check and select a Team Member', () => {

        expect(addTask.getAssignTeamMember.isPresent()).toBeTruthy();
        addTask.getAssignTeamMember.click();
        // check validation
        addTask.getTask.click();
        expect(addTask.getBadgePill.isPresent()).toBeTruthy();
        // check validation
    });

    it('delete created Task', () => {

        addTask.getTaskMenuButton.click();
        addTask.wait(2000);
    });

    it('delete Deliverable', () => {

        deliverablePage.getDelDeliverable.click();
        deliverablePage.wait(2000);
        deliverablePage.getYesButton.click();
        deliverablePage.wait(2000);
    });

});
