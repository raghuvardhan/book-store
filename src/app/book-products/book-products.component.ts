import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BooksService } from '../services/books/books.service';

@Component({
  selector: 'app-book-products',
  templateUrl: './book-products.component.html',
  styleUrls: ['./book-products.component.css']
})
export class BookProductsComponent implements OnInit {
  books: Book[] = [];

  constructor( private bookService: BooksService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

}
