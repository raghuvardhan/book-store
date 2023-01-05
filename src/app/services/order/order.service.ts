import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "src/app/models/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersUrl = '/api/orders';

  constructor(private http: HttpClient) { }

  placeOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.ordersUrl, order);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl);
  }
}
