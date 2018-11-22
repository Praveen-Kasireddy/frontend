import { browser, by, element } from 'protractor';
import { ProjectPage } from '../pages/project.po';
import { DeliverablePage } from '../pages/deliverable.po';
import { ChapterPage } from '../pages/chapter.po';

const project = new ProjectPage();
const deliverable = new DeliverablePage();
const chapter = new ChapterPage();


const testCaseName = '149853: Project Scope > Add chapter';

describe(testCaseName, () => {

    console.log('Running Test: ' + testCaseName);

	beforeAll(function () {
        project.navigateTo();
        project.checkLogo();
    });

    it('At the bottom click on tile [Add chapter] ', () => {

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

        project.toggle();
        chapter.getHeadlineProjectScope().click();

        browser.wait(EC.visibilityOf(chapter.getAddChapterButton()), 5000).then(function () {
            chapter.clickAddNewChapterButton();
        });

        chapter.setChapterPass();

        //deliverable.clickDelDeliverable();
        //deliverable.clickYesButton();

        browser.sleep(5000);
    });

  afterAll(function () {
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
    browser.manage().deleteAllCookies();
    });

});
