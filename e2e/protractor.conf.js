// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const TfsReporter = require('jasmine-tfs-reporter');
const settings = require('./testData/shared.params.meta.json');
const testSettings = require('./e2e.test.config.json');

const fileSystem = require('fs');

const webDriverLogFolder = './logs';


const resultOutputfolder = './testResults/'
const resultJsonFilePath = resultOutputfolder.concat('testRun_' + new Date().getTime() + '.json');
const resultTrxFileName = 'testRun_'.concat(new Date().getTime() + '.trx');

/* Create webDriver log folder if not exists */
if (!fileSystem.existsSync(webDriverLogFolder)){
    fileSystem.mkdirSync(webDriverLogFolder);
}

/* Select default ApiBaseUri */
const defaultEnvironment = testSettings.defaultEnvironment
const siteBaseUrl = testSettings.siteBaseUrl[defaultEnvironment]

const jasminTestTimeout = testSettings.executionTimeouts.jasminTestTimeout.ms

exports.config = {
    
	framework: 'jasmine',
	directConnect: false,
	webDriverLogDir: webDriverLogFolder,
    resultJsonOutputFile: resultJsonFilePath,
	allScriptsTimeout: testSettings.executionTimeouts.allScriptsTimeout.ms,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
	
    suites: {
        dev: [
            // './tests/contentPages/new-project-page.spec.ts',
            // './tests/contentPages/add-stakeholder.spec.ts',
            // './tests/contentPages/projectSetupPage.spec.ts',
            // './tests/contentPages/add-data-source.spec.ts',
            // './tests/contentPages/ingestSourceData.spec.ts',
            // './tests/contentPages/dataOverviewPage.spec.ts',
            // './tests/contentPages/add-deliverable.spec.ts',
            // './tests/contentPages/add-chapter.spec.ts',
            // './tests/contentPages/add-task.spec.ts',
            // './tests/contentPages/taskListPage.spec.ts',
            './tests/contentPages/smartWorkspace.spec.ts',
            // './tests/contentPages/dataExplorerPage.spec.ts',     // under construction

		],
		regression: [
            './tests/contentPages/language-switch.spec.ts',
            './tests/contentPages/new-project-page.spec.ts',
            './tests/contentPages/add-stakeholder.spec.ts',
            './tests/contentPages/projectSetupPage.spec.ts',
            './tests/contentPages/add-data-source.spec.ts',
            './tests/contentPages/ingestSourceData.spec.ts',
            './tests/contentPages/dataOverviewPage.spec.ts',
            './tests/contentPages/add-deliverable.spec.ts',
            './tests/contentPages/add-chapter.spec.ts',
            './tests/contentPages/add-task.spec.ts',

        ],
		workflow: [
            './tests/contentPages/language-switch.spec.ts',
            './tests/contentPages/new-project-page.spec.ts',
            './tests/contentPages/add-stakeholder.spec.ts',
            './tests/contentPages/projectSetupPage.spec.ts',
            './tests/contentPages/add-data-source.spec.ts',
            './tests/contentPages/ingestSourceData.spec.ts',
            './tests/contentPages/dataOverviewPage.spec.ts',
            './tests/contentPages/add-deliverable.spec.ts',
            './tests/contentPages/add-chapter.spec.ts',
            './tests/contentPages/add-task.spec.ts',

		],
    },


	jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: jasminTestTimeout,
		includeStackTrace: true,
        print: function() {}
    },
    onPrepare() {
        
		require('ts-node').register({
            project: './tsconfig.e2e.json'
        });
		
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displayStacktrace: true,
            displaySpecDuration: true
        }));
		
		var tfsReporterOptions = {
			outputDir: resultOutputfolder, 
			outputFile : resultTrxFileName
		};
		
        jasmine.getEnv().addReporter(new TfsReporter(tfsReporterOptions));
		
		/* Set global variables */
        global.EC = protractor.ExpectedConditions;
        global.countryCode = settings.meta.countryCode;
		global.settings = settings;
        global.testdata = require('./testData/shared.params.' + countryCode + '.json');
        global.exec = require('child_process').execFile;
		
		
		global.requirePO = function (relativePath) {
            return require(__dirname + '/pages/' + relativePath + '.po');
        };
    },
	
	onCleanUp: () => {
        // browser.
    }
};
