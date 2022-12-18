import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../services/cart/books/books.service';

@Component({
  selector: 'app-book-product',
  templateUrl: './book-product.component.html',
  styleUrls: ['./book-product.component.css']
})
export class BookProductComponent implements OnInit {
  @Input() book: any;

  constructor( private router:Router, private route: ActivatedRoute, private bookService: BooksService) {
    this.route.params.subscribe((params) => {
      this.bookService.getBook(params['title']).subscribe((book) => {
        this.book = book;
      });      
   });
  }

  ngOnInit(): void {
    
  }

  addToCart() {
    this.router.navigate(['/cart']);
  }

  buyNow() {
    // Buy the book now
  }

}
