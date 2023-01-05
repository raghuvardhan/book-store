import { Book } from "./book";

export interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

export interface Order {
    id: number;
    name: string;
    address: Address;
    books: Book[];
    total: number;
}