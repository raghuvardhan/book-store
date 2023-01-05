import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../services/books/books.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-book-product',
  templateUrl: './book-product.component.html',
  styleUrls: ['./book-product.component.css']
})
export class BookProductComponent {
  @Input() book: any;

  constructor( private router:Router, private route: ActivatedRoute, private bookService: BooksService, private cartService: CartService) {
    this.route.params.subscribe((params) => {
      this.bookService.getBook(params['title']).subscribe((book) => {
        this.book = book;
      });      
   });
  }

  addToCart() {
    this.cartService.addBook(this.book);
    }

  buyNow() {
    this.router.navigate(['/cart']);
   }

}
