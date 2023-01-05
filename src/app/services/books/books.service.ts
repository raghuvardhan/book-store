import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../models/book';
import { Observable, of } from 'rxjs';

const books = [
  {
    id: '1',
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'Atomic Habits is a self-help book by James Clear. It was published on 16 January 2018 by Avery. The book explains that habits are the compound interest of self-improvement, and that small changes repeated consistently over time can result in remarkable outcomes.',
    price: 9.99,
    imageUrl: '../assets/images/atomic-habits.jpg',
    quote: 'The best way to predict the future is to create it.',
    reviews: [
      {
        name: 'John Doe',
        rating: 5,
        comment: 'Great book!'
      },
      {
        name: 'Jane Doe',
        rating: 4,
        comment: 'I liked it.'
      }
    ],
    quantity: 0
  },
  {
    id: '2',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    description: 'The Psychology of Money is a book by Morgan Housel, a columnist for The Motley Fool. It was published on 3 September 2019 by HarperCollins. The book is a collection of essays on the psychology of money, investing, and personal finance.',
    price: 14.99,
    imageUrl: 'psychology-of-money.jpg',
    quote: 'The best way to predict the future is to create it.',
    reviews: [
      {
        name: 'John Doe',
        rating: 5,
        comment: 'Great book!'
      },
      {
        name: 'Jane Doe',
        rating: 4,
        comment: 'I liked it.'
      }
    ],
    quantity: 0
  },
  {
    id: '3',
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    description: 'The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life is a 2016 self-help book by Mark Manson. Manson argues that many people are unhappy because they are chasing the wrong things, and that the key to happiness is to stop giving a f*ck about things that don\'t matter.',
    price: 12.99,
    imageUrl: 'subtle-art.jpg',
    quote: 'The best way to predict the future is to create it.',
    reviews: [
      {
        name: 'John Doe',
        rating: 5,
        comment: 'Great book!'
      },
      {
        name: 'Jane Doe',
        rating: 4,
        comment: 'I liked it.'
      }
    ],
    quantity: 0

  }
]

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  getBooks(): Observable<Book[]> {
    return of(books); 
  }

  getBook(title: string) {
    return of(books.find(book => book.title === title));
  }
}
