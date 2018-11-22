import { browser } from 'protractor';
import { } from 'jasmine';

const DataSourcePage = requirePO('contentPages/addDataSource');
const newProjectPage = requirePO('contentPages/newProjectPage');

describe('Content Page > testing add deliverable page > ', () => {

    it('open Kosmos start page', () => {

        DataSourcePage.openWebsite();
    });

    it('open Data Source page', () => {

        expect(newProjectPage.getGetProject.isPresent()).toBeTruthy();
        newProjectPage.getGetProject.click();
        DataSourcePage.getSourceDataButton().click().then(function () {
            expect(DataSourcePage.getFileManagerHeadline.isDisplayed()).toBeTruthy();
            DataSourcePage.getFileManagerHeadline.click();
        });
    });

    xit('check dialog size', () => {


    });

    xit('Check if all elements are visable', () => {


    });

    it('fill DataSource and upload', () => {

        DataSourcePage.wait(3000);
        DataSourcePage.getFileManagerButton.click();
        DataSourcePage.wait(3000);
        expect(DataSourcePage.getFileUpload.isPresent()).toBeTruthy();

        // make upload
        const exec = require('child_process').execFile;
        const runExtern = function () {
            console.log('starting fileUpload >>>');
            exec(settings.fileUpload.uploadExePath, function (err, data) {
                console.log(err);
                console.log(data.toString());
            });
        };

        runExtern();
        DataSourcePage.wait(3000);
        DataSourcePage.getFileUpload.click();
        DataSourcePage.wait(5000);
    });

    it('Check if DataSource is created', () => {

        expect(DataSourcePage.getUploadedFile.isDisplayed()).toBeTruthy();
    });

    xit('delete DataSource', () => {


    });

});
