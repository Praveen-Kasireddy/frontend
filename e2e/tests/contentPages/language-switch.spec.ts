import { browser } from 'protractor';
import { } from 'jasmine';

const LanguagePage = requirePO('contentPages/languageChooser');


describe('Navigation Bar > Testing language chooser > ', () => {



    it('open Kosmos start page', () => {
        LanguagePage.openWebsite();
        expect(LanguagePage.getLanguageMenuButton().isEnabled()).toBeTruthy();
        expect(LanguagePage.getLanguageMenuButton().isPresent()).toBeTruthy();
    });


    it('open language chooser dialog', () => {

        expect(LanguagePage.getLanguageMenuButton().isPresent()).toBeTruthy();
        LanguagePage.getLanguageMenuButton().click().then(function () {
            expect(LanguagePage.getDialog.isPresent()).toBeTruthy();
        });
    });


    it('Check if all elements are visable', () => {

        expect(LanguagePage.getLangDE.isPresent()).toBeTruthy();
        expect(LanguagePage.getLangUK.isPresent()).toBeTruthy();
        expect(LanguagePage.getLangUS.isPresent()).toBeTruthy();
        expect(LanguagePage.getLangFR.isPresent()).toBeTruthy();
        expect(LanguagePage.getLangES.isPresent()).toBeTruthy();
        expect(LanguagePage.getLangIT.isPresent()).toBeTruthy();
        expect(LanguagePage.getLangCH.isPresent()).toBeTruthy();
        expect(LanguagePage.getSubmitButton.isPresent()).toBeTruthy();
        expect(LanguagePage.getCloseButton.isPresent()).toBeTruthy();
    });


    it('check dialog size 300px x 300px', () => {

        expect(LanguagePage.getDialog.getCssValue('width')).toEqual('298px');
        expect(LanguagePage.getDialog.getCssValue('height')).toEqual('298px');
    });


    it('Check languages font sizes', () => {

        expect(LanguagePage.getLangDE.getCssValue('font-weight')).toBe('400');
        expect(LanguagePage.getLangUK.getCssValue('font-weight')).toBe('700');
        expect(LanguagePage.getLangUS.getCssValue('font-weight')).toBe('400');
        expect(LanguagePage.getLangFR.getCssValue('font-weight')).toBe('400');
        expect(LanguagePage.getLangES.getCssValue('font-weight')).toBe('400');
        expect(LanguagePage.getLangIT.getCssValue('font-weight')).toBe('400');
        expect(LanguagePage.getLangCH.getCssValue('font-weight')).toBe('400');
    });


    it('check dialog close button', () => {

        LanguagePage.getCloseButton.click();
        LanguagePage.wait(1000);
        expect(LanguagePage.getLanguageMenuButton().isEnabled()).toBeTruthy();
        LanguagePage.getLanguageMenuButton().click();
    });


    it('check if DE and UK is only choosable', () => {

        expect(LanguagePage.getLangUS.getAttribute('class')).toContain('disabled');
        expect(LanguagePage.getLangFR.getAttribute('class')).toContain('disabled');
        expect(LanguagePage.getLangES.getAttribute('class')).toContain('disabled');
        expect(LanguagePage.getLangIT.getAttribute('class')).toContain('disabled');
        expect(LanguagePage.getLangCH.getAttribute('class')).toContain('disabled');
    });


    it('check selected language highlighting', () => {

        expect(LanguagePage.getLangDE.isEnabled()).toBeTruthy();
        LanguagePage.getLangDE.click().then(function () {
            expect(LanguagePage.getLangDE.getAttribute('class')).toContain('current');
            expect(LanguagePage.getLangDE.getCssValue('font-weight')).toBe('700');
            expect(LanguagePage.getLangUK.getCssValue('font-weight')).toBe('400');
            expect(LanguagePage.getLangUK.getAttribute('class')).toEqual('');
            expect(LanguagePage.getLangUK.isEnabled()).toBeTruthy();
        });

        expect(LanguagePage.getLangUK.isEnabled()).toBeTruthy();
        LanguagePage.getLangUK.click().then(function () {
            expect(LanguagePage.getLangUK.getAttribute('class')).toContain('current');
            expect(LanguagePage.getLangUK.getCssValue('font-weight')).toBe('700');
            expect(LanguagePage.getLangDE.getCssValue('font-weight')).toBe('400');
            expect(LanguagePage.getLangDE.getAttribute('class')).toEqual('');
            expect(LanguagePage.getLangDE.isEnabled()).toBeTruthy();
        });
    });


    it('Choose DE language', () => {

        LanguagePage.getLangDE.click();
        expect(LanguagePage.getLangDE.getCssValue('font-weight')).toBe('700');
        expect(LanguagePage.getLangUK.getCssValue('font-weight')).toBe('400');

        LanguagePage.getSubmitButton.click();
           LanguagePage.wait(1000);
           // expect(LanguagePage.getDialog.isPresent()).toBeFalsy();
           // expect(LanguagePage.getLanguageMenuButton().isEnabled()).toBeTruthy();
           // expect(LanguagePage.getLanguageMenuButton().isPresent()).toBeTruthy();
    });


    it('Choose UK language', () => {
        LanguagePage.openWebsite();
        LanguagePage.getLanguageMenuButton().click();
        LanguagePage.getLangUK.click();
        expect(LanguagePage.getLangUK.getCssValue('font-weight')).toBe('700');
        expect(LanguagePage.getLangDE.getCssValue('font-weight')).toBe('400');

        LanguagePage.getSubmitButton.click();
        LanguagePage.wait(5000);
        // expect(LanguagePage.getDialog.isPresent()).toBeFalsy();
        expect(LanguagePage.getLanguageMenuButton().isEnabled()).toBeTruthy();
        expect(LanguagePage.getLanguageMenuButton().isPresent()).toBeTruthy();
    });

});
