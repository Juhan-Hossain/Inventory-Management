import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './home/categories/categories.component';
import { CustomersComponent } from './home/customers/customers.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './home/products/products.component';
import { SalesComponent } from './home/sales/sales.component';
import { StocksComponent } from './home/stocks/stocks.component';

const routes: Routes = [
  { path: "category", component: CategoriesComponent },
  { path: "stock", component: StocksComponent },
  { path: "sale", component: SalesComponent },
  { path: "product", component: ProductsComponent },
  { path: "customer", component: CustomersComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
