import { ProjectPage } from '../pages/project.po';
import { DeliverablePage } from '../pages/deliverable.po';
import { ChapterPage } from '../pages/chapter.po';
import { TaskPage } from '../pages/task.po';

const project = new ProjectPage();
const deliverable = new DeliverablePage();
const chapter = new ChapterPage();
const task = new TaskPage();


describe('158307: Project Scope > Add task', () => {

	beforeAll(function () {
        project.navigateTo();
        console.log("-> home page, %s", project.date_switch_url());
        project.checkLogo();
    });

    it('At the bottom click on tile [Add task] ', () => {
        browser.wait(EC.visibilityOf(project.getProject()));
        expect(project.getProject().isDisplayed()).toBe(true);
        project.getProject().click();
		browser.wait(EC.visibilityOf(project.getVerticalButtonBar()));
        //browser.wait(protractor.ExpectedConditions.visibilityOf(project.clickProjectScopeButton()));
		browser.wait(EC.visibilityOf(project.getNavScopeButton()));
		browser.actions().mouseMove(project.getNavScopeButton()).perform();
        //expect(project.clickProjectScopeButton().isDisplayed()).toBe(true);

        project.clickProjectScopeButton();
        project.clickKpmgHeader();
        deliverable.checkDeliverable();
        browser.wait(EC.visibilityOf(deliverable.getExistingDelivarable())); // wait for the deliverable
        project.toggle()
        project.clickKpmgHeader();

        browser.actions().mouseMove(chapter.getAddChapterButton()).perform();
        chapter.clickAddNewChapterButton();
        chapter.setChapterPass(); // Add a chapter title

        //browser.wait(EC.visibilityOf(task.getChapter())); // element is obscured
        project.toggle()
        project.clickKpmgHeader();

        browser.actions().mouseMove(task.getAddNewTaskButton()).perform();
        task.clickAddNewTaskButton();
        task.setTaskPass(); // Add Task name
        project.clickKpmgHeader();
    });

    it('[Del task] ', () => {
        task.delTask();
        //project.clickKpmgHeader();
        project.toggle()
        //project.clickKpmgHeader();

        browser.sleep(3000).then(function () { });
        deliverable.clickDelDeliverable();
        deliverable.clickYesButton();
    });

    afterAll(function () {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
        browser.manage().deleteAllCookies();
    });

});
