import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TodoModule } from './todo/todo.module';
import { HighlightPipe } from './highlight.pipe';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SigninComponent } from './signin/signin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ObservableComponent } from './observable/observable.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggerInterceptor } from './logger.interceptor';

@NgModule({ 
  declarations: [
    AppComponent,
    TasksComponent,
    HighlightPipe,
    ProductsComponent,
    ProductViewComponent,
    ProductEditComponent,
    ProductIdComponent,
    OrderViewComponent,
    SearchComponent,
    PageNotFoundComponent,
    AdminHomeComponent,
    SigninComponent,
    CheckoutComponent,
    ObservableComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TodoModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    {provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
