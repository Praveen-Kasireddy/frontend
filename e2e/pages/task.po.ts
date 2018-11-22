import { browser, by, element } from 'protractor';
import { ProjectPage } from './project.po';


/* Nav */
const addNewTaskButton = element(by.xpath('(//div[@class="card-content"]/div[text() = "Add Task"])[4]'));
const addNewTask1Button = element(by.xpath('(//div[@class="card-content"]/div[text() = "Add Task"])[1]'));
const doneButton = element(by.xpath('(//span[text() = "Done"])'));
const anotherButton = element(by.xpath('(//span[text() = "Add another"])'));
//const menuButton = element(by.xpath('(//label[text() = "..."])[70]'));
//const menuButton = element(by.id('menuAnchor_task530'));
const menuButton = element(by.xpath('(//label[@class="menuAnchor context-menu-button kpmg-icon-menu-more"]])[1]'));
const warningWindow = element(by.xpath('(//div[@class="dx-item-content dx-toolbar-item-content"]/div[text() = "WARNING"])'));
const deleteButton = element(by.xpath('(//div[@class="dx-item-content dx-menu-item-content"]/span[text() = "Delete"])'));  
//const yesButton = element(by.xpath('(//span[text() = "Yes"])'));
const yesButton = element(by.xpath('(//div[@class="dx-button dx-button-normal dx-widget dx-button-has-text"])[3]'));

/* Label */
const getTask = element(by.xpath('(//label[text() = "Test Task A"])[1]'));
const taskName = "Test Task A";
//const getChapter = element(by.xpath('(//label[text() = " Test Chapter "])[1]')); // - Failed: Element is obscured
const getChapter = element(by.xpath('(//label[@class="header acceptingClick"])[4]'));
/* Element */
const titleTxTbox = element(by.xpath('(//input[@class="dx-texteditor-input"])[1]'));


export class TaskPage {

    getChapter() { return getChapter; }
    clickAddNewTaskButton() { return addNewTaskButton.click(); }  // 2nd Chapter Button Add Task
    getAddNewTaskButton() { return addNewTaskButton; }
    getNameLetter(a) {
        if (a > taskName.length || a < 0)
            return 0;
        else
            return taskName[a];
    }
    getNameLength() { return taskName.length; }

    setTaskPass() {
        browser.wait(EC.visibilityOf(titleTxTbox));

        //titleTxTbox.sendKeys('Test Task A');
        titleTxTbox.click();
        var i = 0;
        while (i < this.getNameLength()) {
            titleTxTbox.sendKeys(this.getNameLetter(i++));
        }
        browser.wait(EC.visibilityOf(doneButton));
        browser.wait(EC.visibilityOf(anotherButton));
        doneButton.click();
        browser.wait(EC.visibilityOf(getTask));
    }

    delTask() {
        console.log("delete the just created task. The menu button is difficult to catch");
        //this.getMenuButton();
        /*
        menuButton.click();
        deleteButton.click();
		browser.wait(EC.visibilityOf(warningWindow));
		console.log("WARNING window visible");
        yesButton.click();
        browser.wait(EC.invisibilityOf(getTask));
        */
    }
	
    getMenuButton() {
        var menuButtons = element.all(by.xpath('//div[@class="menuAnchor context-menu-button kpmg-icon-menu-more"]')); // all menu buttons
        menuButtons.each(function (el, index) {
            console.log("my index=%d", index);
            /*
            el.getId().then(function (text) {
                console.log("index=%d, ID=%s", index, text);
            });
            */
        });
	}
}
