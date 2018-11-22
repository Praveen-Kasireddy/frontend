import { by, element } from 'protractor';

const NavigationPage = requirePO('navigationBar/navigationBar');

/* Element */
const headlineProjectScope = element(by.xpath('(//div[text() = "Project Scope"])'));
const addChapter = element(by.id('addChapter'));

const dialogAddChapter = element(by.xpath('/html/body/div[2]/div')); // Popup
const headlineAddChapter = element(by.xpath('(//div[text() = "ADD CHAPTER"])'));
const titleLabel = element(by.xpath('(//label[text() = "Title"])'));
const titleTxTbox = element(by.id('titleChapter'));
const closeButton = element(by.xpath('(//div[@class="dx-item-content dx-toolbar-item-content"])[2]'));
const doneButton = element(by.id('doneChapter'));
const anotherButton = element(by.id('anotherChapter'));

const createdChapterLabel = element(by.xpath('(//label[text() = " TestChapterA "])'));
const chapterMenuButton = element(by.xpath('(//label[starts-with(@id,"menuAnchor_chapter")])[4]'));
const dialogChapterMenu = element(by.xpath('/html/body/div[2]/div')); // Popup

const chapterMenuElementI = element(by.xpath('(//span[text() = "Rename"])'));
const chapterMenuElementII = element(by.xpath('(//span[text() = "Delete"])'));
const chapterMenuElementIII = element(by.xpath('(//span[text() = "Select all"])'));
const chapterMenuElementIV = element(by.xpath('(//span[text() = "Deselect all"])'));
const delChapterYesButton = element(by.xpath('(//span[text() = "Yes"])'));
const delChapterNoButton = element(by.xpath('(//span[text() = "No"])'));


/* Elements */
const ChapterPage = Object.create(NavigationPage, {

    getHeadlineProjectScope: { get: function () { return headlineProjectScope; } },
    getAddChapter: { get: function () { return addChapter; } },

    getDialogAddChapter: { get: function () { return dialogAddChapter; } },
    getHeadlineAddChapter: { get: function () { return headlineAddChapter; } },
    getTitleLabel: { get: function () { return titleLabel; } },
    getTitleTxTbox: { get: function () { return titleTxTbox; } },
    getCloseButton: { get: function () { return closeButton; } },
    getDoneButton: { get: function () { return doneButton; } },
    getAnotherButton: { get: function () { return anotherButton; } },

    getCreatedChapterLabel: { get: function () { return createdChapterLabel; } },
    getChapterMenuButton: { get: function () { return chapterMenuButton; } },
    getDialogChapterMenu: { get: function () { return dialogChapterMenu; } },

    getchapterMenuElementI: { get: function () { return chapterMenuElementI; } },
    getchapterMenuElementII: { get: function () { return chapterMenuElementII; } },
    getchapterMenuElementIII: { get: function () { return chapterMenuElementIII; } },
    getchapterMenuElementIV: { get: function () { return chapterMenuElementIV; } },
    getDelChapterYesButton: { get: function () { return delChapterYesButton; } },
    getDelChapterNoButton: { get: function () { return delChapterNoButton; } },

    /* Mapping -> from this. to parent page object */
    openWebsite: { value: function() { NavigationPage.openWebsite.call(this, ''); }},
    waitForElement: { value: function(selector, waitFor) {  NavigationPage.waitForElement.call(this, selector, waitFor); }},
    getLanguageMenuButton: { value: function() { return NavigationPage.getProjectSetupButton.call(this); }},

});

module.exports = ChapterPage;
