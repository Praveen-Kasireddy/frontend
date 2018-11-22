import { ProjectPage } from '../pages/project.po';
import { DeliverablePage } from '../pages/deliverable.po';
import { browser } from 'protractor';

const project = new ProjectPage();
const deliverable = new DeliverablePage();


describe('155753: Project Scope > Popup "CHOOSE DELIVERABLE" (GUI) > ', () => {
	
    beforeEach(() => {
        project.navigateTo();
        project.checkLogo();

    });

    xit('navigate to popup "CHOOSE DELIVERABLE" then add and delete a deliverable', () => {

        browser.wait(EC.visibilityOf(project.getProject()), 10000).then(function () {
            project.getProject().click();
        });

        browser.wait(EC.visibilityOf(project.getKpmgHeader()));
        browser.wait(EC.visibilityOf(project.getNavScopeButton()), 10000).then(function () {
            project.clickProjectScopeButton();
        });

        browser.wait(EC.visibilityOf(deliverable.getHeadProjectScope()));
        deliverable.getHeadProjectScope().click();

        deliverable.checkDeliverable();

        deliverable.selectDeliverable();

        //deliverable.delDeliverable();

    });

    xit('navigate to Data overview', () => {
        //browser.wait(EC.visibilityOf(project.getProject()));
        //expect(project.getProject().isDisplayed()).toBe(true);
        //console.log("getProject");
        //project.getProject().click();
        /*
        browser.wait(EC.visibilityOf(deliverable.getDebtAdvisory()), 20000).then(function () {
            console.log("Debt Advisory visible");
            project.checkElement(deliverable.getDebtAdvisory());
        });
        browser.sleep(1000).then(function () { });
        */
        //console.log("clickProjectScope");
        /*
        browser.wait(EC.visibilityOf(deliverable.clickDataOverviewButton()));
        expect(deliverable.clickDataOverviewButton().isDisplayed()).toBe(true);

        deliverable.clickDataOverviewButton();
        */
    });

    xit('check Drag & Drop', () => {
        browser.wait(EC.visibilityOf(project.getProject()));
        expect(project.getProject().isDisplayed()).toBe(true);
        console.log("getProject");
        project.getProject().click();
        browser.wait(EC.visibilityOf(project.getKpmgHeader()));

        browser.wait(EC.visibilityOf(deliverable.getDataOverviewButton()), 10000).then(function () {
            deliverable.clickDataOverviewButton();
            console.log("Data Overview Button clicked");
        });

        browser.wait(EC.visibilityOf(deliverable.getSource()));
        browser.wait(EC.visibilityOf(deliverable.getTarget1()));
        browser.wait(EC.visibilityOf(deliverable.getTarget2()));
        deliverable.getSource().getText().then(function (textEl1) {
            console.log("Text of first el1=%s", textEl1);
        });

        browser.actions().dragAndDrop(deliverable.getSource(), deliverable.getTarget1()).perform();
        browser.sleep(2000);
        deliverable.getSource().getText().then(function (textEl1) {
            console.log("Text of 2nd el1=%s", textEl1);
        });
        browser.actions().mouseDown(deliverable.getSource()).
            mouseMove(deliverable.getTarget2()).mouseUp().perform();
        browser.sleep(5000);
        deliverable.getSource().getText().then(function (textEl1) {
            console.log("Text of 3rd el1=%s", textEl1);
        });

        //browser.wait(EC.visibilityOf(project.getProject()));
    });

  afterAll(function () {
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
    browser.manage().deleteAllCookies();
    });

});
