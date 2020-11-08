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

3 types of directives

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

## Property Binding & Style Binding

a technique that allows the user to bind properties of elements from component to view. data flow only in one-way. It can be used for all properties like innerHTML, src etc

syntax is `[property]="'expression'"`

## Attribute binding

a technique that allows the user to bind attributes of elements from component to view. data flow only in one-way. It can be used for all attributes like innerHTML, src etc

syntax is `[attr.attribute_name]="'expression'"`

## Event binding

a technique that allow the user to bind events from view/template to component. data flow is ony one-way.

can be used for all available events

syntax `<button (event_name)="func()">Click</button>`

## Two-way data binding (explained)

a technique that allow the user to bind events of elements from view/template to component and vise versa. data flow both ways.

its a combination of property binding and event binding

syntax `<input [(ngModel)]='data' />`

## Pipes

Pipes are used to covert/transform data input into a desired format

Pipes are written using the pip operator `|`

It can be applied to any view/template and to any data inputs

### Types of Pipes

- **Built in Pipes**
  - Lowercase
  - Uppercase
  - Currency
  - Date
  - json
- **Parameterized Pipes**
  - We can pass one or more parameters to pipes
- **Chaining Pipes**
  - We can connect multiple pipes to a data input
- **Custom Pipes**
  - We can create our own custom pipes for various data formatting
  - we can generate new custom pipes using CLI
    - `ng generate pipe highlight`
  - Pipes needs to be added to the module - CLI does this when we auto generate
  - we need to import the Pipe and PipeTransform from the @angular/core
  - Pipes are declared with the decorator @pipe and provide the selector name

## Routing

Routing is a mechanism used by angular to manage the `paths` and `routes` of our app

Routing strategy helps in navigation btw various views in our app

Angular framework comes with `Router` module which has everything we need to design, develop and implement routes and navigation linkd

`Router` is a singleton - which means there is only one instance of the router in an angular app

The Router module is found in the package `@angular/router`

We need to setup Router array - everytime a request is made, the router will search in te list of array and find the most relevant match

**Router has states** - which helps us get important information about the _current state_ and _data related to routes_

We can handle various types of routes in Angular

- Routes for components
- getting Query Params from routes
- Getting the URL segments
- Loading child routes for a module
- Lazy loading
- Handling wild card routes
- Handling default routes
- Handling 404 route

### Routing Strategy

This is important as it will affect the entire app flow and navigation

- /products
- /product/10
- /product/10/details
- /product?search=param1

Angular provides two types of routing strateg

- _PathLocationStrategy_
- _HashLocationStrategy_

Angular makes use of _PathLocationStrategy_ strategy by default

With _HashLocationStrategy_ - we will see the # in the URL

- #/products
- #/product/10

### Base HREF

Every angular app has MANDATORY base href

Angular app is a SPA (Single Page Architecture) which means there will be only one HTML file

The default base href is set to `/` the root folder

The base href is present in `index.html` file for all angular app `<base href="/">`

`ng build` - when deploying it wil always assume you're deploying to the root folder

example: <http://arctuts.com/> - root folder

if you intend to deploy to `/demos` i.e <http://arctuts.com/demos> then set Base href - "/demos"

How do we configure it?

`ng build --base-href="/demos"`

### Routing Module

Routing Module is a placeholder for configuring all routes and navigation in one module

Best practice is to have all routes configured in one place

Easy to mentain and debug

We can generate the app routing module using CLI
`ng generate module app-routing --flat --module=app`

### Router Outlet

Defines where output should be displayed

It can be specified at app module or individual modules

### Configuring Routes

we can configure routes to redirect route for varius paths

- path
- component
- redirectTo
- children
  
### Parameterized Routes

we need to configure the route and mentain that the value is dynamic

  {path: 'product/:id', component: ComponentName}

  e.g
  product/10
  product/10/20

### Query Params in Routes

url param `search?keyword=toys&country=ng`

GET Http method calls

visible to the end users

- make sure NO sensitive info is captured via query params
- no login, password, no credit card, etc - they should always be post calls

