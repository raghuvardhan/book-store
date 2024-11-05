import { Review } from "./review";

export interface Book {
  id: string;
    title: string;
    author: string;
    description: string;
    price: number;
    imageUrl: string;
    quote: string;
    reviews: Review[];
    quantity: number;
    rating: number;
  }