import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookProductComponent } from './book-product/book-product.component';
import { BookProductsComponent } from './book-products/book-products.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'book/:title', component: BookProductComponent},
  { path: 'cart', component: CartComponent},
  { path: '**', component: BookStoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
