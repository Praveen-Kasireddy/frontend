import { browser } from 'protractor';
import { } from 'jasmine';

/* page objects */
const smartWorkspacePage = requirePO('contentPages/smartWorkspace');
const taskListPage = requirePO('contentPages/taskListPage');
const newProjectPage = requirePO('contentPages/newProjectPage');
/* helpers */
const helperProjectScope = require('../../helpers/helperProjectScope');


describe('Navigate to Smart Workspace Page', () => {

    it('open Kosmos start page and Project ', () => {

        smartWorkspacePage.openWebsite();
        expect(newProjectPage.getGetProject.isPresent()).toBeTruthy();
        newProjectPage.getGetProject.click();
    });

    it('open Tasklist', () => {
        taskListPage.getTask01.click();
        smartWorkspacePage.waitForElement(smartWorkspacePage.getlistViewButton);
        smartWorkspacePage.getlistViewButton.click();
        smartWorkspacePage.wait(2000);
    });
});

xdescribe('check menubar', () => {

    it('check menubar', () => {

    });

    it('check infobbar', () => {

    });
});
