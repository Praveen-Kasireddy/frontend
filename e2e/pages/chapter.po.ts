import { browser, by, element } from 'protractor';
import { ProjectPage } from './project.po';


/* Nav */
const addDeliverableButton = element(by.xpath('(//div[@class="card-content"]/div[text() = "Add Deliverable"])'));
const addTask1Button = element(by.xpath('(//div[@class="card-content"]/div[text() = "Add Task"])[2]'));
const addTask2Button = element(by.xpath('(//div[@class="card-content"]/div[text() = "Add Task"])[3]'));
const addNewChapterButton = element(by.xpath('//div[@class="card-content"]/div[text() = "Add Chapter"]'))
const closeButton = element(by.xpath('(//div[@class="dx-item-content dx-toolbar-item-content"])[2]'));
const delDeliverable = element(by.xpath('(//div[@class="kpmg-icon-remove xButton"])[1]'));
const doneButton = element(by.xpath('(//span[text() = "Done"])'));
const anotherButton = element(by.xpath('(//span[text() = "Add another"])'));

/* Label */
const headlineProjectScope = element(by.xpath('(//div[text() = "Project Scope"])'));
const chapterName = "Test Chapter A";

/* Element */
const titleTxTbox = element(by.xpath('(//input[@type="text"])[1]'));


export class ChapterPage {

    clickAddNewChapterButton() { return addNewChapterButton.click(); }
    clickClose() { return closeButton.click(); }
    getHeadlineProjectScope() { return headlineProjectScope; }
    getAddChapterButton() { return addNewChapterButton; }
    getNameLength() { return chapterName.length; }

    getNameLetter(a) {
        if (a > chapterName.length || a < 0)
            return 0;
        else
            return chapterName[a];
    }

    setChapterPass() {
        browser.wait(EC.visibilityOf(titleTxTbox), 5000).then(function () {
            //titleTxTbox.sendKeys("Test Chapter");
            //console.log("titleTxTbox sichtbar!");            
        });

        titleTxTbox.click();

        var i = 0;
        while (i < this.getNameLength()) {
            titleTxTbox.sendKeys(this.getNameLetter(i++));
        }

        doneButton.click();
    }
}
