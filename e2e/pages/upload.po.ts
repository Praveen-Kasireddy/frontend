import { browser, by, element } from 'protractor';
import { ProjectPage } from './project.po';


/* Nav */
const sourceDataButton = element(by.id('main-nav-project-data-icon'));
const uploadMenuButton = element(by.xpath('(//a[@class="webix_list_item"])[3]'));
const fileUpload = element(by.xpath('(//a[@class="webix_list_item"])[3]'));
const fileManagerButton = element(by.xpath('(//div[@class="webix_fmanager_bar_icon "])[1]'));

/* Element */
const fileManagerHeadline = element(by.xpath('(//div[@class="header-subtitle"])')); // Headline "File manager"



export class UploadPage {

    /* Elements */
    getFileManagerHeadline() { return fileManagerHeadline.getText(); }
    getSourceDataButton() { return sourceDataButton; }
    getFileManagerButton() { return fileManagerButton; }
    getFileUpload() { return fileUpload; }
    getUploadMenuButton() { return uploadMenuButton; }


    /* Actions */
    clickSourceDataButton() { return sourceDataButton.click(); }
    clickFileManagerButton() { return fileManagerButton.click(); }
    clickUploadMenuButton() { return uploadMenuButton.click(); }
}