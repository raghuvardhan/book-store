import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from './models/book';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'book-store';
  books: Book[] = [];

  constructor(public router: Router, private bookService: BooksService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }
}
