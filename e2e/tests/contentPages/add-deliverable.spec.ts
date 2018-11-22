import { browser } from 'protractor';
import { } from 'jasmine';

/* page objects */
const deliverablePage = requirePO('contentPages/addDeliverable');
/* helpers */
const helperProjectScope = require('../../helpers/helperProjectScope');

describe('Content Page > testing add deliverable page > ', () => {

    it('open Kosmos start page', () => {

        deliverablePage.openWebsite();
    });

    it('open Project Setup page', () => {

        helperProjectScope.getProjectScopePage();
    });

    it('check dialog size', () => {

        expect(deliverablePage.getDialogDeliverable.isDisplayed()).toBeTruthy();
        expect(deliverablePage.getDialogDeliverable.getCssValue('width')).toEqual('350px');
        expect(deliverablePage.getDialogDeliverable.getCssValue('height')).toEqual('500px');
    });

    it('check if all elements are visable', () => {

        expect(deliverablePage.getHeadlineDeliverable.isPresent()).toBeTruthy();
        expect(deliverablePage.getHeadlineDeliverable.getText()).toEqual('CHOOSE DELIVERABLES');
        expect(deliverablePage.getSearchInput.isPresent()).toBeTruthy();
        expect(deliverablePage.getNarrowI.isPresent()).toBeTruthy();
        expect(deliverablePage.getNarrowII.isPresent()).toBeTruthy();
        expect(deliverablePage.getNarrowIII.isPresent()).toBeTruthy();
        expect(deliverablePage.getNarrowIV.isPresent()).toBeTruthy();
        expect(deliverablePage.getNarrowV.isPresent()).toBeTruthy();
        deliverablePage.getNarrowI.click();
        deliverablePage.getNarrowII.click();
        deliverablePage.getNarrowIII.click();
        deliverablePage.getNarrowIV.click();
        deliverablePage.getNarrowV.click();
        deliverablePage.getNarrowClosedI.click();
        expect(deliverablePage.getParentI.isPresent()).toBeTruthy();
        expect(deliverablePage.getParentI.getText()).toEqual('Mergers & Acquisitions');
        expect(deliverablePage.getParentII.isPresent()).toBeTruthy();
        expect(deliverablePage.getParentII.getText()).toEqual('Restructuring');
        expect(deliverablePage.getParentIII.isPresent()).toBeTruthy();
        expect(deliverablePage.getParentIII.getText()).toEqual('Strategy');
        expect(deliverablePage.getParentIV.isPresent()).toBeTruthy();
        expect(deliverablePage.getParentIV.getText()).toEqual('Transaction Services');
        expect(deliverablePage.getParentV.isPresent()).toBeTruthy();
        expect(deliverablePage.getParentV.getText()).toEqual('Valuation');
        expect(deliverablePage.getDoneButton.isPresent()).toBeTruthy();
    });

    it('check elements font sizes', () => {

        expect(deliverablePage.getParentI.getCssValue('font-weight')).toBe('400');
        expect(deliverablePage.getParentII.getCssValue('font-weight')).toBe('400');
        expect(deliverablePage.getParentIII.getCssValue('font-weight')).toBe('400');
        expect(deliverablePage.getParentIV.getCssValue('font-weight')).toBe('400');
        expect(deliverablePage.getParentV.getCssValue('font-weight')).toBe('400');
    });

    it('fill Set Deliverable and send it', () => {

        helperProjectScope.setDeliverable();
    });

    it('Check if Deliverable is created', () => {

        helperProjectScope.getDelDeliverable();
    });

    it('delete Deliverable', () => {

        deliverablePage.wait(3000);
        deliverablePage.getDelDeliverable.click();
        deliverablePage.wait(3000);
        deliverablePage.getNoButton.click();
        deliverablePage.wait(3000);
        deliverablePage.getDelDeliverable.click();
        deliverablePage.wait(3000);
        deliverablePage.getYesButton.click();
        deliverablePage.wait(3000);
    });

});
