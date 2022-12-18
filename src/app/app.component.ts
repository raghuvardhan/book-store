import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from './models/book';
import { BooksService } from './services/cart/books/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'book-store';
}
