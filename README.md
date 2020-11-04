# Lerning Angular 9

## Setup

Install Angular CLI

    npm i @angular/cli -g

To check the version, run `ng --version`

Generate a boilerplate project

    ng new <project-name>

Run project

    ng serve

(optional) specify port `ng serve --port=4300`

## Folder Structure and boot process

1. E2E
   - end to end test scripts will be residing here
   - Protractor framework is used to run end to end tests
   - `app.po.ts` -> Protractor file which will have "po" file
   - `app.e2e-spec.ts` file
     - e2e - it tells that this script is end to end test script
     - spec - whenever you spec added - that means it is a test script

2. node_modules
   - where all modules and package reside

3. src
   - main folder where app code reside
   - app folder
     - `*.component.ts` -  corresponds to a component
     - `*.module.ts` - file module
     - `*.services.ts` - service file
     - `*.component.spac.ts` - Unit test script
   - assests
     - styles
     - icons
     - imgs
   - env
     - config variables, pipelines for dev, test, stage, prod
   - pollyfills - es6 support for browsers
   - -------------------------------
   Booting Process

   - `main.ts` - booting the Angular app
     - first file angular checks to load and start the app
     - at least 1 module should be present in our `main.ts`
     - `AppModule` - default module in the `main.ts`
     - `bootstrapModule` - laods and starts the app

   - test.ts - tests script for booting process
      - test for `main.ts`
   - -------------------------------
   - style.css
     - global stylesheet
     - dont make it too heavy
     - generic typography, fonts, styles

4. angular.json
     - file for config of our angular project

5. karma.conf.json
     - test runner

6. tsconfig.json
   - build and compilation related to our angular app

7. tslint.json
   - lint config

8. package.json

9. package.lock.json

## Angular CLI

Use CLI for auto-generation

1. `ng new <project-name>`
2. `ng --version`
3. ng generate
   - `ng generate component <login>`
   - `ng g c login` - short code
   - `ng g service <authenticate>`
   - `ng g module authorize`
   - `ng g pipe highlight`
4. `ng serve` - transpile/compile app
   - default **--port** 4300
   - (optional) specify port `ng serve --port=4000`
5. `ng test`
   - run all unit tests
   - _test runner_ - Karma
   - _test framework_ - Jest
6. `ng e2e`
   - run all e2e tests
7. `ng update`
8. `ng build`
9. `ng lint`
   - code syntax linting

## Modules in Angular

Modules are logical functionality. A module can have components, services, directives, pipes etc - all are related to a particular functionality

Its modular, easy to mentain and reduces the app foot-print

By default verey angular app have at least one module call `appModule`.

Required modules can be imported from code packages, e.g `browserModule`, `ngModule`

Every module need to be defined by `@NgModule` which takes an object with specific meta-data as arguments.

These properties are:

- _declarations_
- _imports_
- _providers_
- _bootstrap_

## Decorators

TypeScript feature use for passing meta-data

- Represented with `@` symbol
  - e.g `@NgModule`, `@component`, `@Input`, `@Output`, `@HostListener`
- types
  - class decorators,
  - Property decorators
  - Method decorators
  - event decorators etc
- These decorators have meta-data
  - has specific meta-data
  - some are mandatory, some are optional

## Components

A smaller reuseable functionality

Tree hierachy starts with `AppComponent`

## Directives

- 3 types of directives
  - component
  - structure
  - attribute

1. component is a type of directive
   it has its own template
   - every angular app must have atleast 1 directive(component)

2. structural directives
   - They always start with `*` symbol
   - These directives alter the structure of the template
   - `ngFor`, `ngSwitch`, `ngIf`

3. attribute directives
   - `ngClass`, `ngStyle`

4. custom directives

## Data Binding

### One-way data binding

- Component to view
  - Interpolation
  - Property Binding
  - Style Binding
  - Attribute Binding
- View to Component
  - Event Binding

### Two-way data binding

Data flows from view to component and back to component from the view

## Interpolation

a technique that allows the user to bind data from component to view template. The data flow is only one-way i.e from component to view.

data can be integers, strings, objects, arrays and much more

syntax for binding interpolation is `{{ variable_name }}`

## Property Binding

a technique that allows the user to bind properties of elements from component to view. data flow only in one-way. It can be used for all properties like innerHTML, src etc

syntax is `[property="'expression'"`
