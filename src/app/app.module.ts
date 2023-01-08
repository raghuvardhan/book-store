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
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    BookSlideshowComponent,
    BookProductComponent,
    BookProductsComponent,
    BookStoreComponent,
    CartComponent,
    CheckoutComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
