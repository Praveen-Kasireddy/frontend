import { browser } from 'protractor';
import { } from 'jasmine';

const newProjectPage = requirePO('contentPages/newProjectPage');
const addStakeholder = requirePO('contentPages/addStakeholder');
const projectSetupPage = requirePO('contentPages/projectSetupPage');
const infoBarPage = requirePO('informationBar/informationBar');


describe('Content Page > testing add stakeholder page > ', () => {

    it('open Kosmos start page', () => {

        addStakeholder.openWebsite();
        expect(newProjectPage.getCreateNewProject.isEnabled()).toBeTruthy();
        expect(newProjectPage.getCreateNewProject.isPresent()).toBeTruthy();
    });

    it('open Project Setup page', () => {

        newProjectPage.waitForElement(newProjectPage.getGetProject);
        expect(newProjectPage.getGetProject.isPresent()).toBeTruthy();
        newProjectPage.getGetProject.click();
        addStakeholder.getProjectSetupButton().click();
        addStakeholder.wait(2000);
        projectSetupPage.getHeadProjectSetup.click();
        addStakeholder.wait(2000);
        // browser.actions().mouseMove({ x: 500, y: 500 }).perform();
        expect(addStakeholder.getAddStakeholder.isPresent()).toBeTruthy();
        addStakeholder.getAddStakeholder.click().then(function () {
            expect(addStakeholder.getStakeholderToolbar.isDisplayed()).toBeTruthy();
        });
    });

    xit('check dialog size', () => {

        // to be fill
    });

    xit('Check if all elements are visable', () => {

        // to be fill
    });

    it('fill Add Stakeholder form and send it', () => {

        addStakeholder.getFirstNameTxTbox.sendKeys(testdata.Stakeholder.firstNameTxTbox);
        addStakeholder.getLastNameTxTbox.sendKeys(testdata.Stakeholder.lastNameTxTbox);
        addStakeholder.getJobtitleTxTbox.sendKeys(testdata.Stakeholder.jobtitleTxTbox);
        addStakeholder.getCompanyNameTxTbox.sendKeys(testdata.Stakeholder.companyName);
        addStakeholder.getEmailAddressTxTbox.sendKeys(testdata.Stakeholder.emailAddressTxTbox);
        addStakeholder.getPhoneNumberTxTbox.sendKeys(testdata.Stakeholder.phoneNumberTxTbox);
        expect(addStakeholder.getAddAnotherButton.isDisplayed()).toBe(true);
        expect(addStakeholder.getDoneButton.isDisplayed()).toBe(true);
        addStakeholder.getDoneButton.click();

        addStakeholder.wait(4000);
        expect(infoBarPage.getUpdateProjectButton.isPresent()).toBeTruthy();
        infoBarPage.getUpdateProjectButton.click();
        addStakeholder.wait(4000);
    });

    xit('Check if Stakeholder is created', () => {

        // to be fill
    });

});
