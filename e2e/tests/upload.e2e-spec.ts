import { ProjectPage } from '../pages/project.po';
import { DeliverablePage } from '../pages/deliverable.po';
import { UploadPage } from '../pages/upload.po';

const project = new ProjectPage();
const upload = new UploadPage();

const testCaseName = '149854: Source data > File manager'

describe(testCaseName, () => {

    console.log('Running Test: ' + testCaseName);

    beforeAll(function () {
        project.navigateTo();
        project.checkLogo();
    });

    it('click Source data, get to File manager', () => {
        browser.wait(EC.visibilityOf(project.getProject()));
        expect(project.getProject().isDisplayed()).toBe(true);
        project.getProject().click();
        browser.sleep(1000).then(function () { });
        browser.wait(EC.visibilityOf(upload.clickSourceDataButton()));
        expect(upload.clickSourceDataButton().isDisplayed()).toBe(true);

        upload.clickSourceDataButton();
    });

    it('check elements of File manager', () => {

        //console.log(countryCode);
        //console.log(testdata.FileManager.headline);

        project.clickKpmgHeader();
        browser.wait(EC.visibilityOf(upload.getFileManagerHeadline()));
        expect(upload.getFileManagerHeadline().isDisplayed()).toBe(true);
        expect(upload.getFileManagerHeadline()).toEqual(testdata.FileManager.headline);

        upload.clickFileManagerButton();

        browser.wait(EC.visibilityOf(upload.getUploadMenuButton()), 600000).then(function () {

            // make upload
            var exec = require('child_process').execFile;
            var runExtern = function () {
                console.log("starting fileUpload >>>");
                 exec(settings.fileUpload.uploadExePath, function (err, data) {
                    console.log(err)
                    console.log(data.toString());
                });
            }

            runExtern();

            upload.clickUploadMenuButton();

        });

        project.clickKpmgHeader();
        browser.wait(EC.visibilityOf(upload.getFileManagerHeadline()));
        expect(upload.getFileManagerHeadline().isDisplayed()).toBe(true);
        expect(upload.getFileManagerHeadline()).toEqual(testdata.FileManager.headline);

    });

});
