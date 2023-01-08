import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order/order.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {
  order: any;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    // Get the order details from a service or some other source
    this.order = this.orderService.getOrders();
  }

}
