# AngularTechnicalTestNuvolar
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

### Technical Test - GitHub User's info getter
The purpose of this project is to consult all of the GitHub user's list and also the number of their followers and repos.

### How to Use
/home => There's a search bar to find GitHub user, list by name match and select one of them to display more info.
/home:id => All of the GitHub user info about his repos and followers.

additional: You can change the color theme by switch button on the header!

### App top-level directory layout

    .src
    ├── app                   # Root above index.html + app wrapper
    ├── assets                # Contains all the scss of theming 
    ├── components            # Contains all the reusable modules
    ├── core                  # Contains logic folders : services, store, directives
        └── services          # Contains all the api's services and ui service
    └── pages                 # Contains all the pages (components wrappers)

> **External Libraries ()**: 
[Angular Material](https://material.angular.io/),
[Bootstrap](https://getbootstrap.com/)



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
