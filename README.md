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

### Redirecting routes

syntax `{path: '', redirectTo: 'home', pathMatch: 'full},`

The **empty path** indicates that it's the default route of the app

The **empty path** also requires us to mention that `pathMatch` should be `full`

### Wildcard Route

Wildcard intercepts any invalid urls in our app

when no matching routes are found in the routes array, the router does noot know where to go and hence results in console errors

Wildcard routes are defined in the routes array using `{path: '**'}`

Usually a component named `PageNotFound` is mapped as best practice

### Child Routes

we can configure child routes to create more meaningful url segments

the child routes array will follow syntax and array concept as similar to defining the routes array

syntax for definning the child routes

  {
    path: 'products',
    children: [
      {
        path: 'product-child'
        component: ProductViewComponent
      }
    ]
  }

Logical grouping

`customers` /customers - parent route
  `view` /customers/view - child route
    `info` /customers/view/info - child route to `view`
    `gallery` /customers/view/gallery
    `details`
  `edit`
  `delete`

### Lazy Loading

By default,**NgModules** are eagerly loaded, which means that as soon as the app loads, so do all the **NgModules**, whether or not they are immediately necessary. It makes app heavy becuse bundle size increases.

For large apps with lots of routes, consider lazy loading - _a design pattern that laods **NgModules** as needed_. i.e only load modules when they're required.

Lazy loading helps keeps initial bundle sizes smaller, which in turn helps decrese load times.

#### HOW TO USE LAZY LOADING

1. create a feature module
    - child routes
2. loadChildren
    - config in app routing

#### HOW TO IMPLEMENT LAZY LOADING

generate module 'orders' -- create orders.routing.module.ts -- initialize in app-routing.module.ts

`ng g m orders --route orders --module app.module`

### Route Guards

Use route guards to prevent users from navigating to parts of an ap without authorization

Route Guards are used to secure the route paths

In most cases, the routes and screen are protected behind a good auth system

The route guard resolves to true or false based on custom logic and functionality

We can generate nay number of guards based on our app requirements

To generate the route guard we can make use of angular cli
`ng g guard <guard-name>`

Inject the guard in our module under providers

There are various types of route guards available

- _CanActivate_ - checks to see if a user can visit a route
- _CanActivateChild_ - checks to see if a user can visit a route's children
- _CanDeactivate_ - checks to see if a user can exit a route
- _Resolve_ - Performs route data retrival before route activation
- _CanLoad_ - checks to see if a user can route to a module that lazy loaded
  
The route guard resolves to true or false based on custom logic and functionality

    ng g c admin-home
    ng g guard admin-guard

## Angular Forms

### Bootstrap

You integrate bootstrap either via CDN or `npm`

`npm i bootstrap jquery popper.js --save`

import bootstrap and jquery in `angular.json` file

      "architect": {
        "build": {
          ...
          "options": {
            ...
            "styles": [
              ...
              "node_modules/bootstrap/dist/css/bootstrap.nin.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
          }

### Forms

Forms are integral and essential building blocks of "almost all apps

Common form examples we can see are:

- Login
- Forgot
- Register
- Checkout
- Contact

It allows data gathering from users

#### Two Types of Form in Angular

- Template Driven Forms
- Reactive Forms (also know as Dynamic Forms)

#### Angular framework support fot Forms

- Two-way Data Binding
- Change Tracking
- Validation
- Error Handling
- Unit Testing

#### Template Driven Forms

- Easy to use
- Template driven forms are simple and straight forword
- all the validations. form elements are al in the template file
- Two-way Data Binding
- validations are mostly the default HTML5 validations
- Difficult to Unit Test

##### How to use TDF

we will import `FormsModule` in `app.moudule.ts` to work with Template driven forms

create form in any component e.g `app.component.html`

`ngForm` - form name as template variable using `#` for e.g `#loginForm`

`ngModel` - Every form should have a `name` attribute and `ngModel` attached to it

##### Validate TDF

Angular provides common validators like `minLength`, `maxLength`, `required` etc.

Angular maintains _state information_ of the Forms at all times

- ng-touched
- ng-untouched
- ng-dirty
- ng-pristine
- ng-valid
- ng-invalid

###### Way to Handle Validations in TDF

- Highlighting the errors

    input.ng-invalid.ng-touched {
      background-color:red
    }

- Disable the submit button
  - by adding attribute `[disabled]="!formName.valid"`
- Custom Feild Level Validation - Show/Hide Error Messages
  - `<span *ngIf="firstname.touched && !firstname.valid">Please enter email</span>`

#### Reactive Forms (also know as Dynamic Forms)

- All the form elements, user interactions and validations are handled in the **component class**
- we will make use of Angular's built in `formGroup` and `formControl`
- we can control better data binding
- exclusive define Regx patterns of error handling
- we will need to import `ReactiveFormsModule` in our `app.module.ts` file
- Very flexible and allows users to define, develop complex requirements of forms
- more logic in the component class and les in HTML markup itself

Angular maintains _state information_ of the Forms at all times

- ng-touched
- ng-untouched
- ng-dirty
- ng-pristine
- ng-valid
- ng-invalid

##### How to use Reactive Forms

- import `ReactiveFormModule from @angular/forms` in `app.module.ts`
- create the form in `app.component.html`
  - `FormGroup` - form directive
  - `FormControlName` - required attribute for every form field
- import required modules in component class
  - `import { Component, OnInit } from '@angular/core'`
  - `import { FormGroup, FormBuilder, FormControl, NgForm, Validators } from '@angular/forms'`

##### Reactive Forms Validations

Angular provides common validators like `minLength`, `maxLength`, `required` etc.

- Highlight Errors
- Disable the Submit Button
- Custom field validation

##### Form Group: Get Values

read the value of the entire form

`This.formName.value`

read the value of an individualk form control

`This.formName.get("feildname).value`

##### Form Group: Set Values

- setting values in the Form - `setValue`
  - We can SET the values of the entire form using setValue()
    - must set values for every fields of the form
    - must not omit any field in the form

    this.registerForm.setValue({
      fname: 'ARC',
      lname: 'Tuts',
      email. 'arc@xyz.com'
    })

- setting individual form field contros - `patchValue`
  
    this.registerForm.patchValue({
      fname: 'ARC',
      email: 'arc@xyz'
    })

##### Form Group: Reset Form

Reset forms helps avoid duplicate values getting added to the form

We can reset the entire form using `reset()` mathod

    this.registerForm.reset()

##### Form Group: Track Value Changes

`valueChanges`is yet another important property of `FormControl`, `FormGroup` and `FormArray`

`valueChanges` returns an Observable

we need to Subscribe to the `Observable` to read the value

`valueChanges` is a property in `AbstractControl`

`valueChanges` will emit an event every time there is any chabge in the values of the control changes

###### Implementation

1. For Form Control
   - When subscribed to the observable - we will get the latest changed value
   - syntax

    this.formName.get('email').valueChanges.subcribe(data => {
      Console.log(data)
    })

2. For Entire Form
   - When subcribed to the observab;e - we will get the entire form but the values will be only for changed form control
   - syntax

    this.formName.valueChanges.subscribe(data => {
      console.log(data)
    })

##### Form Group: Status Changes

`statusChanges`is yet another important property of `FormControl`, `FormGroup` and `FormArray`

`statusChanges` returns an Observable

we need to Subscribe to the `Observable` to read the value

`statusChanges` is a property in `AbstractControl`

`statusChanges` will emit an event every time there is any change in the validation status of the control changes

1. For Form Control
   - When subscribed to the observable - we will get the validation status control
   - syntax

    this.formName.get('email').statusChanges.subcribe(data => {
      Console.log(data)

2. For Entire Form
   - When subcribed to the observab;e - we will get the validation status of the entire form
    })
   - syntax

    this.formName.statusChanges.subscribe(data => {
      console.log(data)
    })

##### Form Array

Form Control - Any form feild in your form becomes a FormControl

FormGroup - Group multiple FormControls

DOM interactions in Angular Reactive Foprms are implemented using the Form Arrays

FormArray - ArrayOf(FormControl) | ArrayOf(FormGroup)

The status of the `FormArray` is calculated by reducing the statuses of it's children. If any one of the controls is invalid, the entire array becomes invalid

###### Usecases

- Creating a Form with simple array items
  - option 1

    this.checkoutForm = formBuilder.group({
      items: this.formBuilder.array([
        new FormControl('Fullname'),
        new FormControl('email'),
        new FormControl('password')
      ])
    })

  - option 2 (explicit, prefered method)

    this.checkoutForm = formBuilder.group({
      items: formBuilder.array([
        formBuilder.group({
          itemId: ['1'],
          itemName: ['ARC'],
          itemDesc: ['Tutorials'],
          itemDone: [null, Validators.requiredTrue],
        })
      ])
    })

- In the template file - let's loop the values and display them

      <div class="col-sm-10" formArrayName="items">
        <div *ngFor="let control of checkoutForm.controls.items['controls']; let i=index;">
          <input type="text" [formControlName]="i" id="learn{{i}}">
        </div>  
      </div>

- Reactive Form with array items and other form contols

    this.checkoutForm = formBuilder.group({
      email: [
        null,
        [
          validators.minLength(5),
          validators.maxLength(5),
          validators.required,
          validators.email
        ]
      ],
      quantity: [
        null,
        [ Validators.required ]
      ],
      tos: [
        null,
        Validators.requiredTrue
      ],
      items: this.formBuilder.array([
        new FormControl('Fullname'),
        new FormControl('email'),
        new FormControl('password')
      ])
    })

##### Nested Form Array

We need nested form array for complex form requirements involving dynamic items which are rendered into form.

We are able to group form controls and form groups into a Form Array. We can also dynamically add or remove rows into the Form Arrays via Form Groups

FormArray aggregates the values of the "child" FormControl into an Array

The ststus of the FormArray is calculated by reducing the statuses of its children. If any of the controld is invalid, the entire array bacomes invalid

###### Use cases

getting the properties and methods of the array

- console.log(myArr.value)
- console.log(myArr.status)
- console.log(myArr.length)
- console.log(arry.setValue(['name', 'lastname']))
- console.log(arry.patchValue(['name', 'lastname']))
- console.log(arry.reset(['name', 'lastname']))
- console.log(myArr.clear())

##### Reactive Forms - Add Rows Dynamically

There are cases when we don't know how many rows or feilds to expect. That's when we will need to dynamically "Add Rows" to the form on the fly.

Adding new rows to form simply refers to appending/pushing the `FormGroup` or `FormControls` to the `FormArray` at _runtime_

##### Remove Dynamic Rows from Form

We will need to capture vthe index of the row which we want to remove from the array. 

Using the `indexAt` method - we can easity point to the item we want to remove

A method to remove the item from the array using `removeAt`

    removeItem(index){
      const arr = this.items.length;
      this.items.removeAt(index)
    }

In the template file - a link to click to remove the item

    <a (click)="remove()">REmove Item</a>

### Angular HTTP

- Observables
- Dependency injection
- Services
- HttpClient - GET, PUT, POST, DELETE
- HttpClient - Headers
- HttpClient - Interceptors

#### Observables

- What are _Observables_
  - _Observable_ is part of RxJs library
  - a sequence of data which is emitted asynchronously (most of the times) over a period of time
  - data can be of any type - string, events etc
  - angular make use of observables as an interface to handle a variety of common **async** oprations.
  - They're the recommended technique for _event handling_, _async programming_, and _handling multiple values_
  - an _Observable_ can deliver multiple values of any type -- litrals, messages, or events, depending on the context
- what is an _Observer_
  - When we create an _Observable_, we keep track on the observable using _Observer_
  - _Observer_ is continuosly listening to _Observable_
  - we can control when to start and stop listening to the _Observable_ using the _Observer_
  - _Observer_ has 3 methods that you can use
    - `next()`, `error()` and `complete()`
- What and how to Subscribe
  - we subscribe to an observable in order to process the data
  - we can have multi subscribers for any given _Observable_
  - we can also unsubscribe from an _Subscriber_
- Multi Subscribers to Single Observable

Example

- Shopping cart
  - user places an order
    - initial state of the order is: _InProgress_
    - After sometime once its received status shows: _Proccessing_
    - Once order is complete: status should be: _Complete_

    ng g c observable

#### Dependency Injection

Dependency Injection (DI), is an important appolication design pattern.

Dependency injection is the ability to add the functionality of components at runtime

The DI framework lets youy supply data to a component from an injectable _service_ class, defined in its own file

Angular has its own DI framework, which is typically used in the design of Angular applications to increase their efficiency and modularity

Dependencies are _Services_ or objects that a class needs to perform its function

DI is a coding pattern in which a class asks for dependencies from extermnal sources rather than creating them itself

#### Services

- Services allows us to create reusable common shared functionality between various mudule and component

- Services are singleton

- Services are injected into application using Dependency Injection mechanism

- We need to crete and inject services in components where we want to use them

- Services are an abstraction layer or process layer which of our app business logic

- Services are commonly used for making HTTP requests to our endpoints APIs to request and receive the response

- A service can have a value, methods or a combination of both

      Contacts - Module
        Components
          create contact
          view contact
          edit contact
          delete contact
        Services
          contacts.service.ts
            HTTP
            Processing Data
            Cleaning Data

- Services are used for sharing data btw components

- Importing and injecting services into components is called **Depency Injection**

##### Generate services using cli

    ng g c contacts

    ng generate service contacts

    import { Injectable } from '@anguler/core';

we can generate the service in any folder we want. The best practice is always to keep all services related into modules

##### HttpClient

`HttpClient` is used for performing HTTP request and responses

The HttpClient service is available in the `@angular/common/http` package

The new `HttpClient` service is included in the Http Client module which is used to initiate HTTP request and resposes on Angular apps

The `HttpClientModule` needs to be imported into the module. Ussaully in the app module.

`HttpClient` also gives other useful functionality like __interceptors__, __headers__ etc.

###### HttpClient Methods

- get()
- post()
- put()
- delete()
- head()
- jsonp()
- options()
- patch()

###### Benefits of HttpClient

- HttpClient includes Observable API
- HttpClient can have the HTTP Headers in options
- HttpClient includes the highly testability features
- HttpClient includes typed request
- HttpClient includes response objects
- HttpClient includes request and response interception
- HttpClient include error handling

###### CRUD Operations using HttpClient

- Create - usually a POST method call
- Read - usually a PUT method call
- Update - usually a PUT method call
- Delete - is a Delete method call. _Technically we should never delete anything. only soft deletes which means setting a flag_

We usually make Http calls in our services. however, there is no restriction on where you can use it

###### __Setup Mock Server for how examples and app__

setup json-server - fake REST API

    npm i -g json-server

    cd .\src\assets\

    touch db.json

    json-server --watch .\db.json

###### HttpClient GET

Making API calls to retrieve data is a GET method call.

To make a call, all we need is an endpoint or an API url

    get["url", options: ()]
    get['url', options: { headers: {}, params: {}, responseType: null, withCredentials: null}]

The response type will be an _obervable_ which is then subscribe to, in order to read it values

###### How to use HttpClient GET Method

- Import `HttpClientModule` into App Module
- Import `HttpClient` in our service or component wherever we are making the HTTP request
  - It's good practice to have http calls in services
  - reusable and easy to mentain
  - easy to share btw components
- Inject the `HttpClient` in the constructor method of the class
- Implement the GET method call
- Import the __Services__ into the required calling component class
- Call the method to make Http request