import { browser, by, element, ExpectedConditions } from 'protractor';

const NavigationPage = requirePO('navigationBar/navigationBar');

/* Elements */
const headerTL = element(by.xpath('(//kosmos-header[@subtitle="Task List"])'));
const headerTL_text = ' Task List '; // Text of .../div/div/div

const task01 = element(by.xpath('(//div/label[text() = "P&L overview"])'));
const task02 = element(by.xpath('(//div/label[text() = "KPI development"])'));
const task03 = element(by.xpath('(//div/label[text() = "Acquisitions and disposals"])'));
const task04 = element(by.xpath('(//div/label[text() = "Related party transactions"])'));


const TaskListPage = Object.create(NavigationPage, {

    /* Elements */
    getheaderTL: { get: function () { return headerTL; } },
    getheaderTL_text: { get: function () { return headerTL_text; } },

    getTask01: { get: function () { return task01; } },
    getTask02: { get: function () { return task02; } },
    getTask03: { get: function () { return task03; } },
    getTask04: { get: function () { return task04; } },

    /* Mapping -> from this. to parent page object */
    openWebsite: { value: function () { NavigationPage.openWebsite.call(this, ''); } },
    waitForElement: { value: function (selector, waitFor) { NavigationPage.waitForElement.call(this, selector, waitFor); } },
    getTaskListButton: { value: function () { return NavigationPage.getTaskListButton.call(this); } },

});

module.exports = TaskListPage;
