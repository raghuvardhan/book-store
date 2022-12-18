import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-product',
  templateUrl: './book-product.component.html',
  styleUrls: ['./book-product.component.css']
})
export class BookProductComponent {
  @Input() book: any;

  addToCart() {
    // Add the book to the cart
  }

  buyNow() {
    // Buy the book now
  }

}
