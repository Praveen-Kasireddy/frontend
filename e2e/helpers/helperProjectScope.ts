const newProjectPage = requirePO('contentPages/newProjectPage');
const deliverablePage = requirePO('contentPages/addDeliverable');
const addChapter = requirePO('contentPages/addChapter');

const helperProjectScope = function helpFunc() {

    this.getProjectScopePage = function () {
        expect(newProjectPage.getGetProject.isPresent()).toBeTruthy();
        newProjectPage.getGetProject.click();
        deliverablePage.wait(5000);
        deliverablePage.getProjectScopeButton().click();
        expect(deliverablePage.getHeadProjectScope.isDisplayed()).toBeTruthy();
        deliverablePage.getHeadProjectScope.click();
        expect(deliverablePage.getAddDeliverable.isPresent()).toBeTruthy();
        deliverablePage.getAddDeliverable.click();
        expect(deliverablePage.getHeadlineDeliverable.isDisplayed()).toBeTruthy();
    };

    this.setDeliverable = function () {
        deliverablePage.wait(3000);
        deliverablePage.getDebtAdvisory.isPresent();
        deliverablePage.getDebtAdvisory.click();
        deliverablePage.wait(3000);
        expect(deliverablePage.getHookElementIsSelected.isDisplayed()).toBeTruthy();
        deliverablePage.getDoneButton.click();
        deliverablePage.wait(3000);
    };

    this.getDelDeliverable = function () {
        deliverablePage.wait(3000);
        expect(deliverablePage.getDelDeliverable.isDisplayed()).toBeTruthy();
    };

};

module.exports = new helperProjectScope();
