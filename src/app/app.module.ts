import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookSlideshowComponent } from './book-slideshow/book-slideshow.component';
import { BookProductComponent } from './book-product/book-product.component';
import { RouterModule } from '@angular/router';
import { BookProductsComponent } from './book-products/book-products.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BookSlideshowComponent,
    BookProductComponent,
    BookProductsComponent,
    BookStoreComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
