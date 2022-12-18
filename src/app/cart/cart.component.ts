import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../models/book';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public books: Book[] = []; // array to hold the books in the cart

  constructor(
    private cartService: CartService, // inject the CartService
    private router: Router // inject the Router
  ) { }

  ngOnInit() {
    this.books = this.cartService.getBooks(); // get the books from the service
  }

  // method to increase the quantity of a book
  increaseQuantity(book: Book) {
    this.cartService.increaseQuantity(book);
  }

  // method to decrease the quantity of a book
  decreaseQuantity(book: Book) {
    this.cartService.decreaseQuantity(book);
  }

  // method to delete a book from the cart
  deleteBook(book: Book) {
    this.cartService.deleteBook(book);
  }

  // method to navigate to the checkout page
  goToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
