import { browser, by, element, ExpectedConditions } from 'protractor';

const testSettings = require('../../e2e.test.config.json');

const NavigationPage = function() {
    const siteBaseUrl = testSettings.siteBaseUrl[testSettings.defaultEnvironment];
    const implicitlyWait = testSettings.executionTimeouts.implicitlyWait.ms;
    const pageLoadTimeout = testSettings.executionTimeouts.pageLoadTimeout.ms;
    const setScriptTimeout = testSettings.executionTimeouts.setScriptTimeout.ms;
    const searchElementTimeout = testSettings.executionTimeouts.searchElementTimeout.ms;
    const defaultWaitTime = testSettings.executionTimeouts.defaultWaitTime.ms;

    /* Navigation button identifier */
    const navHomeButton = element(by.id('Home'));
    const navTaskListButton = element(by.id('TaskList'));
    const navSourceDataButton = element(by.id('SourceData'));
    const navDataExplorerButton = element(by.id('DataExplorer'));
    const navDataOverviewButton = element(by.id('DataOverview'));
    const navProjectSetupButton = element(by.id('SetupButton'));
    const navProjectScopeButton = element(by.id('ScopeButton'));
    const navManagementButton = element(by.id('Management'));

    /* Navigation settings identifier */
    const logo = element(by.xpath('(//img[@class="logo"])[1]'));
    const navLanguageButton = element(by.tagName('kosmos-main-nav-item-language'));

    /* Navigation button objects */
    NavigationPage.prototype.getHomeButton = function() {
        return NavigationPage.prototype.waitForElement(navHomeButton);
    };
    NavigationPage.prototype.getTaskListButton = function() {
        return NavigationPage.prototype.waitForElement(navTaskListButton);
    };
    NavigationPage.prototype.getSourceDataButton = function() {
        return NavigationPage.prototype.waitForElement(navSourceDataButton);
    };
    NavigationPage.prototype.getProjectSetupButton = function() {
        return NavigationPage.prototype.waitForElement(navProjectSetupButton);
    };
    NavigationPage.prototype.getDataExplorerButton = function() {
        return NavigationPage.prototype.waitForElement(navDataExplorerButton);
    };
    NavigationPage.prototype.getDataOverviewButton = function() {
        return NavigationPage.prototype.waitForElement(navDataOverviewButton);
    };
    NavigationPage.prototype.getProjectSetupButton = function() {
        return NavigationPage.prototype.waitForElement(navProjectSetupButton);
    };
    NavigationPage.prototype.getProjectScopeButton = function() {
        return NavigationPage.prototype.waitForElement(navProjectScopeButton);
    };

    NavigationPage.prototype.getUserManagementButton = function() {
        return NavigationPage.prototype.waitForElement(navManagementButton);
    };

    NavigationPage.prototype.getLanguageMenuButton = function() {
        return NavigationPage.prototype.waitForElement(navLanguageButton);
    };

    /* Get content of e2e.test.config.json */
    NavigationPage.prototype.getTestSettings = function() {
        return testSettings;
    };

    /* Open website base url */
    NavigationPage.prototype.openWebsite = function(path) {
        browser
            .manage()
            .timeouts()
            .implicitlyWait(implicitlyWait);
        browser
            .manage()
            .timeouts()
            .pageLoadTimeout(pageLoadTimeout);
        browser
            .manage()
            .timeouts()
            .setScriptTimeout(setScriptTimeout);
        browser.waitForAngularEnabled(false);
        browser.get(siteBaseUrl + '/' + path);
        browser.wait(ExpectedConditions.visibilityOf(logo));
    };

    /* Wait for element on root level */
    NavigationPage.prototype.waitForElement = function(selector, waitFor) {
        waitFor = waitFor || searchElementTimeout;
        browser.wait(ExpectedConditions.visibilityOf(selector), waitFor);
        return selector;
    };

    /* Wait for element on root level */
    NavigationPage.prototype.wait = function(waitFor) {
        waitFor = waitFor || defaultWaitTime;
        browser
            .manage()
            .timeouts()
            .implicitlyWait(implicitlyWait);
        browser
            .manage()
            .timeouts()
            .pageLoadTimeout(pageLoadTimeout);
        browser
            .manage()
            .timeouts()
            .setScriptTimeout(setScriptTimeout);
        browser.sleep(waitFor);
    };
};

module.exports = new NavigationPage();
