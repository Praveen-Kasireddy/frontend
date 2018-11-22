import { browser, by, element } from 'protractor';
import { ProjectPage } from './project.po';

//const project = new ProjectPage();

/* Nav */
const headlineDeliverable = element(by.xpath('(//div[text() = "CHOOSE DELIVERABLES"])'));
const headProjectScope = element(by.xpath('(//div[text() = "Project Scope"])'));
const addDeliverable = element(by.xpath('(//div[@class="card-content"]/div[text() = "Add Deliverable"])'));
const setDebtAdvisory = element(by.xpath('(//span[text() = "Debt Advisory"])'));
const hookElementIsSelected = element(by.xpath('(//span[@class="kpmg-icon-check selected"])'));
const anyDeliverable = element(by.xpath('(//span[text() = "Mergers & Acquisitions"])'));
const doneButton = element(by.xpath('(//span[text() = "Done"])'));
const delDeliverable = element(by.xpath('(//div[@class="kpmg-icon-remove xButton"])[1]'));
const delDeliverable_id = element(by.id('kpmg-icon-remove xButton'));
const yesButton = element(by.xpath('(//span[text() = "Yes"])'));
const noButton = element(by.xpath('(//span[text() = "No"])'));
const navDatOverviewButton = element(by.id('main-nav-project-data-overview-icon'));
const sourceElement = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="1"])'));
const targetElement1 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="3"])'));
const targetElement2 = element(by.xpath('(//tr[@class="dx-row dx-column-lines dx-header-row"]/td[@aria-colindex="5"])'));

/* Label */

/* Element */
const existingDeliverable = element(by.xpath('(//div[@class= "product-button button-was-selected"])'));


export class DeliverablePage {

    clickAddDeliverable() { return addDeliverable.click(); }
    clickSetDebtAdvisory() { return setDebtAdvisory.click(); }
    clickDoneButton() { return doneButton.click(); }

    clickDelDeliverable() {
        browser.sleep(5000).then(function () { });
        return delDeliverable.click();
    }
    clickYesButton() { return yesButton.click(); }
    clickNoButton() { return noButton.click(); }

    getDelDeliverable() { return delDeliverable; }
    getHeadlineDeliverable() { return headlineDeliverable; }
    getHeadProjectScope() { return headProjectScope; }
    getDebtAdvisory() { return setDebtAdvisory; }
    getAnyDeliverable() { return anyDeliverable; }
    getHook() { return hookElementIsSelected; }
    getYesButton() { return yesButton; }
    getExistingDelivarable() { return existingDeliverable; }
    
    delDeliverable() {
        console.log("function delDeliverable");

        browser.wait(EC.visibilityOf(delDeliverable), 5000).then(function () {
        });

        delDeliverable.isPresent().then(present => {

            if (present) {
                console.log("delete button is present");

                browser.wait(EC.visibilityOf(existingDeliverable));
                browser.wait(EC.visibilityOf(delDeliverable));
                browser.wait(EC.visibilityOf(this.clickDelDeliverable()));

                browser.wait(EC.visibilityOf(this.getYesButton()), 5000).then(function () {
                    yesButton.click();
                });

                browser.wait(EC.invisibilityOf(delDeliverable));

            } else {
                console.log('no deliverable delete button found...');
            }
        });
    }

    checkDeliverable() {
        delDeliverable.isPresent().then(present => {

            if (present) {
                console.log('deliverable found...');
                this.delDeliverable();
            } else {
                console.log("no deliverable found...");
            }
        });
    }

    selectDeliverable() {
        browser.wait(EC.visibilityOf(addDeliverable));
        addDeliverable.click();

        browser.wait(EC.visibilityOf(setDebtAdvisory), 20000).then(function () {
            setDebtAdvisory.click();
            browser.wait(EC.visibilityOf(hookElementIsSelected));
            doneButton.click();
        });

        browser.wait(EC.visibilityOf(delDeliverable), 5000).then(function () {
        });
    }

    getDataOverviewButton() { return navDatOverviewButton; }
    clickDataOverviewButton() { return navDatOverviewButton.click(); }
    getSource() { return sourceElement; }
    getTarget1() { return targetElement1; }
    getTarget2() { return targetElement2; }
}
