import { browser } from 'protractor';
import { } from 'jasmine';

const projectSetupPage = requirePO('contentPages/projectSetupPage');
const newProjectPage = requirePO('contentPages/newProjectPage');


describe('Navigate to Project Setup Page', () => {

    it('open Kosmos start page', () => {

        newProjectPage.openWebsite();
    });

    it('open Project Setup page', () => {

        newProjectPage.waitForElement(newProjectPage.getGetProject);
        expect(newProjectPage.getGetProject.isPresent()).toBeTruthy();
        newProjectPage.getGetProject.click();
        newProjectPage.getProjectSetupButton().click().then(function () {
            expect(projectSetupPage.getHeadProjectSetup.isDisplayed()).toBeTruthy();
            projectSetupPage.getHeadProjectSetup.click();
        });
    });

    it('enter engagement number', () => {
        expect(projectSetupPage.getEngagementBox.isPresent()).toBeTruthy();
        projectSetupPage.getEngagementBox.click();
        projectSetupPage.getEngagementBox.sendKeys(testdata.ProjectSetup.engagementNo);
    });

    it('enter legal company data', () => {
        expect(projectSetupPage.getLegalCompanyName.isPresent()).toBeTruthy();
        projectSetupPage.getLegalCompanyName.click();
        projectSetupPage.getLegalCompanyName.sendKeys(testdata.ProjectSetup.legalCompany01);
        projectSetupPage.getLegalCompanyAbbrev.click();
        projectSetupPage.getLegalCompanyAbbrev.sendKeys(testdata.ProjectSetup.legalAbbrev01);
        projectSetupPage.getLegalAddButton.click();

        expect(projectSetupPage.getLegalCompanyName.isPresent()).toBeTruthy();
        projectSetupPage.getLegalCompanyName.click();
        projectSetupPage.getLegalCompanyName.sendKeys(testdata.ProjectSetup.legalCompany02);
        projectSetupPage.getLegalCompanyAbbrev.click();
        projectSetupPage.getLegalCompanyAbbrev.sendKeys(testdata.ProjectSetup.legalAbbrev02);
        projectSetupPage.getLegalAddButton.click();
    });

    it('update project', () => {
        expect(projectSetupPage.getUpdateProjectButton.isPresent()).toBeTruthy();
        projectSetupPage.getUpdateProjectButton.click();
    });

    it('back to My Projects', () => {
        projectSetupPage.waitForElement(projectSetupPage.getHomeButton());
        projectSetupPage.getHomeButton().click().then(function () {
            projectSetupPage.waitForElement(newProjectPage.getGetProject);
        });
    });

});
