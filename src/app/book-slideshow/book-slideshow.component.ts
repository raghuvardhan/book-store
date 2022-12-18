import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-book-slideshow',
templateUrl: './book-slideshow.component.html',
styleUrls: ['./book-slideshow.component.css']
})
export class BookSlideshowComponent implements OnInit {
books = [
  {
    title: 'Book 1',
    imageUrl: 'book1.jpg',
    author: 'John Doe',
    quote: 'A famous quote from Book 1'
  },
  {
    title: 'Book 2',
    imageUrl: 'book2.jpg',
    author: 'Jane Smith',
    quote: 'A famous quote from Book 2'
  },
  {
    title: 'Book 3',
    imageUrl: 'book3.jpg',
    author: 'Michael Brown',
    quote: 'A famous quote from Book 3'
  }
];
activeIndex = 0;

constructor() { }

ngOnInit(): void {
}

previousSlide() {
  this.activeIndex--;
  if (this.activeIndex < 0) {
    this.activeIndex = this.books.length - 1;
  }
}

nextSlide() {
  this.activeIndex++;
  if (this.activeIndex >= this.books.length) {
    this.activeIndex = 0;
  }
}
}
