# KPMG KOSMOS <sup>0.0.69</sup>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## VS Code setup

*   Clone [KOSMOS Frontend](http://tfs.de.kworld.kpmg.com:8080/tfs/ITS_Projects/KOSMOS%20Refactoring/_git/KOSMOS%20Frontend) repository.
*   Open solution in VS Code.
*   Click on the last ribbon tile on the left to install following **mandatory** extensions and 'Reload' after installation:
    *   Debugger for Chrome
    *   Prettier - Code formatter
*   Open Terminal (Ctrl + ö):
    *   Type `yarn` to fetch all npm packages and references.
    *   Type `npm build` to build and start the application.
*   Open browser on `http://localhost:4200` to open the application.

## Debug in VS Code

*   Open src/app/project/list/project-list.component.ts and set a Breakpoint on any line inside `ngOnInit` method.
*   Click on the 4th ribbon tile on the left to debug and click on the Debug button.
*   A new Chrome instance will be opened. When the project list is browsed, the execution stops in the breakpoint and the application enters in debugging mode.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
