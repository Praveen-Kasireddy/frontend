import { ProjectPage } from '../pages/project.po';

const project = new ProjectPage();

describe('153346 Home Dashboard > Create Project', () => {

	beforeAll(function () {
        project.navigateTo();
        project.checkLogo();
        project.checkLanguage();
        project.getBrowser();
    });

    it('Language Switch', () => {
        browser.wait(EC.visibilityOf(project.getnavLanguage()));
        project.setLanguage();
    });

    it('Click on tile [Create new project]', () => {
        browser.wait(EC.visibilityOf(project.getCreateNewProject()));
        expect(project.getCreateNewProject().isDisplayed()).toBe(true);
        browser.wait(EC.visibilityOf(project.getProjectListHeadline()));
        expect(project.getProjectListHeadline().isDisplayed()).toBe(true);
        expect(project.getProjectListHeadline()).toEqual(testdata.projectList.headline);
        project.createNewProject();
     });

    it('Check the available field', () => {
        browser.wait(EC.visibilityOf(project.getMiniProjectToolbar()));
        expect(project.getMiniProjectToolbar().isDisplayed()).toBe(true);
        expect(project.getMiniProjectToolbar()).toEqual(testdata.miniProject.toolbar);
        expect(project.getProjectNameLabel()).toEqual(testdata.miniProject.projectNameLabel);
        expect(project.getClientNameLabel()).toEqual(testdata.miniProject.clientNameLabel);
        expect(project.getTargetNameLabel()).toEqual(testdata.miniProject.targetNameLabel);
        expect(project.getStart_dateLabel()).toEqual(testdata.miniProject.startDateLabel);
        expect(project.getEnd_dateLabel()).toEqual(testdata.miniProject.endDateLabel);
        expect(project.getProject_feesLabel()).toEqual(testdata.miniProject.projectFeesLabel);
        expect(project.getDA_contactsLabel()).toEqual(testdata.miniProject.da_contactsLabel);
        expect(project.getYour_BriefingLabel()).toEqual(testdata.miniProject.your_briefingLabel);
        expect(project.getSellSide()).toEqual(testdata.miniProject.sellSideLabel);
        expect(project.getBuySide()).toEqual(testdata.miniProject.buySideLabel);
        expect(project.getOtherSide()).toEqual(testdata.miniProject.otherSideLabel);
        expect(project.getProjectNameTxtbox().getAttribute('type')).toEqual('text');
        expect(project.getClientNameTxtbox().getAttribute('type')).toEqual('text');
        expect(project.getTargetNameTxtbox().getAttribute('type')).toEqual('text');
    });

    it('Check the button [Start Project]', () => {
        browser.wait(EC.visibilityOf(project.getStartProjectButton()));
    });

    afterAll(function () {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });
});

describe('153366 Home Dashboard > Create project > (validate fields) > ', () => {
    beforeAll(function () {
        project.navigateTo();
        project.checkLogo();
    });

    xit('Click on tile [Create new project]', () => {
        project.createNewProject();
    });

    xit('Check that max 200 characters can be entered in the field "Project Name"	Max 200 characters can be entered', () => {
        expect(project.getProjectNameTxtbox().getAttribute('maxlength')).toEqual('200');
        expect(project.getProjectNamePlH().getAttribute('data-dx_placeholder')).toEqual(testdata.miniProject.projectNamePlH);
        expect(project.getClientNameTxtbox().getAttribute('maxlength')).toEqual('200');
        expect(project.getClientNamePlH().getAttribute('data-dx_placeholder')).toEqual(testdata.miniProject.clientNamePlH);
        expect(project.getTargetNameTxtbox().getAttribute('maxlength')).toEqual('200');
        expect(project.getTargetNamePlH().getAttribute('data-dx_placeholder')).toEqual(testdata.miniProject.targetNamePlH);
    });

    afterAll(function () {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });
});

describe('153449: Home Dashboard > Create project > ', () => {

	beforeAll(function () {
        project.navigateTo();
        project.checkLogo();
    });

    xit('Click on tile [Create new project]', () => {
        project.checkProjectExist();
        expect(project.getProject().isDisplayed()).toBe(true);
    });

    xit('Fill the fields', () => {
        project.setProjectFail();
        expect(project.getinvalidMessage()).toEqual('Required');
    });

    afterAll(function () {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });
});

describe('152758: Project Dashboard > Stakeholder - Capture infos > ', () => {

	beforeAll(function () {
        project.navigateTo();
        project.checkLogo();
    });

    xit('create Stakeholder', () => {
        browser.wait(EC.visibilityOf(project.getProject()));
        expect(project.getProject().isDisplayed()).toBe(true);
        project.getProject().click();
        browser.wait(EC.visibilityOf(project.getNavSetupButton()));
        browser.wait(EC.visibilityOf(project.clickProjectSetupButton()));
        expect(project.clickProjectSetupButton().isDisplayed()).toBe(true);
        project.clickProjectSetupButton();
        project.clickKpmgHeader();
        project.setStakeholder();
        browser.wait(EC.visibilityOf(project.getStakeholder()));
    });

    afterAll(function () {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });

});
