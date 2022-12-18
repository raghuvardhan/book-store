import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { of } from 'rxjs';

const books = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'The Hobbit is a children\'s fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children\'s literature.',
    price: 9.99,
    image: 'hobbit.jpg',
    quote: 'It\'s a dangerous business, Frodo, going out your door. You step onto the road, and if you don\'t keep your feet, there\'s no knowing where you might be swept off to.',
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
    ]
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    description: 'The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien\'s 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.',
    price: 19.99,
    image: 'lotr.jpg',
    quote: 'Not all those who wander are lost.',
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
    ]
  },
  {
    title: 'The Silmarillion',
    author: 'J.R.R. Tolkien',
    description: 'The Silmarillion is a collection of tales set in the world of Arda, written by J. R. R. Tolkien. The book was published in 1977, seven years after Tolkien\'s death, and is based on notes and unfinished drafts left by the author after the publication of The Lord of the Rings. The Silmarillion is a collection of myths and legends, set in the First Age of Tolkien\'s fictional history of Middle-earth, and it contains the earliest known versions of many stories later told in The Lord of the Rings.',
    price: 14.99,
    image: 'silmarillion.jpg',
    quote: 'The world is indeed full of peril, and in it there are many dark places; but still there is much that is fair, and though in all lands love is now mingled with grief, it grows perhaps the greater.',
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
    ]
  },
]

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  getBooks() {
    return of(books); 
  }
}
