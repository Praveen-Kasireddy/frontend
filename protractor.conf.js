// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;     // additional screenshots install: npm install protractor-jasmine2-html-reporter --save-dev
const TfsReporter = require('jasmine-tfs-reporter');
const settings = require('./e2e/shared.params.meta.json');


exports.config = {
    allScriptsTimeout: 90000,
    specs: ['./e2e/**/*.e2e-spec.ts'],
    suites: {
        project: './e2e/project.e2e-spec.ts',
        deliverable: './e2e/deliverable.e2e-spec.ts',
        chapter: './e2e/chapter.e2e-spec.ts',
        task: './e2e/task.e2e-spec.ts',
        upload: './e2e/upload.e2e-spec.ts',
        smoke: ['./e2e/chapter.e2e-spec.ts',
               './e2e/task.e2e-spec.ts'],
    },
    jvmArgs: ['-Dwebdriver.ie.driver=.\node_modules\protractor\node_modules\webdriver-manager\selenium\IEDriverServer3.13.0.exe'],
    seleniumArgs: ['-Dwebdriver.edge.driver=node_modules\protractor\node_modules\webdriver-manager\selenium\MicrosoftWebDriver.exe'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // seleniumAddress: 'http://10.145.228.150:4444/wd/hub',
    directConnect: false,    // false when targeting IE/Edge, and seleniumAddress is used
    multiCapabilities: [
        {
            ensureCleanSession: 'true',
            //browserName: 'MicrosoftEdge',
            // browserName: 'internet explorer',
            browserName: 'chrome',
            version: 'ANY',
        }
    ],
    webDriverLogDir: './e2e/tmp/',
    resultJsonOutputFile: './testresults/outputFilePath.json',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
        print: function() {}
    },
    onPrepare() {
        require('ts-node').register({
            project: 'e2e/tsconfig.e2e.json'
        });
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displayStacktrace: true,
            displaySpecDuration: true
        }));
        jasmine.getEnv().addReporter(new TfsReporter());
        global.EC = protractor.ExpectedConditions;
        global.countryCode = settings.meta.countryCode;
        global.settings = settings;
        global.testdata = require('./e2e/shared.params.' + countryCode + '.json');
        global.exec = require('child_process').execFile;
    }
};
