import { browser } from 'protractor';
import { } from 'jasmine';

/* page objects */
const taskListPage = requirePO('contentPages/taskListPage');
const addTask = requirePO('contentPages/addTask');
/* helpers */
const helperProjectScope = require('../../helpers/helperProjectScope');


describe('Navigate to Task List Page', () => {

    it('open Kosmos start page', () => {

        taskListPage.openWebsite();
    });

    it('open Project Scope page and select a Deliverable', () => {

        helperProjectScope.getProjectScopePage();
        helperProjectScope.setDeliverable();
        helperProjectScope.getDelDeliverable();
    });

    it('assign Team Member to Tasks and check assignment ', () => {

        expect(addTask.getFirstAssignableTeamMember.isPresent()).toBeTruthy();
        addTask.getFirstAssignableTeamMember.click();
        taskListPage.getTask01.click();
        taskListPage.getTask02.click();
        taskListPage.getTask03.click();
        taskListPage.getTask04.click();
    });

    it('open Task List page', () => {

        taskListPage.getTaskListButton().click().then(function () {
            expect(taskListPage.getheaderTL.isDisplayed()).toBeTruthy();
            taskListPage.getheaderTL.click();
        });
    });

    it('check assigned tasks', () => {

        expect(taskListPage.getTask01.isPresent()).toBeTruthy();
        expect(taskListPage.getTask02.isPresent()).toBeTruthy();
        expect(taskListPage.getTask03.isPresent()).toBeTruthy();
        expect(taskListPage.getTask04.isPresent()).toBeTruthy();
        taskListPage.wait(2000);
    });
});
