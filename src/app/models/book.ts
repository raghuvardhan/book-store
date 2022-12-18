import { Review } from "./review";

export interface Book {
    title: string;
    author: string;
    description: string;
    price: number;
    image: string;
    quote: string;
    reviews: Review[];
  }