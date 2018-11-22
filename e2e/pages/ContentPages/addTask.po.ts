import { by, element } from 'protractor';

const NavigationPage = requirePO('navigationBar/navigationBar');

/* Elements */
const addNewTaskButton = element(by.id('addTask_TestChapterA'));
const dialogAddTask = element(by.xpath('/html/body/div[2]/div')); // Popup
const headlineAddTask = element(by.xpath('(//div[text() = "ADD TASK"])'));
const titleLabel = element(by.xpath('(//label[text() = "Title"])[2]'));
const titleTxTbox = element(by.id('titleTask'));
const closeButton = element(by.xpath('(//div[@class="dx-item-content dx-toolbar-item-content"])[2]'));
const doneButton = element(by.id('doneTask'));
const anotherButton = element(by.id('anotherTask'));

const createdTaskLabel = element(by.xpath('(//label[text() = "TestTaskA"])'));
const getTask = element(by.xpath('(//label[text() = "TestTaskA"])[1]'));
const assignTeamMember = element(by.xpath('(//span[starts-with(text(),"DE-TA-TFSAutoKosmos1")])'));
const firstAssignableTeamMember = element(by.xpath('(//div[@class="assignable-user ng-star-inserted"])[1]'));
const badgePill = element(by.xpath('(//span[contains(@class, "user-counter") and normalize-space(text()) = "1"])'));
const taskMenuButton = element(by.xpath('(//label[starts-with(@id,"menuAnchor_task")])[66]')); // '...'
const deleteButton = element(by.xpath('(//div[@class="dx-item-content dx-menu-item-content"]/span[text() = "Delete"])'));
const yesButton = element(by.xpath('(//div[@class="dx-button dx-button-normal dx-widget dx-button-has-text"])[3]'));

/* Elements */
const TaskPage = Object.create(NavigationPage, {

    getAddNewTaskButton: { get: function () { return addNewTaskButton; } },
    getDialogAddTask: { get: function () { return dialogAddTask; } },
    getHeadlineAddTask: { get: function () { return headlineAddTask; } },
    getTitleLabel: { get: function () { return titleLabel; } },
    getTitleTxTbox: { get: function () { return titleTxTbox; } },
    getCloseButton: { get: function () { return closeButton; } },
    getDoneButton: { get: function () { return doneButton; } },
    getAnotherButton: { get: function () { return anotherButton; } },

    getCreatedTaskLabel: { get: function () { return createdTaskLabel; } },
    getTask: { get: function () { return getTask; } },
    getAssignTeamMember: { get: function () { return assignTeamMember; } },
    getFirstAssignableTeamMember: { get: function () { return firstAssignableTeamMember; } },
    getBadgePill: { get: function () { return badgePill; } },
    getTaskMenuButton: { get: function () { return taskMenuButton; } },

    /* Mapping -> from this. to parent page object */
    openWebsite: { value: function() { NavigationPage.openWebsite.call(this, ''); }},
    waitForElement: { value: function(selector, waitFor) {  NavigationPage.waitForElement.call(this, selector, waitFor); }},
    getLanguageMenuButton: { value: function() { return NavigationPage.getProjectSetupButton.call(this); }},

});

module.exports = TaskPage;
