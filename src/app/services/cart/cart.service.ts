import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  books: Book[] = []; // array to hold the books in the cart

  constructor() { }

  // method to add a book to the cart
  addBook(book: Book) {
    // check if the book is already in the cart
    const existingBook = this.books.find(b => b.id === book.id);

    if (existingBook) {
      // if the book is already in the cart, increase its quantity
      existingBook.quantity++;
    } else {
      // if the book is not in the cart, add it with a quantity of 1
      book.quantity = 1;
      this.books.push(book);
    }
  }

  // method to get the books in the cart
  getBooks(): Book[] {
    return this.books;
  }

  // method to increase the quantity of a book
  increaseQuantity(book: Book) {
    book.quantity++;
  }

  // method to decrease the quantity of a book
  decreaseQuantity(book: Book) {
    book.quantity--;

    // if the quantity of the book becomes 0, remove it from the cart
    if (book.quantity === 0) {
      this.deleteBook(book);
    }
  }

  // method to delete a book from the cart
  deleteBook(book: Book) {
    this.books = this.books.filter(b => b.id !== book.id);
  }

  //method to getTotal
  getTotal(): number {
    return this.books.reduce((total, book) => total + book.price * book.quantity, 0);
  }

  //method to getQuantity
  getQuantity(): number {
    return this.books.reduce((total, book) => total + book.quantity, 0);
  }

  //method to clearCart
  clearCart() {
    this.books = [];
  }
}
