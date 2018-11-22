const newProjectPage = requirePO('contentPages/newProjectPage');
const deliverablePage = requirePO('contentPages/addDeliverable');

const helpers = function helpFunc() {

    this.getProjectScopePage = function () {
        expect(newProjectPage.getGetProject.isPresent()).toBeTruthy();
        newProjectPage.getGetProject.click();
        deliverablePage.getProjectScopeButton().click().then(function () {
            expect(deliverablePage.getHeadProjectScope.isDisplayed()).toBeTruthy();
            deliverablePage.getHeadProjectScope.click();
        });
        expect(deliverablePage.getAddDeliverable.isPresent()).toBeTruthy();
        deliverablePage.getAddDeliverable.click().then(function () {
            expect(deliverablePage.getHeadlineDeliverable.isDisplayed()).toBeTruthy();
        });
    };

    this.setDeliverable = function () {
        deliverablePage.getDebtAdvisory.isPresent().then(function () {
            deliverablePage.getDebtAdvisory.click();
        });
        expect(deliverablePage.getHookElementIsSelected.isDisplayed()).toBeTruthy();
        deliverablePage.getDoneButton.click();
    };

    this.getDelDeliverable = function () {
        deliverablePage.wait(3000);
        expect(deliverablePage.getDelDeliverable.isDisplayed()).toBeTruthy();
    };

};

module.exports = new helpers();
