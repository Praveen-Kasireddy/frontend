import { browser } from 'protractor';
import { } from 'jasmine';

const newProjectPage = requirePO('contentPages/newProjectPage');


describe('Content Page > testing new project page > ', () => {

    it('open Kosmos start page', () => {

        newProjectPage.openWebsite();
        expect(newProjectPage.getCreateNewProject.isEnabled()).toBeTruthy();
        expect(newProjectPage.getCreateNewProject.isPresent()).toBeTruthy();
    });

    it('open Mini Project Start popup', () => {

        expect(newProjectPage.getCreateNewProject.isPresent()).toBeTruthy();
        newProjectPage.getCreateNewProject.click().then(function () {
            expect(newProjectPage.getMiniProjectToolbar.isDisplayed()).toBeTruthy();
        });
    });

    xit('check dialog size', () => {

        // to be fill
    });

    xit('Check if all elements are visable', () => {

        // to be fill
    });

    it('fill Mini Project Start form and send it', () => {

        newProjectPage.getProjectNameTxtbox.sendKeys(testdata.miniProject.projectNameTxtbox);
        newProjectPage.getClientNameTxtbox.sendKeys(testdata.miniProject.clientNameTxtbox);
        newProjectPage.getTargetNameTxtbox.sendKeys(testdata.miniProject.targetNameTxtbox);

        newProjectPage.waitForElement(newProjectPage.getDacontactsTxtbox);
        newProjectPage.getDacontactsTxtbox.sendKeys('d');
        newProjectPage.getDacontactsTxtbox.sendKeys('e');
        newProjectPage.getDacontactsTxtbox.sendKeys('-');

        newProjectPage.waitForElement(newProjectPage.getDacontactsListElementMB);
        expect(newProjectPage.getDacontactsListElementMB.isDisplayed()).toBe(true);
        newProjectPage.getDacontactsListElementMB.click();

        newProjectPage.getSellSideRadio.click();
        newProjectPage.getStartDatePicker.click();
        newProjectPage.getStartDate.click();
        newProjectPage.getEndDatePicker.click();
        newProjectPage.getEndDate.click();
        newProjectPage.getProjectFees.click();
        newProjectPage.getProjectFeesMore.click();
        newProjectPage.getYourBriefingTxtarea.sendKeys(testdata.miniProject.yourBriefingTxtarea);

        expect(newProjectPage.getStartProjectButton.isEnabled()).toBeTruthy();
        expect(newProjectPage.getStartProjectButton.isPresent()).toBeTruthy();
        newProjectPage.getStartProjectButton.click();
    });

    xit('Check if Project is created', () => {

        // to be fill
    });

});
