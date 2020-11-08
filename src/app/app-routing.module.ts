import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderViewComponent } from './order-view/order-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';
import { TasksComponent } from './tasks/tasks.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: 'learning', component: TasksComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product-view', component: ProductViewComponent},
  {path: 'product-edit', component: ProductEditComponent},
  {path: 'product/:id', component: ProductIdComponent},
  {path: 'order/:id', component: OrderViewComponent},
  {path: 'order/:id/:id2', component: OrderViewComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
